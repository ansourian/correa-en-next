"use client";

import React, { useState, useEffect } from "react";
import BannerModelos from "@/components/BannerModelos";
import Article from "@/components/Article";
import { modelos } from "@/data/data-modelos"; // Asegúrate de importar el array completo de modelos
import Buscador from "@/components/Buscador";

export default function AllModels() {
  // Estados para el filtro
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [subTipoSeleccionado, setSubTipoSeleccionado] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);

  useEffect(() => {
    const normalizeText = (text) => {
      return text
        ? text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        : "";
    };

    // Filtrar todos los modelos
    const modelosFiltrados = modelos.filter((modelo) => {
      const normalizedTerm = normalizeText(searchTerm);
      const normalizedName = normalizeText(modelo.name);
      const normalizedVariant = normalizeText(modelo.variant);
      const normalizedColor = normalizeText(modelo.color);
      const matchesTipo = tipoSeleccionado
        ? modelo.type === tipoSeleccionado
        : true;
      const matchesSubTipo = subTipoSeleccionado
        ? modelo.subtype === subTipoSeleccionado
        : true;
      const isNotBelt = modelo.class !== "ACCESORIOS";
      return (
        (normalizedName.includes(normalizedTerm) ||
          normalizedVariant.includes(normalizedTerm) ||
          normalizedColor.includes(normalizedTerm)) &&
        matchesTipo &&
        matchesSubTipo &&
        isNotBelt
      );
    });

    setFilteredModels(modelosFiltrados);
  }, [searchTerm, tipoSeleccionado, subTipoSeleccionado]);

  return (
    <>
      <BannerModelos
        title={"Todos los Modelos"}
        subtitle={"NUESTROS ZAPATOS"}
        description={
          "Encuentra todos nuestros modelos de zapatos, desde los Ready to Wear hasta los Bespoke."
        }
      />
      <hr className="hr-custom" />

      {/* Aquí puedes usar el componente Buscador como en las otras pantallas */}
      <Buscador
        setTipoSeleccionado={setTipoSeleccionado}
        setSubTipoSeleccionado={setSubTipoSeleccionado}
        setSearchTerm={setSearchTerm}
        modelos={modelos}
        searchTerm={searchTerm}
        tipoSeleccionado={tipoSeleccionado}
        subTipoSeleccionado={subTipoSeleccionado}
      />

      {/* Mostrar los modelos filtrados */}
      <section id="lista-productos">
        {filteredModels.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>
    </>
  );
}
