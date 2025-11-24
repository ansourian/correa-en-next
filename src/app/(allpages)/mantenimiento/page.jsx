/* eslint-disable react/no-unescaped-entities */

import Banner from "@/components/Banner";
import FadeIn from "@/components/FadeInAnimation";
import MantenimientoSteps from "@/components/MantenimientoSteps";
import React from "react";

export default function Mantenimiento() {
  return (
    <>
      <Banner
        title={"Métodos para un tratamiento adecuado del calzado"}
        subtitle={"MANTENIMIENTO"}
        description={
          "En esta sección podrás aprender todo sobre el mantenimiento adecuado para tu calzado."
        }
      />
      <hr className="hr-custom" />
      <MantenimientoSteps
        titulo="Limpieza de polvo y tierra"
        numero="1"
        texto="Se busca que el calzado quede libre de particulas que puedan adherirse al paño o a la crema y por consecuente, rayar el calzado. Finalizarlo con un cepillado con cerda de caballo o en su defecto limpiar el zapato con un trapo de algodón seco para corroborar que la piel quede completamente limpia."
        imagen="/images/paso1.webp"
        alineacion="left"
      />
      <hr className="hr-custom" />
      <MantenimientoSteps
        titulo="Selección de producto a aplicar"
        numero="2"
        texto="Si el zapato se encuentra muy seco, la utilización de cremas es la óptima. Como primer mano puede ser un renovador de cueros o una crema/pomada hidratante de color (si se considera que el zapato está decolorado) o en su defecto, una crema incolora. Entre 2 y 4 manos bien absorbidas, aplicando de a pizcas del tamaño de una yema de dedo."
        imagen="/images/paso2.webp"
        alineacion="right"
      />
      <hr className="hr-custom" />
      <MantenimientoSteps
        titulo="Aplicación de ceras"
        numero="3"
        texto="Para seleccionar la cera ideal se debe tener en cuenta que se puede elegir una cera con un pigmento más claro o uno más oscuro ya que estos no aplican tanta coloración, pero al utilizarse varias capas del mismo, se puede alterar el tono del calzado a gusto y propósito. Luego dejar secar 5 minutos al finalizar."
        imagen="/images/paso3.webp"
        alineacion="left"
      />
      <hr className="hr-custom" />
      <MantenimientoSteps
        titulo="Cepillado"
        numero="4"
        texto="Cepillar con cerda de caballo, o en su defecto, con un trapo de algodón seco. Si opta por utilizar el trapo, puede verter una gota de agua sobre el calzado para activar el producto y que de esa forma tome aún más brillo."
        imagen="/images/paso4.webp"
        alineacion="right"
      />
      <hr className="hr-custom" />
      <FadeIn>
        <Banner
          title={"Marcas de productos recomendadas"}
          subtitle={"ASESORAMIENTO"}
          description={
            "Te ofrecemos recomendaciones para cremas y ceras tanto nacionales como internacionales."
          }
        />
      </FadeIn>
      <hr className="hr-custom" />
      <FadeIn>
        <div className="contenedor-recomendaciones">
          <div className="div-recomendaciones">
            <h2 className="h2-pages">Para cremas</h2>
            <div>
              <p className="p-recomendaciones">
                ● Tintaló (Industria Argentina)
              </p>
              <p className="p-recomendaciones">
                ● Saphir Médaille d'Or (Industria Francesa)
              </p>
              <p className="p-recomendaciones">
                ● Boot Black (Industria Japonesa)
              </p>
            </div>
          </div>
          <div className="div-recomendaciones">
            <h2 className="h2-pages">Para ceras</h2>
            <div>
              <p className="p-recomendaciones">
                ● Saphir Médaille d'Or (Industria Francesa)
              </p>
              <p className="p-recomendaciones">
                ● Wassington Premium (Industria Argentina)
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <img className="img-recomendaciones" src="/images/saphir.webp" />
      </FadeIn>
    </>
  );
}
