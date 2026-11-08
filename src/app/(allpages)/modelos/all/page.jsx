import CatalogoModelos from "@/components/CatalogoModelos"

export const metadata = {
  title: "Todos los Modelos",
  description: "Explorá todos los modelos de Calzados Correa: Ready to Wear, Made to Order y Bespoke. Filtrá por tipo de calzado, color y estilo.",
  alternates: { canonical: "/modelos/all/" },
}

export default function AllModels() {
  return (
    <CatalogoModelos
      title="Todos los Modelos"
      description="Encuentra todos nuestros modelos de zapatos, desde los Ready to Wear hasta los Bespoke."
      showLineaFilter
    />
  )
}
