"use client";
import React from 'react';
import { useActivities } from "@/hooks/useActivities";
import CardLoading from "@/components/own/CardLoading";
import ActivityCard from "@/components/own/ActivityCard";

export default function QueHacerPage() {
    const { actividades, error, isLoading } = useActivities();
    if (error) return <p>Error cargando datos</p>;
    if (isLoading) return <CardLoading/>;
    return (
        <>
            {actividades.length > 0 ? (
                        actividades.map((actividad) => (
                           <ActivityCard key={actividad.id} id={actividad.id} title={actividad.title} categoria={actividad.categoria} route={actividad.route}/>
                        ))
                    ) : (
                        <p>No hay actividades </p>
            )
            }
        </>
    );
}

