"use client";

export default function Header() {
    function scrollTo(id:string) {
        const scroll = document.getElementById(id);
        if (scroll) scroll.scrollIntoView({behavior: 'smooth'}) 
    }
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Lauf</h2>
            <div className="flex gap-6">
                <button onClick={() => scrollTo('inicio')} className="hover:text-purple-700 text-white transition">Início</button>
                <button onClick={() => scrollTo('sobre')} className="hover:text-purple-700 text-white transition">Sobre</button>
                <button onClick={() => scrollTo('beneficios')} className="hover:text-purple-700 text-white transition">Benefícios</button>
                <button onClick={() => scrollTo('contato')} className="hover:text-purple-700 text-white transition">Contato</button>
            </div>
        </nav>
    )
}