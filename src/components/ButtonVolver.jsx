"use client"
import { useRouter } from "next/navigation"

export default function ButtonVolver() {
  const router = useRouter()

  const handleVolver = () => {
    router.back()
  }

  return (
    <button className="volver-button" onClick={handleVolver}>
      VOLVER
    </button>
  )
}
