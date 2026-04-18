"use client";
import Image from "next/image"; // Importação necessária

export default function Header() {
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

            <div className="hidden md:flex gap-8">
                {['inicio', 'sobre', 'atividades', 'contato'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollTo(item)} 
                        className="capitalize font-medium text-brand-black hover:text-brand-purple transition-colors"
                    >
                        {item === 'inicio' ? 'Início' : item}
                    </button>
                ))}
            </div>
            <button className="bg-brand-purple text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-purple-hover transition">
                Membro
            </button>
        </nav>
    );
}