
import React from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophia Martins',
    location: 'São Paulo, Brasil',
    text: 'A curadoria da Global Horizon transformou nossa viagem à Itália. O acesso VIP ao Coliseu sem filas e o jantar privativo em uma vinícola na Toscana foram momentos que guardaremos para sempre.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop',
    rating: 5,
    destination: 'Roma & Toscana'
  },
  {
    id: 2,
    name: 'Ricardo Santos',
    location: 'Lisboa, Portugal',
    text: 'Profissionalismo impecável. O concierge esteve disponível 24/7 para ajustar nosso itinerário em Veneza. Superou todas as expectativas de uma viagem de luxo.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop',
    rating: 5,
    destination: 'Veneza Romântica'
  },
  {
    id: 3,
    name: 'Beatriz Lima',
    location: 'Rio de Janeiro, Brasil',
    text: 'Explorar a Costa Amalfitana em um iate privado recomendado pela Global foi o ponto alto do meu ano. A atenção aos detalhes é o que os diferencia de qualquer outra agência.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop',
    rating: 5,
    destination: 'Costa Amalfitana'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-10 lg:px-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary mb-4">
            Histórias de <span className="text-secondary">Viajantes</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-medium">
            O que nossos clientes mais exigentes dizem sobre suas experiências personalizadas ao redor do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="bg-background-subtle p-8 rounded-3xl border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-secondary text-sm fill-1">star</span>
                ))}
              </div>
              
              <blockquote className="flex-grow">
                <p className="text-text-main text-lg font-medium leading-relaxed italic mb-8">
                  "{item.text}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4 mt-4 pt-6 border-t border-slate-200/60">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-primary leading-tight">{item.name}</h4>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{item.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="bg-primary/5 px-8 py-4 rounded-full flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Avatar"
                />
              ))}
            </div>
            <p className="text-sm font-bold text-primary">
              <span className="text-secondary">+150</span> viajantes satisfeitos este mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
