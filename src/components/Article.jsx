import React from "react"
import Label from "./Label"

export default function Article({ modelo, loading = "lazy" }) {
  if (!modelo) {
    return <div>Modelo no encontrado</div>
  }

  const smallImage = encodeURI(modelo.previewImage.replace("/images/", "/images/cards/320/"))
  const largeImage = encodeURI(modelo.previewImage.replace("/images/", "/images/cards/640/"))

  return (
    <article className="producto model">
      <a href={`/modelos/${modelo.id}`}>
        <img
          className="img-models"
          alt={`${modelo.name}(${modelo.color})`}
          src={smallImage}
          srcSet={`${smallImage} 320w, ${largeImage} 640w`}
          sizes="(max-width: 24rem) 90vw, (max-width: 767px) 45vw, 18.75rem"
          loading={loading}
          decoding="async"
        />
        <div className="div-article-info">
          {modelo.isAgotado && (
            <Label type="agotado" customStyle={{ top: "10%", left: "10%" }} />
          )}

          {!modelo.isAgotado && modelo.isNuevo && (
            <Label type="nuevo" customStyle={{ top: "10%", left: "10%" }} />
          )}
          {!modelo.isAgotado && !modelo.isNuevo && modelo.isEncargo && (
            <Label type="encargo" customStyle={{ top: "10%", left: "10%" }} />
          )}
          {!modelo.isAgotado &&
            !modelo.isNuevo &&
            !modelo.isEncargo &&
            modelo.isFavorito && (
              <Label
                type="favorito"
                customStyle={{ top: "10%", left: "10%" }}
              />
            )}
          {!modelo.isAgotado &&
            !modelo.isNuevo &&
            !modelo.isEncargo &&
            !modelo.isFavorito &&
            modelo.isMedida && (
              <Label type="medida" customStyle={{ top: "10%", left: "10%" }} />
            )}
          <h4 className="model-titles">{modelo.name}</h4>
          <h3 className="h3-class">{modelo.class}</h3>
          <div className="div-color-variant-article">
            <h3 className="h3-color">{modelo.color}</h3>
            {modelo.variant && <h3 className="h3-style">{modelo.variant}</h3>}
          </div>
        </div>
      </a>
    </article>
  )
}
