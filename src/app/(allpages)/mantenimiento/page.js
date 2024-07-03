import Banner from "@/components/Banner";
import React from "react";

export default function Mantenimiento() {
    return (
        <main>
            <Banner title={"Métodos para un tratamiento adecuado del calzado"} subtitle={"MANTENIMIENTO"} description={"En esta sección podrás aprender todo sobre el mantenimiento adecuado para tu calzado."} />
            <hr/>
            <div className="contenedor-mantenimiento fade-section">
                <h5 className="h5-left">Limpieza de polvo y tierra</h5>
                <div className="div-mantenimiento d-flex">
                    <h5 className="h5-number">1</h5>
                    <p className="p-mantenimiento">Se busca que el calzado quede libre de particulas que puedan adherirse al paño o a la crema y por consecuente, rayar el calzado. Finalizarlo con un cepillado con cerda de caballo o en su defecto limpiar el zapato con un trapo de algodón seco para corroborar que la piel quede completamente limpia.</p>
                </div>
            </div>
            <img className="img-mantenimiento fade-section" src="/images/paso1.webp"/>
            <hr/>
            <div className="contenedor-mantenimiento fade-section">
                <h5 className="h5-right">Selección de producto a aplicar</h5>
                <div className="div-mantenimiento d-flex">
                    <div className="contenedor-aclaracion">
                        <p className="p-mantenimiento">Si el zapato se encuentra muy seco, la utilización de cremas es la óptima. Como primer mano puede ser un renovador de cueros o una crema/pomada hidratante de color (si se considera que el zapato está decolorado) o en su defecto, una crema incolora. Entre 2 y 4 manos bien absorbidas, aplicando de a pizcas del tamaño de una yema de dedo.</p>
                        <p className="p-aclaracion">Aclaración: pueden utilizarse distintos pigmentos a lo largo del proceso en caso de requerirlo. Tambien se debe aplicar crema sobre los costados de las suelas y entre la suela y la capellada*.</p>
                    </div>
                    <h5 className="h5-number">2</h5>
                </div>
            </div>
            <img className="img-mantenimiento fade-section" src="/images/paso2.webp"/>
            <hr/>
            <div className="contenedor-mantenimiento fade-section">
                <h5 className="h5-left">Aplicación de ceras</h5>
                <div className="div-mantenimiento d-flex">
                    <h5 className="h5-number">3</h5>
                    <p className="p-mantenimiento">Para seleccionar la cera ideal se debe tener en cuenta que se puede elegir una cera con un pigmento más claro o uno más oscuro ya que estos no aplican tanta coloración, pero al utilizarse varias capas del mismo, se puede alterar el tono del calzado a gusto y propósito. Luego dejar secar 5 minutos al finalizar.</p>
                </div>
            </div>
            <img className="img-mantenimiento fade-section" src="/images/paso3.webp"/>
            <hr/>
            <div className="contenedor-mantenimiento fade-section">
                <h5 className="h5-right">Cepillado</h5>
                <div className="div-mantenimiento d-flex">
                    <div className="contenedor-aclaracion row">
                        <p className="p-mantenimiento">Cepillar con cerda de caballo, o en su defecto, con un trapo de algodón seco. Si opta por utilizar el trapo, puede verter una gota de agua sobre el calzado para activar el producto y que de esa forma tome aún más brillo.</p>
                        <p className="p-aclaracion">Aclaración: en caso de utilizar un cepillo de cerda, hágalo en seco.</p>
                    </div>
                    <h5 className="h5-number">4</h5>
                </div>
            </div>
            <img className="img-mantenimiento fade-section" src="/images/paso4.webp"/>
            <hr/>
            <div className="div-section fade-section">
                <h3>ASESORAMIENTO</h3>
                <h2>Marcas de productos recomendadas</h2>
                <hr className="linea-subtitulo"/>
                <p className="p-sub"> Te ofrecemos recomendaciones para cremas y ceras tanto nacionales como internacionales.</p>
            </div>
            <hr/>
            <div className="slide-styles">
                <div className="contenedor-recomendaciones fade-section visible">
                    <h5 className="h5-recomendaciones">Para cremas</h5>
                    <p className="p-recomendaciones">■ Tintaló (Industria Argentina)</p>
                    <p className="p-recomendaciones">■ Saphir Médaille d'Or (Industria Francesa)</p>
                    <p className="p-recomendaciones">■ Boot Black (Industria Japonesa)</p>
                </div>
                <div className="contenedor-recomendaciones fade-section visible">
                    <h5 className="h5-recomendaciones">Para ceras</h5>
                    <p className="p-recomendaciones">■ Saphir Médaille d'Or (Industria Francesa)</p>
                    <p className="p-recomendaciones">■ Wassington Premium (Industria Argentina)</p>
                </div>
            </div>
            <img className="img-recomendaciones fade-section" src="/images/saphir.webp"/>
        </main>
    );
  }  