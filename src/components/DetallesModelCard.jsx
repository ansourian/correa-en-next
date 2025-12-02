import {
  WavesOutlined,
  ColorLensOutlined,
  InsightsOutlined,
  BlurOnOutlined,
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
}

export function DetallesModelCard({ detalle, modelo }) {
  const data = config[detalle]

  if (!data) return null

  const Icon = data.icon
  const value = modelo?.[data.field] || "-"

  return (
    <div className="div-detalles-model-individual">
      <div className="div-detalles-model-individual-title">
        <Icon style={{ color: "#29395c", marginRight: "5px" }} />
        <h4 className="h4-model">{data.title}</h4>
      </div>
      <p className="p-detalles-model-individual no-margin">
        {value}
      </p>
    </div>
  )
}
