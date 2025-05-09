// src/pages/Teste.tsx
import React from "react";
import useApiMessage from "../hooks/hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Teste = () => {
  const mensagem = useApiMessage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Mensagem da API</h1>
          <p className="text-lg text-slate-700">
            {mensagem || "Carregando..."}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Teste;
