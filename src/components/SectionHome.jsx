import React from "react";
import FadeIn from "./FadeInAnimation";

export default function SectionHome({
  id,
  titulo,
  subtitulo,
  texto,
  linkHref,
  linkTexto,
}) {
  return (
    <FadeIn>
      <div id={id} className="div-section fade-section">
        <h3 className="h3-index">{titulo}</h3>
        <h2 className="h2-index">{subtitulo}</h2>
        <hr className="linea-subtitulo" />
        <p className="p-sub">{texto}</p>
        <div className="div-button">
          <a className="button-index" href={linkHref}>
            {linkTexto}
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
