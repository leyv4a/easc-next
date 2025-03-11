import { ServerOff } from 'lucide-react';
export default function ServerError() {
    return (
        <div className={"flex flex-col w-full h-full  items-center justify-center my-10"}>
            <ServerOff size={150} className={"text-[#c0c0c0]"}/>
            <p className={"text-[#c0c0c0] text-4xl lg:text-7xl font-karla font-bold text-center"}>Error en el servidor</p>

        </div>
    )
}