export interface Vacancie {
  id: string;
  title: string;
  region?: string;
  address: string;

  
  salaryMin?: number;
  salaryMax?: number;
  currency?: 'UAH' | 'EUR' | 'USD';

  schedule?: string;
  requirements?: string;
  responsibilities?: string;
  description?: string;

  postedAt?: string;

  contacts?: { // create separate model? 
    phone?: string;
    telegram?: string;
    whatsapp?: string;
    viber?: string;
  };
}
