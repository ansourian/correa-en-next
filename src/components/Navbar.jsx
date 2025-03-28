import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import LogoInstagram from "@/assets/img/ig-logo.svg";
import Link from "next/link";

export function Navbar({ scroll }) {
  return (
    <nav
      className={`nav-bar sticky-top navbar navbar-expand-lg navbar-dark fade-section ${
        scroll ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        {/* Mobile: Botón Hamburguesa (izquierda) */}
        <button
          className="navbar-toggler order-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo (Centro en Mobile, Izquierda en Desktop) */}
        <a className="navbar-brand mx-auto order-2 order-lg-1" href="#top">
          <Image
            width={190}
            height={50}
            className="logo"
            src={Logo}
            alt="Logo Calzados Correa"
          />
        </a>

        {/* Instagram (Mobile) - Visible solo en mobile */}
        <Link
          href="https://www.instagram.com/calzadoscorrea/"
          target="_blank"
          className="order-3 d-lg-none"
        >
          <Image width={20} height={20} className="mx-3" src={LogoInstagram} />
        </Link>

        {/* Menú + Instagram Desktop */}
        <div className="collapse navbar-collapse order-4 w-100 mt-lg-0 d-lg-flex justify-content-between align-items-center" id="navbarNav">
          {/* Menú (Centrado en Desktop) */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="/">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/modelos">MODELOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mantenimiento">MANTENIMIENTO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/acerca-de">ACERCA DE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ayuda">AYUDA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">CONTACTO</a>
            </li>
          </ul>

          {/* Instagram (Desktop) - Visible solo en desktop */}
          <Link
            href="https://www.instagram.com/calzadoscorrea/"
            target="_blank"
            className="ms-lg-3 d-none d-lg-block"
          >
            <Image width={20} height={20} className="mx-3" src={LogoInstagram} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
