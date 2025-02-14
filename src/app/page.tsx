import bg from "../../public/images/mainfondo.webp";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
      <>
          <main className="relative w-full min-h-screen overflow-x-hidden">
              {/* Imagen optimizada */}
              <Image
                  src={bg}
                  alt="Fondo"
                  layout="fill"
                  objectFit="cover"
                  priority // Carga optimizada
                  quality={90} // Ajusta calidad si es necesario
              />

              {/* Contenido */}
              <div className="relative z-10">
                  <Navbar/>
                  <Hero/>
              </div>
          </main>
      </>
  );
}




