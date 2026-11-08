import { modelos } from "@/data/data-modelos"

export const dynamic = "force-static"

export default function sitemap() {
  const routes = [
    "/",
    "/modelos/",
    "/modelos/all/",
    "/modelos/ready-to-wear/",
    "/modelos/made-to-order/",
    "/modelos/bespoke/",
    "/modelos/cinturones/",
    "/acerca-de/",
    "/acerca-de/nuestra-historia/",
    "/mantenimiento/",
    "/ayuda/",
    "/contacto/",
    ...modelos.map((modelo) => `/modelos/${encodeURIComponent(modelo.id)}/`),
  ]

  return routes.map((route) => ({ url: `https://calzadoscorrea.com.ar${route}` }))
}
