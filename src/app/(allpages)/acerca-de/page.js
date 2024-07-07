import Banner from "@/components/Banner";
import React from "react";

export default function AcercaDe() {
    return (
        <main>
            <Banner title={"Acerca de"} subtitle={"CALZADOS CORREA"} description={"Conoce un poco mas sobre nuestra historia y los productos que trabajamos."} />
            <section className="contenedor-acerca_de fade-section">
                {/*
                <a href="./nuestro_trabajo.html" className="model">
                    <img className="img-acerca_de" src="../assets/img/Ready to Wear.webp" alt="modelo ready to wear" />
                    <div className="div-acerca_de_texts">
                        <h4 className="acerca_de_titles">Nuestro trabajo</h4>
                    </div>
                </a>
                */}
                <a href="/acerca-de/nuestra-historia" className="model">
                    <img className="img-acerca_de" src="./images/Made to Order.webp" alt="modelo made to order" />
                    <div className="div-acerca_de_texts">
                        <h4 className="acerca_de_titles">Nuestra historia</h4>
                    </div>
                </a>
            </section>
        </main>
    );
  }  