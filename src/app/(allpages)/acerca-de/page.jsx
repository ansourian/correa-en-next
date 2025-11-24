import Banner from "@/components/Banner";
import FadeIn from "@/components/FadeInAnimation";
import ModelStylesCard from "@/components/ModelStylesCard";
import React from "react";

export default function AcercaDe() {
  return (
    <main>
      <Banner
        title="Acerca de"
        subtitle="CALZADOS CORREA"
        description="Conoce un poco más sobre nuestra historia y los productos que trabajamos."
      />
      <hr className="hr-custom" />
      <FadeIn>
        <section className="contenedor-acerca_de fade-section">
          {/* <ModelStylesCard
            imageSrc="/images/Ready to Wear.webp"
            title="Nuestro trabajo"
            link="/acerca-de/nuestro-trabajo"
            width={600}
            height={400}
          /> */}
          <ModelStylesCard
            imageSrc="/images/Made to Order.webp"
            title="Nuestra historia"
            link="/acerca-de/nuestra-historia"
            width={600}
            height={400}
          />
        </section>
      </FadeIn>
    </main>
  );
}
