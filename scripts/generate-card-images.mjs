import { mkdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = fileURLToPath(new URL("../", import.meta.url))
const publicDirectory = path.join(root, "public")
const source = await readFile(path.join(root, "src/data/data-modelos.js"), "utf8")
const { modelos } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`)
const scriptStat = await stat(fileURLToPath(import.meta.url))
const widths = [320, 640]
let generated = 0
let skipped = 0

for (const image of new Set(modelos.map((modelo) => modelo.previewImage))) {
  if (!image.startsWith("/images/") || image.includes("..")) {
    throw new Error(`Ruta de portada no válida: ${image}`)
  }

  const relativeImage = image.slice("/images/".length)
  const input = path.join(publicDirectory, "images", relativeImage)
  const inputStat = await stat(input)

  for (const width of widths) {
    const output = path.join(publicDirectory, "images/cards", String(width), relativeImage)
    let outputStat
    try {
      outputStat = await stat(output)
    } catch (error) {
      if (error.code !== "ENOENT") throw error
    }

    if (outputStat && outputStat.mtimeMs >= Math.max(inputStat.mtimeMs, scriptStat.mtimeMs)) {
      skipped++
      continue
    }

    await mkdir(path.dirname(output), { recursive: true })
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(output)
    generated++
  }
}

console.log(`Portadas: ${generated} generadas, ${skipped} sin cambios.`)
