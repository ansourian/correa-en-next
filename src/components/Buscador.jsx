import React, { useEffect, useState } from "react"
import SubcategoriaBuscador from "./SubcategoriaBuscador"
import TuneIcon from "@mui/icons-material/Tune"
import { useSearchParams, useRouter } from "next/navigation"

export default function Buscador({
  setTipoSeleccionado,
  setSubTipoSeleccionado,
  setSearchTerm,
  tipoSeleccionado,
  subTipoSeleccionado,
}) {
  const [selectedButton, setSelectedButton] = useState(tipoSeleccionado)

  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const handleTipoClick = (tipo) => {
    if (selectedButton === tipo) {
      setTipoSeleccionado("")
      setSelectedButton(null)
      setSubTipoSeleccionado(null)

      params.delete("tipo")
      params.delete("subtipo")

      router.push(`?${params.toString()}`, { scroll: false })
      return
    }

    setTipoSeleccionado(tipo)
    setSelectedButton(tipo)

    params.set("tipo", tipo)
    params.delete("subtipo")

    router.push(`?${params.toString()}`, { scroll: false })
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleClearFilters = () => {
    setTipoSeleccionado("")
    setSelectedButton(null)
    setSubTipoSeleccionado(null)
    router.push(`?`, { scroll: false })
  }

  const subcategories = {
    zapatos: ["oxfords", "swann", "derby", "dandy", "con-hebillas"],
    mocasines: ["nauticos", "archibaldo", "doble-suela", "vegetal"],
    escarpines: ["slipper", "MP", "americano"],
    botas: [
      "inglesa",
      "chelsea",
      "petta",
      "dandy",
      "carioca",
      "ET",
      "alpina",
      "manchester",
    ],
    borcegos: ["altos", "bajos"],
    sneakers: ["urbana", "bota", "SC"],
    // aca puedo agregar mas subcategorias
  }

  useEffect(() => {
    const tipo = searchParams.get("tipo")
    const subtipo = searchParams.get("subtipo")

    if (tipo) setTipoSeleccionado(tipo)
    if (subtipo) setSubTipoSeleccionado(subtipo)
  }, [])

  useEffect(() => {
    setSelectedButton(tipoSeleccionado)
  }, [tipoSeleccionado])

  return (
    <>
      <div
        className="accordion accordion-flush div-accordion_filters"
        id="accordionFlushExample"
      >
        <div className="accordion-item accordion-filters">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button_filters collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <TuneIcon style={{ color: "black" }} />
              <p className="p-filters">Tipos de modelos</p>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="div-filters_top_buttons">
              <section className="contenedor-card_clean_filters fade-section">
                <button
                  onClick={handleClearFilters}
                  className="button-card_allmodels"
                >
                  <h4 className="card-title_clean_models">
                    Limpiar filtros de búsqueda
                  </h4>
                </button>
              </section>
              <section className="contenedor-card_models">
                {Object.keys(subcategories).map((tipo) => (
                  <button
                    key={tipo}
                    onClick={() => handleTipoClick(tipo)}
                    className={`button-card_models ${
                      selectedButton === tipo ? "selected" : ""
                    }`}
                    data-categoria={tipo}
                  >
                    <h4 className="card-title_models">
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </h4>
                  </button>
                ))}
              </section>
            </div>
            {selectedButton &&
              subcategories[selectedButton] &&
              subcategories[selectedButton].length > 0 && (
                <div className="subcategoria-container">
                  <SubcategoriaBuscador
                    subcategorias={subcategories[selectedButton]}
                    setSubTipoSeleccionado={setSubTipoSeleccionado}
                    initialSubtipo={subTipoSeleccionado}
                  />
                </div>
              )}
          </div>
        </div>
        <input
          type="text"
          className="search-bar"
          id="searchInput"
          placeholder="Buscar modelos..."
          onChange={handleSearchChange}
        />
      </div>
    </>
  )
}
