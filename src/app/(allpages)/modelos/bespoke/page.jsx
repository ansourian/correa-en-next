import CatalogoModelos from "@/components/CatalogoModelos"

export const metadata = {
  title: "Bespoke",
  description: "Conocé el calzado Bespoke de Calzados Correa, realizado exclusivamente a medida. Explorá los modelos de nuestro catálogo.",
  alternates: { canonical: "/modelos/bespoke/" },
}

export default function Modelos() {
  return (
    <CatalogoModelos
      title="Bespoke"
      description="Calzado realizado exclusivamente a medida."
      categoria="BESPOKE"
    />
  )
}
