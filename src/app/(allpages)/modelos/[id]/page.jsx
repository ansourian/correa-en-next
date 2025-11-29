import React from "react"
import { modelos } from "@/data/data-modelos"
import GaleriaModelos from "@/components/GaleriaModelos"
import Label from "@/components/Label"
import { Tooltip } from "@mui/material"

export function generateStaticParams() {
  return modelos.map((m) => ({
    id: m.id,
  }))
}

export default function Modelos({ params }) {
  const { id } = params
  const modelo = modelos.find((a) => a.id == id)

  const relatedModels = modelos.filter(
    (m) =>
      m.name === modelo.name && m.class === modelo.class && m.id !== modelo.id
  )

  const classToUrl = {
    "READY TO WEAR": "/modelos/ready-to-wear",
    "MADE TO ORDER": "/modelos/made-to-order",
    BESPOKE: "/modelos/bespoke",
    ACCESORIOS: "/modelos/cinturones",
  }

  // Verifica si se encontró el modelo
  if (!modelo) {
    return <div>No se encontró el modelo.</div> // Si no se encuentra el modelo, muestra un mensaje
  }

  const { images } = modelo

  // Filtra las imágenes válidas (no nulas)
  const validImages = images ? images.filter((image) => image) : []

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
          <a href={classToUrl[modelo.class] || "#"}>
            <h3 className="h3-model">{modelo.class}</h3>
          </a>
          {modelo.isAgotado && (
            <Label
              type="agotado"
              customStyle={{ position: "relative", top: 0, left: 0 }}
            />
          )}
          {!modelo.isAgotado && modelo.isNuevo && (
            <Label
              type="nuevo"
              customStyle={{ position: "relative", top: 0, left: 0 }}
            />
          )}
          {!modelo.isAgotado && !modelo.isNuevo && modelo.isEncargo && (
            <Tooltip
              arrow="top"
              title="Este modelo es exclusivamente por encargo, contra disponibilidad del material."
              placement="right"
            >
              <Label
                type="encargo"
                customStyle={{ position: "relative", top: 0, left: 0 }}
              />
            </Tooltip>
          )}
          {!modelo.isAgotado &&
            !modelo.isNuevo &&
            !modelo.isEncargo &&
            modelo.isFavorito && (
              <Tooltip
                arrow="top"
                title="¡Este modelo es de los más elegidos por los clientes!"
                placement="right"
              >
                <Label
                  type="favorito"
                  customStyle={{ position: "relative", top: 0, left: 0 }}
                />
              </Tooltip>
            )}
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
          {relatedModels.length > 0 && (
            <div className="otros-modelos">
              <h4 className="h4-model">Otros colores</h4>

              <div className="otros-modelos-grid">
                {relatedModels.map((item) => (
                  <a
                    key={item.id}
                    href={`/modelos/${item.id}`}
                    className="otros-modelos-item"
                  >
                    <img
                      src={item.previewImage}
                      alt={item.color}
                      className="otros-modelos-img"
                    />
                    <span className="otros-modelos-color">{item.color}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <p className="aclaracion-colores">
            Calzados 100% plantillados a mano. Nuestros cueros poseen un curtido
            artesanal el cual puede variar sutilmente de tono según la partida
            de producción.
          </p>
        </div>
      </div>
    </div>
  )
}
