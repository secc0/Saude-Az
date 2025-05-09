
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-health-50 to-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Sobre o HealthPlus Empresarial
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                Nossa missão é democratizar o acesso a serviços de saúde de qualidade para empresas de todos os portes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
                <p className="text-slate-700 mb-4">
                  Fundada em 2020, a HealthPlus nasceu da percepção de que muitas empresas, especialmente as de pequeno e médio porte, enfrentam dificuldades para oferecer benefícios de saúde aos seus colaboradores devido aos altos custos dos planos tradicionais.
                </p>
                <p className="text-slate-700 mb-4">
                  Nossa equipe de profissionais de saúde e tecnologia se uniu com um objetivo claro: criar uma solução acessível que pudesse atender às necessidades básicas de saúde dos trabalhadores sem comprometer o orçamento das empresas.
                </p>
                <p className="text-slate-700">
                  Hoje, atendemos centenas de empresas em todo o Brasil, proporcionando acesso a uma rede qualificada de profissionais e serviços de saúde a preços acessíveis.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-health-600 rounded-full blur-3xl opacity-20 -z-10 transform translate-y-4"></div>
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipe HealthPlus"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa Missão e Valores</h2>
              <p className="text-xl text-slate-700">
                Guiamos nossas decisões e ações por princípios sólidos voltados para o bem-estar das pessoas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="bg-health-100 text-health-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Acessibilidade</h3>
                <p className="text-slate-600">
                  Acreditamos que todos merecem acesso a cuidados de saúde de qualidade, independentemente do tamanho ou orçamento da empresa.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="bg-health-100 text-health-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Qualidade</h3>
                <p className="text-slate-600">
                  Mantemos o compromisso com a excelência em todos os serviços oferecidos, selecionando criteriosamente nossa rede de parceiros.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="bg-health-100 text-health-600 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Transparência</h3>
                <p className="text-slate-600">
                  Prezamos pela clareza em todos os nossos processos, desde os custos até o funcionamento dos serviços oferecidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa Equipe</h2>
              <p className="text-xl text-slate-700">
                Conheça os profissionais dedicados que estão transformando o acesso à saúde no Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Marcelo Santos"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  Marcelo Santos
                </h3>
                <p className="text-health-600 font-medium mb-3">CEO & Co-Fundador</p>
                <p className="text-slate-600 text-sm">
                  Mais de 15 anos de experiência em gestão de saúde e tecnologia, com passagens por grandes operadoras de saúde do país.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Ana Oliveira"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  Ana Oliveira
                </h3>
                <p className="text-health-600 font-medium mb-3">Diretora Médica</p>
                <p className="text-slate-600 text-sm">
                  Médica com especialização em Saúde Pública e MBA em Gestão de Saúde, liderando nossa equipe médica e de parcerias.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Ricardo Lima"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  Ricardo Lima
                </h3>
                <p className="text-health-600 font-medium mb-3">CTO</p>
                <p className="text-slate-600 text-sm">
                  Engenheiro de software com mais de uma década de experiência em soluções tecnológicas para a área de saúde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-health-600">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Faça parte dessa transformação
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Junte-se a centenas de empresas que já estão proporcionando acesso à saúde de qualidade para seus colaboradores.
              </p>
              <Link to="/register">
                <Button variant="secondary" size="lg">
                  Comece Agora
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

export default About;
