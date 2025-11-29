"use client"
import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function FiltroBotones({
  nombreParam, // ejemplo: "color", "linea", "estilo", "tipo" (NO confundir nombres)
  opciones = [],
  multiple = false,
  onChange, // opcional callback (nuevoValor)
  className = "",
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selected, setSelected] = useState(multiple ? [] : null)

  // sincronizar desde URL cada vez que cambian los searchParams
  useEffect(() => {
    if (!searchParams) return
    if (multiple) {
      setSelected(searchParams.getAll(nombreParam) || [])
    } else {
      setSelected(searchParams.get(nombreParam) || null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString(), nombreParam])

  const handleClick = (valor) => {
    const params = new URLSearchParams(searchParams.toString())

    if (multiple) {
      const actuales = params.getAll(nombreParam) // array actual
      const tiene = actuales.includes(valor)
      let nuevoArray
      if (tiene) {
        nuevoArray = actuales.filter((v) => v !== valor)
      } else {
        nuevoArray = [...actuales, valor]
      }

      params.delete(nombreParam)
      nuevoArray.forEach((v) => params.append(nombreParam, v))

      setSelected(nuevoArray)
      router.push(`?${params.toString()}`, { scroll: false })
      if (onChange) onChange(nuevoArray)
      return
    }

    // selección única
    const actual = params.get(nombreParam)
    if (actual === valor) {
      params.delete(nombreParam)
      setSelected(null)
      router.push(`${params.toString() ? "?" + params.toString() : "?"}`, {
        scroll: false,
      })
      if (onChange) onChange(null)
      return
    }

    // set nuevo valor único
    params.set(nombreParam, valor)
    setSelected(valor)
    router.push(`?${params.toString()}`, { scroll: false })
    if (onChange) onChange(valor)
  }

  //   const prettifyFilterLabel = (value) => {
  //     if (typeof value !== "string") return ""
  //     const map = {
  //       marron: "Marrón",
  //       cafe: "Café",
  //       maiz: "Maíz",
  //     }

  //     const normalized = value.toLowerCase()

  //     if (map[normalized]) return map[normalized]

  //     return normalized.charAt(0).toUpperCase() + normalized.slice(1)
  //   }

  return (
    <section className={`contenedor-card_models_subtypes ${className}`}>
      {opciones.map((valor) => {
        const rawValue = typeof valor === "string" ? valor : valor.value
        const rawLabel = typeof valor === "string" ? valor : valor.label

        const isSelected = multiple
          ? selected && selected.includes(rawValue)
          : selected === rawValue

        return (
          <button
            type="button"
            key={rawValue}
            onClick={() => handleClick(rawValue)}
            className={`button-card_models ${isSelected ? "selected" : ""}`}
            data-attr={`${nombreParam}-${rawValue}`}
          >
            <h4
              className={`card-title_models ${isSelected ? "selected2" : ""}`}
            >
              {rawLabel}
            </h4>
          </button>
        )
      })}
    </section>
  )
}
