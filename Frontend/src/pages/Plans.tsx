
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Plans = () => {
  const plans = [
    {
      id: 1,
      name: "Prime Individual",
      price: "R$ 10,72",
      priceDescription: "por cartão/mês",
      description: "O plano ideal para colaboradores individuais com cobertura ampla",
      features: [
        "Rede TEM Individual com 2 consultas gratuitas por ano",
        "Telemedicina, com e sem coparticipação",
        "Desconto em Farmácia Prime",
        "Check-up anual (frequência de 1,5%)",
        "Exames completos (Hemograma completo, colesterol total, etc.)",
        "Assistência Funeral de R$ 5.000",
        "Nutricionista, Psicólogo e Personal Trainer com App exclusivo",
        "Assistência PET"
      ],
      highlight: false
    },
    {
      id: 2,
      name: "Prime Familiar",
      price: "R$ 24,35",
      priceDescription: "por cartão/mês",
      description: "Cobertura completa para o colaborador e sua família",
      features: [
        "Rede TEM Familiar (titular + até 5 dependentes) com 2 consultas gratuitas por ano",
        "Telemedicina, com e sem coparticipação",
        "Desconto em Farmácia Prime",
        "Check-up anual (frequência de 3,5%)",
        "Exames completos (igual ao Prime Individual)",
        "Assistência Funeral de R$ 5.000",
        "Nutricionista, Psicólogo e Personal Trainer com App exclusivo",
        "Assistência PET"
      ],
      highlight: true
    },
    {
      id: 3,
      name: "Premium Individual",
      price: "R$ 6,04",
      priceDescription: "por cartão/mês",
      description: "Serviços essenciais de saúde para colaboradores individuais",
      features: [
        "Rede TEM Individual com 2 consultas gratuitas por ano",
        "Desconto em farmácia regular",
        "Telemedicina, com e sem coparticipação",
        "Assistência Funeral de R$ 3.000",
        "Nutricionista, Psicólogo e Personal Trainer com App exclusivo"
      ],
      highlight: false
    },
    {
      id: 4,
      name: "Premium Familiar",
      price: "R$ 9,49",
      priceDescription: "por cartão/mês",
      description: "Cobertura essencial para o colaborador e dependentes",
      features: [
        "Rede TEM Familiar (titular + até 3 dependentes) com 2 consultas gratuitas por ano",
        "Desconto em farmácia regular",
        "Telemedicina, com e sem coparticipação",
        "Assistência Funeral de R$ 3.000",
        "Nutricionista, Psicólogo e Personal Trainer com App exclusivo"
      ],
      highlight: false
    },
    {
      id: 5,
      name: "Essencial",
      price: "R$ 3,40",
      priceDescription: "por cartão/mês",
      description: "Acesso básico à telemedicina e consultas para colaboradores",
      features: [
        "Telemedicina Individual, com e sem coparticipação",
        "2 consultas gratuitas por ano",
        "Desconto em Farmácia Prime",
        "Nutricionista, Psicólogo e Personal Trainer com App exclusivo"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-health-50 to-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Nossos Planos
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                Escolha o plano ideal para sua empresa e proporcione saúde complementar acessível para seus colaboradores
              </p>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`flex flex-col h-full ${
                    plan.highlight 
                      ? "border-health-600 shadow-lg shadow-health-100" 
                      : "border-slate-200"
                  }`}
                >
                  <CardHeader className={`${plan.highlight ? "bg-health-50" : ""}`}>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-health-600" />
                      <span>Clube AZ – {plan.name}</span>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <p className="text-3xl font-bold text-slate-900">{plan.price}</p>
                      <p className="text-sm text-slate-600">{plan.priceDescription}</p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-health-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/register" className="w-full">
                      <Button 
                        className={`w-full ${
                          plan.highlight 
                            ? "bg-health-600 hover:bg-health-700" 
                            : ""
                        }`}
                      >
                        Contratar Agora
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Acesso Digital Completo</h2>
              <p className="text-slate-700 mb-6">
                Todos os planos do Clube AZ incluem acesso via celular e computador, com login exclusivo para acompanhamento de uso e dados de saúde. Seus colaboradores terão todas as informações na palma da mão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1616593871468-2a9452218369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="App Saúde AZ" 
                  className="w-full sm:w-1/3 h-auto rounded-lg shadow-sm object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Aplicativo Exclusivo</h3>
                  <p className="text-slate-700">
                    Nosso aplicativo permite que seus colaboradores agendem consultas, acessem telemedicina, visualizem histórico médico e obtenham descontos em medicamentos, tudo em um só lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-health-600">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Pronto para oferecer saúde de qualidade?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Contrate agora um de nossos planos e proporcione aos seus colaboradores acesso a serviços de saúde de qualidade com preços acessíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button variant="secondary" size="lg">
                    Cadastre sua Empresa
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                    Fale com um Consultor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Plans;
