import React from "react"
import { modelos } from "@/data/data-modelos"
import Label from "./Label"

export default function Article({ params }) {
  const { id } = params
  const modelo = modelos.find((a) => a.id == id)

  if (!modelo) {
    return <div>Modelo no encontrado</div>
  }

  return (
    <article className="producto model">
      <a href={`/modelos/${modelo.id}`}>
        <img
          className="img-models"
          alt={`${modelo.name}(${modelo.color})`}
          src={modelo.previewImage}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {modelo.isAgotado && (
            <Label type="agotado" customStyle={{ top: "10%", left: "10%" }} />
          )}

          {!modelo.isAgotado && modelo.isNuevo && (
            <Label type="nuevo" customStyle={{ top: "10%", left: "10%" }} />
          )}
          <h4 className="model-titles">{modelo.name}</h4>
          <h3 className="h3-class">{modelo.class}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h3 className="h3-color">{modelo.color}</h3>
            {modelo.variant && <h3 className="h3-style">{modelo.variant}</h3>}
          </div>
        </div>
      </a>
    </article>
  )
}
