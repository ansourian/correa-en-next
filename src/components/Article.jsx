import React from 'react';
import { modelos } from '@/data/data-modelos';

export default function Article({ params }) {
  const { id } = params;
  const modelo = modelos.find((a) => a.id == id);

  if (!modelo) {
    return <div>Modelo no encontrado</div>;
  }

  return (
    <article className="producto model">
      <a href={`/modelos/${modelo.id}`}>
        <img
          className="img-models"
          alt={`${modelo.name}(${modelo.color})`}
          src={modelo.previewImage}
        />
        <div style={{display:"flex", flexDirection:"column", gap:"0.1rem"}}>
          <h4 className="model-titles">{modelo.name}</h4>
          <h3 className="h3-class">{modelo.class}</h3>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <h3 className="h3-color">{modelo.color}</h3>
            {modelo.variant && <h3 className="h3-style">{modelo.variant}</h3>}
          </div>
        </div>
      </a>
    </article>
  );
}
