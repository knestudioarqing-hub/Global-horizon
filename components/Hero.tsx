
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-105" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2574&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-4 md:px-10 lg:px-40 flex flex-col items-center text-center mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8">
          <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-white">Nova Coleção 2026</span>
          <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </div>
        
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-lg">
          Experiencie a Itália <br/>
          <span className="text-white/95 italic font-serif opacity-90">como nunca antes</span>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-slate-100 mb-10 font-medium leading-relaxed drop-shadow-md">
          Roteiros personalizados e experiências autênticas curadas por especialistas locais para o viajante exigente.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button className="h-14 px-10 rounded-full bg-white text-primary font-bold text-sm md:text-base hover:bg-slate-100 hover:scale-105 transition-all shadow-xl active:scale-95">
            Encontrar Destinos
          </button>
          <button className="h-14 px-10 rounded-full bg-white/10 text-white font-bold text-sm md:text-base border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center gap-3 group active:scale-95">
            <img 
              alt="Specialist" 
              className="w-7 h-7 rounded-full bg-slate-100 border border-white/40 group-hover:scale-110 transition-transform" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5YVkL1iVpeNHjTGVU9XT17hXElsn32GWLPvWInkDUIj07wgkeXUTPbc179zl9tBk3h30Nih6BFJFvRsCyE9in5lMCsn7v5CnUkc5D_GXhKvH7W-9zj-xgUj_9WtNFsx43edkP7buvW5dhq4YQmi-iETjoLr_DYo7dXyz-iDwndk24u-7_dftGnvhLZjBE2O-LP6m8HUsJotJDvwTFnKfBFOQXwe0ahcWpOrCTO0pt8EJ0_FjbPh23NI78oAkxKehvMB5nv6g2Qcgd"
            />
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
