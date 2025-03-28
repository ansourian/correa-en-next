import ButtonVolver from "@/components/ButtonVolver";

export default function RootLayout({ children }) {
  return (
    <main>
      <ButtonVolver />
      {children}
    </main>
  );
}
