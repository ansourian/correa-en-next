import React from "react";
import { modelos } from "@/data/data-modelos";

export default function Modelos({ params }) {
  const { id } = params;
  const modelo = modelos.find((a) => a.id == id);
  const { images } = modelo;

  // Filtra las imágenes válidas (no nulas)
  const validImages = images.filter((image) => image);

  return (
    <>
      {validImages.length > 0 && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-container"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-indicators carousel-models">
            {validImages.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {validImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {validImages.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
      )}
      <div className="contenedor-modelos">
        <div className="div-biografia d-flex">
          <div className="div-img_model">
            <img
              className="img-model"
              id="imagen-modelo"
              alt={`${modelo.name}(${modelo.color})`}
              src={modelo.previewImage}
            />
          </div>
          <div className="div-info_model">
            <h2 className="h2-model">{modelo.name}</h2>
            <h3 className="h3-model">{modelo.class}</h3>
            <div className="row div-model">
              <h4 className="h4-model">Descripción</h4>
              <p className="p-model">{modelo.description}</p>
              <h4 className="h4-model">Tipo de cuero</h4>
              <p className="p-model">{modelo.leather}</p>
              <h4 className="h4-model">Color</h4>
              <p className="p-model">{modelo.color}</p>
              <h4 className="h4-model">Código de Modelo</h4>
              <p className="p-model">{modelo.codigo}</p>
              <p className="aclaracion-colores">
                Calzados 100% plantillados a mano. Nuestros cueros poseen un
                curtido artesanal el cual puede variar sutilmente de tono según
                la partida de producción.
              </p>
              {validImages.length > 1 && (
                <a className="imagenes-button" href="#hr-var_modelos">
                  MÁS IMÁGENES
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {validImages.length > 1 && (
        <>
          <hr id="hr-var_modelos" />
          <section className="container-var">
            {validImages[0] && (
              <img
                id="img1"
                className="img-model_var"
                alt={`${modelo.name}(${modelo.color})`}
                src={validImages[0]}
              />
            )}
            {validImages[1] && (
              <img
                id="img2"
                className="img-model_var"
                alt={`${modelo.name}(${modelo.color})`}
                src={validImages[1]}
              />
            )}
            {validImages[2] && (
              <img
                id="img3"
                className="img-model_var"
                alt={`${modelo.name}(${modelo.color})`}
                src={validImages[2]}
              />
            )}
            {validImages[3] && (
              <img
                id="img4"
                className="img-model_var"
                alt={`${modelo.name}(${modelo.color})`}
                src={validImages[3]}
              />
            )}
          </section>
        </>
      )}
    </>
  );
}
