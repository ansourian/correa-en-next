import React from "react";
import Banner from "@/components/Banner";
import { modelos } from "@/data/data-modelos";

export default function Modelos({ params }) {
  const { id } = params;
  const modelo = modelos.find((a) => a.id == id);
  return (
    <main>
      <Banner
        title={"Variedad para cada estilo de vida"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Correa estará con vos en cada paso del camino."}
      />
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-container"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-pages carousel-indicators carousel-indicators2 carousel-models">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item2 carousel-item active">
            <img src="" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousel-item2">
            <img src="" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousel-item2">
            <img src="" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousel-item2">
            <img src="" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon carousel-control-prev-icon2"
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
            className="carousel-control-next-icon carousel-control-prev-icon2"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="contenedor-modelos">
        <div className="div-biografia d-flex">
          <img
            className="img-model"
            id="imagen-modelo"
            src=""
            alt="modelo ready to wear"
          />
          <div>
            <h2 className="h2-model">
              Titulo del Producto
            </h2>
            <h3 className="h3-model" id="estilo-modelo">
              Estilo del Producto
            </h3>
            <div className="row div-model">
              <h4 className="h4-model">Descripción</h4>
              <p className="p-model" id="descripcion-modelo">
                Descripción del producto.
              </p>
              <h4 className="h4-model">Tipo de cuero</h4>
              <p className="p-model" id="cuero-modelo"></p>
              <h4 className="h4-model">Color</h4>
              <p className="p-model" id="color-modelo"></p>
              <h4 className="h4-model">Código de Modelo</h4>
              <p className="p-model" id="codigo-modelo"></p>
              <div id="div-precio_modelo">
                <h4 className="h4-model">Precio</h4>
                <p className="p-price" id="precio-modelo"></p>
              </div>
              <p className="aclaracion-colores">
                Calzados 100% plantillados a mano. Nuestros cueros poseen un
                curtido artesanal el cual puede variar sutilmente de tono según
                la partida de producción.
              </p>
              <a className="imagenes-button" href="#hr-var_modelos">
                MÁS IMÁGENES
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr id="hr-var_modelos" />
      <section className="container-var">
        <img id="img1" className="img-model_var" src="" alt="" />
        <img id="img2" className="img-model_var" src="" alt="" />
        <img id="img3" className="img-model_var" src="" alt="" />
        <img id="img4" className="img-model_var" src="" alt="" />
      </section>
    </main>
  );
}
