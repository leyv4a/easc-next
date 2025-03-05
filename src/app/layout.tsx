import type { Metadata } from "next";
import {  Karla,  Liu_Jian_Mao_Cao } from "next/font/google";
import "./globals.css";


const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const logo = Liu_Jian_Mao_Cao({
  weight: "400",
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escapate a San Carlos",
  description: "Descubre las mejores playas, hoteles, restaurantes y aventuras en San Carlos, Sonora. Encuentra dónde hospedarte, qué comer y qué hacer en este paraíso turístico. ¡Planifica tu viaje hoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable}  ${logo.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
