export default function Label({ type, customStyle = {} }) {
  const config = {
    agotado: {
      text: "AGOTADO",
      background: "#363636",
    },
    nuevo: {
      text: "NUEVO",
      background: "#dc3545",
    },
    encargo: {
      text: "POR ENCARGO",
      background: "#000000",
    },
    favorito: {
      text: "MÁS ELEGIDO",
      background: "#ff9e01",
    },
  }

  // Si el type no existe, usa uno por defecto:
  const { text, background } = config[type] || {
    text: "LABEL",
    background: "#666",
  }

  return (
    <span
      className="default-label"
      style={{
        top: "10%",
        left: "10%",
        backgroundColor: background,
        ...customStyle,
      }}
    >
      {text}
    </span>
  )
}
