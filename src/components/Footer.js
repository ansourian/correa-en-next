import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer({}) {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <h3 className='h3-footer'>SOCIALES</h3>
                    <div className="row row-seguinos_ig">
                        <div className="col">
                            <h2 className="h2-footer">Seguinos en</h2>
                        </div>
                        <div className="col">
                            <a href="https://www.instagram.com/calzadoscorrea" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="instagram-logo"
                                    src="/images/Instagram logo.png"
                                    alt="enlace a instagram"
                                />
                            </a>
                        </div>                           
                    </div>
                    <div>
                        <p className="p-footer">Estate atento a todas las novedades a través de nuestro instagram.</p>
                    </div>
                </div>
                <div className="vertical-hr"></div>
                <div className="col">
                    <h3 className='h3-footer'>CONTACTO</h3>
                    <div className="row">
                        <div className="col footer-content">
                            <p className="p-footerinfo">Dirección: Mario Bravo 750</p>
                            <p className="p-footerinfo">Mail: info@calzadoscorrea.com.ar</p>
                            <p className="p-footerinfo">Teléfono: (5411) 4861-7344</p>
                        </div>
                        <div className="col footer-maps">
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
                        </div>
                    </div>
                </div>
                <p className="p-footerinfo_horario">Horario de Atención: Lunes a Viernes de 9hs a 13hs y de 15hs a 19hs / Sábados de 9hs a 13hs</p>
            </div>
            <div className="div-copyright row">
               <p className="derechos-reservados">© COPYRIGHT 2023 CALZADOS CORREA / WEB CUSTOM & PHOTO PRODUCTION DESIGN BY JAIR ANSOURIAN</p>
            </div>
        </footer>
    );
}