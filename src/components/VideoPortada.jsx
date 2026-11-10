"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoPortada() {
  const [videoSrc, setVideoSrc] = useState(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const connection = navigator.connection
    // Elegir una vez evita descargar otra versión al rotar o redimensionar.
    const source = window.matchMedia("(max-width: 767px)").matches
      ? "/video/portada-mobile.mp4"
      : "/video/portada-desktop.mp4"

    const handlePreferencesChange = () => {
      setVideoSrc(reducedMotion.matches || connection?.saveData ? null : source)
    }

    handlePreferencesChange()
    reducedMotion.addEventListener("change", handlePreferencesChange)
    connection?.addEventListener("change", handlePreferencesChange)

    return () => {
      reducedMotion.removeEventListener("change", handlePreferencesChange)
      connection?.removeEventListener("change", handlePreferencesChange)
    }
  }, [])

  useEffect(() => {
    // Reiniciar el elemento sin fuente detiene el video al pasar a la portada estática.
    if (!videoSrc) videoRef.current?.load()
  }, [videoSrc])

  const handleVideoError = () => {
    setVideoSrc(null)
  }

  return (
    <video
      ref={videoRef}
      className="video-index"
      src={videoSrc || undefined}
      poster="/images/home/portada-video.webp"
      preload="none"
      autoPlay={Boolean(videoSrc)}
      muted
      loop
      playsInline
      aria-hidden="true"
      onError={handleVideoError}
    />
  )
}
