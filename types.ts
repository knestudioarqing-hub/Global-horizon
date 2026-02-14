
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
