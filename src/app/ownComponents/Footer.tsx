import {Facebook, Instagram} from "lucide-react";
import React from "react";

export default function Footer(){
    return (
        <>
            <footer className={"relative bottom-0 left-0 w-full h-auto flex flex-col gap-2 justify-between min-h-[100vh] lg:min-h-[60vh]"}>
                {/* Fondo de color */}
                <div
                    className={"absolute w-full h-full bg-black/90"}
                />
                {/* Contenido */}
                <section
                    className="relative  h-[60vh] min-h-[60vh] flex items-center p-4 font-karla container mx-auto lg:w-[80vw]">
                    <div className="flex flex-col lg:flex-row gap-6 text-[#2b5c78] w-full h-full mt-10">
                        {/* Título y texto */}
                        <div className="lg:w-1/2 flex justify-start gap-5 mt-5">
                            <FooterItems title={"Recursos"} items={["Seguridad", "Numeros de telefono", "Buses"]}/>
                            <FooterItems title={"Comunidad"} items={["FAQ", "Contacto", "Turismo"]}/>
                            <FooterItems title={"Otros"}
                                         items={["Mapa", "Publicidad", "Política de privacidad", "Terminos y condiciones"]}/>
                        </div>
                        <div className="lg:w-1/2 flex justify-start flex-col gap-5 items-center">
                            <p className={"text-3xl text-white font-bold"}>Contacta con nosotros</p>
                            <div className="space-y-4 w-full max-w-md mx-auto">
                                {/* Nombre */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="w-full p-3 pl-12 text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#E97451] focus:border-[#E97451] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400"
                                    />
                                    <svg
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 transition-all duration-300 group-focus-within:text-[#E97451] dark:text-gray-300 dark:group-focus-within:text-purple-400"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="8" r="5"/>
                                        <path d="M20 21a8 8 0 0 0-16 0"/>
                                    </svg>
                                </div>
                                {/* Teléfono */}
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        placeholder="Teléfono"
                                        className="w-full p-3 pl-12 text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#E97451] focus:border-[#E97451] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-green-400"
                                    />
                                    <svg
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 transition-all duration-300 group-focus-within:text-[#E97451] dark:text-gray-300 dark:group-focus-within:text-green-400"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                {/* Correo */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Correo Electrónico"
                                        className="w-full p-3 pl-12 text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#E97451] focus:border-[#E97451] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-purple-400"
                                    />
                                    <svg
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 transition-all duration-300 group-focus-within:text-[#E97451] dark:text-gray-300 dark:group-focus-within:text-purple-400"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </div>
                                <button
                                    className={"bg-[#e97451] hover:bg-[#e97451]/90 w-1/2 mt-2 p-2 text-white rounded-md"}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={"relative z-10 container mx-auto mb-24 lg:mb-0"}>
                    <div className={"flex gap-2 justify-end items-center text-white pb-5 text-sm lg:text-lg font-medium me-2"}>
                        <Facebook className={"text-2xl lg:text-3xl hover:text-[#E97451] cursor-pointer"}/>
                        <Instagram className={"text-2xl lg:text-3xl hover:text-[#E97451] cursor-pointer"}/>
                    </div>
                    <div className="flex items-center ">
                        <hr className="w-full mb-5 "/>
                    </div>
                    <div className={"flex justify-between text-white font-karla text-center lg:text-start columns-2  pb-5 me-2 "}>
                        <p className={"text-sm lg:text-lg font-medium"}>© 2025 San Carlos, Sonora. Desarrollado por <a className={"hover:text-[#E97451] underline underline-offset-4"} target={"_blank"} href={"https://geverel.com"}>Geverel
                            Software</a> | Todos los derechos reservados</p>
                        <p></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

interface FooterItemsProps {
    title: string;
    items: string[];
}

const FooterItems: React.FC<FooterItemsProps> = ({title, items}) => (
    <>
        <div className={"flex flex-col gap-2 text-start"}>
            <p className={"text-lg lg:text-3xl font-bold text-white"}>{title}</p>
            {items.map((item, index) => (
                <a key={index} href={"#"}
                   className={"text-white text-lg font-medium hover:text-[#E97451] cursor-pointer group "}>
                    {item}
                    <span
                        className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#E97451]"></span>
                </a>
            ))}
        </div>
    </>
)