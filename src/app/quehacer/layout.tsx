"use client"

import Image from "next/image";
import bg from "../../../public/images/sunrise.jpg";
import Navbar from "@/components/own/Navbar";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useActivities} from "@/hooks/useActivities";
import { SWRConfig } from "swr";

const categories = [
    {label : "Todos", slug: ""},
    {label : "Aire libre", slug: "aire-libre"},
    {label : "Aventura", slug: "aventura"},
    {label : "En familia", slug: "familia"},
    {label : "Noche", slug: "noche"},
    {label : "Eventos", slug: "eventos"},
    {label : "Gastronomía", slug: "gastronomia"}
]

export default function QueHacerLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const { actividades, error } = useActivities();

    return (
        <SWRConfig value={{ fallback: { "http://localhost:8080/api/actividades": actividades } }}>
            <div className={"relative w-screen min-h-[40vh] overflow-x-hidden"}>
                <Image
                    className={"fixed saturate-50 "}
                    src={bg.src}
                    alt="Fondo"
                    layout="fill"
                    objectFit="cover"
                    priority // Carga optimizada
                    quality={90} // Ajusta calidad si es necesario
                />
                <div className="relative z-10 lg:w-[80vw] h-[30vh] container mx-auto mt-40 lg:mt-12 ">
                    <Navbar defaultBackground={false} mainColor="#f2f2f2"/>
                    <article
                        className={"mt-32 container mx-auto flex flex-col items-start justify-end pb-6 h-full font-medium text-white font-karla italic"}>
                        <h1 className={"text-5xl font-bold not-italic mb-3"}>Qué hacer</h1>
                        <p className={"text-3xl"}>Encuentra tu próxima aventura ordenada por categorías</p>
                        <div className={"flex gap-2 flex-wrap mt-2 px-2 md:px-0"}>
                            {categories.map(({label, slug}) => {
                                const isActive =(slug != "" && pathname === `/quehacer/${slug}`) || (slug == "" && pathname === '/quehacer');
                                return ( <Link
                                    key={slug}
                                    href={`/quehacer/${slug}`}
                                    className={`inline-flex  items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                                    ${
                                        isActive
                                            ? "bg-red-900 text-white" // Estilo para el link activo
                                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80" // Estilo para los links inactivos
                                    }`}
                                >
                                    {label}
                                </Link>)
                                }
                            )}
                        </div>
                    </article>
                </div>
            </div>
            <div className={"relative h-auto w-full flex container mx-auto  "}>
                <div className={"basis-full md:basis-9/12 flex flex-wrap flex-row "}>
                    {children}
                </div>
                <aside className={"hidden md:flex basis-3/12 justify-center bg-red-100"}>PUBLICIDAD</aside>
            </div>
        </SWRConfig>
    )
}
