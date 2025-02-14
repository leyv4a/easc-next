import bg from "../../public/images/mainfondo.webp";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
      <>
        <main className={"w-full min-h-[100vh] absolute top-0 overflow-x-hidden"} style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
        }}>
            <Navbar/>
            <Hero/>
        </main>
      </>
  );
}




