import Navbar from "@/components/own/Navbar";
import bg from "../../../public/images/sunrise.jpg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import delfinario from "../../../public/images/delfinario.jpg";

export default function QueHacer() {
    return (
        <>
            <div className={"relative w-screen min-h-[40vh] overflow-x-hidden"}>
                <Image
                    className={"fixed saturate-50"}
                    src={bg.src}
                    alt="Fondo"
                    layout="fill"
                    objectFit="cover"
                    priority // Carga optimizada
                    quality={90} // Ajusta calidad si es necesario
                />
                <div className="relative z-10 lg:w-[80vw] h-[30vh] container  mx-auto mt-40 lg:mt-12 ">
                    <Navbar defaultBackground={false} mainColor="#f2f2f2"/>
                    <article className={"mt-32 container mx-auto flex flex-col items-start justify-end pb-6 h-full font-medium text-white font-karla italic"}>
                        <h1 className={"text-5xl font-bold not-italic mb-3"}>Qué hacer</h1>
                        <p className={"text-3xl"}>Descubre San Carlos</p>
                        <p className={"text-lg"}>Encuentra tu próxima aventura ordenada por categorías</p>
                    </article>
                </div>
            </div>
            <div className={"relative h-auto w-full flex container mx-auto"}>
                <div className={"basis-full md:basis-9/12 flex flex-wrap flex-row "}>
                    <div className={'flex flex-col basis-full md:basis-1/4 pt-3 px-3'}>
                        <Image src={delfinario.src} alt={"Source"} width={130} height={100}
                               className=" w-full object-cover rounded-lg "/>
                        <Link href={""}
                              className={"hover:ms-2 transition-all duration-300 text-2xl font-bold font-karla"}>Ver
                            más</Link>
                    </div>
                </div>
                <aside className={"hidden md:flex basis-3/12 bg-red-100 sr-only"}>PUBLICIDAD</aside>
            </div>
        </>
    )
}

/*TOP 5 ACTIVITIES*/

/*WHAT ELSE SHOULD WE INCLUDE TO MAKE A SECTION THAT KEEP THE USER SCROLLING?*/
/* HOW ARE WE GOING TO INCLUIDE INTERNATIONALIZATION (EN_us-ES_mx) TO THE DYNAMIC DATA*/
