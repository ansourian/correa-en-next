export default function Label({ type, customStyle = {} }) {
  const config = {
    agotado: {
      text: "AGOTADO",
      background: "#363636", // gris oscuro
    },
    nuevo: {
      text: "NUEVO",
      background: "#dc3545", // rojo
    },
    encargo: {
      text: "POR ENCARGO",
      background: "#000000", // negro
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
