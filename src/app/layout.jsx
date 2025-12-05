"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/lib/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")

    const baseTitle = "Calzados Correa"

    const title =
      pathname === "/"
        ? baseTitle
        : pathname === "/modelos/"
        ? `${baseTitle} | Modelos`
        : pathname === "/modelos/all/"
        ? `${baseTitle} | Todos los Modelos`
        : pathname === "/modelos/ready-to-wear/"
        ? `${baseTitle} | Ready to Wear`
        : pathname === "/modelos/made-to-order/"
        ? `${baseTitle} | Made to Order`
        : pathname === "/modelos/bespoke/"
        ? `${baseTitle} | Bespoke`
        : pathname === "/modelos/cinturones/"
        ? `${baseTitle} | Cinturones`
        : pathname === "/mantenimiento/"
        ? `${baseTitle} | Mantenimiento`
        : pathname === "/acerca-de/nuestra-historia/"
        ? `${baseTitle} | Nuestra Historia`
        : pathname === "/ayuda/"
        ? `${baseTitle} | Ayuda`
        : pathname === "/contacto/"
        ? `${baseTitle} | Contacto`
        : baseTitle

    document.title = title
  }, [pathname])
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
