import InfoIcon from "@mui/icons-material/Info";

// Componente para mostrar un mensaje personalizado
export function AnuncioInfo({ texto }) {
  return (
    <div className="div-anuncio_card">
      <InfoIcon className="icon-anuncio_card" />
      <p className="p-anuncio_card">{texto}</p>
    </div>
  );
}

// Componente para mostrar apertura/cierre del local
export function AnuncioApertura({ dia, apertura }) {
  const estado = apertura === "cerrado" ? "cerrado" : "abierto";
  const style = { color: apertura === "cerrado" ? "red" : "green" };

  return (
    <div className="div-anuncio_card">
      <InfoIcon className="icon-anuncio_card" />
      <p className="p-anuncio_card">
        Hoy {dia} el local permanecerá <span style={style}>{estado}</span>.
      </p>
    </div>
  );
}

export function AnuncioMultiFeriado({ dias = [], vuelta }) {
  if (dias.length < 2) {
    console.error("Debes proporcionar al menos 2 días de cierre.");
    return null;
  }

  const ultimoDia = dias.pop();
  const textoFechas = dias.length ? `${dias.join(", ")} y ${ultimoDia}` : ultimoDia;

  return (
    <div className="div-anuncio_card">
      <InfoIcon className="icon-anuncio_card" />
      <p className="p-anuncio_card">
        Estaremos cerrados los días {textoFechas}. Retomamos la atención el día {vuelta}.
      </p>
    </div>
  );
}