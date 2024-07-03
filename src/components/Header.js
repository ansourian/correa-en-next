"use client";
import { useState, useEffect } from "react";

export default function Navbar({}) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav-bar" className={`navbar fixed-top navbar-expand-lg navbar-dark fade-section ${scroll ? "scrolled" : ""}`}>
      <div className="nav-bar container container-nav">
        <button
          id="menuToggle"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:"none"}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a id="redireccion" className="navbar-brand" href="#top">
          <img className="logo" src="./images/logocorrea.png" alt="Logo Calzados Correa" />
        </a>
        <div className="div-socials_mobile">
          <a className="socials" target="_blank" href="https://www.instagram.com/calzadoscorrea/">
            <img className="instagram-nav" href="./images/instagram-svg.svg"></img>
          </a>
        </div>
        <div className="nav-items collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto nav-items">
            <li className="nav-item">
              <a className="nav-link" href="#top">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/acerca-de">ACERCA DE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/modelos">MODELOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </div>
        <div className="div-socials_web">
          <a className="socials" target="_blank" href="https://www.instagram.com/calzadoscorrea/">
          <img className="instagram-nav" src="./images/instagram-svg.svg" alt="Instagram button" />
          </a>
        </div>
      </div>
    </nav>
  );
}