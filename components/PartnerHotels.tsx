
import React from 'react';
import { HOTELS } from '../constants.tsx';

const PartnerHotels: React.FC = () => {
  return (
    <section className="bg-background-light py-24 px-4 md:px-10 lg:px-40">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[13px] font-extrabold text-secondary uppercase tracking-[0.3em] mb-4">
              HOSPEDAGEM DE ELITE
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight">
              Hotéis <span className="text-secondary italic">Parceiros</span>
            </h3>
            <p className="text-text-muted text-lg mt-4 leading-relaxed">
              Uma seleção rigorosa das propriedades mais icônicas do mundo, com benefícios exclusivos reservados apenas para clientes Global Horizon.
            </p>
          </div>
          <button className="px-8 py-4 border-2 border-primary text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-full hidden md:block">
            Ver Portfólio Completo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {HOTELS.map((hotel) => (
            <div key={hotel.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <div className="bg-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Horizon Select
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-secondary text-xs fill-1">star</span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-black mb-1 group-hover:text-secondary transition-colors">{hotel.name}</h4>
                  <p className="text-sm font-medium text-slate-300 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {hotel.location}
                  </p>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <span className="material-symbols-outlined text-secondary text-lg">verified</span>
                  {hotel.highlight}
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Desfrute de hospitalidade incomparável com o tratamento VIP que você merece.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <button className="w-full py-5 border-2 border-primary text-primary font-black text-xs uppercase tracking-widest rounded-2xl">
            Ver Portfólio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerHotels;
