"use client"
import {Sun, Moon} from "lucide-react";
import React  from "react";

export default function Weather () {
    const [isNight, setIsNight] = React.useState<boolean>(false);

    const isAfter19 = () : boolean => {
        const now = new Date();
        const currentTime = now.getHours();
        console.log(currentTime);
        return currentTime >= 19;
    }

    React.useEffect(()=>{
        const updateStatus = () => {
            setIsNight(isAfter19());
        }

        updateStatus()
        const interval = setInterval(updateStatus, 60000)

        return () => clearInterval(interval)
    }, [])
    return (
        <span
            className={`font-bold bg-gradient-to-b from-white  ${isNight ? 'to-[#2a4d69] via-[#2a4d69]' : 'to-[#E97451] via-[#E97451]'} bg-clip-text text-transparent text-sm flex gap-1`}>
            {isNight ? <Moon className={"size-5 text-[#2a4d69]"}/> : <Sun className={"size-5 text-[#E97451]"}/>}27°C</span>
    )
}