import React, { useState } from "react";
import SubcategoriaBuscador from "./SubcategoriaBuscador";

export default function Buscador({ setTipoSeleccionado, setSubTipoSeleccionado, setSearchTerm }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleTipoClick = (tipo) => {
    setTipoSeleccionado(tipo);
    setSelectedButton(tipo === selectedButton ? null : tipo);
    setSubTipoSeleccionado(null); // Reset subcategory when main category changes
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearFilters = () => {
    setTipoSeleccionado("");
    setSelectedButton(null);
    setSubTipoSeleccionado(null);
  };

  const subcategories = {
    zapatos: ["oxfords", "swann", "derby", "dandy", "con-hebillas"],
    mocasines: ["nauticos", "archibaldo", "doble-suela"],
    // Add other types and their subcategories here
  };

  return (
    <>
      <div className="accordion accordion-flush div-acordion_filters" id="accordionFlushExample">
        <div className="accordion-item acordion-filters">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <p className="p-filters">Tipos de modelos</p>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <section className="contenedor-card_clean_filters fade-section">
              <button onClick={handleClearFilters} className="button-card_allmodels">
                <h4 className="card-title_clean_models">Limpiar filtros de búsqueda</h4>
              </button>
            </section>
            <section className="contenedor-card_models">
              {Object.keys(subcategories).map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => handleTipoClick(tipo)}
                  className={`button-card_models ${selectedButton === tipo ? "selected" : ""}`}
                  data-categoria={tipo}
                >
                  <h4 className="card-title_models">{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h4>
                </button>
              ))}
              <button onClick={() => handleTipoClick("botas")} className={`button-card_models ${selectedButton === "botas" ? "selected" : ""}`} data-categoria="botas">
                <h4 className="card-title_models">Botas</h4>
              </button>
              <button onClick={() => handleTipoClick("borcegos")} className={`button-card_models ${selectedButton === "borcegos" ? "selected" : ""}`} data-categoria="borcegos">
                <h4 className="card-title_models">Borcegos</h4>
              </button>
              <button onClick={() => handleTipoClick("escarpines")} className={`button-card_models ${selectedButton === "escarpines" ? "selected" : ""}`} data-categoria="escarpines">
                <h4 className="card-title_models">Escarpines</h4>
              </button>
              <button onClick={() => handleTipoClick("sneakers")} className={`button-card_models ${selectedButton === "sneakers" ? "selected" : ""}`} data-categoria="sneakers">
                <h4 className="card-title_models">Sneakers</h4>
              </button>
            </section>
            {selectedButton && subcategories[selectedButton] && (
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
  );
}
