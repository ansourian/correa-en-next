import React from "react";

export default function NotasPeriodisticas({ imgSrc, imgAlt, texto, link }) {
  return (
    <article className="notas-periodisticas">
      <img className="logos-diarios" src={imgSrc} alt={imgAlt} />
      <p className="p-notas">{texto}</p>
      <div className="div-button-nota">
        <a className="button-index" href={link} target="_blank" rel="noopener noreferrer">
          VER ARTÍCULO
        </a>
      </div>
    </article>
  );
}
