import React from "react";

export default function Navbar(){
    return (
        <header className={"flex justify-between  h-32 items-center"}>
            <h1 className={"text-7xl font-logo font-bold drop-shadow-2xl tracking-tighter bg-gradient-to-r from-[#F3922B] to-[#F4C162] bg-clip-text text-transparent"}>EASC</h1>
            <nav className={"hidden  lg:flex gap-5 font-karla font-semibold text-md 3xl:text-xl "}>
                <NavLinkButton label={"QUE HACER"}/>
                <NavLinkButton label={"QUE COMER"}/>
                <NavLinkButton label={"DIRECTORIO"}/>
                <NavLinkButton label={"TOURS"}/>
                <NavLinkButton label={"DESCARGABLES"}/>
                <NavLinkButton label={"EVENTOS"}/>
                <NavLinkButton label={"DESCARGABLES"}/>
                <NavLinkButton label={"EVENTOS"}/>
            </nav>
        </header>
    )
}

interface NavLinkButtonProps {
    label: string;
    href?: string;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({label, href = ""}) => (
    <a href={href} className={"text-[#2A4D69]  hover:text-[#E97451] cursor-pointer group "}>
        {label}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#E97451]"></span>
    </a>
)