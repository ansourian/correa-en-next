export default function Label({ type, customStyle = {} }) {
  const text = type === "agotado" ? "AGOTADO" : "NUEVO"
  const background = type === "agotado" ? "#363636" : "#dc3545"

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
