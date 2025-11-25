import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Navbar({ scroll }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogoClick = (e) => {
    e.preventDefault()

    const collapseEl = document.getElementById("navbarNav")
    const isOpen = collapseEl?.classList.contains("show")

    const scrollToTop = () => {
      document.body.scrollTo({ top: 0, behavior: "smooth" })
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (isOpen) {
      const bsCollapse =
        bootstrap.Collapse.getInstance(collapseEl) ||
        new bootstrap.Collapse(collapseEl)
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
            src="/images/logo.png"
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
            src="/images/ig-logo.svg"
            alt="Enlace a Instagram"
          />
        </Link>
        <div
          className="collapse navbar-collapse order-4 w-100 mt-lg-0 d-lg-flex justify-content-between align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/modelos">
                MODELOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mantenimiento">
                MANTENIMIENTO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/acerca-de/nuestra-historia">
                ACERCA DE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ayuda">
                AYUDA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
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
              src="/images/ig-logo.svg"
              alt="Enlace a Instagram"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
