
import React from "react";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const TestimonialCard = ({ quote, name, role, company, image }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="mb-6">
        <svg className="h-8 w-8 text-health-500" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-slate-700 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div>
          <p className="text-slate-900 font-semibold">{name}</p>
          <p className="text-slate-600 text-sm">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que nossos clientes estão dizendo
          </h2>
          <p className="text-lg text-slate-600">
            Empresas de diversos segmentos já estão transformando a saúde de suas equipes
            com nossa plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard
            quote="Implementar o HealthPlus foi uma das melhores decisões que tomamos. Nossos colaboradores agora têm acesso a cuidados de saúde de qualidade a um custo que cabe no nosso orçamento."
            name="Carlos Silva"
            role="Diretor de RH"
            company="Tech Solutions"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />

          {/* Testimonial 2 */}
          <TestimonialCard
            quote="A facilidade de uso da plataforma e o atendimento de excelência fizeram toda diferença para nossa equipe. Conseguimos oferecer um benefício de saúde sem comprometer nossas finanças."
            name="Ana Rodrigues"
            role="CEO"
            company="Startup Connect"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />

          {/* Testimonial 3 */}
          <TestimonialCard
            quote="Desde que implementamos o HealthPlus, notamos uma redução significativa no absenteísmo e um aumento na satisfação dos colaboradores. O custo-benefício é incrível."
            name="Roberto Almeida"
            role="Gerente Administrativo"
            company="Construtora Horizonte"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
