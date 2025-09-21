export interface Vacancie {
  id: number; // +
  title: string; // position +
  region: string; // +
  address?: string; // ?

  salary?: number;
  currency?: 'UAH' | 'EUR' | 'USD';

  schedule?: string; // +
  requirements?: string[]; // +
  responsibilities?: string[]; // +
  description?: string; // +

  postedAt?: string;

  contacts?: { // create separate model? 
    phone?: string;
    telegram?: string;
    whatsapp?: string;
    viber?: string;
  };
}
