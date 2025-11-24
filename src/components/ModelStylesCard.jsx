import Link from "next/link"

export default function ModelStylesCard({
  imageSrc,
  title,
  subtitle,
  link,
  width = "400px",
  height = "250px",
}) {
  return (
    <Link href={link} passHref className="a-flex">
      <div
        className="clickable-card"
        style={{ width, height, position: "relative" }}
      >
        <img
          className="card-image"
          src={imageSrc}
          alt={title}
          style={{ width: "100%", objectFit: "cover" }}
        />
        <div className="card-overlay">
          <h2 className="card-title">{title}</h2>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      </div>
    </Link>
  )
}
