// src/pages/Teste.tsx
import React from "react";
import useApiMessage from "../hooks/hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Teste = () => {
  const mensagem = useApiMessage(); // assume que retorna um array de livros

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Livros da API</h1>

          {mensagem.length === 0 ? (
            <p className="text-lg text-slate-700">Carregando...</p>
          ) : (
            <ul className="space-y-2">
              {mensagem.map((livro) => (
                <li key={livro.id} className="border p-4 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold">{livro.titulo}</h2>
                  <p className="text-slate-600">Autor: {livro.autor}</p>
                  <p className="text-slate-600">Tema: {livro.tema}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Teste;
