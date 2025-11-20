"use client";

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button } from "react-bootstrap"; // Asegúrate de tener react-bootstrap instalado

export default function GaleriaModelos({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar la apertura del modal
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Estado para almacenar el índice de la imagen seleccionada
  const [isZoomed, setIsZoomed] = useState(false); // Estado para controlar el zoom de la imagen
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar si es móvil

  const sliderRef = useRef(null); // Crear una referencia para el slider

  // Detectar si el dispositivo es móvil o no
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px es el límite para considerar un dispositivo móvil
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Configuración del slider para la galería principal (imagen grande)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setSelectedImage(images[next]); // Actualiza la imagen seleccionada cuando el slider cambia
    },
  };

  // Función para manejar el clic en la imagen y abrir el modal
  const handleImageClick = (index) => {
    setActiveImageIndex(index); // Establece el índice de la imagen seleccionada
    setModalOpen(true); // Abre el modal
    setIsZoomed(false); // Al abrir el modal, inicializamos el estado del zoom en falso
  };

  // Función para manejar el clic en una miniatura
  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image); // Cambia la imagen seleccionada al hacer clic en una miniatura
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Desplaza el slider a la miniatura seleccionada
    }
  };

  // Función para alternar el zoom en la imagen
  const handleZoomToggle = () => {
    if (isMobile) return;
    setIsZoomed(!isZoomed); // Cambia el estado de zoom cada vez que se hace clic
  };

  return (
    <div>
      {/* Galería deslizable de imágenes grandes */}
      <div className="main-gallery">
        <Slider {...settings} ref={sliderRef}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Imagen grande ${index + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "650px",
                  objectFit: "contain",
                  cursor: "zoom-in", // Indica que se puede hacer zoom
                  outline: "none", // Evita el outline al hacer clic
                  border: "none", // Asegura que no haya borde
                }}
                onClick={() => handleImageClick(index)} // Al hacer clic en la imagen, abre el modal
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Miniaturas debajo de la galería */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura de la imagen ${index + 1}`}
            style={{
              width: "100px", // Tamaño de las miniaturas
              height: "auto",
              cursor: "pointer",
              margin: "10px",
              border: "2px solid rgb(167 167 167)",
              padding: "5px",
              borderRadius: "10px",
              border:
                selectedImage === img ? "2px solid rgb(167 167 167)" : "none", // Resalta la miniatura seleccionada
            }}
            onClick={() => handleThumbnailClick(img, index)} // Cambia la imagen al hacer clic
          />
        ))}
      </div>

      {/* Modal de pantalla completa con zoom */}
      <Modal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        size="lg"
        centered
        fullscreen // Esto hace que el modal ocupe el 100% de la pantalla
      >
        <Modal.Body style={{ padding: 0 }}>
          <div
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
            <img
              src={images[activeImageIndex]}
              alt={`Imagen a pantalla completa ${activeImageIndex + 1}`}
              draggable="false"
              style={{
                width: isMobile ? "100%" : "auto", // En móvil, usa el 100% de ancho; en web, ajustamos el height
                height: isMobile ? "auto" : "90vh", // En móvil, la imagen tiene un tamaño automático; en web, el height es 90vh
                maxWidth: "100%", // Limitar el ancho máximo
                maxHeight: "100%", // Limitar la altura máxima
                transform: isZoomed
                  ? isMobile
                    ? "scale(1.1)" // Zoom moderado en móvil
                    : "scale(1.6)" // Zoom leve en web
                  : "scale(1)", // Sin zoom
                transition: "transform 0.3s ease", // Transición suave para el zoom
                objectFit: "contain", // Asegura que la imagen mantenga la proporción
              }}
              onClick={handleZoomToggle} // Alternar zoom al hacer clic en la imagen
            />
          </div>
        </Modal.Body>

        {/* Botón para cerrar el modal */}
        <Modal.Footer>
          <div className="div-button" onClick={() => setModalOpen(false)}>
            <a className="button-index">
              CERRAR
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
