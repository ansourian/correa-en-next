import React from "react";

export default function Buscador({ setTipoSeleccionado, setSearchTerm }) {
  const handleTipoClick = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
              <button onClick={() => setTipoSeleccionado("")} className="button-card_allmodels">
                <h4 className="card-title_clean_models">Limpiar filtros de búsqueda</h4>
              </button>
            </section>
            <section className="contenedor-card_models">
              <button onClick={() => handleTipoClick("zapatos")} className="button-card_models" data-categoria="zapatos">
                <h4 className="card-title_models">Zapatos</h4>
              </button>
              <button onClick={() => handleTipoClick("botas")} className="button-card_models" data-categoria="botas">
                <h4 className="card-title_models">Botas</h4>
              </button>
              <button onClick={() => handleTipoClick("borcegos")} className="button-card_models" data-categoria="borcegos">
                <h4 className="card-title_models">Borcegos</h4>
              </button>
              <button onClick={() => handleTipoClick("mocasines")} className="button-card_models" data-categoria="mocasines">
                <h4 className="card-title_models">Mocasines</h4>
              </button>
              <button onClick={() => handleTipoClick("escarpines")} className="button-card_models" data-categoria="escarpines">
                <h4 className="card-title_models">Escarpines</h4>
              </button>
              <button onClick={() => handleTipoClick("sneakers")} className="button-card_models" data-categoria="sneakers">
                <h4 className="card-title_models">Sneakers</h4>
              </button>
            </section>
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
