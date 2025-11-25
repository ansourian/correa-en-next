"use client"

import React, { useState } from "react"
import BannerModelos from "@/components/BannerModelos"
import Article from "@/components/Article"
import { modelos } from "@/data/data-modelos"

export default function Modelos() {
  const MODELS_PER_PAGE = 32
  const modelosCinturones = modelos.filter(
    (modelo) => modelo.class === "ACCESORIOS"
  )
  const [visibleCount, setVisibleCount] = useState(MODELS_PER_PAGE)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + MODELS_PER_PAGE)
  }

  return (
    <>
      <BannerModelos
        title={"Cinturones"}
        subtitle={"ACCESORIOS"}
        description={"Cinturones exclusivos para combinar con el zapato ideal."}
      />
      <hr className="hr-custom" />
      {/* <section id="lista-productos">
        {modelosCinturones.map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section> */}
      <section id="lista-productos">
        {modelosCinturones.slice(0, visibleCount).map((modelo) => (
          <Article key={modelo.id} params={{ id: modelo.id }} />
        ))}
      </section>

      {visibleCount < modelosCinturones.length && (
        <div className="btn-ver-mas-container">
          <button className="btn-ver-mas" onClick={handleLoadMore}>
            Ver más
          </button>
        </div>
      )}
    </>
  )
}
