
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Benefits Section */}
        <Benefits />

        {/* How It Works Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Como funciona
              </h2>
              <p className="text-lg text-slate-600">
                Implementar nossa plataforma de saúde complementar é simples e rápido
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-5">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cadastre-se</h3>
                <p className="text-slate-600">
                  Preencha o formulário com os dados da sua empresa e crie sua conta em poucos minutos.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-5">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Adicione colaboradores
                </h3>
                <p className="text-slate-600">
                  Importe ou cadastre manualmente os dados dos seus colaboradores na plataforma.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-health-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-5">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Comece a utilizar
                </h3>
                <p className="text-slate-600">
                  Pronto! Seus colaboradores já podem aproveitar todos os benefícios da plataforma.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/register">
                <Button size="lg">Começar Agora</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-health-600 to-health-700">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para transformar a saúde na sua empresa?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Junte-se a centenas de empresas que já estão oferecendo benefícios de saúde 
                acessíveis para seus colaboradores.
              </p>
              <Link to="/register">
                <Button variant="secondary" size="lg" className="font-medium">
                  Contratar Agora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
