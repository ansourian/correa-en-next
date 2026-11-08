import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Navbar({ scroll }) {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname?.startsWith(`${path}/`)

  const handleLogoClick = async (e) => {
    e.preventDefault()

    const collapseEl = document.getElementById("navbarNav")
    const isOpen = collapseEl?.classList.contains("show")

    const scrollToTop = () => {
      document.body.scrollTo({ top: 0, behavior: "smooth" })
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (isOpen) {
      const { Collapse } = await import("bootstrap/dist/js/bootstrap")
      const bsCollapse =
        Collapse.getInstance(collapseEl) || new Collapse(collapseEl)
      bsCollapse.hide()
      setTimeout(scrollToTop, 300)
    } else {
      scrollToTop()
    }
  }

  return (
    <nav
      className={`nav-bar sticky-top navbar navbar-expand-lg navbar-dark fade-section ${
        scroll ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler order-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          className="navbar-brand mx-auto order-2 order-lg-1 bg-transparent border-0 p-0"
          onClick={handleLogoClick}
        >
          <img
            className="logo"
            src="/images/logos/logo.png"
            alt="Logo Calzados Correa"
            style={{ pointerEvents: "none" }}
          />
        </button>
        <Link
          href="https://www.instagram.com/calzadoscorrea/"
          target="_blank"
          className="order-3 d-lg-none"
        >
          <img
            className="instagram-nav"
            src="/images/iconos/ig-logo.svg"
            alt="Enlace a Instagram"
          />
        </Link>
        <div
          className="collapse navbar-collapse order-4 w-100 mt-lg-0 d-lg-flex justify-content-between align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className={`nav-link${isActive("/") ? " active" : ""}`} href="/">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${isActive("/modelos") ? " active" : ""}`} href="/modelos">
                MODELOS
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${isActive("/mantenimiento") ? " active" : ""}`} href="/mantenimiento">
                MANTENIMIENTO
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${isActive("/acerca-de") ? " active" : ""}`} href="/acerca-de/nuestra-historia">
                ACERCA DE
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${isActive("/ayuda") ? " active" : ""}`} href="/ayuda">
                AYUDA
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${isActive("/contacto") ? " active" : ""}`} href="/contacto">
                CONTACTO
              </a>
            </li>
          </ul>
          <Link
            href="https://www.instagram.com/calzadoscorrea/"
            target="_blank"
            className="ms-lg-3 d-none d-lg-block"
          >
            <img
              className="instagram-nav"
              src="/images/iconos/ig-logo.svg"
              alt="Enlace a Instagram"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
