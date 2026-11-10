import { spawn } from "node:child_process"
import { mkdir, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = fileURLToPath(new URL("../", import.meta.url))
const ffmpeg = process.argv[2] || process.env.FFMPEG_PATH || "ffmpeg"
const input = path.join(root, "public/video/mantenimiento.mp4")
const poster = path.join(root, "public/images/home/portada-video.webp")

const runFfmpeg = (args, captureOutput = false) =>
  new Promise((resolve, reject) => {
    const processVideo = spawn(ffmpeg, ["-hide_banner", "-loglevel", "error", "-nostdin", "-y", ...args], {
      stdio: ["ignore", captureOutput ? "pipe" : "ignore", "pipe"],
    })
    const output = []
    let errorOutput = ""

    processVideo.stdout?.on("data", (chunk) => output.push(chunk))
    processVideo.stderr.on("data", (chunk) => {
      errorOutput += chunk.toString()
    })
    processVideo.on("error", reject)
    processVideo.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`FFmpeg terminó con código ${code}: ${errorOutput}`))
        return
      }
      resolve(Buffer.concat(output))
    })
  })

const variants = [
  { name: "portada-desktop.mp4", filter: "scale=1280:-2:flags=lanczos,setsar=1", quality: "25" },
  { name: "portada-mobile.mp4", filter: "scale=432:768:force_original_aspect_ratio=increase:flags=lanczos,crop=432:768,setsar=1", quality: "26" },
]

for (const variant of variants) {
  const output = path.join(root, "public/video", variant.name)
  await runFfmpeg([
    "-i", input,
    "-map", "0:v:0",
    "-an",
    "-vf", variant.filter,
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", variant.quality,
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    "-threads", "2",
    output,
  ])
  console.log(`${variant.name}: ${((await stat(output)).size / 1_000_000).toFixed(2)} MB`)
}

const frame = await runFfmpeg([
  "-ss", "1",
  "-i", input,
  "-frames:v", "1",
  "-vf", "scale=1280:-2",
  "-f", "image2pipe",
  "-c:v", "png",
  "pipe:1",
], true)

await mkdir(path.dirname(poster), { recursive: true })
await writeFile(poster, await sharp(frame).webp({ quality: 82 }).toBuffer())
console.log(`portada-video.webp: ${((await stat(poster)).size / 1_000).toFixed(1)} KB`)
