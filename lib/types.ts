export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  cta: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Transformation {
  name: string;
  timeframe: string;
  result: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  billingNote: string;
  bestFor: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
