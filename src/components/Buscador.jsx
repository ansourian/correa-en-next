"use client"
import React, { useEffect, useState } from "react"
import TuneIcon from "@mui/icons-material/Tune"
import { useSearchParams, useRouter } from "next/navigation"
import FiltroBotones from "./FiltroBotones"
import SubcategoriaBuscador from "./SubcategoriaBuscador"
import {
  AnimationOutlined,
  ArrowDropDownOutlined,
  BlurOnOutlined,
  ColorLensOutlined,
  WavesOutlined,
} from "@mui/icons-material"
import { codigosPorModelo, filtros } from "@/data/filters"

export default function Buscador({
  setTipoSeleccionado,
  setSubTipoSeleccionado,
  searchTerm,
  setSearchTerm,
  tipoSeleccionado,
  subTipoSeleccionado,
  selectedCodigo,
  setSelectedCodigo,
  showLineaFilter = false,
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedButton, setSelectedButton] = useState(tipoSeleccionado || null)
  const [codigosDisponibles, setCodigosDisponibles] = useState([])

  // sincronizar con los params 'tipo' y 'subtipo' (tu lógica original)
  useEffect(() => {
    const tipo = searchParams.get("tipo")
    const subtipo = searchParams.get("subtipo")
    const codigoParam = searchParams.get("codigo")
    if (tipo) {
      setTipoSeleccionado(tipo)
      setSelectedButton(tipo)
    } else {
      setTipoSeleccionado("")
      setSelectedButton(null)
    }
    if (subtipo) setSubTipoSeleccionado(subtipo)
    else setSubTipoSeleccionado(null)

    if (codigoParam)
      setSelectedCodigo(codigoParam) // <-- inicializa el código desde URL
    else setSelectedCodigo(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()])

  useEffect(() => {
    setSelectedButton(tipoSeleccionado || null)
  }, [tipoSeleccionado])

  useEffect(() => {
    if (!subTipoSeleccionado) {
      setCodigosDisponibles([])
      return
    }

    const codigos = codigosPorModelo[subTipoSeleccionado] || []
    setCodigosDisponibles(codigos)

    if (selectedCodigo && !codigos.includes(selectedCodigo)) {
      setSelectedCodigo(null)
    }
  }, [subTipoSeleccionado])

  const filtrosCount = () => {
    let count = 0
    if (searchParams.getAll("color").length > 0)
      count += searchParams.getAll("color").length
    if (searchParams.get("linea")) count++
    if (searchParams.get("estilo")) count++
    if (searchParams.get("leather")) count++
    if (searchParams.get("tipo")) count++
    if (searchParams.get("subtipo")) count++
    if (selectedCodigo) count++
    return count
  }

  const filtrosActivos = filtrosCount() > 0
  const colorPadre = filtrosActivos ? "#3481c7" : "black"

  const handleTipoClick = (tipo) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedButton === tipo) {
      // deseleccionar (tu comportamiento original)
      setTipoSeleccionado("")
      setSelectedButton(null)
      setSubTipoSeleccionado(null)
      params.delete("tipo")
      params.delete("subtipo")
      params.delete("codigo")
      router.push(`?${params.toString()}`, { scroll: false })
      return
    }

    // seleccionar nueva categoria (tipo)
    setTipoSeleccionado(tipo)
    setSelectedButton(tipo)
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
      setSelectedCodigo(null)
    } else {
      params.set("codigo", codigo)
      setSelectedCodigo(codigo)
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  const handleClearFilters = () => {
    // limpiamos todo: dejamos solo el search vacío (si querés)
    setTipoSeleccionado("")
    setSubTipoSeleccionado(null)
    setSearchTerm("")
    setSelectedButton(null)
    router.push("?", { scroll: false })
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
                      selectedButton === tipo ? "selected" : ""
                    }`}
                    data-categoria={tipo}
                  >
                    <h4
                      className={`card-title_models ${
                        selectedButton === tipo ? "selected2" : ""
                      }`}
                    >
                      {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </h4>
                  </button>
                ))}
              </section>
            </div>

            {/* SUBCATEGORIAS: mantenemos componente similar al tuyo */}
            {selectedButton &&
              filtros.modelos[selectedButton] &&
              filtros.modelos[selectedButton].length > 0 && (
                <div className="subcategoria-container">
                  {/* Reutilizo tu SubcategoriaBuscador (no hace falta cambiarlo) */}
                  <SubcategoriaBuscador
                    subcategorias={filtros.modelos[selectedButton]}
                    setSubTipoSeleccionado={setSubTipoSeleccionado}
                    initialSubtipo={subTipoSeleccionado}
                    setSelectedCodigo={setSelectedCodigo} 
                  />
                </div>
              )}

            {subTipoSeleccionado && codigosDisponibles.length > 0 && (
              <div className="subcategoria-container">
                <section class="contenedor-card_models_subtypes">
                  {codigosDisponibles.map((codigo) => (
                    <button
                      key={codigo}
                      onClick={() => handleCodigoClick(codigo)}
                      className={`button-card_models_subtypes ${
                        selectedCodigo === codigo ? "selected" : ""
                      }`}
                    >
                      <h4
                        className={`card-title_submodels ${
                          selectedCodigo === codigo ? "selected2" : ""
                        }`}
                      >
                        {codigo}
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
