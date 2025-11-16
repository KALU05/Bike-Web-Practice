import React, { useState, useEffect } from "react";
import "./navbar.css";
const BREAKPOINT = 768; // ancho en px que consideramos "desktop"

export default function Navbar() {
  // Inicializa según el ancho actual (protección para SSR)
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= BREAKPOINT;
    }
    return true; // fallback en server
  });

  // Escucha cambios de tamaño: si llegamos a desktop forzamos `isOpen = true`
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= BREAKPOINT) {
        setIsOpen(true);
      }
      // Opcional: si quieres que al pasar a mobile se cierre automáticamente:
      else setIsOpen(false);
    }

    window.addEventListener("resize", handleResize);
    // Llamada inicial por si la ventana cambió antes de montar
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      {/* Botón de toggle visible sólo en móvil mediante CSS */}
      <button
        className="navbar__toggle"
        aria-expanded={isOpen}
        aria-controls="main-nav"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Navegación principal; su visibilidad depende de isOpen */}
      <nav
        id="main-nav"
        className={`navbar__menu ${isOpen ? "is-open" : "is-closed"}`}
      >
        <a href="/">Inicio</a>
        <a href="/about">Acerca</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
  );
}
