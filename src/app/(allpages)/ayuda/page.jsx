import Banner from "@/components/Banner";
import CardPreguntas from "@/components/CardPreguntas";
import FadeIn from "@/components/FadeInAnimation";
import SectionHome from "@/components/SectionHome";
import { Fade } from "@mui/material";
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
      <FadeIn>
        <CardPreguntas />
      </FadeIn>
      <FadeIn>
        <SectionHome
          subtitulo="Otras consultas"
          texto="Si tienes otra consulta que no figura en el listado de arriba puedes comunicarte con nosotros."
          linkHref="./contacto"
          linkTexto="CONTACTANOS"
        />
      </FadeIn>
    </>
  );
}
