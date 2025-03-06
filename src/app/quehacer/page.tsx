"use client";
import Link from "next/link";
import Image from "next/image";
import delfinario from "../../../public/images/delfinario.jpg";
import actividades from "@/lib/data";

export default function QueHacerPage() {
    return (
        <>
            {actividades.length > 0 ? (
                actividades.map((actividad) => (
                    <Link  href={`/quehacer/${actividad.categoria}/${actividad.route}`} key={actividad.id} className={'flex flex-col basis-full md:basis-1/4  my-2 pt-3 px-3 md:pe-3 rounded-md'}>
                            <Image src={delfinario.src} alt={"Source"} width={130} height={100}
                                   className=" w-full object-cover rounded-lg "/>
                            <span key={actividad.id}
                                  className={"hover:ms-2 transition-all duration-300 text-2xl font-bold font-karla"}>{actividad.title}</span>
                    </Link>
                ))
            ) : (
                <p>No hay actividades en esta categoría.</p>
            )}
        </>
    );
}
