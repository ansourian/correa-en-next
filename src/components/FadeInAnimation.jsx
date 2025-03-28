"use client";
import { useEffect, useState, useRef } from "react";
import "../lib/globals.css";

export default function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-hidden ${isVisible ? "fade-in-visible" : ""}`}>
      {children}
    </div>
  );
}
