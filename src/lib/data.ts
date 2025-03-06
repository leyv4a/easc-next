interface Actividad {
    id: number;
    categoria: string;
    title: string;
    route: string;
    ubicacion: string;
    info: string;
    calificacion: number;
}

const actividades: Actividad[] = [
    { id: 1, categoria: "aire-libre", title: "Senderismo en el Cañón del Nacapule", route: "senderismoNacapule", ubicacion: "Cañón del Nacapule", info: "Una caminata entre formaciones rocosas y oasis en el desierto.", calificacion: 4.8 },
    { id: 2, categoria: "aire-libre", title: "Tour en bicicleta por San Carlos", route: "tourBicicletaSanCarlos", ubicacion: "Calles de San Carlos", info: "Un recorrido en bicicleta por los lugares más emblemáticos de San Carlos.", calificacion: 4.6 },
    { id: 3, categoria: "aventura", title: "Buceo en la Isla San Pedro Nolasco", route: "buceoSanPedroNolasco", ubicacion: "Isla San Pedro Nolasco", info: "Explora el mundo submarino con una gran diversidad de fauna marina.", calificacion: 4.9 },
    { id: 4, categoria: "aventura", title: "Paddleboard en la Bahía de San Carlos", route: "paddleboardBahia", ubicacion: "Bahía de San Carlos", info: "Disfruta del mar con una actividad relajante y llena de paisajes hermosos.", calificacion: 4.7 },
    { id: 5, categoria: "aventura", title: "Tour en cuatrimotos por los médanos", route: "cuatrimotosMedanos", ubicacion: "Médanos de San Carlos", info: "Aventura extrema recorriendo dunas y paisajes desérticos.", calificacion: 4.8 },
    { id: 6, categoria: "familia", title: "Visita al Mirador Escénico", route: "miradorEscenico", ubicacion: "Mirador Escénico", info: "Una vista panorámica impresionante del Mar de Cortés.", calificacion: 4.9 },
    { id: 7, categoria: "familia", title: "Paseo en barco al atardecer", route: "barcoAtardecer", ubicacion: "Mar de Cortés", info: "Un paseo relajante con una vista espectacular del atardecer.", calificacion: 4.8 },
    { id: 8, categoria: "familia", title: "Exploración en el Estero del Soldado", route: "esteroSoldado", ubicacion: "Estero del Soldado", info: "Un área natural protegida con una gran biodiversidad.", calificacion: 4.7 },
    { id: 9, categoria: "familia", title: "Día de playa en Los Algodones", route: "playaLosAlgodones", ubicacion: "Playa Los Algodones", info: "Una de las playas más hermosas y tranquilas de la región.", calificacion: 4.9 },
    { id: 10, categoria: "noche", title: "Noche de música en vivo en La Bartina 64", route: "nocheBartina64", ubicacion: "La Bartina 64", info: "Un lugar con excelente música en vivo y ambiente nocturno.", calificacion: 4.6 },
    { id: 11, categoria: "noche", title: "Fiesta en Soggy Peso", route: "fiestaSoggyPeso", ubicacion: "Soggy Peso Bar", info: "Fiesta al aire libre con música y buenos tragos.", calificacion: 4.5 },
    { id: 12, categoria: "noche", title: "Cocktails en Sunset Bar & Grill", route: "cocktailsSunsetBar", ubicacion: "Sunset Bar & Grill", info: "Disfruta de una gran variedad de cocteles con vista al mar.", calificacion: 4.7 },
    { id: 13, categoria: "eventos", title: "Festival del Mar Bermejo", route: "festivalMarBermejo", ubicacion: "Malecón de San Carlos", info: "Evento cultural y gastronómico con actividades para toda la familia.", calificacion: 4.8 },
    { id: 14, categoria: "eventos", title: "Torneo de pesca deportiva", route: "torneoPesca", ubicacion: "Marina San Carlos", info: "Competencia de pesca con grandes premios y mucha emoción.", calificacion: 4.7 },
    { id: 15, categoria: "eventos", title: "Competencia de paddleboard", route: "competenciaPaddleboard", ubicacion: "Bahía de San Carlos", info: "Demuestra tus habilidades en esta competencia acuática.", calificacion: 4.6 },
    { id: 16, categoria: "gastronomia", title: "Cena en un restaurante con vista al mar", route: "cenaRestauranteMar", ubicacion: "Restaurante El Marlin Azul", info: "Disfruta de una cena con especialidades de mariscos y vista al mar.", calificacion: 4.8 },
    { id: 17, categoria: "gastronomia", title: "Tacos de pescado en El Embarcadero", route: "tacosPescadoEmbarcadero", ubicacion: "El Embarcadero", info: "Los mejores tacos de pescado fresco en un ambiente relajado.", calificacion: 4.9 },
    { id: 18, categoria: "gastronomia", title: "Degustación de mariscos en Charlie’s Rock", route: "mariscosCharliesRock", ubicacion: "Charlie’s Rock", info: "Prueba los mariscos más frescos con vista espectacular al mar.", calificacion: 4.8 },
    { id: 19, categoria: "gastronomia", title: "Desayuno en Rosa's Cantina", route: "desayunoRosasCantina", ubicacion: "Rosa's Cantina", info: "Un desayuno mexicano auténtico con tortillas hechas a mano.", calificacion: 4.7 },
    { id: 20, categoria: "gastronomia", title: "Café y postres en Barracuda's", route: "cafeBarracudas", ubicacion: "Barracuda's Café", info: "Un café acogedor con una gran selección de postres y bebidas.", calificacion: 4.6 }
];


export default actividades;