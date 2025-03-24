import Banner from "@/components/Banner";
import Image from "next/image";

export default function NuestroTrabajo() {
  return (
    <>
      <Banner
        title={"Nuestro trabajo"}
        subtitle={"CALZADOS CORREA"}
        description={
          "Conoce un poco más sobre nuestro oficio y el proceso de trabajo."
        }
      />
        <hr className="hr-custom" />
        <section className="section-trabajo">
          <section className="section-nuestro_trabajo_reverse">
            <div className="div-nuestro_trabajo">
              <h2 className="h2-pages fade-section">
                Todos nuestros calzados están fabricados en cuero vacuno
              </h2>
              <p className="p-nuestro_trabajo fade-section">
                En nuestro compromiso por ofrecer calzado de la más alta
                calidad, utilizamos exclusivamente cuero vacuno en todos
                nuestros modelos. Este material, conocido por su durabilidad y
                resistencia, garantiza que cada par de zapatos que producimos
                sea robusto y elegante a la vez.
              </p>
            </div>
            <div className="div-nuestro_trabajo">
              <Image
                className="img-nuestro_trabajo fade-section"
                src="/images/cueros.webp"
                alt="Cueros"
                width={500}
                height={300}
              />
            </div>
          </section>
          <section className="section-nuestro_trabajo">
            <div className="div-nuestro_trabajo">
              <h2 className="h2-pages fade-section">
                Calzados plantillados 100% a mano por nuestros artesanos.
              </h2>
              <p className="p-nuestro_trabajo fade-section">
                No vendemos fantasía. Cada par de nuestros calzados es
                plantillado a mano con precisión, asegurando un ajuste perfecto
                y una comodidad excepcional en cada paso.
              </p>
            </div>
            <div className="div-nuestro_trabajo">
              <Image
                className="img-nuestro_trabajo fade-section"
                src="/images/plantillado.webp"
                alt="Plantillado"
                width={500}
                height={300}
              />
            </div>
          </section>
          <section className="section-nuestro_trabajo_reverse">
            <div className="div-nuestro_trabajo">
              <h2 className="h2-pages fade-section">
                Descubre nuestra amplia gama de modelos, cueros y colores
              </h2>
              <p className="p-nuestro_trabajo fade-section">
                Descubre una variedad infinita de modelos, cueros y colores que
                te permitirán elegir el calzado perfecto que se adapte a tu
                estilo único y preferencias personales.
              </p>
            </div>
            <div className="div-nuestro_trabajo">
              <Image
                className="img-nuestro_trabajo fade-section"
                src="/images/colores.webp"
                alt="Colores"
                width={500}
                height={300}
              />
            </div>
          </section>
        </section>
    </>
  );
}
