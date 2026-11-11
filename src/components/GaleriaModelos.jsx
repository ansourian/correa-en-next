"use client"

import { useState, useRef, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Modal } from "react-bootstrap"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { AdsClick, Pinch } from "@mui/icons-material"
import CloseIcon from "@mui/icons-material/Close"

const PAN_THRESHOLD = 5

export default function GaleriaModelos({ images, modelName = "este modelo" }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const [showModalHint, setShowModalHint] = useState(true)

  const sliderRef = useRef(null)
  const galleryRef = useRef(null)
  const zoomRef = useRef(null)
  const hasPannedRef = useRef(false)
  const panStartRef = useRef(null)
  const isThumbnailClickRef = useRef(false)

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023.98px)")
    const handleViewportChange = () => setIsMobile(mediaQuery.matches)

    handleViewportChange()
    mediaQuery.addEventListener("change", handleViewportChange)

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange)
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    onInit: handleSliderAccessibility,
    onReInit: handleSliderAccessibility,
    beforeChange: (_, next) => {
      setSelectedImageIndex(next)
      if (!isThumbnailClickRef.current) {
        setShowHint(false)
      }
      isThumbnailClickRef.current = false
    },
  }

  const handleImageClick = (index) => {
    setActiveImageIndex(index)
    setModalOpen(true)
    setIsZoomed(false)
    hasPannedRef.current = false
    setShowModalHint(true)
    handleHideHint()
  }

  const handleCloseModal = () => setModalOpen(false)
  const handleHideHint = () => setShowHint(false)
  const handleHideModalHint = () => setShowModalHint(false)

  const handleThumbnailClick = (index) => {
    if (index === selectedImageIndex) return

    isThumbnailClickRef.current = true
    sliderRef.current?.slickGoTo(index)
  }

  const handleModalThumbnailClick = (index) => {
    if (index === activeImageIndex) return

    setActiveImageIndex(index)
    setIsZoomed(false)
    hasPannedRef.current = false
    panStartRef.current = null
    handleThumbnailClick(index)
  }

  const handleZoomToggle = (event) => {
    // El clic posterior a un arrastre no debe restablecer el zoom.
    if (event.detail > 0 && hasPannedRef.current) {
      hasPannedRef.current = false
      return
    }
    if (!zoomRef.current) return

    if (isZoomed) {
      zoomRef.current.resetTransform()
      return
    }
    zoomRef.current.centerView(1.6)
  }

  const handleTransformed = (_, state) => setIsZoomed(state.scale > 1)
  const handlePanningStart = (_, event) => {
    const pointer = event.touches?.[0] || event
    panStartRef.current = { x: pointer.clientX, y: pointer.clientY }
    hasPannedRef.current = false
  }
  const handlePanning = (_, event) => {
    if (!panStartRef.current) return

    const pointer = event.touches?.[0] || event
    const distance = Math.hypot(
      pointer.clientX - panStartRef.current.x,
      pointer.clientY - panStartRef.current.y
    )
    if (distance >= PAN_THRESHOLD) hasPannedRef.current = true
  }

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
      className={`gallery-modal-image${isMobile ? " gallery-modal-image-mobile" : ""}`}
    />
  )

  return (
    <div ref={galleryRef}>
      {/* Galería deslizable de imágenes grandes */}
      <div className="main-gallery">
        <div
          className={`div-click-zoom ${showHint ? "visible" : "hidden"}`}
        >
          <AdsClick />
          <p className="p-div-click-zoom">Click en la imagen para hacer zoom</p>
        </div>
        <div
          className="slider-wrapper"
          onPointerDownCapture={handleHideHint}
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
            aria-pressed={selectedImageIndex === index}
            onClick={() => handleThumbnailClick(index)}
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
        className="model-image-modal"
        aria-label={`Imágenes de ${modelName}`}
        show={modalOpen}
        onHide={handleCloseModal}
        fullscreen
      >
        <Modal.Body className="gallery-modal-body">
          <div
            onPointerDownCapture={handleHideModalHint}
            className="gallery-modal-viewport"
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
            <TransformWrapper
              key={activeImageIndex}
              ref={zoomRef}
              minScale={1}
              maxScale={4}
              wheel={{ disabled: true }}
              doubleClick={{ disabled: true }}
              onTransformed={handleTransformed}
              onPanningStart={handlePanningStart}
              onPanning={handlePanning}
            >
              <TransformComponent
                wrapperClass="gallery-zoom-wrapper"
                contentClass="gallery-zoom-content"
              >
                {isMobile ? modalImage : (
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
              </TransformComponent>
            </TransformWrapper>
          </div>
        </Modal.Body>

        <div className="gallery-modal-thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              className="gallery-thumbnail-button"
              aria-label={`Ver imagen ${index + 1} de ${modelName}`}
              aria-pressed={activeImageIndex === index}
              onClick={() => handleModalThumbnailClick(index)}
            >
              <img src={img} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>

        {/* Botón para cerrar el modal */}
        <button
          type="button"
          className="volver-button gallery-close-button"
          aria-label="Cerrar imagen"
          title="Cerrar imagen"
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </button>
      </Modal>
    </div>
  )
}
