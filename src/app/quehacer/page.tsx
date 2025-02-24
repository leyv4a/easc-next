import Navbar from "@/components/own/Navbar";
import bg from "../../../public/images/sunrise.jpg";
import Image from "next/image";
import React from "react";

export default function QueHacer() {
    return (
        <div className={"relative w-screen h-[50vh] overflow-x-hidden"}>
            <Image
                className={"fixed"}
                src={bg.src}
                alt="Fondo"
                layout="fill"
                objectFit="cover"
                priority // Carga optimizada
                quality={90} // Ajusta calidad si es necesario
            />
            <div className="relative z-10 lg:w-[80vw] container mx-auto mt-40 lg:mt-12">
                <Navbar defaultBackground={false} mainColor="#002222"/>
                <article className={"mt-32 container mx-auto"}>
                    asd
                </article>

            </div>
        </div>
    )
}
