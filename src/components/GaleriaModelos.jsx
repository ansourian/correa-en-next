"use client"

import React, { useState, useRef, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Modal } from "react-bootstrap"
import { AdsClick, Pinch } from "@mui/icons-material"

export default function GaleriaModelos({ images, modelName = "este modelo" }) {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [modalOpen, setModalOpen] = useState(false) // Estado para controlar la apertura del modal
  const [activeImageIndex, setActiveImageIndex] = useState(0) // Estado para almacenar el índice de la imagen seleccionada
  const [isZoomed, setIsZoomed] = useState(false) // Estado para controlar el zoom de la imagen
  const [isMobile, setIsMobile] = useState(false) // Estado para detectar si es móvil
  const [showHint, setShowHint] = useState(true)
  const [showModalHint, setShowModalHint] = useState(true)
  const [isThumbnailClick, setIsThumbnailClick] = useState(false)

  const sliderRef = useRef(null) // Crear una referencia para el slider
  const galleryRef = useRef(null)

  const handleSliderAccessibility = () => {
    // Slick duplica diapositivas: solo la visible debe entrar en el recorrido de Tab.
    let focusedSlideHidden = false
    galleryRef.current?.querySelectorAll(".slick-slide").forEach((slide) => {
      const isHidden = slide.getAttribute("aria-hidden") === "true"
      if (isHidden && slide.contains(document.activeElement)) {
        focusedSlideHidden = true
      }
      slide.querySelectorAll(".gallery-image-button").forEach((button) => {
        button.tabIndex = isHidden ? -1 : 0
      })
    })
    if (focusedSlideHidden) {
      galleryRef.current
        ?.querySelector(".slick-active .gallery-image-button")
        ?.focus({ preventScroll: true })
    }
  }

  // Detectar si el dispositivo es móvil o no
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1023.98px)").matches)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Configuración del slider para la galería principal (imagen grande)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    onInit: handleSliderAccessibility,
    onReInit: handleSliderAccessibility,
    beforeChange: (current, next) => {
      setSelectedImage(images[next]) // Actualiza la imagen seleccionada cuando el slider cambia
      if (!isThumbnailClick) {
        setShowHint(false)
      }
      setIsThumbnailClick(false)
    },
  }

  // Función para manejar el clic en la imagen y abrir el modal
  const handleImageClick = (index) => {
    setActiveImageIndex(index) // Establece el índice de la imagen seleccionada
    setModalOpen(true) // Abre el modal
    setIsZoomed(false) // Al abrir el modal, inicializamos el estado del zoom en falso
    setShowModalHint(true)
  }

  // Función para manejar el clic en una miniatura
  const handleThumbnailClick = (image, index) => {
    setIsThumbnailClick(true)
    setSelectedImage(image) // Cambia la imagen seleccionada al hacer clic en una miniatura
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index) // Desplaza el slider a la miniatura seleccionada
    }
  }

  // Función para alternar el zoom en la imagen
  const handleZoomToggle = () => {
    if (isMobile) return
    setIsZoomed(!isZoomed) // Cambia el estado de zoom cada vez que se hace clic
  }

  const DEBUG_HINT = true

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const modalImage = (
    <img
      src={images[activeImageIndex]}
      alt={`${modelName}, imagen ${activeImageIndex + 1}`}
      loading="eager"
      decoding="async"
      draggable={false}
      style={{
        width: isMobile ? "100%" : "auto",
        height: isMobile ? "auto" : "90vh",
        maxWidth: "100%",
        maxHeight: "100%",
        transform: isZoomed
          ? isMobile
            ? "scale(1.1)"
            : "scale(1.6)"
          : "scale(1)",
        transition: "transform 0.3s ease",
        objectFit: "contain",
      }}
    />
  )

  return (
    <div ref={galleryRef}>
      {/* Galería deslizable de imágenes grandes */}
      <div className="main-gallery">
        <div
          onClick={() => setShowHint(false)}
          className={`div-click-zoom ${showHint ? "visible" : "hidden"}`}
        >
          <AdsClick />
          <p className="p-div-click-zoom">Click en la imagen para hacer zoom</p>
        </div>
        <div
          className="slider-wrapper"
          onClick={() => setShowHint(false)} // click estándar
          onMouseDown={() => setShowHint(false)} // arranque de drag en desktop
          onTouchStart={() => setShowHint(false)} // arranque de swipe en mobile
        >
          <Slider {...settings} ref={sliderRef}>
            {images.map((img, index) => (
              <div key={index}>
                <button
                  type="button"
                  className="gallery-image-button"
                  aria-label={`Ampliar imagen ${index + 1} de ${modelName}`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={img}
                    alt={`${modelName}, imagen ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "40.625rem",
                      objectFit: "contain",
                      cursor: "zoom-in", // Indica que se puede hacer zoom
                      border: "none", // Asegura que no haya borde
                    }}
                  />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Miniaturas debajo de la galería */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            className="gallery-thumbnail-button"
            aria-label={`Ver imagen ${index + 1} de ${modelName}`}
            aria-pressed={selectedImage === img}
            onClick={() => handleThumbnailClick(img, index)} // Cambia la imagen al hacer clic
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {/* Modal de pantalla completa con zoom */}
      <Modal
        aria-label={`Imágenes de ${modelName}`}
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        size="lg"
        centered
        fullscreen // Esto hace que el modal ocupe el 100% de la pantalla
      >
        <Modal.Body style={{ padding: 0 }}>
          <div
            onClick={() => setShowModalHint(false)}
            onMouseDown={() => setShowModalHint(false)}
            onTouchStart={() => setShowModalHint(false)}
            onTouchMove={() => setShowModalHint(false)}
            onDragStart={() => setShowModalHint(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: isZoomed ? (isMobile ? "100%" : "200%") : "100%",
              width: isZoomed ? (isMobile ? "200%" : "100%") : "100%", // Cambia el ancho solo cuando está en zoom
              cursor: isZoomed ? "grab" : "zoom-in", // Cambiar el cursor dependiendo del zoom
              overflow: "visible", // Permite el desplazamiento sin ocultar el contenido
              transition: "width 0.3s ease", // Suavizar el cambio de tamaño cuando se hace zoom
            }}
          >
            {isMobile && (
              <div
                className={`div-click-zoom ${
                  showModalHint ? "visible" : "hidden"
                }`}
              >
                <Pinch />
                <p className="p-div-click-zoom">
                  Deslizá dos dedos para hacer zoom
                </p>
              </div>
            )}
            {isMobile ? (
              modalImage
            ) : (
              <button
                type="button"
                className="gallery-zoom-button"
                aria-label={`Zoom de la imagen ${activeImageIndex + 1} de ${modelName}`}
                aria-pressed={isZoomed}
                onClick={handleZoomToggle}
              >
                {modalImage}
              </button>
            )}
          </div>
        </Modal.Body>

        {/* Botón para cerrar el modal */}
        <Modal.Footer>
          <div className="div-button">
            <button
              type="button"
              className="button-index gallery-close-button"
              onClick={() => setModalOpen(false)}
            >
              CERRAR
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
