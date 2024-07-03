import Banner from "@/components/Banner";
import React from "react";

export default function Modelos() {
    return (
        <main>
            <Banner title={"Variedad para cada estilo de vida"} subtitle={"NUESTROS ZAPATOS"} description={"Correa estará con vos en cada paso del camino."} />
            <div id="carouselExampleCaptions" className="carousel slide model-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
                </div>
                <div className="carousel-inner carousel-modelos">
                  <a href="/modelos/ready-to-wear" className="carousel-item">
                    <img src="../images/ready to wear car.webp" className="d-block w-100 img-carousel" alt="..." />
                    <div className="carousel-caption">
                      <h4 className="model-titles_car">Ready to Wear</h4>
                      <h5 className="model-subtitles_car">(Listos para usar)</h5>
                    </div>
                  </a>
                  <a href="../pages/made by order.html" className="carousel-item">
                    <img src="../images/made to order car.webp" className="d-block w-100 img-carousel" alt="..." />
                    <div className="carousel-caption">
                      <h4 className="model-titles_car">Made to Order</h4>
                      <h5 className="model-subtitles_car">(Personalizados a pedido)</h5>
                    </div>
                  </a>
                  <a href="../pages/bespoke.html" className="carousel-item active">
                    <img src="../images/bespoke car.webp" className="d-block w-100 img-carousel" alt="..." />
                    <div className="carousel-caption">
                      <h4 className="model-titles_car">Bespoke</h4>
                      <h5 className="model-subtitles_car">(Exclusivos de medida)</h5>
                    </div>
                  </a>
                  <a href="../pages/cinturones.html" className="carousel-item">
                    <img src="../images/cinturones car.webp" className="d-block w-100 img-carousel" alt="..." />
                    <div className="carousel-caption">
                      <h4 className="model-titles_car">Cinturones</h4>
                      <h5 className="model-subtitles_car">(Modelos exclusivos)</h5>
                    </div>
                  </a>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </main>
    );
  }  