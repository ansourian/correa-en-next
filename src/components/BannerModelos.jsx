const navigationMap = {
  "Todos los Modelos": {
    left: "/modelos/cinturones",
    right: "/modelos/ready-to-wear",
  },
  "Ready to Wear": { left: "/modelos/all", right: "/modelos/made-to-order" },
  "Made to Order": {
    left: "/modelos/ready-to-wear",
    right: "/modelos/bespoke",
  },
  Bespoke: { left: "/modelos/made-to-order", right: "/modelos/cinturones" },
  Cinturones: { left: "/modelos/bespoke", right: "/modelos/all" },
}

export default function BannerModelos({ subtitle, title, description }) {
  const navigation = navigationMap[title] || { left: "#", right: "#" }

  return (
    <div className="div-section_pages">
      <h3 className="h3-pages">{subtitle}</h3>
      <div className="slide-styles">
        <a className="button-slide" href={navigation.left}>
          <img
            className="logo-arrow arrow"
            src="/images/arrow.svg"
            alt="Botón para navegar a la izquierda"
          />
        </a>
        <h2 className="h2-pages">{title}</h2>
        <a className="button-slide" href={navigation.right}>
          <img
            className="logo-arrow"
            src="/images/arrow.svg"
            alt="Botón para navegar a la derecha"
          />
        </a>
      </div>
      <hr className="linea-subtitulo" />
      <p className="p-sub">{description}</p>
    </div>
  )
}
