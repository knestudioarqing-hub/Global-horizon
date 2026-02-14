
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
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold tracking-tight text-primary">Global Horizon</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors text-text-muted" href="#">Destinos</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-text-muted" href="#">Experiências</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-text-muted" href="#">Sobre</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-text-muted" href="#">FAQ</a>
        </nav>
        <div className="flex gap-3">
          <button className="flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white hover:bg-primary-hover transition-all active:scale-95">
            Reservar Agora
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
