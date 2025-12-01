"use client"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function SubcategoriaBuscador({
  subcategorias,
  setSubTipoSeleccionado,
  initialSubtipo,
  setSelectedCodigo,
}) {
  const [selectedSubButton, setSelectedSubButton] = useState(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubTipoClick = (subtipo) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedSubButton === subtipo) {
      setSubTipoSeleccionado(null)
      setSelectedSubButton(null)
      setSelectedCodigo(null)
      params.delete("subtipo")
      params.delete("codigo")
      router.push(`?${params.toString()}`, { scroll: false })
      return
    }

    setSubTipoSeleccionado(subtipo)
    setSelectedSubButton(subtipo)

    params.set("subtipo", subtipo)

    if (params.get("codigo")) {
      params.delete("codigo")
      setSelectedCodigo(null)
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    if (initialSubtipo) {
      setSelectedSubButton(initialSubtipo)
    } else {
      setSelectedSubButton(null)
    }
  }, [subcategorias, initialSubtipo])

  return (
    <section className="contenedor-card_models_subtypes">
      {subcategorias.map(({ value, label }) => (
        <button
          key={value}
          data-subcategoria={value}
          onClick={() => handleSubTipoClick(value)}
          className={`button-card_models_subtypes ${
            selectedSubButton === value ? "selected" : ""
          }`}
        >
          <h4
            className={`card-title_submodels ${
              selectedSubButton === value ? "selected2" : ""
            }`}
          >
            {label}
          </h4>
        </button>
      ))}
    </section>
  )
}
