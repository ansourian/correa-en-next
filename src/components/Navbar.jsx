import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import LogoInstagram from "@/assets/img/ig-logo.svg";
import Link from "next/link";

export function Navbar({ scroll }) {
  return (
    <>
      <nav
        className={`nav-bar sticky-top navbar-expand-lg navbar-dark fade-section ${
          scroll ? "scrolled" : ""
        }`}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#top">
          <Image
            width={190}
            height={50}
            className="logo"
            src={Logo}
            alt="Logo Calzados Correa"
          />
        </a>
        <div className="nav-items collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto nav-items">
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
              <a className="nav-link" href="/acerca-de">
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
        </div>
        <Link href="https://www.instagram.com/calzadoscorrea/" target="_blank">
          <Image width={20} height={20} style={{marginInline: 25}} src={LogoInstagram}>
          </Image>
        </Link>
      </nav>
    </>
  );
}
