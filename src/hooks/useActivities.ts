"use client";

import useSWR from "swr";

interface Actividad {
    id: number;
    categoria: string;
    title: string;
    route: string;
    ubicacion: string;
    info: string;
    calificacion: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useActivities() {
    const { data, error, isLoading } = useSWR<Actividad[]>("http://localhost:8080/api/actividades", fetcher, {
        revalidateOnFocus: false, // No recargar al cambiar de pestaña
        dedupingInterval: 60000, // Mantener los datos en caché por 60s
    });
    return { actividades: data || [], error };
}
