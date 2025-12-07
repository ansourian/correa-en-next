import Banner from "@/components/Banner";
import FadeIn from "@/components/FadeInAnimation";
import ModelStylesCard from "@/components/ModelStylesCard";
import React from "react";

export default function Modelos() {
  return (
    <>
      <Banner
        title={"Variedad para cada estilo de vida"}
        subtitle={"NUESTROS ZAPATOS"}
        description={"Correa estará con vos en cada paso del camino."}
      />
      <hr className="hr-custom" />
      <FadeIn>
        <div className="div-modelos">
          <div
            id="carouselExampleCaptions"
            className="carousel slide model-carousel"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
                className=""
              ></button>
            </div>
            <div className="carousel-inner carousel-modelos">
              <a href="/modelos/all" className="carousel-item active">
                <img
                  src="../images/carousel/all-models car.webp"
                  className="d-block w-100 img-carousel"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h4 className="model-titles_car">Todos los modelos</h4>
                  <h5 className="model-subtitles_car">
                    (Modelos Ready to Wear, Made to Order y Bespoke)
                  </h5>
                </div>
              </a>
              <a href="/modelos/ready-to-wear" className="carousel-item">
                <img
                  src="../images/carousel/ready to wear car.webp"
                  className="d-block w-100 img-carousel"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h4 className="model-titles_car">Ready to Wear</h4>
                  <h5 className="model-subtitles_car">(Listos para usar)</h5>
                </div>
              </a>
              <a href="/modelos/made-to-order" className="carousel-item">
                <img
                  src="../images/carousel/made to order car.webp"
                  className="d-block w-100 img-carousel"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h4 className="model-titles_car">Made to Order</h4>
                  <h5 className="model-subtitles_car">
                    (Personalizados a pedido)
                  </h5>
                </div>
              </a>
              <a href="/modelos/bespoke" className="carousel-item">
                <img
                  src="../images/carousel/bespoke car.webp"
                  className="d-block w-100 img-carousel"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h4 className="model-titles_car">Bespoke</h4>
                  <h5 className="model-subtitles_car">
                    (Exclusivos de medida)
                  </h5>
                </div>
              </a>
              <a href="/modelos/cinturones" className="carousel-item">
                <img
                  src="../images/carousel/cinturones car.webp"
                  className="d-block w-100 img-carousel"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h4 className="model-titles_car">Cinturones</h4>
                  <h5 className="model-subtitles_car">(Modelos exclusivos)</h5>
                </div>
              </a>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
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
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <section className="contenedor-tipo_modelos fade-section">
            <ModelStylesCard
              imageSrc="/images/carousel/Ready to Wear.webp"
              title="Modelos Ready to Wear"
              subtitle="(Modelos Listos para usar)"
              link="/modelos/ready-to-wear"
              width={"18vw"}
              height={"10vw"}
            />
            <ModelStylesCard
              imageSrc="/images/carousel/Made to Order.webp"
              title="Modelos Made to Order"
              subtitle="(Personalizados a pedido)"
              link="/modelos/made-to-order"
              width={"18vw"}
              height={"10vw"}
            />
            <ModelStylesCard
              imageSrc="/images/carousel/Bespoke.webp"
              title="Modelos Bespoke"
              subtitle="(Exclusivos de medida)"
              link="/modelos/bespoke"
              width={"18vw"}
              height={"10vw"}
            />
            <ModelStylesCard
              imageSrc="/images/carousel/cinturones.webp"
              title="Cinturones"
              subtitle="(Modelos exclusivos)"
              link="/modelos/cinturones"
              width={"18vw"}
              height={"10vw"}
            />
          </section>
        </div>
      </FadeIn>
      <hr className="hr-custom" />
      <FadeIn>
        <section className="container-info_modelos fade-section">
          <article className="informacion-pantalla_modelos">
            <h4 className="h4-modelos">PRUEBA</h4>
            <p className="p-info_modelos">
              La prueba consiste en tomar de nuestros clientes las medidas
              exactas para la fabricación a medida de su calzado. Altura,
              anchura y demás caracteristicas proyectan el futuro producto. Aquí
              es donde nuestro servicio está por sobre todo lo conocido. Como
              las mejores casas del mundo.
            </p>
          </article>
          <article className="informacion-pantalla_modelos">
            <h4 className="h4-modelos">ELECCIÓN DE MATERIALES</h4>
            <p className="p-info_modelos">
              Es fundamental la elección de los materiales. Cueros Seleccionados
              y Materiales de calidad Premium confeccionan nuestros calzados. En
              nuestro Showroom podrá disfrutar además de un ambiente ameno,
              cordial y con aires de antaño, gran cantidad de pies exhibidos
              en nuestras vidrieras. Para los que se atrevan a más, existen
              líneas Trendy que combinan los diseños clásicos con colores de
              Tendencia.
            </p>
          </article>
          <article className="informacion-pantalla_modelos">
            <h4 className="h4-modelos">PERSONALIZACIÓN</h4>
            <p className="p-info_modelos">
              Cada cliente es especial para nosotros. En el caso que asi lo
              requiera se confeccionarán los zapatos de manera personalizada.
              Tambien contamos con modelos Bespoke, que involucran de lleno a
              nuestros artesanos más experimentados, para desarrollar desde un
              principio confecciones exclusivas, e incorporar en su final
              acabados de lujo y detalles notables a la hora de coronar otra
              obra maestra de la casa.
            </p>
          </article>
          <article className="informacion-pantalla_modelos">
            <h4 className="h4-modelos">SERVICIO POST-VENTA</h4>
            <p className="p-info_modelos">
              Reparamos y mantenemos intactos a través del tiempo nuestros
              productos. Los zapatos que se llevan los clientes pertenecen de
              alguna manera a Correa. Solo reparamos los zapatos que se
              adquieren en nuestros locales. Aquellos amantes del buen vestir y
              de la elegancia, al arribar al local ubicado en Mario Bravo al
              750, no dejan de sorprenderse al descubrir el tratamiento y la
              confección íntegramente manual y personalizada en el calzado.
            </p>
          </article>
        </section>
      </FadeIn>
    </>
  );
}
