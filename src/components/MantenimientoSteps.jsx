import FadeIn from "./FadeInAnimation";

export default function MantenimientoSteps({
  titulo,
  numero,
  texto,
  imagen,
  alineacion,
}) {
  return (
    <FadeIn>
      <div className="contenedor-mantenimiento fade-section">
        <div
          className={`div-mantenimiento ${
            alineacion === "right" ? "invertido" : ""
          }`}
        >
          {/* Contenedor de textos */}
          <div className="texto-mantenimiento">
            <h5 className={`h-${alineacion} h5-number`}>{numero}</h5>
            <h2 className={`h2-pages h-${alineacion}`}>{titulo}</h2>
            <p className={`p-mantenimiento p-${alineacion}`}>{texto}</p>
          </div>

          {/* Imagen */}
          <img
            className="img-mantenimiento fade-section"
            src={imagen}
            alt={`Paso ${numero}`}
          />
        </div>
      </div>
    </FadeIn>
  );
}
