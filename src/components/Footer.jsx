import "bootstrap/dist/css/bootstrap.min.css"

export default function Footer({}) {
  return (
    <footer>
      <div className="div-footer">
        <div className="div-footer_sociales">
          <h3 className="h3-footer">SOCIALES</h3>
          <div className="div-footer_sociales_content">
            <a
              href="https://www.instagram.com/calzadoscorrea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="instagram-logo"
                src="/images/iconos/Instagram logo.png"
                alt="enlace a instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/CorreaCalzados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="facebook-logo"
                src="/images/iconos/facebook logo.png"
                alt="enlace a facebook"
              />
            </a>
          </div>
        </div>
        {/* <div className="vertical-hr"></div> */}
        <div className="div-footer_modelos">
          <h3 className="h3-footer">MODELOS</h3>
          <div className="div-footer_modelos_content">
            <div className="div-footer_info_contacto">
              <p className="p-footerinfo">
                <a href="/modelos/all" className="p-footerlinks">
                  TODOS LOS MODELOS
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/modelos/ready-to-wear" className="p-footerlinks">
                  READY TO WEAR
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/modelos/made-to-order" className="p-footerlinks">
                  MADE TO ORDER
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/modelos/bespoke" className="p-footerlinks">
                  BESPOKE
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/modelos/cinturones" className="p-footerlinks">
                  CINTURONES
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="div-footer_ayuda">
          <h3 className="h3-footer">AYUDA</h3>
          <div className="div-footer_ayuda_content">
            <div className="div-footer_info_contacto">
              <p className="p-footerinfo">
                <a
                  href="/mantenimiento"
                  className="p-footerlinks"
                >
                  MANTENIMIENTO DEL CALZADO
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/ayuda?open=reparaciones" className="p-footerlinks">
                  REPARACIONES
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/ayuda?open=horarios" className="p-footerlinks">
                  HORARIOS
                </a>
              </p>
              <p className="p-footerinfo">
                <a href="/ayuda?open=medios-de-pago" className="p-footerlinks">
                  MEDIOS DE PAGO
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="vertical-hr2"></div> */}
        <div className="div-footer_contacto">
          <h3 className="h3-footer">CONTACTO</h3>
          <div className="div-footer_contacto_content">
            <div className="div-footer_info_contacto">
              <p className="p-footerinfo">
                Dirección:{" "}
                <a
                  href="https://maps.app.goo.gl/QQyFW4kCHQMVqqv29"
                  target="_blank"
                  className="phone-white"
                >
                  Mario Bravo 750
                </a>
              </p>
              <p className="p-footerinfo">Mail: info@calzadoscorrea.com.ar</p>
              <p className="p-footerinfo">
                Teléfono:{" "}
                <a href="tel:541148617344" className="phone-white">
                  (5411) 4861-7344
                </a>
              </p>{" "}
            </div>
            {/* <div className="footer-maps">
              <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1248428114995!2d-58.41852518255615!3d-34.6010045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca89c1127145%3A0x7c1cd35e3cf9433f!2sCalzados%20Correa!5e0!3m2!1ses!2sar!4v1679619945615!5m2!1ses!2sar"
                width="300"
                height="200"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      <div className="div-copyright row">
        <p className="derechos-reservados">
          © COPYRIGHT 2025 CALZADOS CORREA / WEB CUSTOM & PHOTO PRODUCTION
          DESIGN BY JAIR ANSOURIAN
        </p>
      </div>
    </footer>
  )
}
