import React from "react";
import BannerModelos from "@/components/BannerModelos";
import Article from "@/components/Article";
import { modelos } from "@/data/data-modelos";

export default function Modelos() {
  const modelosBespoke = modelos.filter(modelo => modelo.class === "BESPOKE");

  return (
    <main>
      <BannerModelos
        title={"Bespoke"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Calzado para realizar exclusivamente a medida."}
      />
      <hr className="hr-rtw" />
      <section id="lista-productos" className="container">
        {modelosBespoke.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
    </main>
  );
}
