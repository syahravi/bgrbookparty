// TypeScript types for Baserow data

export interface BaserowStat {
  id: number;
  icon: string;
  label: string;
  value: string;
  order: number;
}

export interface BaserowEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  order: number;
}

export interface BaserowTestimonial {
  id: number;
  name: string;
  text: string;
  role: string;
  rating: number;
  is_active: boolean;
  order: number;
}

export interface HomePageData {
  stats: BaserowStat[];
  events: BaserowEvent[];
  testimonials: BaserowTestimonial[];
}
