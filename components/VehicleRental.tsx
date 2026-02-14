
import React from 'react';
import { VEHICLES } from '../constants.tsx';

const VehicleRental: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-10 lg:px-40 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            {/* Refined golden header to match the provided image */}
            <h2 className="text-[13px] font-extrabold text-secondary uppercase tracking-[0.3em] mb-4 drop-shadow-sm">
              ALÉM DO VIAGEM
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight">
              Mobilidade <span className="text-secondary italic">Sem Fronteiras</span>
            </h3>
            <p className="text-text-muted text-lg mt-4 leading-relaxed">
              Alugue veículos premium diretamente em sua chegada. Liberdade total para explorar cada quilômetro do seu destino com conforto e estilo.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="w-10 h-10 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[9px] font-black text-slate-400 shadow-sm uppercase">JEEP</span>
              <span className="w-10 h-10 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[9px] font-black text-slate-400 shadow-sm uppercase">VW</span>
              <span className="w-10 h-10 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[9px] font-black text-slate-400 shadow-sm uppercase">TOY</span>
            </div>
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Frotas 2026 Disponíveis</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VEHICLES.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                  {vehicle.category}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[11px] font-extrabold text-secondary uppercase tracking-[0.2em] mb-2">{vehicle.brand}</p>
                    <h4 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors duration-300">{vehicle.model}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-text-muted uppercase font-bold tracking-tighter">Diária</p>
                    <p className="text-2xl font-black text-primary">R$ {vehicle.pricePerDay}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10 py-6 border-y border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-xl">settings</span>
                    </div>
                    <span className="text-xs font-bold text-text-muted">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-xl">group</span>
                    </div>
                    <span className="text-xs font-bold text-text-muted">{vehicle.passengers} Lugares</span>
                  </div>
                </div>

                <button className="w-full py-5 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-secondary hover:translate-y-[-2px] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/10 hover:shadow-secondary/20">
                  Reservar Veículo
                  <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-primary rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-125"></div>
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Precisa de um <span className="text-secondary">motorista privado?</span></h4>
            <p className="text-slate-400 text-lg">Oferecemos serviço de transfer exclusivo e motoristas bilíngues treinados para garantir sua total comodidade e segurança.</p>
          </div>
          <button className="relative z-10 px-12 py-5 rounded-full bg-secondary text-white font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl active:scale-95 whitespace-nowrap">
            Adicionar Motorista
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleRental;
