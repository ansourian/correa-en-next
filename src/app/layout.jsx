import "bootstrap/dist/css/bootstrap.min.css"
import "@/lib/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollTopButton from "@/components/ScrollTopButton"
import BootstrapClient from "@/components/BootstrapClient"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BootstrapClient />
        <span id="page-top" />
        <Header />
        {children}
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  )
}
