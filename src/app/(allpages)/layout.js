import HeaderPages from "@/components/HeaderPages";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderPages />
      {children}
    </>
  );
}
