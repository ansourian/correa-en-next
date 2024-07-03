export default function BannerModelos ({subtitle, title, description}) {
    return (
        <div className="div-section">
                <h3 className="h3-pages">{subtitle}</h3>
                <div className="slide-styles">
                    <a className="button-slide" href="./cinturones.html"><i className="bi bi-chevron-left"></i></a>
                    <h2 className="h2-pages">{title}</h2>
                    <a className="button-slide" href="./made by order.html"><i className="bi bi-chevron-right"></i></a>
                </div>
                <hr className="linea-subtitulo" />
                <p className="p-sub">{description}</p>
        </div>
    );
}