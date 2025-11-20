import {
  AnuncioApertura,
  AnuncioInfo,
  AnuncioMultiFeriado,
} from "@/components/AnuncioCard";
import FadeIn from "@/components/FadeInAnimation";
import HeaderHome from "@/components/HeaderHome";
import NotasPeriodisticas from "@/components/NotasPeriodisticas";
import SectionHome from "@/components/SectionHome";
import React from "react";

export default function Home() {
  return (
    <>
      {/* <AnuncioInfo texto="¡Nuevos modelos de zapatos disponibles!" /> */}
      {/* <AnuncioApertura dia="26/03" apertura="cerrado" /> */}
      {/* <AnuncioMultiFeriado dias={["26/12", "27/12", "29/12"]} vuelta="30/12" /> */}
      <HeaderHome />
      <FadeIn>
        <SectionHome
          id="section-1"
          titulo="CALZADOS CORREA"
          subtitulo="Calzados hechos a mano de Buenos Aires, desde 1955"
          texto="Servicio personalizado por sus propios dueños. 
        Correa es tu club de elegancia de los mejores zapatos en la ciudad."
          linkHref="/acerca-de/nuestra-historia"
          linkTexto="QUIENES SOMOS"
        />
      </FadeIn>
      <img className="img-index" src="/images/foto-index1.webp" alt="Foto de la entrada del local de Mario Bravo 750" />
      {/* <hr className="hr-custom" /> */}
      <SectionHome
        id="section-2"
        titulo="NUESTROS ZAPATOS"
        subtitulo="Variedad para cada estilo de vida"
        texto="Correa estará con vos en cada paso del camino."
        linkHref="/modelos"
        linkTexto="VER MODELOS"
        imgSrc="/images/foto-index2.webp"
      />
      {/* <hr className="hr-custom" /> */}
      <img className="img-index" src="/images/foto-index2.webp" alt="Foto de un par de zapatos recibiendo un tratamiento de pátina pintada" />
      <SectionHome
        id="section-3"
        titulo="COMUNICATE CON NOSOTROS"
        subtitulo="¿Preguntas? Estamos aquí para usted"
        texto="Para consultar sobre envíos nacionales o internacionales, por favor deje su nombre y dirección a continuación y le enviaremos una respuesta tan pronto como sea posible."
        linkHref="/contacto"
        linkTexto="CONTACTANOS"
      />
      {/* <hr className="hr-custom" /> */}
      <img className="img-index" src="/images/foto-index3.webp" alt="Foto de trabajo en el taller" />
      <FadeIn>
        <section id="section-4" className="container-notas fade-section">
          <NotasPeriodisticas
            imgSrc="/images/2560px-Logo_La_Nacion.svg.png"
            imgAlt="logo diario La Nación"
            texto="“Hicimos un pacto con Dios: él no hace zapatos, y nosotros no hacemos milagros” se lee en la entrada de Calzados Correa, una de las últimas zapaterías que hacen zapatos totalmente a mano y a medida desde hace 66 años. Presidentes, grandes empresarios, artistas y miembros de la realeza asiática y árabe sacan turnos para poder tenerlos."
            link="https://www.lanacion.com.ar/buenos-aires/hacen-zapatos-a-mano-y-a-medida-desde-1955-y-un-par-puede-costar-hasta-2000-dolares-nid26112021/"
          />
          <NotasPeriodisticas
            imgSrc="/images/National-Geographic-Logo.svg.png"
            imgAlt="logo National Geographic"
            texto="“For men's shoes she likes Calzados Correa, where a sign says, 'If you want to shine in life, begin with your shoes.' The cobbler started as a storefront in 1955; eventually, says co-owner Dany Correa as he leads us through rooms where craftsmen devote themselves to details, 'the workshop and factory ate the house.' Correa's shop makes only eight pairs of 'eternal shoes' a day.”"
            link="https://www.nationalgeographic.com/travel/article/buenos-aires-traveler"
          />

          <NotasPeriodisticas
            imgSrc="/images/Forbes_logo.svg.png"
            imgAlt="logo Forbes"
            texto="The cobblers that time forgot. Three generations of them work in a shoebox-size store that’s crammed with samples, boxes, and display cases of vintage tools. Waiting for them to custom stain a pair of wingtips (one of the classic styles they make in prêt-à-porter or Bespoke) was like passing time in an old-fashioned men’s club, as a steady stream of young, old, trendy and conservative Porteños stopped in to shoot the breeze and pick up their orders."
            link="https://www.forbes.com/forbes-life-magazine/2009/0427/070-travel-dining-brazil-buenos-aires.html?sh=52e15b14765a"
          />

          <NotasPeriodisticas
            imgSrc="/images/cropped-ambitofinancierologo.png"
            imgAlt="logo diario Ámbito Financiero"
            texto="Encontrar zapatos artesanales, hechos a medida y de calidad, hoy es todo un desafío, pero en el corazón de la Capital la empresa familiar Correa, desde los años 50, trabaja en el rubro, manteniendo una destacada y elegante cartera de clientes. Aquellos amantes del buen vestir y de la elegancia, al arribar al local ubicado en Mario Bravo al 700, no dejan de sorprenderse al descubrir el tratamiento y la confección íntegramente manual y personalizada en el calzado."
            link="https://www.ambito.com/edicion-impresa/los-zapatos-medida-que-usan-presidentes-n3563389"
          />
        </section>
      </FadeIn>
    </>
  );
}
