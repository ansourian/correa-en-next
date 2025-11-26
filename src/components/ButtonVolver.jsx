"use client"
import { ArrowBackIosNew } from "@mui/icons-material"
import { useRouter } from "next/navigation"

export default function ButtonVolver() {
  const router = useRouter()

  const handleVolver = () => {
    router.back()
  }

  return (
    <button className="volver-button" onClick={handleVolver}>
      <ArrowBackIosNew className="icono-volver" />
      <span className="volver-text">VOLVER</span>
    </button>
  )
}
