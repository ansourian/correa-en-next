import FadeIn from "./FadeInAnimation";

export default function MiembroHistoria({
  nombre,
  rol,
  descripcion,
  imagen,
  alineacion = "left",
}) {
  const imagenALaDerecha = alineacion === "right";

  return (
    <FadeIn>
      <div className={imagenALaDerecha ? "contenedor-biografia2" : "contenedor-biografia"}>
        <img
          className={imagenALaDerecha ? "img-biografia_right" : "img-biografia_left"}
          src={imagen}
          alt={`${nombre}, ${rol}`}
        />
        <div className={`${imagenALaDerecha ? "div-biografia2" : "div-biografia"} d-flex`}>
          <h2 className="h2-quienes_somos">{nombre}</h2>
          <h4 className="h4-biografia">{rol}</h4>
          <p className="p-biografia">{descripcion}</p>
        </div>
      </div>
    </FadeIn>
  );
}
