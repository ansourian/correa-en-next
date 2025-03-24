import Banner from "@/components/Banner";
import CardPreguntas from "@/components/CardPreguntas";
import React from "react";

export default function Ayuda() {
  return (
    <>
      <Banner
        title={"Preguntas Frecuentes"}
        subtitle={"AYUDA"}
        description={
          "En esta sección podrás encontrar algunas de las preguntas frecuentes que puedan surgir acerca del calzado y otros temas relacionados."
        }
      />
      <CardPreguntas />
      <Banner
        title={"Otras consultas"}
        description={
          "Si tienes otra consulta que no figura en el listado de arriba puedes comunicarte con nosotros."
        }
      />
      <div class="div-button">
        <a class="button-index" href="./contacto">
          CONTACTANOS
        </a>
      </div>
    </>
  );
}
