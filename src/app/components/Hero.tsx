import React from "react";
import { Utensils, BedSingle,Plane,LandPlot,Footprints, FlameKindling, Waves, FishSymbol} from 'lucide-react';


export default function Hero(){
    return (
        <section className={"items-center justify-center  md:h-[80vh] flex flex-col gap-3 "}>
            <article className={"flex flex-col justify-center w-full "}>
                <h1 className={"text-8xl md:text-9xl 3xl:text-[14.6rem] text-center font-karla font-bold tracking-widest leading-none  bg-gradient-to-r from-white from-30% via-[#f3922b] text-transparent bg-clip-text to-white bg-300% animate-gradient"}>MAR
                    Y VIDA</h1>
                <h2 className={"text-5xl ms-8 font-karla font-bold text-white "}>Bienvenido a San Carlos</h2>
                <p className={"text-white font-medium text-2xl font-karla ms-8"}>Explora, relájate y enamórate de la
                    belleza de San Carlos</p>
            </article>
            <nav className={"md:ms-8 mt-5 flex flex-wrap justify-around w-full items-center "}>
                <FeaturesButton
                    icon={<Utensils className={"text-[#E97451] text-md"}/>}
                    label={"Restaurante Bar"}/>
                <FeaturesButton
                    icon={<BedSingle className={"text-[#E97451] text-lg"}/>}
                    label={"Hospedaje"}/>
                <FeaturesButton
                    icon={<Plane className={"text-[#E97451] text-lg"}/>}
                    label={"Atractivos Turísticos"}/>
                <FeaturesButton
                    icon={<LandPlot className={"text-[#E97451] text-md"}/>}
                    label={"Campos de Golf"}/>
                <FeaturesButton
                    icon={<Footprints className={"text-[#E97451] text-md"}/>}
                    label={"Senderismo"}/>
                <FeaturesButton
                    icon={<FlameKindling className={"text-[#E97451] text-md"}/>}
                    label={"Camping"}/>
                <FeaturesButton
                    icon={<Waves className={"text-[#E97451] text-md"}/>}
                    label={"Buceo"}/>
                <FeaturesButton
                    icon={<FishSymbol className={"text-[#E97451] text-md"}/>}
                    label={"Pesca"}/>
            </nav>
        </section>
    )
}

interface FeaturesButtonProps {
    icon: React.ReactNode;
    label: string;
}

const FeaturesButton: React.FC<FeaturesButtonProps> = ({icon, label}) => (
    <a
        href={""}
        className={`mb-2 border border-[#E97451]/30 hover:border-[#E97451]/80 transition duration-300 shadow-md hover:shadow-lg flex flex-col justify-center items-center bg-[#2a4d69]/80 hover:bg-[#2a4d69] text-white text-xl font-karla font-semibold p-4 w-28 h-28 3xl:w-40 3xl:h-40`}
    >
        {icon}
        {label}
    </a>
)