"use client"
import React from "react";
import Weather from "@/components/own/Weather";
import { Menu } from 'lucide-react';
import Link from 'next/link'
interface NavbarProps{
    defaultBackground? : boolean;
    mainColor? : string;
}
/*002222*/
export default function Navbar({defaultBackground = false, mainColor="#E97451" } : NavbarProps){
    const [isScrolled, setIsScrolled] = React.useState(false);

    const items = [
        {label: "Qué hacer", href: "/quehacer"},
        {label: "Qué comer", href: "/quecomer"},
        {label: "Directorio", href: "/directorio"},
        {label: "Tours", href: "/tours"},
        {label: "Descargables", href: "/descargables"},
        {label: "Eventos", href: "/eventos"}
    ]

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed  top-0 left-0  right-0 w-full px-0 lg:px-60 
                    ${defaultBackground ? "bg-black/90" : ""} 
                    ${isScrolled && !defaultBackground ? "bg-black/90 shadow-lg" : ""}
                    ${!isScrolled && !defaultBackground ? "lg:bg-transparent bg-black/90" : ""}
                    ${isScrolled && defaultBackground ? "bg-black/90 shadow-lg" : ""}`}>
            <div className={"flex justify-between lg:justify-between h-32 items-center"}>
                <div className={" flex lg:hidden"}></div>
                <Link href={"/"} className={"flex -gap-2 flex-col items-center"}>
                    <h1 className={"text-7xl font-logo font-bold drop-shadow-2xl tracking-tighter bg-gradient-to-r from-[#F3922B] to-[#F4C162] bg-clip-text text-transparent"}>EASC</h1>
                    <Weather/>
                </Link>
                <nav className={"hidden lg:flex gap-5 font-karla  font-semibold text-md 2xl:text-xl "}>
                    {items.map((items,index) => (
                        <NavLinkButton key={index} label={items.label} href={items.href} mainColor={mainColor}/>
                    ))}
                </nav>
                <nav className={"me-2"}>
                  <button>
                      <Menu className={"flex lg:hidden text-white size-8"}/>
                  </button>
                </nav>
            </div>
        </header>
    )
}

interface NavLinkButtonProps {
    label: string;
    href?: string;
    mainColor?: string;
}
/*E97451*/
/*2b5c78*/
const NavLinkButton: React.FC<NavLinkButtonProps> = ({label, href = "", mainColor="#E97451"}) => (
    <Link href={href} className={`text-white hover:text-[${mainColor}] cursor-pointer group `}>
        {label}
        <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[${mainColor}]`}></span>
    </Link>
)