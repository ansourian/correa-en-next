import React from "react"
import Banner from "@/components/Banner"

export default function Gracias() {
  return (
    <>
      <Banner
        title={"¡Gracias por comunicarte! Te responderemos pronto."}
        subtitle={"CALZADOS CORREA"}
        description={"Hacé click en el botón para regresar"}
      />
      <div className="div-button-volver-form">
        <a className="button-index" href="/">
          REGRESAR A INICIO
        </a>
      </div>
    </>
  )
}
