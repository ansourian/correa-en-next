"use client"
import React from "react"
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
  const selected = multiple
    ? searchParams.getAll(nombreParam)
    : searchParams.get(nombreParam)

  const handleClick = (valor) => {
    const valores = Array.isArray(valor) ? valor : [valor]
    const params = new URLSearchParams(searchParams.toString())

    if (multiple) {
      const actuales = params.getAll(nombreParam)

      let nuevoArray

      const algunoYaEsta = valores.some((v) => actuales.includes(v))

      if (algunoYaEsta) {
        // quitar todos
        nuevoArray = actuales.filter((v) => !valores.includes(v))
      } else {
        // agregar solo los que no están
        nuevoArray = [...new Set([...actuales, ...valores])]
      }

      params.delete(nombreParam)
      nuevoArray.forEach((v) => params.append(nombreParam, v))

      router.push(`?${params.toString()}`, { scroll: false })
      if (onChange) onChange(nuevoArray)
      return
    }

    // selección única
    const actual = params.get(nombreParam)
    if (actual === valor) {
      params.delete(nombreParam)
      router.push(`${params.toString() ? "?" + params.toString() : "?"}`, {
        scroll: false,
      })
      if (onChange) onChange(null)
      return
    }

    // set nuevo valor único
    params.set(nombreParam, valor)
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
          ? Array.isArray(rawValue)
            ? rawValue.some((v) => selected?.includes(v))
            : selected?.includes(rawValue)
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
