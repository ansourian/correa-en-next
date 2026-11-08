import ButtonVolver from "@/components/ButtonVolver"

export const metadata = {
  title: {
    default: "Calzados Correa",
    template: "Calzados Correa | %s",
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <ButtonVolver />
      <main>{children}</main>
    </>
  )
}
