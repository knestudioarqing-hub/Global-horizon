
import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    { text: "243 viajantes explorando Roma agora", icon: "public" },
    { text: "Nova Oferta: Lagos Italianos -15%", icon: "local_offer" },
    { text: "Sarah J. acabou de reservar 'Vinícolas da Toscana'", icon: "wine_bar" },
    { text: "Alerta Climático: Sol radiante em Capri", icon: "wb_sunny" },
    { text: "Consultores criaram 1.204 itinerários hoje", icon: "edit_calendar" }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-100 py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm font-medium text-text-muted px-12">
             <span className="h-2 w-2 rounded-full bg-secondary"></span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
