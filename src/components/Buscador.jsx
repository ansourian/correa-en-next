import React, { useState } from "react"
import SubcategoriaBuscador from "./SubcategoriaBuscador"
import TuneIcon from "@mui/icons-material/Tune"

export default function Buscador({
  setTipoSeleccionado,
  setSubTipoSeleccionado,
  setSearchTerm,
  tipoSeleccionado, // Añadimos esta prop para saber qué tipo está seleccionado
  subTipoSeleccionado, // Añadimos esta prop para saber qué subcategoría está seleccionada
}) {
  const [selectedButton, setSelectedButton] = useState(tipoSeleccionado)

  const handleTipoClick = (tipo) => {
    setTipoSeleccionado(tipo)
    setSelectedButton(tipo === selectedButton ? null : tipo)
    setSubTipoSeleccionado(null) // Reset subcategory when main category changes
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleClearFilters = () => {
    setTipoSeleccionado("")
    setSelectedButton(null)
    setSubTipoSeleccionado(null)
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
    // Add other types and their subcategories here
  }

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
              <TuneIcon />
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
