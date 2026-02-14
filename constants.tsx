
import { Destination, Benefit, Vehicle } from './types.ts';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Roma Imperial',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2596&auto=format&fit=crop',
    tag: 'Mais Avaliado',
    status: 'Disponibilidade Confirmada',
    description: 'Explore o Coliseu e o Fórum Romano com acesso VIP exclusivo e um guia historiador privado.'
  },
  {
    id: '2',
    title: 'Veneza Romântica',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2670&auto=format&fit=crop',
    description: 'Passeio de gôndola privativo ao pôr do sol pelos canais escondidos e estadia em um autêntico palácio veneziano.'
  },
  {
    id: '3',
    title: 'Renascimento em Florença',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?q=80&w=2574&auto=format&fit=crop',
    category: 'Arte & Cultura'
  },
  {
    id: '4',
    title: 'Costa Amalfitana',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2572&auto=format&fit=crop',
    category: 'Luxo Mediterrâneo'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Roteiros Sob Medida',
    description: 'Itinerários planejados cuidadosamente com base nas suas preferências pessoais.',
    icon: 'edit_note'
  },
  {
    id: 'b2',
    title: 'Experiências Autênticas',
    description: 'Detalhes reais e curadoria de especialistas sobre seus hotéis e excursões.',
    icon: 'travel_explore'
  },
  {
    id: 'b3',
    title: 'Carbono Neutro',
    description: 'Viagens 100% compensadas para um futuro sustentável através dos nossos parceiros globais.',
    icon: 'eco'
  },
  {
    id: 'b4',
    title: 'Reserva Segura e Rápida',
    description: 'Garanta o seu lugar com segurança e rapidez através de nossa plataforma simplificada.',
    icon: 'verified_user'
  }
];

export const VEHICLES: Vehicle[] = [
  {
    id: 'v1',
    brand: 'Jeep',
    model: 'Compass Limited',
    pricePerDay: 450,
    image: 'https://i.imgur.com/rcXxvNq.jpeg',
    transmission: 'Automático',
    passengers: 5,
    category: 'SUV Premium'
  },
  {
    id: 'v2',
    brand: 'Volkswagen',
    model: 'Taos Highline',
    pricePerDay: 420,
    image: 'https://i.imgur.com/QfaGZav.jpeg',
    transmission: 'Automático',
    passengers: 5,
    category: 'SUV Conforto'
  },
  {
    id: 'v3',
    brand: 'Toyota',
    model: 'Corolla Cross XRE',
    pricePerDay: 480,
    image: 'https://i.imgur.com/QIWdydN.jpeg',
    transmission: 'Automático',
    passengers: 5,
    category: 'SUV Híbrido'
  },
  {
    id: 'v4',
    brand: 'Jeep',
    model: 'Renegade Longitude',
    pricePerDay: 350,
    image: 'https://i.imgur.com/CDYK9ku.jpeg',
    transmission: 'Automático',
    passengers: 5,
    category: 'Compact SUV'
  },
  {
    id: 'v5',
    brand: 'Volkswagen',
    model: 'T-Cross Highline',
    pricePerDay: 380,
    image: 'https://i.imgur.com/4JWYuA0.jpeg',
    transmission: 'Automático',
    passengers: 5,
    category: 'Dynamic SUV'
  },
  {
    id: 'v6',
    brand: 'Toyota',
    model: 'SW4 Diamond',
    pricePerDay: 850,
    image: 'https://i.imgur.com/sPeh3i3.jpeg',
    transmission: 'Automático',
    passengers: 7,
    category: 'Luxo 4x4'
  }
];
