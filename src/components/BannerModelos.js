import Image from "next/image";
import Arrow from "@/assets/img/arrow.svg";

const navigationMap = {
  "Ready to Wear": { left: "/modelos/cinturones", right: "/modelos/made-to-order" },
  "Made to Order": { left: "/modelos/ready-to-wear", right: "/modelos/bespoke" },
  "Bespoke": { left: "/modelos/made-to-order", right: "/modelos/cinturones" },
  "Cinturones": { left: "/modelos/bespoke", right: "/modelos/ready-to-wear" },
};

export default function BannerModelos({ subtitle, title, description }) {
  const navigation = navigationMap[title] || { left: "#", right: "#" };

  return (
    <div className="div-section">
      <h3 className="h3-pages">{subtitle}</h3>
      <div className="slide-styles">
        <a className="button-slide" href={navigation.left}>
          <Image
            width={30}
            className="logo-arrow arrow"
            src={Arrow}
            alt="Botón para navegar a la izquierda"
          />
        </a>
        <h2 className="h2-pages">{title}</h2>
        <a className="button-slide" href={navigation.right}>
          <Image
            width={30}
            className="logo-arrow"
            src={Arrow}
            alt="Botón para navegar a la derecha"
          />
        </a>
      </div>
      <hr className="linea-subtitulo" />
      <p className="p-sub">{description}</p>
    </div>
  );
}
