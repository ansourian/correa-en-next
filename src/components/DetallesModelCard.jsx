import {
  WavesOutlined,
  ColorLensOutlined,
  InsightsOutlined,
  BlurOnOutlined,
  BrushOutlined,
  HandymanOutlined,
  StarOutline,
  Star,
} from "@mui/icons-material"

const config = {
  cuero: {
    icon: WavesOutlined,
    title: "Tipo de cuero",
    field: "leather",
  },
  color: {
    icon: ColorLensOutlined,
    title: "Color",
    field: "color",
  },
  costura: {
    icon: InsightsOutlined,
    title: "Costura",
    field: "sewing",
  },
  estilo: {
    icon: BlurOnOutlined,
    title: "Estilo",
    field: "variant",
  },

  // ESPECIALES
  plantillado: {
    icon: Star,
    title: "Plantillado a mano",
    field: "plantillado",
    fixedValue: "Plantillado a mano",
    special: true,
  },

  patina: {
    icon: Star,
    title: "Pátina",
    field: "patina",
    special: true,
  },
}

export function DetallesModelCard({ detalle, modelo }) {
  const data = config[detalle]

  if (!data || !modelo) return null

  const value = modelo[data.field]

  if (!value || value === "false" || value.trim?.() === "") return null

  const Icon = data.icon

  const finalText = data.fixedValue ?? value

  return (
    <div
      className={`div-detalles-model-individual ${
        data.special ? "card-especial" : ""
      }`}
    >
      <div className="div-detalles-model-individual-title">
        <Icon
          style={{
            color: data.special ? "#e8d7a4" : "#29395c",
            marginRight: "5px",
            width: "20px",
          }}
        />

        <h4
          className={`h4-model ${data.special ? "h4-especial" : ""}`}
        >
          {data.special ? finalText : data.title}
        </h4>
      </div>

      {/* Solo las NORMALES tienen <p> */}
      {!data.special && (
        <p className="p-detalles-model-individual no-margin">
          {value}
        </p>
      )}
    </div>
  )
}
