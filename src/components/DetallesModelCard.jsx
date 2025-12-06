import {
  WavesOutlined,
  ColorLensOutlined,
  InsightsOutlined,
  BlurOnOutlined,
  Star,
} from "@mui/icons-material"
import { Tooltip } from "@mui/material"

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

  const isPatina = data.field === "patina"

  const isPatinaPintada =
    typeof value === "string" && value.toLowerCase().includes("pintad")

  const tooltipText = isPatinaPintada
    ? "Aplicación manual de capas de pigmento para lograr tonalidades y efectos personalizados en el cuero."
    : "Proceso artesanal que intensifica el color del cuero, aportando brillo, profundidad y un acabado único e irrepetible."

  const cardContent = (
    <div
      className={`div-detalles-model-individual ${
        data.special ? "card-especial" : ""
      }`}
    >
      <div className="div-detalles-model-individual-title">
        <Icon
          style={{
            color: data.special ? "#fff5d9" : "#29395c",
            marginRight: "5px",
            width: "20px",
          }}
        />

        <h4 className={`h4-model ${data.special ? "h4-especial" : ""}`}>
          {data.special ? finalText : data.title}
        </h4>
      </div>

      {!data.special && (
        <p className="p-detalles-model-individual no-margin">{value}</p>
      )}
    </div>
  )

  return isPatina ? (
    <Tooltip title={tooltipText} arrow>
      {cardContent}
    </Tooltip>
  ) : (
    cardContent
  )
}
