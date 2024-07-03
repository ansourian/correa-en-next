import React from "react";
import "@/lib/globals.css";

export default function Home() {
    return (
      <main>
            <div className="video-intro">
                <video className="video-index" src="/video/mantenimiento.mp4" autoPlay muted loop playsInline></video>
                <div className="div-bienvenida">
                  <h1 className="h1-index">Calzados Correa</h1>
                  <h2 className="h2-titulo">Si querés brillar en la vida, comenzá por tus zapatos.</h2>
                  <a id="redirection" href="./index.html#redirection"><img className="flecha-index" src="images/flecha.png"/></a>
                </div>
            </div>
            <div className="div-section fade-section">
                <h3 className="h3-index">CALZADOS CORREA</h3>
                <h2 className="h2-index">Calzados hechos a mano de Buenos Aires, desde 1955</h2>
                <hr className="linea-subtitulo"/>
                <p className="p-sub"> Servicio personalizado por sus propios dueños.<br/>
                Correa es tu club de elegancia de los mejores zapatos en la ciudad.</p>
                <div className="div-button">
                    <a className="button-index" href="./pages/quienes_somos.html">QUIENES SOMOS</a>
                </div>
            </div>
            <hr/>
            <div className="div-section fade-section">
                <h3 className="h3-index">NUESTROS ZAPATOS</h3>
                <h2 className="h2-index">Variedad para cada estilo de vida</h2>
                <hr className="linea-subtitulo"/>
                <p className="p-sub"> Correa estará con vos en cada paso del camino.</p>
                <div className="div-button">
                    <a className="button-index" href="./pages/modelos.html">VER MODELOS</a>
                </div>
                <div className="div-img_index">
                    <img className="img-index" src="/images/foto-index2.webp"/>
                </div>
            </div>
            <hr/>
            <div className="div-section fade-section">
                <h3 className="h3-index">COMUNICATE CON NOSOTROS</h3>
                <h2 className="h2-index">¿Preguntas? Estamos aquí para usted</h2>
                <hr className="linea-subtitulo"/>
                <p className="p-sub"> Para consultar sobre envíos nacionales o internacionales, por favor deje su nombre y dirección a continuación y le enviaremos una respuesta tan pronto como sea posible.</p>
                <div className="div-button">
                    <a className="button-index" href="./pages/contacto.html">CONTACTANOS</a>
                </div>
            </div>
            <hr/>       
        <section className="container-notas fade-section">
            <article className="notas-periodisticas">
                <img className="logos-diarios" src="/images/2560px-Logo_La_Nacion.svg.png" alt="logo diario la nación"/>
                <p className="p-lanacion">“Hicimos un pacto con Dios: él no hace zapatos, y nosotros no hacemos milagros” se lee en la entrada de Calzados Correa, una de las últimas zapaterías que hacen zapatos totalmente a mano y a medida desde hace 66 años. Presidentes, grandes empresarios, artistas y miembros de la realeza asiática y árabe sacan turnos para poder tenerlos.</p>
                <div className="div-button-nota">
                    <a className="button-index" href="https://www.lanacion.com.ar/buenos-aires/hacen-zapatos-a-mano-y-a-medida-desde-1955-y-un-par-puede-costar-hasta-2000-dolares-nid26112021/" target="_blank">VER ARTÍCULO</a>
                </div>
            </article>
            <article className="notas-periodisticas">
                <img className="logos-diarios" src="/images/National-Geographic-Logo.svg.png" alt="logo national geographic"/>
                <p className="p-natgeo">“For men's shoes she likes Calzados Correa, where a sign says, "If you want to shine in life, begin with your shoes." The cobbler started as a storefront in 1955; eventually, says co-owner Dany Correa as he leads us through rooms where craftsmen devote themselves to details, "the workshop and factory ate the house." Correa's shop makes only eight pairs of "eternal shoes" a day.”</p>
                <div className="div-button-nota">
                    <a className="button-index" href="https://www.nationalgeographic.com/travel/article/buenos-aires-traveler" target="_blank">VER ARTÍCULO</a>
                </div>
            </article>
            <article className="notas-periodisticas">
                <img className="logos-diarios" src="/images/Forbes_logo.svg.png" alt="logo forbes"/>
                <p className="p-notas">The cobblers that time forgot. Three generations of them work in a shoebox-size store that’s crammed with samples, boxes, and display cases of vintage tools. Waiting for them to custom stain a pair of wingtips (one of the classNameic styles they make in prêt-à-porter or Bespoke) was like passing time in an old-fashioned men’s club, as a steady stream of young, old , trendy and conservative Porteños stopped in to shoot the breeze and pick up their orders.</p>
                <div className="div-button-nota">
                    <a className="button-index" href="https://www.forbes.com/forbes-life-magazine/2009/0427/070-travel-dining-brazil-buenos-aires.html?sh=52e15b14765a" target="_blank">VER ARTÍCULO</a>
                </div>
            </article>
            <article className="notas-periodisticas">
                <img className="logos-diarios" src="/images/cropped-ambitofinancierologo.png" alt="logo diario ambito financiero"/>
                <p className="p-notas">Encontrar zapatos artesanales, hechos a medida y de calidad, hoy es todo un desafío, pero en el corazón de la Capital la empresa familiar Correa, desde los años 50, trabaja en el rubro, manteniendo una destacada y elegante cartera de clientes.
                    Aquellos amantes del buen vestir y de la elegancia, al arribar al local ubicado en Mario Bravo al 700, no dejan de sorprenderse al descubrir el tratamiento y la confección íntegramente manual y personalizada en el calzado.</p>
                    <div className="div-button-nota">
                        <a className="button-index" href="https://www.ambito.com/edicion-impresa/los-zapatos-medida-que-usan-presidentes-n3563389" target="_blank">VER ARTÍCULO</a>
                    </div>
            </article>
        </section>
      </main>
    );
  }  