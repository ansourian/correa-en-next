import CatalogoModelos from "@/components/CatalogoModelos"

export const metadata = {
  title: "Ready to Wear",
  description: "Conocé los modelos Ready to Wear de Calzados Correa: calzado estándar listo para vestir. Explorá sus colores y estilos.",
  alternates: { canonical: "/modelos/ready-to-wear/" },
}

export default function Modelos() {
  return (
    <CatalogoModelos
      title="Ready to Wear"
      description="Calzado estándar listo para vestir."
      categoria="READY TO WEAR"
    />
  )
}
