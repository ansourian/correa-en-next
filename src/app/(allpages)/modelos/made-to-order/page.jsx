import CatalogoModelos from "@/components/CatalogoModelos"

export const metadata = {
  title: "Made to Order",
  description: "Explorá los modelos Made to Order de Calzados Correa: calzado customizado a pedido. Conocé los estilos y colores del catálogo.",
  alternates: { canonical: "/modelos/made-to-order/" },
}

export default function Modelos() {
  return (
    <CatalogoModelos
      title="Made to Order"
      description="Calzado customizado a pedido."
      categoria="MADE TO ORDER"
    />
  )
}
