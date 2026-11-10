import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import VideoPortada from "./VideoPortada"

export default function HeaderHome() {
  return (
    <div className="div-video-intro">
      <div className="div-bienvenida">
        <div className="div-bienvenida-title">
          <h1 className="h1-index">
            <img
              className="logo-header"
              src="/images/logos/logo-correa-header.png"
              alt="Calzados Correa"
              draggable={false}
              style={{ pointerEvents: "none" }}
            />
          </h1>
          {/* <h2 className="h2-titulo">
            Si querés brillar en la vida, comenzá por tus zapatos.
          </h2> */}
        </div>
        <a id="redirection" href="#section-1" aria-label="Ir al contenido" style={{ flex: 1 }}>
          <KeyboardArrowDown className="flecha-index" aria-hidden="true" />
        </a>
      </div>
      <VideoPortada />
    </div>
  )
}
