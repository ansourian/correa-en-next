import React, { useState } from "react";

export default function SubcategoriaBuscador({ subcategorias, setSubTipoSeleccionado }) {
  const [selectedSubButton, setSelectedSubButton] = useState(null);

  const handleSubTipoClick = (subtipo) => {
    setSubTipoSeleccionado(subtipo);
    setSelectedSubButton(subtipo);
  };

  return (
    <section className="contenedor-card_models_subtypes">
      {subcategorias.map((subtipo) => (
        <button
          key={subtipo}
          onClick={() => handleSubTipoClick(subtipo)}
          className={`button-card_models_subtypes ${selectedSubButton === subtipo ? "selected" : ""}`}
          data-subcategoria={subtipo}
        >
          <h4 className="card-title_models">{subtipo.charAt(0).toUpperCase() + subtipo.slice(1)}</h4>
        </button>
      ))}
    </section>
  );
}
