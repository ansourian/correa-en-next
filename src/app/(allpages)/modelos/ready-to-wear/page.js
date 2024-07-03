import React from "react";
import BannerModelos from "@/components/BannerModelos";
import Article from "@/components/Article";
import { modelos } from "@/data/data-modelos";

export default function Modelos() {
  return (
    <main>
      <BannerModelos
        title={"Ready to Wear"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Calzado estándar listo para vestir."}
      />
      <hr className="hr-rtw" />
      <section id="lista-productos" class="container">
        {modelos.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
    </main>
  );
}
