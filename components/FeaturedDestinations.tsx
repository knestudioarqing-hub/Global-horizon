
import React from 'react';
import { DESTINATIONS } from '../constants.tsx';

const FeaturedDestinations: React.FC = () => {
  const [dest1, dest2, dest3, dest4] = DESTINATIONS;

  if (!dest1 || !dest2 || !dest3 || !dest4) return null;

  return (
    <div className="bg-white py-20 px-4 md:px-10 lg:px-40">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Tendências Agora: <span className="text-secondary">Destinos Inesquecíveis</span>
            </h2>
            <p className="text-text-muted">Experiências autênticas escolhidas a dedo para o explorador moderno.</p>
          </div>
          <a className="group flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-all" href="#">
            Ver Todos os Tours 
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[600px]">
          {/* Main Card (Vertical) - Roma */}
          <div className="group relative md:row-span-2 overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all">
            <img 
              src={dest1.image} 
              alt={dest1.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-primary border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {dest1.tag}
              </span>
            </div>
            <div className="absolute bottom-0 p-8 w-full">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{dest1.title}</h3>
                <div className="text-right">
                  <p className="text-xs text-slate-200">A partir de</p>
                  <p className="text-xl font-bold text-white">${dest1.price}</p>
                </div>
              </div>
              <p className="text-sm text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                {dest1.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-green-300 font-medium">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                {dest1.status}
              </div>
            </div>
          </div>

          {/* Wide Card - Veneza */}
          <div className="group relative md:col-span-2 overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all">
            <img 
              src={dest2.image} 
              alt={dest2.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-0 p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{dest2.title}</h3>
                <p className="text-sm text-slate-200 max-w-md">{dest2.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-slate-200">A partir de</p>
                  <p className="text-lg font-bold text-white">${dest2.price}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-white text-primary hover:bg-secondary hover:text-white flex items-center justify-center transition-colors shadow-lg">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Square Cards - Florença e Costa Amalfitana */}
          {[dest3, dest4].map((dest) => (
            <div key={dest.id} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all bg-slate-100">
              <img 
                src={dest.image} 
                alt={dest.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">{dest.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-white">${dest.price}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-200 uppercase tracking-wide border border-white/30 px-2 py-0.5 rounded">
                    {dest.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
