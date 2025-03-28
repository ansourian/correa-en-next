import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import React from "react";

export default function Ayuda() {
    return (
        <>
            <Banner title={"¿Preguntas? Estamos aquí para usted"} subtitle={"COMUNICATE CON NOSOTROS"} description={"Para consultar sobre envíos nacionales o internacionales, por favor deje su nombre y dirección a continuación y le enviaremos una respuesta tan pronto como sea posible."} />
            <ContactForm />
        </>
    );
  }  