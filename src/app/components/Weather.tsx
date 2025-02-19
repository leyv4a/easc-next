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
            className={`font-bold bg-gradient-to-b from-white  ${isNight ? 'to-[#2a4d69] via-[#2a4d69]' : 'to-[#F4C162] via-[#F4C162]'} bg-clip-text text-transparent text-sm flex gap-1`}>
            {isNight ? <Moon className={"size-5 text-[#2a4d69]"}/> : <Sun className={"size-5 text-[#F4C162]"}/>}27°C</span>
    )
}