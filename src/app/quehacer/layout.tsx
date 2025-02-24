import type {Metadata} from "next";
import "../globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "QUE HACER - Escapate a San Carlos",
    description: "Descubre las mejores playas, hoteles, restaurantes y aventuras en San Carlos, Sonora. Encuentra dónde hospedarte, qué comer y qué hacer en este paraíso turístico. ¡Planifica tu viaje hoy!",
};

export default function QueHacerLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <section className={""}>{children}</section>
    )
}