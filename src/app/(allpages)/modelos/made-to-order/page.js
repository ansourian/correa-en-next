import React from "react";
import BannerModelos from "@/components/BannerModelos";
import Article from "@/components/Article";
import { modelos } from "@/data/data-modelos";

export default function Modelos() {
  const modelosMadeToOrder = modelos.filter(modelo => modelo.class === "MADE TO ORDER");

  return (
    <main>
      <BannerModelos
        title={"Made to Order"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Calzado customizados a pedido."}
      />
      <hr className="hr-rtw" />
      <section id="lista-productos" className="container">
        {modelosMadeToOrder.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
    </main>
  );
}
