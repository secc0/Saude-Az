import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-health-50 to-white">
      <div className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Saúde acessível para todos os seus colaboradores
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-lg">
              Transforme o bem-estar da sua equipe com nossa plataforma de saúde
              complementar a um custo que cabe no orçamento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="text-base">
                  Contratar Agora
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-base">
                  Conhecer Mais
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-health-600 rounded-full blur-3xl opacity-20 -z-10 transform translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Equipe médica sorrindo"
                className="rounded-2xl shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
