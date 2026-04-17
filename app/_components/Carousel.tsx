"use client";

import { useState } from "react";

export default function Carousel() {
    const imagens = [
        "/assets/lauf-logo.jpg",
        "/assets/lauf-logo-branco.jpg",
        "/assets/lauf-logo.jpg",
    ]
    const [imagemAtual, setImagemAtual] = useState(0)

    const proximaImagem = () => {
        setImagemAtual((prev) => (prev + 1) % imagens.length)
    }

    const imagemAnterior = () => {
        setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length)
    }
    return (  
        <section className="px-8 py-16 bg-black text-white text-center">
            <h2 className="text-3xl font-bold mb-4"></h2>
            <div>
            <img 
                key={imagemAtual}
                src={imagens[imagemAtual]}
                alt={`Lauf Logo ${imagemAtual + 1}`}
                className="w-full h-[400px] object-contain rounded-xl shadow-lg transition-all duration-700 animate-in fade-in"/>
            <button
                onClick={imagemAnterior}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-opacity duration-300 z-10" >
               ◀ 
            </button>
            <button
                onClick={proximaImagem}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition duration-300 z-10" >
               ▶ 
            </button>

            </div>
        </section>
    )
}