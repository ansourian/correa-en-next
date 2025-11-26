import ButtonVolver from "@/components/ButtonVolver"

export default function RootLayout({ children }) {
  return (
    <>
      <ButtonVolver />
      <main>{children}</main>
    </>
  )
}
