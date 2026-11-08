"use client"
import React from "react"
import TuneIcon from "@mui/icons-material/Tune"
import { useSearchParams, useRouter } from "next/navigation"
import FiltroBotones from "./FiltroBotones"
import SubcategoriaBuscador from "./SubcategoriaBuscador"
import {
  AnimationOutlined,
  ArrowDropDownOutlined,
  BlurOnOutlined,
  ColorLensOutlined,
  // InsightsOutlined,
  WavesOutlined,
} from "@mui/icons-material"
import { codigosPorModelo, filtros } from "@/data/filters"

export default function Buscador({
  searchTerm,
  setSearchTerm,
  tipoSeleccionado,
  subTipoSeleccionado,
  selectedCodigo,
  showLineaFilter = false,
  handleClearFilters,
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const codigosDisponibles = codigosPorModelo[subTipoSeleccionado] || []

  const filtrosCount = () => {
    let count = 0

    const normalize = (text) =>
      text
        ? text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/-/g, " ")
            .toLowerCase()
        : ""

    const selectedColors = searchParams.getAll("color") || []
    const selectedColorsNormalized = selectedColors.map((c) => normalize(c))

    const colorOptions = filtros.colores || []

    const selectedColorOptions = colorOptions.filter((option) => {
      const vals = Array.isArray(option.value) ? option.value : [option.value]
      return vals.some((v) =>
        selectedColorsNormalized.includes(normalize(String(v)))
      )
    })

    if (selectedColorOptions.length > 0) count += selectedColorOptions.length

    if (searchParams.get("linea")) count++
    if (searchParams.get("estilo")) count++
    if (searchParams.get("leather")) count++
    // if (searchParams.get("sewing")) count++
    if (searchParams.get("tipo")) count++
    if (searchParams.get("subtipo")) count++
    if (selectedCodigo) count++

    return count
  }

  const filtrosActivos = filtrosCount() > 0
  const colorPadre = filtrosActivos ? "#3481c7" : "black"

  const handleTipoClick = (tipo) => {
    const params = new URLSearchParams(searchParams.toString())

    if (tipoSeleccionado === tipo) {
      params.delete("tipo")
      params.delete("subtipo")
      params.delete("codigo")
      router.push(`?${params.toString()}`, { scroll: false })
      return
    }

    // borrar subtipo anterior para que no quede inválido
    params.set("tipo", tipo)
    params.delete("subtipo")
    params.delete("codigo")
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const handleColorClick = (color) => {
    const params = new URLSearchParams(searchParams.toString())

    if (searchParams.get("color") === color) {
      // Si clickea el mismo color → limpiar filtro
      params.delete("color")
      router.push(`?${params.toString()}`, { scroll: false })
      return
    }

    params.set("color", color)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleCodigoClick = (codigo) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedCodigo === codigo) {
      // deseleccionar
      params.delete("codigo")
    } else {
      params.set("codigo", codigo)
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      <div
        className="accordion accordion-flush div-accordion_filters"
        id="accordionFlushExample"
      >
        <div className="accordion-item accordion-filters">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button_filters collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <TuneIcon style={{ color: colorPadre }} />
              <p className="p-filters" style={{ color: colorPadre }}>
                Filtros
              </p>
              {filtrosActivos && (
                <p
                  className="p-filters"
                  style={{ color: colorPadre, marginLeft: "5px" }}
                >
                  ({filtrosCount()})
                </p>
              )}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="div-filters_top_buttons">
              <section className="contenedor-card_clean_filters fade-section">
                <button
                  onClick={handleClearFilters}
                  className="button-card_allmodels"
                >
                  <h4 className="card-title_clean_models">
                    Limpiar filtros de búsqueda
                  </h4>
                </button>
              </section>

              {/* FILTROS MODELOS: categorías (usa 'tipo' para no romper tu lógica) */}
              <section className="contenedor-card_models">
                {Object.keys(filtros.modelos).map((tipo) => (
                  <button
                    key={tipo}
                    onClick={() => handleTipoClick(tipo)}
                    className={`button-card_models ${
                      tipoSeleccionado === tipo ? "selected" : ""
                    }`}
                    data-categoria={tipo}
                  >
                    <h4
                      className={`card-title_models ${
                        tipoSeleccionado === tipo ? "selected2" : ""
                      }`}
                    >
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </h4>
                  </button>
                ))}
              </section>
            </div>

            {/* SUBCATEGORIAS: mantenemos componente similar al tuyo */}
            {tipoSeleccionado &&
              filtros.modelos[tipoSeleccionado] &&
              filtros.modelos[tipoSeleccionado].length > 0 && (
                <div className="subcategoria-container">
                  <SubcategoriaBuscador
                    subcategorias={filtros.modelos[tipoSeleccionado]}
                  />
                </div>
              )}

            {subTipoSeleccionado && codigosDisponibles.length > 0 && (
              <div className="subcategoria-container">
                <section class="contenedor-card_models_subtypes">
                  {codigosDisponibles.map((codigo) => (
                    <button
                      key={codigo.value}
                      onClick={() => handleCodigoClick(codigo.value)}
                      className={`button-card_models_subtypes ${
                        selectedCodigo === codigo.value ? "selected" : ""
                      }`}
                    >
                      <h4
                        className={`card-title_submodels ${
                          selectedCodigo === codigo.value ? "selected2" : ""
                        }`}
                      >
                        {codigo.label}
                      </h4>
                    </button>
                  ))}
                </section>
              </div>
            )}

            {/* ---- filtros nuevos sin tocar 'tipo'/'subtipo' ---- */}

            {/* SUB-ACCORDION — LÍNEA */}
            {showLineaFilter && (
              <div className="accordion-item accordion-filters">
                <h2 className="accordion-header" id="heading-linea">
                  <button
                    className="accordion-button_filters collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-linea"
                    aria-expanded="false"
                    aria-controls="collapse-linea"
                  >
                    <AnimationOutlined
                      style={{
                        color: searchParams.get("linea") ? "#3481c7" : "black",
                      }}
                    />
                    <p
                      className="p-filters"
                      style={{
                        color: searchParams.get("linea") ? "#3481c7" : "black",
                      }}
                    >
                      Línea
                    </p>
                    <ArrowDropDownOutlined
                      className="arrow-icon"
                      style={{ color: "black" }}
                    />
                  </button>
                </h2>
                <div
                  id="collapse-linea"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-linea"
                >
                  <div className="accordion-body">
                    <FiltroBotones
                      nombreParam="linea"
                      opciones={filtros.linea}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SUB-ACCORDION — COLORES */}
            <div className="accordion-item accordion-filters">
              <h2 className="accordion-header" id="heading-colores">
                <button
                  className="accordion-button_filters collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-colores"
                  aria-expanded="false"
                  aria-controls="collapse-colores"
                >
                  <ColorLensOutlined
                    style={{
                      color: searchParams.get("color") ? "#3481c7" : "black",
                    }}
                  />
                  <p
                    className="p-filters"
                    style={{
                      color: searchParams.get("color") ? "#3481c7" : "black",
                    }}
                  >
                    Colores
                  </p>
                  <ArrowDropDownOutlined
                    className="arrow-icon"
                    style={{ color: "black" }}
                  />
                </button>
              </h2>
              <div
                id="collapse-colores"
                className="accordion-collapse collapse"
                aria-labelledby="heading-colores"
              >
                <div className="accordion-body">
                  <FiltroBotones
                    nombreParam="color"
                    opciones={filtros.colores}
                    multiple={true}
                  />
                </div>
              </div>
            </div>

            {/* SUB-ACCORDION — CUERO */}
            <div className="accordion-item accordion-filters">
              <h2 className="accordion-header" id="heading-cuero">
                <button
                  className="accordion-button_filters collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-cuero"
                  aria-expanded="false"
                  aria-controls="collapse-cuero"
                >
                  <WavesOutlined
                    style={{
                      color: searchParams.get("leather") ? "#3481c7" : "black",
                    }}
                  />
                  <p
                    className="p-filters"
                    style={{
                      color: searchParams.get("leather") ? "#3481c7" : "black",
                    }}
                  >
                    Cuero
                  </p>
                  <ArrowDropDownOutlined
                    className="arrow-icon"
                    style={{ color: "black" }}
                  />
                </button>
              </h2>

              <div
                id="collapse-cuero"
                className="accordion-collapse collapse"
                aria-labelledby="heading-cuero"
              >
                <div className="accordion-body">
                  <FiltroBotones
                    nombreParam="leather"
                    opciones={filtros.cuero}
                  />
                </div>
              </div>
            </div>

            {/* SUB-ACCORDION — COSTURA (SEWING) */}
            {/*
            <div className="accordion-item accordion-filters">
              <h2 className="accordion-header" id="heading-sewing">
                <button
                  className="accordion-button_filters collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-sewing"
                  aria-expanded="false"
                  aria-controls="collapse-sewing"
                >
                  <InsightsOutlined
                    style={{
                      color: searchParams.get("sewing") ? "#3481c7" : "black",
                    }}
                  />
                  <p
                    className="p-filters"
                    style={{
                      color: searchParams.get("sewing") ? "#3481c7" : "black",
                    }}
                  >
                    Costura
                  </p>
                  <ArrowDropDownOutlined
                    className="arrow-icon"
                    style={{ color: "black" }}
                  />
                </button>
              </h2>

              <div
                id="collapse-sewing"
                className="accordion-collapse collapse"
                aria-labelledby="heading-sewing"
              >
                <div className="accordion-body">
                  <FiltroBotones
                    nombreParam="sewing"
                    opciones={filtros.sewing}
                  />
                </div>
              </div>
            </div>
            */}

            {/* SUB-ACCORDION — ESTILO */}
            <div className="accordion-item accordion-filters">
              <h2 className="accordion-header" id="heading-estilo">
                <button
                  className="accordion-button_filters collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-estilo"
                  aria-expanded="false"
                  aria-controls="collapse-estilo"
                >
                  <BlurOnOutlined
                    style={{
                      color: searchParams.get("estilo") ? "#3481c7" : "black",
                    }}
                  />
                  <p
                    className="p-filters"
                    style={{
                      color: searchParams.get("estilo") ? "#3481c7" : "black",
                    }}
                  >
                    Estilo
                  </p>
                  <ArrowDropDownOutlined
                    className="arrow-icon"
                    style={{ color: "black" }}
                  />
                </button>
              </h2>
              <div
                id="collapse-estilo"
                className="accordion-collapse collapse"
                aria-labelledby="heading-estilo"
              >
                <div className="accordion-body">
                  <FiltroBotones
                    nombreParam="estilo"
                    opciones={filtros.estilo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          className="search-bar"
          id="searchInput"
          placeholder="Buscar modelos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </>
  )
}
