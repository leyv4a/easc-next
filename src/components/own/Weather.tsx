"use client"
import {Sun, Moon} from "lucide-react";
import React  from "react";

export default function Weather () {
    const [isNight, setIsNight] = React.useState<boolean>(false);
    const [temperature, setTemperature] = React.useState<string>("");

    /*const coords = "27.960194,-111.034444";
    const baseUrl = "https://api.weatherapi.com/v1"
    const apikey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const method = "/current.json";
    const url = baseUrl + method + "?key=" + apikey + "&q=" + coords;*/

    const url2 = "https://api.open-meteo.com/v1/forecast?latitude=27.960194&longitude=-111.034444&hourly=temperature_2m&timezone=auto"

    const fetchWeather = async () => {
        const response = await fetch(url2);
        const data = await response.json();
        setTemperature(data.hourly.temperature_2m[167]);
     /*   setTemperature(data.current.temp_c);*/
    }


    const isAfter19 = () : boolean => {
        const now = new Date();
        const currentTime = now.getHours();
        return currentTime >= 19;
    }

    React.useEffect(()=>{
        const updateStatus = () => {
            setIsNight(isAfter19());
        }

        updateStatus()
        fetchWeather();
        const interval = setInterval(updateStatus, 60000)

        return () => clearInterval(interval)
    }, [])
    return (
        <span
            className={`font-bold bg-gradient-to-b from-white  ${isNight ? 'to-[#2a4d69] via-[#2a4d69]' : 'to-[#E97451] via-[#E97451]'} bg-clip-text text-transparent text-sm flex gap-1`}>
            {isNight ? <Moon className={"size-5 text-[#2a4d69]"}/> : <Sun className={"size-5 text-[#E97451]"}/>}{temperature}°C</span>
    )
}