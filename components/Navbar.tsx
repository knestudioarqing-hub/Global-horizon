
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${scrolled ? 'top-2' : 'top-6'}`}>
      <div className={`bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-full px-6 py-3 flex items-center justify-between shadow-lg max-w-5xl w-full transition-all ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex items-center gap-3">
          {/* Ícone da marca 'G' estilizado */}
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
            <svg viewBox="0 0 32 32" className="w-6 h-6">
              <path d="M16 6C10.48 6 6 10.48 6 16s4.48 10 10 10 10-4.48 10-10S21.52 6 16 6zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0f172a" />
              <circle cx="16" cy="16" r="4" fill="#BFA15F" />
              <path d="M20 16h2c0-3.31-2.69-6-6-6v2c2.21 0 4 1.79 4 4z" fill="#BFA15F" />
            </svg>
          </div>
          <h2 className="text-lg font-black tracking-tight text-primary">Global Horizon</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-bold hover:text-secondary transition-colors text-text-muted" href="#">Destinos</a>
          <a className="text-sm font-bold hover:text-secondary transition-colors text-text-muted" href="#">Experiências</a>
          <a className="text-sm font-bold hover:text-secondary transition-colors text-text-muted" href="#">Sobre</a>
          <a className="text-sm font-bold hover:text-secondary transition-colors text-text-muted" href="#">FAQ</a>
        </nav>
        <div className="flex gap-3">
          <button className="flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-black text-white hover:bg-secondary transition-all active:scale-95 shadow-md">
            Reservar Agora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
