"use client"

import React, { useState, useEffect } from "react"
import BannerModelos from "@/components/BannerModelos"
import Article from "@/components/Article"
import { modelos } from "@/data/data-modelos"
import Buscador from "@/components/Buscador"
import { useSearchParams } from "next/navigation"

export default function Modelos() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("")
  const [subTipoSeleccionado, setSubTipoSeleccionado] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredModels, setFilteredModels] = useState([])
  const searchParams = useSearchParams()

  useEffect(() => {
    const normalizeText = (text) => {
      return text
        ? text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/-/g, " ")
            .toLowerCase()
        : ""
    }

    const coloresSeleccionados = searchParams
      ? searchParams.getAll("color")
      : []
    const coloresNormalizados = coloresSeleccionados.map((c) =>
      normalizeText(c)
    )

    const estilosSeleccionados = searchParams
      ? searchParams.getAll("estilo")
      : []
    const estilosNormalizados = estilosSeleccionados.map((e) =>
      normalizeText(e)
    )

    const modelosReadyToWear = modelos.filter(
      (modelo) => modelo.class === "READY TO WEAR"
    )

    const modelosFiltrados = modelosReadyToWear.filter((modelo) => {
      const normalizedTerm = normalizeText(searchTerm)
      const normalizedName = normalizeText(modelo.name)
      const normalizedVariant = normalizeText(modelo.variant)
      const normalizedColor = normalizeText(modelo.color)
      const matchesTipo = tipoSeleccionado
        ? modelo.type === tipoSeleccionado
        : true
      const matchesSubTipo = subTipoSeleccionado
        ? modelo.subtype === subTipoSeleccionado
        : true
      const matchesColor =
        coloresNormalizados.length > 0
          ? coloresNormalizados.some((c) => normalizedColor.includes(c))
          : true
      const matchesEstilo =
        estilosNormalizados.length > 0
          ? estilosNormalizados.includes(normalizeText(modelo.variant || ""))
          : true
      return (
        (normalizedName.includes(normalizedTerm) ||
          normalizedVariant.includes(normalizedTerm) ||
          normalizedColor.includes(normalizedTerm)) &&
        matchesTipo &&
        matchesSubTipo &&
        matchesColor &&
        matchesEstilo
      )
    })

    setFilteredModels(modelosFiltrados)
  }, [
    searchTerm,
    tipoSeleccionado,
    subTipoSeleccionado,
    searchParams?.toString(),
  ])

  const MODELS_PER_PAGE = 32
  const [visibleCount, setVisibleCount] = useState(MODELS_PER_PAGE)
  const modelosVisibles = filteredModels.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + MODELS_PER_PAGE)
  }

  return (
    <>
      <BannerModelos
        title={"Ready to Wear"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Calzado estándar listo para vestir."}
      />
      <hr className="hr-custom" />
      <Buscador
        setTipoSeleccionado={setTipoSeleccionado}
        setSubTipoSeleccionado={setSubTipoSeleccionado}
        setSearchTerm={setSearchTerm}
        modelos={modelos}
        searchTerm={searchTerm}
        tipoSeleccionado={tipoSeleccionado}
        subTipoSeleccionado={subTipoSeleccionado}
      />
      {/* <section id="lista-productos">
        {filteredModels.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section> */}
      <section id="lista-productos">
        {modelosVisibles.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
      {visibleCount < filteredModels.length && (
        <div className="ver-mas-container">
          <button className="button-index" onClick={handleLoadMore}>
            Ver más modelos
          </button>
        </div>
      )}
    </>
  )
}
