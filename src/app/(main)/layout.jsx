export const metadata = {
  title: "Calzados Correa",
  description: "Calzados hechos a mano de Buenos Aires, desde 1955. Servicio personalizado por sus propios dueños. Conocé nuestros modelos y nuestra historia.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <main>
        {children}
    </main>
  );
}
