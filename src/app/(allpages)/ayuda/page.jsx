import Banner from "@/components/Banner";
import CardPreguntas from "@/components/CardPreguntas";
import FadeIn from "@/components/FadeInAnimation";
import SectionHome from "@/components/SectionHome";
import { Fade } from "@mui/material";
import React, { Suspense } from "react";

export const metadata = {
  title: "Ayuda",
  description: "Encontrá respuestas a las preguntas frecuentes sobre el calzado y los servicios de Calzados Correa.",
  alternates: { canonical: "/ayuda/" },
};

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
        <Suspense fallback={null}>
          <CardPreguntas />
        </Suspense>
      </FadeIn>
      <FadeIn>
        <SectionHome
          subtitulo="Otras consultas"
          texto="Si tienes otra consulta que no figura en el listado de arriba puedes comunicarte con nosotros."
          linkHref="/contacto"
          linkTexto="CONTACTANOS"
        />
      </FadeIn>
    </>
  );
}
