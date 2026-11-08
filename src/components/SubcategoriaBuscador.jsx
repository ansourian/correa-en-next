"use client"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"

export default function SubcategoriaBuscador({ subcategorias }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedSubButton = searchParams.get("subtipo")

  const handleSubTipoClick = (subtipo) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedSubButton === subtipo) {
      params.delete("subtipo")
      params.delete("codigo")
      router.push(`?${params.toString()}`, { scroll: false })
      return
    }

    params.set("subtipo", subtipo)

    if (params.get("codigo")) {
      params.delete("codigo")
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

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
