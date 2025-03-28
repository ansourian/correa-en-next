import React from "react";
import { modelos } from "@/data/data-modelos";
import GaleriaModelos from "@/components/GaleriaModelos";
import NuevoLabel from "@/components/NuevoLabel";

export default function Modelos({ params }) {
  const { id } = params;
  const modelo = modelos.find((a) => a.id == id);

  // Verifica si se encontró el modelo
  if (!modelo) {
    return <div>No se encontró el modelo.</div>; // Si no se encuentra el modelo, muestra un mensaje
  }

  const { images } = modelo;

  // Filtra las imágenes válidas (no nulas)
  const validImages = images ? images.filter((image) => image) : [];

  return (
    <div className="div-modelo">
      <div className="div-galeria">
        {validImages.length > 0 ? (
          <GaleriaModelos images={validImages} />
        ) : (
          <div>No hay imágenes disponibles.</div>
        )}
      </div>
      <div className="div-info-modelo">
        <div className="div-titulo-modelo">
          <h2 className="h2-model">{modelo.name}</h2>
          <h3 className="h3-model">{modelo.class}</h3>
          {modelo.isNuevo && <NuevoLabel customStyle={{ position: "relative", top: 0, left: 0 }} />}
        </div>
        <div className="row div-model">
          <h4 className="h4-model">Descripción</h4>
          <p className="p-model">{modelo.description}</p>
          <h4 className="h4-model">Tipo de cuero</h4>
          <p className="p-model">{modelo.leather}</p>
          <h4 className="h4-model">Color</h4>
          <p className="p-model">{modelo.color}</p>
          <h4 className="h4-model">Código de Modelo</h4>
          <p className="p-model">{modelo.codigo}</p>
          <p className="aclaracion-colores">
            Calzados 100% plantillados a mano. Nuestros cueros poseen un curtido
            artesanal el cual puede variar sutilmente de tono según la partida
            de producción.
          </p>
        </div>
      </div>
    </div>
  );
}
