import React from "react";
import BannerModelos from "@/components/BannerModelos";
import Article from "@/components/Article";
import { modelos } from "@/data/data-modelos";

export default function Modelos() {
  const modelosCinturones = modelos.filter(modelo => modelo.class === "ACCESORIOS");

  return (
    <>
      <BannerModelos
        title={"Cinturones"}
        subtitle={"ACCESORIOS"}
        description={"Cinturones exclusivos para combinar con el zapato ideal."}
      />
      <hr className="hr-custom" />
      <section id="lista-productos">
        {modelosCinturones.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
    </>
  );
}
