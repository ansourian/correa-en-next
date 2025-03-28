export default function HeaderHome() {
  return (
    <div className="div-video-intro">
      <div className="div-bienvenida">
        <h1 className="h1-index">Calzados Correa</h1>
        <h2 className="h2-titulo">
          Si querés brillar en la vida, comenzá por tus zapatos.
        </h2>
        <a id="redirection" href="#section-1">
          <img className="flecha-index" src="images/flecha.png" />
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
  );
}
