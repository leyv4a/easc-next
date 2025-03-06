import React from "react";
import Image from "next/image";
import delfinario from "../../../../public/images/delfinario.jpg";
import Link from "next/link";
import PageProps  from "next";

const actividades =  [
    { id: 1, categoria: "aire-libre", title: "Senderismo en el Cañón del Nacapule", route: "senderismoNacapule" },
    { id: 2, categoria: "aire-libre", title: "Tour en bicicleta por San Carlos", route: "tourBicicletaSanCarlos" },
    { id: 3, categoria: "aventura", title: "Buceo en la Isla San Pedro Nolasco", route: "buceoSanPedroNolasco" },
    { id: 4, categoria: "aventura", title: "Paddleboard en la Bahía de San Carlos", route: "paddleboardBahia" },
    { id: 5, categoria: "aventura", title: "Tour en cuatrimotos por los médanos", route: "cuatrimotosMedanos" },
    { id: 6, categoria: "familia", title: "Visita al Mirador Escénico", route: "miradorEscenico" },
    { id: 7, categoria: "familia", title: "Paseo en barco al atardecer", route: "barcoAtardecer" },
    { id: 8, categoria: "familia", title: "Exploración en el Estero del Soldado", route: "esteroSoldado" },
    { id: 9, categoria: "familia", title: "Día de playa en Los Algodones", route: "playaLosAlgodones" },
    { id: 10, categoria: "noche", title: "Noche de música en vivo en La Bartina 64", route: "nocheBartina64" },
    { id: 11, categoria: "noche", title: "Fiesta en Soggy Peso", route: "fiestaSoggyPeso" },
    { id: 12, categoria: "noche", title: "Cocktails en Sunset Bar & Grill", route: "cocktailsSunsetBar" },
    { id: 13, categoria: "eventos", title: "Festival del Mar Bermejo", route: "festivalMarBermejo" },
    { id: 14, categoria: "eventos", title: "Torneo de pesca deportiva", route: "torneoPesca" },
    { id: 15, categoria: "eventos", title: "Competencia de paddleboard", route: "competenciaPaddleboard" },
    { id: 16, categoria: "gastronomia", title: "Cena en un restaurante con vista al mar", route: "cenaRestauranteMar" },
    { id: 17, categoria: "gastronomia", title: "Tacos de pescado en El Embarcadero", route: "tacosPescadoEmbarcadero" },
    { id: 18, categoria: "gastronomia", title: "Degustación de mariscos en Charlie’s Rock", route: "mariscosCharliesRock" },
    { id: 19, categoria: "gastronomia", title: "Desayuno en Rosa's Cantina", route: "desayunoRosasCantina" },
    { id: 20, categoria: "gastronomia", title: "Café y postres en Barracuda's", route: "cafeBarracudas" }
];

export default function CategoriaPage({ params }: PageProps<{ categoria: string }>) {

    // Filtra las actividades por categoría
    const actividadesFiltradas = actividades.filter((a) => a.categoria === params.categoria);


    return (
        <>
            {actividadesFiltradas.length > 0 ? (
                actividadesFiltradas.map((actividad, index) => (
                    <div key={index} className={'flex flex-col basis-full md:basis-1/4 pt-3 px-3 '}>
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
);}

// Pre-renderiza todas las categorías para SEO
export async function generateStaticParams() {
    return ["aire-libre", "aventura", "gastronomia"].map((categoria) => ({ categoria }));
}
