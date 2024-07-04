"use client";

import React, { useState, useEffect } from "react";
import BannerModelos from "@/components/BannerModelos";
import Article from "@/components/Article";
import { modelos } from "@/data/data-modelos";
import Buscador from "@/components/Buscador";

export default function Modelos() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [subTipoSeleccionado, setSubTipoSeleccionado] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizeText = (text) => {
    return text ? text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
  };

  const modelosReadyToWear = modelos.filter((modelo) => modelo.class === "READY TO WEAR");

  const modelosFiltrados = modelosReadyToWear.filter((modelo) => {
    const normalizedTerm = normalizeText(searchTerm);
    const normalizedName = normalizeText(modelo.name);
    const normalizedVariant = normalizeText(modelo.variant);
    const normalizedColor = normalizeText(modelo.color);
    const matchesTipo = tipoSeleccionado ? modelo.type === tipoSeleccionado : true;
    const matchesSubTipo = subTipoSeleccionado ? modelo.subtype === subTipoSeleccionado : true;
    return (
      (normalizedName.includes(normalizedTerm) ||
        normalizedVariant.includes(normalizedTerm) ||
        normalizedColor.includes(normalizedTerm)) &&
      matchesTipo &&
      matchesSubTipo
    );
  });

  return (
    <main>
      <BannerModelos
        title={"Ready to Wear"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Calzado estándar listo para vestir."}
      />
      <hr className="hr-rtw" />
      <Buscador
        setTipoSeleccionado={setTipoSeleccionado}
        setSubTipoSeleccionado={setSubTipoSeleccionado}
        setSearchTerm={setSearchTerm}
      />
      <section id="lista-productos" className="container">
        {modelosFiltrados.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
    </main>
  );
}
