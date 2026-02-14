
import React from 'react';
import { BENEFITS } from '../constants.tsx';

const iconMap: Record<string, React.ReactNode> = {
  edit_note: <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z" />,
  travel_explore: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  eco: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  verified_user: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
};

const Benefits: React.FC = () => {
  return (
    <div className="bg-background-subtle py-24 px-4 md:px-10 lg:px-40">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-primary leading-[1.1]">
            Por que escolher a <br/>
            <span className="text-secondary">Global Horizon</span>?
          </h2>
          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            Combinamos paixão por viagens com conhecimento local para criar experiências perfeitas e personalizadas.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95">
              Saiba Mais
            </button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-secondary/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {iconMap[benefit.icon]}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-main mb-2">{benefit.title}</h3>
              <p className="text-sm text-text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
