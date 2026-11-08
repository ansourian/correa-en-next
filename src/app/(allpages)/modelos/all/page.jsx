import CatalogoModelos from "@/components/CatalogoModelos"

export const metadata = {
  title: "Todos los Modelos",
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
