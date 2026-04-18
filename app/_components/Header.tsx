"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'sobre', 'atividades', 'contato'];
            let current = 'inicio';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2.5) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function scrollTo(id: string) {
        const scroll = document.getElementById(id);
        if (scroll) scroll.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur-md flex items-center justify-between px-8 py-4 border-b border-brand-gray-medium">
            {/* Trocamos o h2 pela Image */}
            <div className="cursor-pointer md:flex gap-2 content-normal" onClick={() => scrollTo('inicio')}>
                <Image 
                    src="/icone2.png" // Certifique-se de que o caminho para a imagem está correto
                    alt="Logo LAUF" 
                    width={60} // Ajuste o tamanho conforme necessário
                    height={60} 
                    className="object-contain"
                />
                <span>LAUF</span>
            </div>

            <div className="hidden md:flex gap-2 p-1 bg-brand-gray-light rounded-full border border-brand-gray-medium/60 shadow-inner">
                {['inicio', 'sobre', 'atividades', 'contato'].map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollTo(item)}
                        className={`capitalize font-medium px-6 py-2 rounded-full transition-all duration-300 ${activeSection === item
                            ? "bg-gradient-to-r from-brand-purple to-brand-purple-hover text-white shadow-md shadow-brand-purple/20 scale-105"
                            : "text-brand-text hover:text-brand-purple hover:bg-brand-gray-medium"
                            }`}
                    >
                        {item === 'inicio' ? 'Início' : item}
                    </button>
                ))}
            </div>

            <button className="cursor-pointer bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-purple-hover transition-all hover:scale-105 shadow-md shadow-brand-purple/20">
                Área do Membro
            </button>
        </nav>
    );
}