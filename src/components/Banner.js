export default function Banner ({subtitle, title, description}) {
    return (
        <div className="div-section_pages">
            <h3 className="h3-pages">{subtitle}</h3>
            <h2 className="h2-pages">{title}</h2>
            <hr className="linea-subtitulo"/>
            <p className="p-sub">{description}</p>
        </div>
    );
}