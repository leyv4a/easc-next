"use client";

import React from "react";
import { useActivities } from "@/hooks/useActivities";
import CardLoading from "@/components/own/CardLoading";
import ActivityCard from "@/components/own/ActivityCard";

export default function CategoriaPage({params}: {params: Promise<{ categoria: string }>}) {
    const [categoria, setCategoria] = React.useState<string | null>(null);

    const { actividades, error, isLoading } = useActivities();

    // Desempaquetar `params` correctamente
    React.useEffect(() => {
        params.then((resolvedParams) => setCategoria(resolvedParams.categoria));
    }, [params]);

    if (!categoria) return <CardLoading/>;
    if (error) return <p>Error cargando datos</p>;
    if (isLoading) return <CardLoading/>;

    let actividadesFiltradas;
    if (actividades) {
         actividadesFiltradas = actividades.filter((a) => a.categoria === categoria) || [];
    }


    return (
            <>
                {actividadesFiltradas.length > 0 ? (
                    actividadesFiltradas.map((actividad) => (
                        <ActivityCard key={actividad.id} id={actividad.id} title={actividad.title} categoria={actividad.categoria} route={actividad.route}/>
                    ))
                ) : (
                    <p>No hay actividades en esta categoría.</p>
                )
                }
            </>
    );
}

// Pre-renderiza todas las categorías para SEO
/*export async function generateStaticParams() {
    return [
        {categoria: "aire-libre"},
        {categoria: "aventura"},
        {categoria: "gastronomia"},
        {categoria: "familia"},
        {categoria: "noche"},
        {categoria: "eventos"}
    ];
}*/
