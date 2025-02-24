"use client"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function SponsorCarousel(){
    return (
        <div className={"container mx-auto px-16 my-5"}>
            <p className={"font-karla text-center italic font-bold text-2xl mb-2"}>No te lo pierdas: descubre estos
                imperdibles de San Carlos. </p>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    })
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({length: 5}).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}