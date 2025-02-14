import bg from "../../public/images/mainfondo.webp";
import { Utensils, BedSingle,Plane,LandPlot,Footprints, FlameKindling, Waves, FishSymbol} from 'lucide-react';
import React from "react";

export default function Home() {
  return (
      <>
        <main className={"w-full min-h-[100vh] absolute top-0 overflow-x-hidden"} style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
        }}>
        <header className={"flex justify-between container mx-auto h-32 items-center"}>
            <h1 className={"text-7xl font-logo font-bold drop-shadow-2xl tracking-tighter bg-gradient-to-r from-[#F3922B] to-[#F4C162] bg-clip-text text-transparent"}>EASC</h1>
            <nav>
                <ul className={"flex gap-5 font-karla font-semibold text-xl "}>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>QUE HACER</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>QUE COMER</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>DIRECTORIO</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>TOURS</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>DESCARGABLES</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>EVENTOS</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>DESCARGABLES</li>
                    <li className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer"}>EVENTOS</li>
                </ul>
            </nav>
        </header>
            <section className={"container mx-auto items-center justify-center h-[80vh] flex flex-col gap-3 "}>
                <article className={"flex flex-col justify-center w-full "}>
                    <h1 className={"text-[14.6rem] text-center font-karla font-bold text-white tracking-widest leading-none "}>MAR
                        Y VIDA</h1>
                    <h2 className={"text-5xl ms-8 font-karla font-bold text-white "}>Bienvenido a San Carlos</h2>
                    <p className={"text-white font-medium text-2xl font-karla ms-8"}>Explora, relájate y enamórate de la
                        belleza de San Carlos</p>
                </article>
                <nav className={"ms-8 mt-5 flex justify-around w-full items-center "}>
                    <FeaturesButton
                        icon={<Utensils className={"text-[#E97451] text-2xl"}/>}
                        label={"Restaurante Bar"}/>
                    <FeaturesButton
                        icon={<BedSingle className={"text-[#E97451] text-2xl"}/>}
                        label={"Hospedaje"}/>
                    <FeaturesButton
                        icon={<Plane className={"text-[#E97451] text-2xl"}/>}
                        label={"Atractivos Turísticos"}/>
                    <FeaturesButton
                        icon={<LandPlot className={"text-[#E97451] text-2xl"}/>}
                        label={"Campos de Golf"}/>
                    <FeaturesButton
                        icon={<Footprints className={"text-[#E97451] text-2xl"}/>}
                        label={"Senderismo"}/>
                    <FeaturesButton
                        icon={<FlameKindling className={"text-[#E97451] text-2xl"}/>}
                        label={"Camping"}/>
                    <FeaturesButton
                        icon={<Waves className={"text-[#E97451] text-2xl"}/>}
                        label={"Buceo"}/>
                    <FeaturesButton
                        icon={<FishSymbol className={"text-[#E97451] text-2xl"}/>}
                        label={"Pesca"}/>
                </nav>
            </section>
        </main>
      </>
  );
}


interface FeaturesButtonProps {
    icon: React.ReactNode;
    label: string;
}

const FeaturesButton: React.FC<FeaturesButtonProps> = ({icon, label}) => (
    <button
        className={`flex flex-col justify-center items-center bg-[#2a4d69]/80 hover:bg-[#2a4d69] text-white text-xl font-karla font-semibold p-4 w-40 h-40`}
    >
        {icon}
        {label}
    </button>
)
