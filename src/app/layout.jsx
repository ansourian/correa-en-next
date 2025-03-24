"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/lib/globals.css";
import Header from "@/components/Header";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
