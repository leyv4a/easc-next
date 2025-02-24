"use client"
import React from "react";
import Weather from "@/app/ownComponents/Weather";
import { Menu } from 'lucide-react';
export default function Navbar(){
    const [isScrolled, setIsScrolled] = React.useState(false);

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
        <header className={` fixed top-0 left-0 right-0 w-full px-0 lg:px-60 ${isScrolled ? "shadow-lg  bg-black/90 " : "lg:bg-transparent bg-black/90"}`}>
            <div className={"flex justify-between lg:justify-between h-32 items-center"}>
                <div className={" flex lg:hidden"}></div>
                <div className={"flex -gap-2 flex-col items-center"}>
                    <h1 className={"text-7xl font-logo font-bold drop-shadow-2xl tracking-tighter bg-gradient-to-r from-[#F3922B] to-[#F4C162] bg-clip-text text-transparent"}>EASC</h1>
                    <Weather/>
                </div>
                <nav className={"hidden lg:flex gap-5 font-karla  font-semibold text-md 2xl:text-xl "}>
                    <NavLinkButton label={"QUE HACER"}/>
                    <NavLinkButton label={"QUE COMER"}/>
                    <NavLinkButton label={"DIRECTORIO"}/>
                    <NavLinkButton label={"TOURS"}/>
                    <NavLinkButton label={"DESCARGABLES"}/>
                    <NavLinkButton label={"EVENTOS"}/>
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
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({label, href = ""}) => (
    <a href={href} className={"text-white hover:text-[#E97451] cursor-pointer group "}>
        {label}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#E97451]"></span>
    </a>
)