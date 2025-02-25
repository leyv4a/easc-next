import bg from "../../public/images/mainfondo.webp";
import bg2 from "../../public/images/fondo.jpg";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/own/Navbar";
import Hero from "@/components/own/Hero";
import BackToTop from "@/components/own/BackToTop";
import tetakawi from "../../public/images/tetakawi.jpg";
import delfinario from "../../public/images/delfinario.jpg";
import algodones from "../../public/images/algodones.jpg";
import NotFoundImage from "../../public/images/not-found.png";
import Footer from "@/components/own/Footer";
import SponsorCarousel from "@/components/own/SponsorCarousel";
import SvgSanCarlos from "@/components/svg/SanCarlos";

export default function Home() {
  return (
      <>
          <main className="relative max-w-full min-h-screen overflow-x-hidden">
              <Image
                  className={"fixed"}
                  src={bg.src}
                  alt="Fondo"
                  layout="fill"
                  objectFit="cover"
                  priority // Carga optimizada
                  quality={90} // Ajusta calidad si es necesario
              />
              <div className="relative z-10 lg:w-[80vw] container mx-auto mt-40 3xl:mt-20 xl:mt-32">
                  <Navbar/>
                  <Hero/>
              </div>
          </main>
        <SponsorCarousel/>
          <ConoceSanCarlos/>
          <Seccion2/>
          <Seccion3/>
          <Footer/>
         <BackToTop/>
          {/*FOOTER*/}
      </>
  );
}

function ConoceSanCarlos() {
    return (<>
            <div className="relative w-full min-h-[60vh]">
                {/* Fondo de color */}
                <div className="absolute inset-0 w-full min-h-[60vh] bg-[#f4c162]"/>
                {/* Contenido */}
                <section className="relative min-h-[60vh] flex items-center p-4 font-karla container mx-auto lg:w-[80vw]">
                    <div className="flex flex-col lg:flex-row gap-6 text-[#2b5c78] w-full h-full mt-10">
                        {/* Título y texto */}
                        <div className="lg:w-1/2 ">
                            <h2 className="text-3xl md:text-5xl font-bold">Conoce San Carlos</h2>
                        </div>
                        <div className="lg:w-1/2 space-y-4 text-start mx-4 ">
                            <p className="text-md md:text-lg font-semibold">
                                <span className="font-bold text-[#2b5c78] text-xl md:text-2xl">San Carlos: Donde el Mar y el Desierto se Encuentran</span>
                                <br/>
                            Ya sea que busques adrenalina, relajación o un poco de ambas, <strong>San Carlos, Sonora</strong>, es tu destino ideal. Con paisajes impresionantes entre el <strong>Mar de Cortés</strong> y el <strong>desierto sonorense</strong>, aquí encontrarás una combinación perfecta de naturaleza, aventura y descanso.

                            Desde las imponentes vistas del <strong>Cerro Tetakawi</strong> hasta las aguas cristalinas de <strong>Playa Los Algodones</strong>, cada rincón invita a la exploración. San Carlos es un paraíso para el <strong>buceo</strong>, la <strong>pesca deportiva</strong>, el senderismo y el ecoturismo, con áreas protegidas como el <strong>Estero El Soldado</strong>, hogar de una biodiversidad única.

                            Después de un día lleno de emociones, relájate en un resort frente al mar, disfruta de una cena con mariscos frescos o explora la vibrante vida nocturna. San Carlos fue recientemente reconocido como <strong>Pueblo Mágico</strong>, un testimonio de su belleza natural y riqueza cultural.

                            Aquí, cada amanecer trae una nueva aventura y cada atardecer es una postal inolvidable. <strong>San Carlos te espera.</strong></p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function Seccion2(){
    return (<>
            <div className="relative w-full min-h-[60vh] ">
                {/* Fondo de color */}
                <Image
                    className={"fixed"}
                    src={bg2.src}
                    alt="Fondo"
                    layout="fill"
                    objectFit="cover"
                    quality={80} // Ajusta calidad si es necesario
                />
                {/* Contenido */}
                <section className="relative  min-h-[60vh] flex items-center p-4 font-karla container mx-auto lg:w-[80vw]">
                    <div className="flex flex-col lg:flex-row gap-6 text-[#2b5c78] w-full h-full mt-10">
                        {/* Título y texto */}
                        <div className="lg:w-1/2 flex justify-center">
                        <a className={"ms-14 lg:ms-0"} title={"Ver el mapa"} target={"_blank"} href={"https://www.google.com/maps/place/85506+San+Carlos,+Son./data=!4m2!3m1!1s0x86c96319f9360f85:0x544470a59a1fc6d8"}>
                            <SvgSanCarlos/></a>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <div
                                className={"h-[100%] flex flex-col justify-center gap-1 py-2 px-5 rounded-2xl  md:w-[60%] bg-white  transition-all duration-300 "}>
                                {/*HEADER*/}
                                <div className={"text-start font-karla font-bold text-3xl text-[#2b5c78] "}>
                                    <p className={"text-sm lg:text-lg font-medium"}>Tradición, historia y esencia local</p>
                                    <p>Sumérgete en la Cultura de San Carlos</p>
                                </div>
                                {/*BODY*/}
                                <div className={"text-start font-karla"}>
                                    <p className={"text-sm font-medium"}>San Carlos no solo es mar y aventura, también es un destino lleno de historia y cultura. Descubre las raíces de la región a través de la gastronomía, el arte y las tradiciones de su gente. Desde las leyendas del Cerro Tetakawi hasta las festividades locales, cada rincón tiene una historia que contar.</p>
                                </div>
                                {/*CTA*/}
                                <button className={"bg-[#f4c162]/90 hover:bg-[#f4c162] w-1/2 mt-2 p-2 text-white rounded-md"}>
                                    Cultura
                                </button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function Seccion3(){
    return (
        <section className={"w-full h-auto lg:h-[80vh] min-h-[80vh] flex flex-col lg:flex-row items-center  font-karla "}>
            <SectionCard image={algodones.src} color="#a09584" title={"Playa Los Algodones"} description={"Conocida por su arena blanca y aguas cristalinas, esta playa es ideal para nadar, practicar deportes acuáticos o simplemente relajarse bajo el sol."}/>
            <SectionCard image={tetakawi.src} color="#e6690e" title={"Cerro Tetakawi"} description={"Este icónico cerro es el símbolo de San Carlos. Ofrece rutas de senderismo que llevan a la cima, desde donde se obtienen vistas panorámicas impresionantes del Mar de Cortés y los alrededores."}/>
            <SectionCard image={delfinario.src} color="#4f97de" title={"Delfinario Sonora"} description={"Un centro dedicado a la conservación y educación marina, donde los visitantes pueden disfrutar de presentaciones educativas con delfines y lobos marinos, e incluso participar en interacciones directas con estos animales."}/>
        </section>
    )
}

interface SectionCardProps {
    title: string;
    description: string;
    color? : string;
    image? : string;
}


const SectionCard: React.FC<SectionCardProps> = ({title, description, color , image = `${NotFoundImage.src}`}) => (
        <div style={{ backgroundColor: color }} className={`w-full  lg:w-1/3 h-full flex flex-col justify-center items-center gap-3 p-10 text-[#ffffff]`}>
            <div className={"lg:size-2/3 size-80 bg-white rounded-lg relative overflow-hidden"}>
                <Image src={image} alt={title} fill={true} className="object-cover rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"/>
            </div>
            <p className={"text-center text-2xl font-bold font-karla"}>{title}</p>
            <p className={"text-center font-medium text-sm font-karla"}>{description}</p>
    </div>);


