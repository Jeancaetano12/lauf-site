"use client";
import Image from "next/image";
import Header from "./_components/Header";
export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />

      <section
        id="inicio"
        className="flex flex-col items-center justify-center text-center px-8 h-[80vh] bg-slate-900 text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Lauf</h1>
        <p className="text-lg max-w-2xl mb-6">
          Liga focada em aprendizado de eletrônica
        </p>
        <button
          onClick={() => scrollTo('contato')}
          className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg transition"
        >
          Começar
        </button>
      </section>

      <section id="sobre" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <p className="max-w-2xl mx-auto text-lg">
          A Lauf é uma liga acadêmica focada em ensido e aprendizado.
        </p>
      </section>

      <section id="beneficios" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Benefícios</h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Eletronica</h3>
            <p>....</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Arduíno</h3>
            <p>....</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Prática</h3>
            <p>....</p>
          </div>
        </div>
      </section>

      <section id="contato" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <p className="mb-6">Vamos conversar sobre a Lauf.</p>

        <a
          href="#"
          className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg transition"
        >
          Fale conosco
        </a>
      </section>
    </main>
  )
}

