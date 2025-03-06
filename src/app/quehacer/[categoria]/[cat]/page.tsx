"use client";
import { useRouter } from "next/navigation";
import { MoveLeft } from 'lucide-react';
import { useEffect, useState } from "react";
import {Skeleton} from "@/components/ui/skeleton";
import actividades from "@/lib/data";
import delfinario from "../../../../../public/images/delfinario.jpg";
import Image from "next/image";

export default function CatPage({ params }: { params: Promise<{ cat: string }> }) {
    const router = useRouter();
    const [cat, setCat] = useState<string | null>(null);
    const [activity, setActivity] = useState<any[]>([]);

    const filterDataByRoute = (route: string) => {
        setActivity(actividades.filter((a) => a.route === route));
    };

    useEffect(() => {
            params.then((resolvedParams) => {
                setCat(resolvedParams.cat);
                filterDataByRoute(resolvedParams.cat); // Se llama después de actualizar cat
            });
    }, [params]);

    if (!cat) return <Skeleton className="w-full h-[400px] rounded-md mt-5 me-2" />;

    return (
        <>
            <section className={"w-full h-full mt-2 flex gap-2"}>
               {/*<button onClick={() => router.back()}><MoveLeft/></button>*/}
                <aside className={"w-1/2 overflow-hidden rounded-md"}>
                    <Image src={delfinario.src} alt={"Source"}
                           className={"w-full object-cover cursor-pointer"}
                           width={500} height={500}/>

                </aside>
                <div className={"w-1/2 flex flex-col"}>
                    <span className={"flex flex-row items-center gap-2"}><button onClick={() => router.back()}><MoveLeft/></button><p>{activity[0].calificacion}</p></span>
                    <h2 className={"text-2xl font-bold mt-2"}>{activity[0].title}</h2>
                    <p className={"text-xl mt-2"}>{activity[0].info}</p>
                </div>
            </section>
        </>
    );
}
