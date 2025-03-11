"use client";
import React from 'react';
import { useActivities } from "@/hooks/useActivities";
import CardLoading from "@/components/own/CardLoading";
import ActivityCard from "@/components/own/ActivityCard";
import ServerError from "@/components/own/ServerError";

export default function QueHacerPage() {
    const { actividades, error } = useActivities();
    if (error) return <ServerError />;
    if (!actividades || actividades.length === 0) return <CardLoading />;
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

