export type EventCategory =
  | 'All'
  | 'Weddings'
  | 'Pre-Wedding'
  | 'Events'
  | 'Portraits'
  | 'Baby & Kids'
  | 'Cinematic';

export interface StudioInfo {
  name: string;
  tagline: string;
  subTagline: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  youtubeUrl: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  workingHours: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  imageUrl: string;
  badge?: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: EventCategory;
  location: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  featuredStory?: string;
  tags: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  samplePriceDisplay: string;
  isPopular?: boolean;
  idealFor: string;
  deliverables: string[];
  coverage: string;
  customizableNotice: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  coupleName?: string;
  eventType: string;
  eventLocation: string;
  rating: number;
  avatarUrl: string;
}

export interface InstagramFeedItem {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  packagePreference?: string;
  estimatedBudget?: string;
  message: string;
}
