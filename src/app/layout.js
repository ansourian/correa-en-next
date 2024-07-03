"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/lib/globals.css";
import Footer from "@/components/Footer";
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
