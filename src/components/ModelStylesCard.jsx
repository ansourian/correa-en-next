import Image from "next/image";
import Link from "next/link";

export default function ModelStylesCard({ 
  imageSrc, 
  title, 
  subtitle, 
  link, 
  width = "400px",
  height = "250px"
}) {
  return (
    <Link href={link} passHref className="a-flex">
      <div className="clickable-card" style={{ width, height, position: "relative" }}>
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="card-image"
        />
        <div className="card-overlay">
          <h2 className="card-title">{title}</h2>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      </div>
    </Link>
  );
}
