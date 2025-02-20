"use client"
import React from "react";

export default function BackToTop(){
    return (
        <button
            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            className={"fixed z-20 bottom-0 right-0 rounded-full bg-[#e97451] hover:bg-[#e97451]/90 text-white text-2xl w-16 h-16 me-5 mb-5"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className={"mx-auto"}
            >
                <path d="M8 6L12 2L16 6"/>
                <path d="M12 2V22"/>
            </svg>
        </button>
    )
}