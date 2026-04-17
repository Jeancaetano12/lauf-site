"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";

const imagens = [image1, image2, image3, image4, image5];

export default function Carousel() {
    const [imagemAtual, setImagemAtual] = useState(0);

    const proximaImagem = () => {
        setImagemAtual((prev) => (prev + 1) % imagens.length);
    };

    const imagemAnterior = () => {
        setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    // Auto-play opcional ou botões:
    useEffect(() => {
        const interval = setInterval(proximaImagem, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-brand-purple/20 bg-brand-black aspect-[4/3] group">
            { imagens.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === imagemAtual ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <Image
                        src={img}
                        alt={`Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                        placeholder="blur"
                    />
                </div>
            ))}
            
            {/* Overlay gradiente para contraste em controles */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>

            <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-purple text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 shadow-lg" 
                aria-label="Imagem Anterior"
            >
               ◀ 
            </button>
            <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-purple text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 shadow-lg" 
                aria-label="Próxima Imagem"
            >
               ▶ 
            </button>
            
            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {imagens.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setImagemAtual(index)}
                        className={`transition-all bg-white rounded-full ${
                            index === imagemAtual ? "w-8 h-2.5 opacity-100" : "w-2.5 h-2.5 opacity-50 hover:opacity-80"
                        }`}
                        aria-label={`Ir para a imagem ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}