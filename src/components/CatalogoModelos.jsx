"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import BannerModelos from "./BannerModelos"
import Article from "./Article"
import Buscador from "./Buscador"
import { modelos } from "@/data/data-modelos"

const MODELS_PER_PAGE = 32

const normalizeText = (text) => {
  return text
    ? text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/-/g, " ")
        .toLowerCase()
    : ""
}

export default function CatalogoModelos({
  title,
  description,
  categoria,
  showLineaFilter = false,
}) {
  return (
    <>
      <BannerModelos
        title={title}
        subtitle="NUESTROS ZAPATOS"
        description={description}
      />
      <hr className="hr-custom" />
      <Suspense fallback={null}>
        <CatalogoModelosContent
          key={categoria || "all"}
          categoria={categoria}
          showLineaFilter={showLineaFilter}
        />
      </Suspense>
    </>
  )
}

function CatalogoModelosContent({ categoria, showLineaFilter }) {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("")
  const [subTipoSeleccionado, setSubTipoSeleccionado] = useState("")
  const [selectedCodigo, setSelectedCodigo] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleCount, setVisibleCount] = useState(MODELS_PER_PAGE)
  const searchParams = useSearchParams()

  const coloresNormalizados = searchParams.getAll("color").map(normalizeText)
  const estilosNormalizados = searchParams.getAll("estilo").map(normalizeText)
  const lineaSeleccionada = showLineaFilter ? searchParams.get("linea") : null
  const normalizedLinea = normalizeText(lineaSeleccionada)
  const leatherSeleccionado = searchParams.get("leather")
  const leatherNormalizado = normalizeText(leatherSeleccionado)
  const normalizedTerm = normalizeText(searchTerm)

  const filteredModels = modelos.filter((modelo) => {
    const matchesCategoria = categoria
      ? modelo.class === categoria
      : modelo.class !== "ACCESORIOS"
    const normalizedName = normalizeText(modelo.name)
    const normalizedVariant = normalizeText(modelo.variant)
    const normalizedColor = normalizeText(modelo.color)
    const normalizedLeather = normalizeText(modelo.leather)
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
    const matchesLinea = lineaSeleccionada
      ? normalizeText(modelo.class) === normalizedLinea
      : true
    const matchesEstilo =
      estilosNormalizados.length > 0
        ? estilosNormalizados.includes(normalizeText(modelo.variant || ""))
        : true
    const matchesLeather = leatherSeleccionado
      ? normalizedLeather.includes(leatherNormalizado)
      : true
    const matchesCodigo = selectedCodigo
      ? selectedCodigo === "Mod. Swann"
        ? modelo.name.trim().toLowerCase() === "mod. swann"
        : modelo.name.toLowerCase().includes(selectedCodigo.toLowerCase())
      : true

    return (
      matchesCategoria &&
      (normalizedName.includes(normalizedTerm) ||
        normalizedVariant.includes(normalizedTerm) ||
        normalizedColor.includes(normalizedTerm)) &&
      matchesTipo &&
      matchesSubTipo &&
      matchesColor &&
      matchesLinea &&
      matchesEstilo &&
      matchesLeather &&
      matchesCodigo
    )
  })

  const modelosVisibles = filteredModels.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + MODELS_PER_PAGE)
  }

  return (
    <>
      <Buscador
        setTipoSeleccionado={setTipoSeleccionado}
        setSubTipoSeleccionado={setSubTipoSeleccionado}
        setSelectedCodigo={setSelectedCodigo}
        selectedCodigo={selectedCodigo}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        tipoSeleccionado={tipoSeleccionado}
        subTipoSeleccionado={subTipoSeleccionado}
        showLineaFilter={showLineaFilter}
      />
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
