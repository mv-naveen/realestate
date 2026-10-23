export type PropertyCategory = 'Apartment' | 'Villa' | 'Plots';

export type ChennaiZone = 'Chennai North' | 'Chennai South' | 'Chennai Central' | 'OMR & ECR';

export type PriceBracket = 'all' | 'below_1cr' | '1cr_to_2cr' | 'above_2cr';

export interface Property {
  id: string;
  title: string;
  developer: string;
  category: PropertyCategory;
  zone: ChennaiZone;
  locality: string;
  priceInRupees: number;
  priceDisplay: string;
  pricePerSqFt: number;
  bhk: number; // 0 for plots
  areaSqFt: number;
  imageUrl: string;
  possession: string;
  reraId: string;
  featured?: boolean;
  highlights: string[];
  description: string;
  amenities: string[];
}

export interface RewardCategory {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  partnerOffer: string;
  samplePartners: string[];
  iconName: string;
}

export interface EnquiryRecord {
  id: string;
  propertyId: string;
  propertyTitle: string;
  propertyLocality: string;
  buyerName: string;
  mobileNumber: string;
  email: string;
  preferredDate: string;
  timeSlot: string;
  pickupRequired: boolean;
  status: 'Received' | 'Advisor Assigned' | 'Site Visit Confirmed' | 'Completed' | 'Cancelled';
  assignedAdvisor: string;
  advisorWhatsApp: string;
  submittedAt: string;
}

export interface InvestorApplication {
  id: string;
  name: string;
  mobile: string;
  email: string;
  isVC: boolean;
  vcName?: string;
  fundSize?: string;
  investmentThesis: string;
  submittedAt: string;
}

export type ActivePage = 'home' | 'listings' | 'rewards' | 'partners' | 'investors' | 'about';
