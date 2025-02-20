import bg from "../../public/images/mainfondo.webp";
import bg2 from "../../public/images/fondo.jpg";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import tetakawi from "../../public/images/tetakawi.jpg";
import delfinario from "../../public/images/delfinario.jpg";
import algodones from "../../public/images/algodones.jpg";

export default function Home() {
  return (
      <>
          <main className="relative max-w-full min-h-screen overflow-x-hidden">
              {/* Imagen optimizada */}
              <Image
                  className={"fixed"}
                  src={bg.src}
                  alt="Fondo"
                  layout="fill"
                  objectFit="cover"
                  priority // Carga optimizada
                  quality={90} // Ajusta calidad si es necesario
              />

              {/* Contenido */}
              <div className="relative z-10 lg:w-[80vw] container mx-auto mt-40 lg:mt-12">
                  <Navbar/>
                  <Hero/>
              </div>
          </main>
          <ConoceSanCarlos/>
          <Seccion2/>
          <Seccion3/>
      </>
  );
}

function ConoceSanCarlos(){
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
                        <a title={"Ver el mapa"} target={"_blank"} href={"https://www.google.com/maps/place/85506+San+Carlos,+Son./data=!4m2!3m1!1s0x86c96319f9360f85:0x544470a59a1fc6d8"}>
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

function SvgSanCarlos() {
    return (
        <svg width="437" height="372" viewBox="0 0 437 372" fill="none" xmlns="http://www.w3.org/2000/svg"
             className={"w-[80%] md:w-full fill-white hover:fill-gray-200 transition-all duration-300"}
        >
            <path
                d="M131 311.5C131.113 311.62 131.226 311.739 131.339 311.857M131.339 311.857C146.585 327.934 152.414 336.041 151.447 341.421C150.969 344.078 147.504 343.963 145.621 342.027L132.053 328.082C131.366 327.376 130.488 326.877 129.517 326.713C124.847 325.923 122.571 326.747 121.19 329.036C119.711 331.487 117.185 333.297 114.356 332.866C101.993 330.981 96.0981 337.323 89.6955 357.384C89.567 357.786 89.3867 358.181 89.1628 358.54L88.3353 359.864C85.9833 363.627 80.2592 362.689 79.2313 358.372L74.7638 339.608C74.5999 338.919 74.8049 338.195 75.3053 337.695V337.695C76.1937 336.806 76.0713 335.336 75.1783 334.452C63.9511 323.344 64.4378 292.32 80.4777 286.57C81.7414 286.117 83.1303 286.416 84.2373 287.176C86.838 288.961 90.1793 291.359 90.5 292C90.8213 292.643 99.9806 291.608 107.2 290.657C109.878 290.305 111.763 287.868 111.465 285.183L111.355 284.191C111.139 282.247 109.807 280.599 107.94 280.015C100.451 277.675 96.9804 277.196 94.3926 278.113C93.7965 278.325 93.3475 278.805 93.0646 279.371V279.371C92.4423 280.615 91.0333 281.263 89.6858 280.915C71.8363 276.307 64.3155 272.03 55.5577 263.54C54.9224 262.924 53.9667 262.767 53.1753 263.162V263.162C52.2254 263.637 51.0702 263.312 50.5073 262.412L49.6418 261.027C49.224 260.358 49.0211 259.578 49.0605 258.791L49.856 242.881C49.9443 241.114 49.032 239.447 47.4959 238.569V238.569C46.8416 238.195 46.1 237.982 45.3468 237.959C29.5021 237.472 22.8319 240.467 17.627 251.043C16.8829 252.555 17.077 254.337 17.9694 255.766C20.2874 259.48 21.6302 262.67 21.9394 269.437C21.9996 270.755 21.42 271.985 20.6788 273.077C19.9218 274.191 19.6125 275.289 19.5 277C19.4764 278.491 19.502 279.784 19.6048 280.951C19.943 284.791 17.514 289.5 13.66 289.5V289.5C11.2872 289.5 9.28944 287.725 9.00988 285.369L6.18499 261.559C6.06456 260.544 5.63594 259.59 4.95686 258.826L3.17702 256.824C2.41553 255.967 1.94537 254.874 1.99337 253.729C2.17038 249.505 3.81519 245.667 8.26443 238.385C8.41937 238.131 8.5588 237.862 8.64876 237.579C9.96294 233.441 8.09463 226.078 1.22696 207.011C0.835472 205.924 1.44384 204.73 2.55466 204.413V204.413C3.41018 204.169 4 203.387 4 202.497V202.125C4 200.901 4.89007 199.859 6.09856 199.669L13.1481 198.556C13.3824 198.519 13.6191 198.5 13.8562 198.5H14.7012C15.2173 198.5 15.7171 198.681 16.1136 199.011V199.011C17.2805 199.984 17.1387 201.817 15.8363 202.598L15.3148 202.911C14.2544 203.547 13.7782 204.835 14.1693 206.008L19.4639 221.892C19.803 222.909 20.5833 223.719 21.5873 224.095L21.7291 224.148C23.0837 224.656 24.6113 224.236 25.5151 223.106V223.106C25.8341 222.707 26.0576 222.241 26.1684 221.742L27.3875 216.256C27.6916 214.888 29.2343 214.205 30.4515 214.901V214.901C31.0998 215.271 31.5 215.961 31.5 216.708V222.69C31.5 224.697 32.6998 226.509 34.5472 227.293L47.4939 232.785C47.8303 232.928 48.1496 233.106 48.4455 233.321C49.7194 234.243 51.7908 235.791 52.5 236.5V236.5C53.2655 237.266 55.0305 235.68 55.3372 236.718L58.7849 248.387C59.3478 250.293 61.7123 250.953 63.2174 249.656C77.013 237.769 84.3505 235.868 93.8025 242.963C94.2557 243.303 94.8082 243.5 95.375 243.5V243.5C96.3646 243.5 97.2629 242.922 97.6724 242.021L98.8705 239.385C99.2539 238.542 100.095 238 101.021 238V238C101.648 238 102.249 238.249 102.692 238.692L103.186 239.186C104.293 240.293 105.941 240.662 107.415 240.133L121.944 234.917C123.538 234.345 124.734 233.005 125.122 231.357L126.321 226.263C126.439 225.757 126.479 225.236 126.438 224.719L124.574 201.428C124.529 200.867 124.829 200.335 125.333 200.084V200.084C125.988 199.756 126.784 199.997 127.148 200.633L127.515 201.275C128.072 202.251 129.283 202.637 130.302 202.164L140.764 197.306C141.823 196.815 142.5 195.753 142.5 194.586V194.586C142.5 193.332 143.28 192.21 144.455 191.774L155.268 187.758C157.874 186.79 159.19 183.882 158.197 181.285L155.009 172.947C154.148 170.695 151.74 169.44 149.4 170.025V170.025C147.147 170.588 144.816 169.446 143.881 167.32L141.327 161.516C140.522 159.686 140.884 157.553 142.248 156.091L145.471 152.639C146.418 151.624 146.755 150.183 146.356 148.853L146.177 148.257C145.777 146.924 146.318 145.489 147.498 144.751V144.751C148.68 144.013 150.214 144.168 151.256 145.093C164.993 157.286 169.217 154.275 170.367 135.089C170.464 133.473 169.741 131.909 168.462 130.915L167.037 129.807C166.383 129.298 166 128.515 166 127.686V126.361C166 125.609 166.609 125 167.361 125V125C168.213 125 168.855 124.226 168.698 123.389L167.84 118.815C167.621 117.644 167.827 116.432 168.422 115.399L175.924 102.368C176.604 101.188 176.705 99.7625 176.199 98.4987L175.882 97.7045C175.356 96.39 175.736 94.8864 176.824 93.98V93.98C177.569 93.359 178 92.4392 178 91.4692V73.5C178 70.7386 180.239 68.5 183 68.5H185.903C188.052 68.5 189.963 67.1251 190.649 65.089C193.345 57.097 195.159 51.5336 193.85 49.6754C193.273 48.8555 192.079 49.374 191.33 50.0402V50.0402C189.583 51.5925 186.841 51.1792 185.587 49.208V49.208C184.912 48.1473 183.751 47.4688 182.495 47.4165L165.292 46.6997C162.614 46.5881 160.5 44.3845 160.5 41.704V37.3699C160.5 34.4682 162.962 32.1758 165.856 32.3826L169.144 32.6174C172.038 32.8242 174.5 30.5318 174.5 27.6301V8.10233C174.5 7.06021 174.826 6.04414 175.431 5.19613L175.504 5.09381C176.443 3.77983 177.958 3 179.573 3H179.782C180.582 3 181.374 3.19536 182.087 3.55898C200.111 12.7478 214.681 16.3215 249.268 17.9019C250.68 17.9664 251.994 18.6415 252.972 19.6611C255.597 22.3967 258.227 23.7943 262.98 24.2901C265.183 24.5199 267 22.6909 267 20.4765V18.4322C267 17.3651 267.865 16.5 268.932 16.5V16.5C269.846 16.5 270.635 15.86 270.823 14.9658L272.367 7.63009C272.455 7.21176 272.597 6.80645 272.788 6.42408L275.073 1.8541C275.335 1.33065 275.87 1 276.455 1V1C277.308 1 278 1.69176 278 2.54509V3.6134C278 4.96506 279.031 6.0937 280.377 6.21607L284.453 6.58661C287.028 6.82073 289 8.98006 289 11.5661V11.7173C289 14.3924 291.106 16.5936 293.778 16.7124L330.374 18.3388C332.402 18.429 334 20.0996 334 22.13V22.13C334 24.6018 336.325 26.4139 338.722 25.8098L389.737 12.9526C392.746 12.1941 395.712 14.3321 395.945 17.427L398.153 46.8739C398.349 49.483 400.523 51.5 403.139 51.5H429.436C432.408 51.5 434.724 54.0774 434.407 57.0327L434.035 60.5089C433.74 63.2622 431.263 65.2515 428.511 64.9457L424.73 64.5256C422.081 64.2312 419.667 66.0671 419.242 68.6989L418.302 74.5278C417.86 77.268 419.735 79.8438 422.478 80.2658L425.582 80.7434C428.302 81.1618 430.172 83.6997 429.767 86.4218L427.728 100.115C427.324 102.823 424.819 104.703 422.107 104.333L421.676 104.274C418.673 103.865 416 106.198 416 109.228V123.362C416 124.085 416.312 124.773 416.856 125.249V125.249C418.281 126.496 417.864 128.81 416.094 129.481L409.631 131.933C407.272 132.828 405.949 135.341 406.547 137.793L409.048 148.047C409.798 151.121 407.529 154.11 404.366 154.234C348.679 156.409 327.54 158.731 314 164.5C292.307 173.531 280.488 178.948 276.198 184.839C274.803 186.755 272.787 188.397 270.435 188.684C266.295 189.19 264.689 190.796 264.14 194.324C264.02 195.092 263.795 195.852 263.355 196.493C257.961 204.358 249.147 206.592 229.906 208.415C229.312 208.471 228.705 208.418 228.127 208.271C219.201 205.999 214.311 207.114 207.568 212.661C206.549 213.499 205.942 214.741 205.885 216.059C205.613 222.393 206.276 226.694 209.357 232.583C210.296 234.378 210.279 236.631 208.831 238.049C206.604 240.231 204.495 240.778 201 240.5V240.5C200.677 240.5 200.361 240.618 200.118 240.829C194.598 245.618 193.287 248.339 194.599 251.698C195.07 252.902 195.354 254.212 194.987 255.451C193.781 259.513 192.24 261.171 189.211 261.775C188.114 261.993 186.982 261.678 186.088 261.006C183.594 259.131 182.104 257.252 180.721 254.128C179.899 252.272 178.173 250.905 176.143 250.942C167.807 251.09 160.692 253.586 147.781 260.327C146.945 260.764 146.25 261.434 145.779 262.252L137 277.5C131.835 287.389 130.544 292.104 132.496 296.275C133.04 297.437 133.39 298.707 133.192 299.974L131.339 311.857Z"
                stroke=""/>
        </svg>
    )
}

function Seccion3(){
    return (
        <section className={"w-full h-[80vh] min-h-[80vh] flex flex-col lg:flex-row items-center  font-karla "}>
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

import NotFoundImage from "../../public/images/not-found.png";

const SectionCard: React.FC<SectionCardProps> = ({title, description, color , image = `${NotFoundImage.src}`}) => (
        <div style={{ backgroundColor: color }} className={`w-full  lg:w-1/3 h-full flex flex-col justify-center items-center gap-3 p-10 text-[#ffffff]`}>
            <div className={"lg:size-2/3 size-80 bg-white rounded-lg relative overflow-hidden"}>
                <Image src={image} alt={title} fill={true} className="object-cover rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"/>
            </div>
            <p className={"text-center text-2xl font-bold font-karla"}>{title}</p>
            <p className={"text-center font-medium text-sm font-karla"}>{description}</p>
    </div>);
