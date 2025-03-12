"use client";
import { useRouter } from "next/navigation";
import {MoveLeft, Star, Link as LinkIcon} from "lucide-react";
import { useEffect, useState } from "react";
import {Skeleton} from "@/components/ui/skeleton";
import delfinario from "../../../../../public/images/delfinario.jpg";
import Image from "next/image"
import { useActivities } from "@/hooks/useActivities";

interface Actividad {
    id: number;
    categoria: string;
    title: string;
    route: string;
    ubicacion: string;
    info: string;
    calificacion: number;
}

export default function CatPage({ params }: { params: {cat: string} }) {
    const router = useRouter();
    const [cat, setCat] = useState<string | null>(null);
    const [activity, setActivity] = useState<Actividad[]>([]);
    const { actividades, error } = useActivities();

    const filterDataByRoute = (route: string) => {
        setActivity(actividades?.filter((a: Actividad) => a.route === route) || []);
    };

    useEffect(() => {
        if (params?.cat) {
            setCat(params.cat);
            filterDataByRoute(params.cat)
        }
    }, [params]);

    if (!cat) return <Skeleton className="w-full h-[400px] rounded-md mt-5 me-2" />;

    if (error) return <p>Error cargando datos</p>;
    if (!actividades || actividades.length === 0) return <Skeleton className="w-full h-[400px] rounded-md mt-5 me-2" />;

    return (
        <>
            <section className={"w-full h-full mt-2 flex flex-col gap-2 " }>
                <button onClick={() => router.back()}><MoveLeft/></button>
                <h2 className={"font-karla text-3xl font-bold mt-4"}>{activity[0].title}</h2>
                <span className={"w-[5.7rem] h-[0.4rem] bg-red-800"}></span>
                <p className={"whitespace-pre-line"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                {/*DIVISION EN DOS (FOTO, CALIFICACION/UBICACION)*/}
                <div className={"flex flex-col md:flex-row gap-2 mt-4"}>
                    <Image src={delfinario.src} alt={"Source"}
                           className={"w-full object-cover"}
                           width={500} height={500}/>
                    <div className={"flex flex-col items-center text-center w-full gap-2 lg:w-[60%]"}>
                        <span className={"flex flex-row items-center gap-1 "}><p>{activity[0].calificacion}</p><Star className={"text-yellow-500"} size={15}/></span>
                        <h2 className={"text-2xl font-bold mt-2"}>{activity[0].info}</h2>
                        <a target={"_blank"} href={"https://wwww.maps.google.com/asdsad"} className={"text-xl mt-2 underline italic flex gap-1 items-center"}><LinkIcon/> {activity[0].ubicacion}</a>
                    </div>
                </div>
            </section>
            <section>
                <h2 className={"font-karla text-3xl font-bold mt-4"}>Tambien te puede interesar</h2>
                {/*LO MISMO QUE EN CATEGORIA PAGE*/}
            </section>
        </>
    );
}
