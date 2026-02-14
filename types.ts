
export interface Destination {
  id: string;
  title: string;
  price: number;
  image: string;
  tag?: string;
  category?: string;
  description?: string;
  status?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  pricePerDay: number;
  image: string;
  transmission: string;
  passengers: number;
  category: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  stars: number;
  highlight: string;
}
