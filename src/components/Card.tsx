"use client";

import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {
  frases: string[];
};

export default function MainCard({ frases }: Props) {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [fraseAtual, setFraseAtual] = useState("Carregando...");

  function randomizarFrase(frases: string[]) {
    const index = Math.floor(Math.random() * frases.length);
    return frases[index];
  }

  useEffect(() => {
    setFraseAtual(randomizarFrase(frases));

    const intervalo = setInterval(() => {
      setFraseAtual(randomizarFrase(frases));
    }, 5000);

    return () => clearInterval(intervalo);
  }, [frases]);

  return (
    <div className="w-[400px] max-w-md rounded-lg overflow-hidden p-5 shadow-2xl">
      {/* Header */}
      <div className="mb-2 mt-2">
        <iframe
          style={{ borderRadius: "10px" }}
          src="https://open.spotify.com/embed/playlist/6VcHnF4WQqhykmpuDoigHq?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
          className="block"
        ></iframe>
      </div>

      <hr className="border-gray-300" />

      {/* Content */}
      <div
        style={{ borderRadius: "10px" }}
        className="mt-2 mb-2 overflow-hidden"
      >
        <Carousel opts={{ loop: true }} plugins={[autoplay.current]}>
          <CarouselContent>
            {[1, 2, 3, 4].map((i) => (
              <CarouselItem key={i}>
                <div
                  style={{ borderRadius: "10px" }}
                  className="h-[500px] w-full relative overflow-hidden"
                >
                  <Image
                    src={`/${i}.jpg`}
                    alt={`Imagem ${i}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Footer */}
      <div className="p-4 bg-white w-full h-[100px] text-center flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 select-none">{fraseAtual}</p>
      </div>
    </div>
  );
}
