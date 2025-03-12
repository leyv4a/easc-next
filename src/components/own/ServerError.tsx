import { ServerOff } from 'lucide-react';
export default function ServerError() {
    return (
        <div className={"flex flex-col w-full h-full gap-5 items-center justify-center my-10"}>
            <ServerOff size={150} absoluteStrokeWidth={true} strokeWidth={5} className={"text-[#c0c0c0]"}/>
            <p className={"text-[#c0c0c0] text-4xl lg:text-5xl font-karla text-center"}>Error en el servidor</p>
        </div>
    )
}