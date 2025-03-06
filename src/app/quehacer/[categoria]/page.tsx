import React from "react";
import Image from "next/image";
import delfinario from "../../../../public/images/delfinario.jpg";
import Link from "next/link";
import actividades from "@/lib/data";



export default async function CategoriaPage({params}: {params: Promise<{ categoria: string }>}) {
    const { categoria } = await params
    // Filtra las actividades por categoría
    const actividadesFiltradas = actividades.filter((a) => a.categoria === categoria);

    return (
        <>
            {actividadesFiltradas.length > 0 ? (
                actividadesFiltradas.map((actividad) => (
                    <div key={actividad.id}
                         className={'flex flex-col basis-full md:basis-1/4  my-2 pt-3 px-3 md:pe-3 rounded-md'}>
                        <Image src={delfinario.src} alt={"Source"} width={130} height={100}
                               className=" w-full object-cover rounded-lg "/>
                        <Link key={actividad.id}
                              href={`/quehacer/${actividad.categoria}/${actividad.route}`}
                              className={"hover:ms-2 transition-all duration-300 text-2xl font-bold font-karla"}>{actividad.title}</Link>
                    </div>
                ))
            ) : (
                <p>No hay actividades en esta categoría.</p>
            )}
        </>
    );
}

// Pre-renderiza todas las categorías para SEO
export async function generateStaticParams() {
    return [
        {categoria: "aire-libre"},
        {categoria: "aventura"},
        {categoria: "gastronomia"},
        {categoria: "familia"},
        {categoria: "noche"},
        {categoria: "eventos"}
    ];
}
