export default function HeaderHome() {
  return (
    <div className="div-video-intro">
      <div className="div-bienvenida">
        <div className="div-bienvenida-title">
          <img
            className="logo-header"
            src="/images/logos/logo-correa-header.png"
            alt="Logo Calzados Correa"
            draggable={false}
            style={{ pointerEvents: "none" }}
          />
          <h1 className="h1-index">Calzados Correa</h1>
          {/* <h2 className="h2-titulo">
            Si querés brillar en la vida, comenzá por tus zapatos.
          </h2> */}
        </div>
        <a id="redirection" href="#section-1" style={{ flex: 1 }}>
          <img className="flecha-index" src="/images/iconos/flecha-index.png" />
        </a>
      </div>
      <video
        className="video-index"
        src="/video/mantenimiento.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  )
}
