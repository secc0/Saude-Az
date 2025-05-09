
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona o serviço de saúde complementar?",
    answer:
      "Nossa plataforma oferece acesso a uma rede de profissionais e serviços de saúde a preços acessíveis. A empresa contrata o serviço e seus colaboradores ganham acesso a consultas médicas, exames laboratoriais, telemedicina e outros serviços com valores reduzidos.",
  },
  {
    question: "Qual o valor médio de investimento por colaborador?",
    answer:
      "O investimento varia conforme o tamanho da empresa e o pacote escolhido, mas em média é 60-70% menor que planos de saúde tradicionais. Entre em contato para receber uma proposta personalizada para sua empresa.",
  },
  {
    question: "Precisamos ter um número mínimo de colaboradores?",
    answer:
      "Não! Nossa solução foi desenvolvida para atender empresas de todos os portes, desde startups com poucos colaboradores até grandes corporações. Temos pacotes flexíveis que se adaptam à sua realidade.",
  },
  {
    question: "Os dependentes dos colaboradores também podem ser incluídos?",
    answer:
      "Sim, oferecemos a opção de incluir dependentes (cônjuge e filhos) mediante um adicional por pessoa. Assim, toda a família do colaborador pode se beneficiar dos serviços.",
  },
  {
    question: "Quais especialidades médicas estão disponíveis na rede?",
    answer:
      "Nossa rede inclui as principais especialidades como clínica geral, pediatria, ginecologia, cardiologia, ortopedia, psicologia, nutrição, entre outras. Também oferecemos serviços de telemedicina 24 horas.",
  },
  {
    question: "Existe carência para começar a utilizar os serviços?",
    answer:
      "Não há carência para consultas e exames básicos. Para alguns procedimentos específicos pode haver um período de carência de 30 a 90 dias, dependendo do tipo de serviço.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre nossa plataforma de saúde complementar para empresas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
