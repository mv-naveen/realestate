import { RewardCategory } from '../types';

export const REWARD_CATEGORIES: RewardCategory[] = [
  {
    id: 1,
    number: '01',
    title: 'Exclusive Grocery Offers',
    subtitle: 'from Supermarket Partners',
    description: 'Everyday essentials at special prices for our TERVOONE community members.',
    partnerOffer: 'Up to 15% flat savings on monthly grocery baskets & priority delivery slots.',
    samplePartners: ['Spencer’s Retail', 'Nilgiris', 'Nature’s Basket', 'Blinkit Verified'],
    iconName: 'ShoppingCart'
  },
  {
    id: 2,
    number: '02',
    title: 'Car & Bike Exclusive Deals',
    subtitle: 'from Selected Dealerships',
    description: 'Special deals, cash discounts and accessories package benefits on cars and bikes for our community.',
    partnerOffer: 'Exclusive corporate fleet pricing, ₹25,000 free accessories, and preferential loan rates.',
    samplePartners: ['Tata Motors Authorized', 'Hyundai Motor Plaza', 'Honda Two-Wheelers', 'Ather Energy'],
    iconName: 'Car'
  },
  {
    id: 3,
    number: '03',
    title: 'Premium Credit Card Perks',
    subtitle: 'from Our Banking Partners',
    description: 'Exclusive credit card benefits, accelerated rewards, and zero annual fee offers for TERVOONE members.',
    partnerOffer: 'Lifetime free signature cards, 5x reward points on home shopping, and airport lounge access.',
    samplePartners: ['HDFC Bank', 'ICICI Bank', 'Axis Bank Burgundy', 'SBI Cards'],
    iconName: 'CreditCard'
  },
  {
    id: 4,
    number: '04',
    title: 'Home Interior Upgrades',
    subtitle: 'from Design Partners',
    description: 'Exclusive discounts on bespoke modern home interiors to turn your newly bought property into a dream haven.',
    partnerOffer: 'Free 3D design consultation + Flat ₹75,000 off on end-to-end woodwork & modular kitchens.',
    samplePartners: ['Livspace Partner Studio', 'HomeLane Chennai', 'Design Cafe', 'D’Life Interio'],
    iconName: 'Armchair'
  },
  {
    id: 5,
    number: '05',
    title: 'Home Appliances & Furniture',
    subtitle: 'from Electronics Partners',
    description: 'Special bundled offers on air conditioners, refrigerators, OLED TVs, and designer furniture.',
    partnerOffer: 'Direct OEM partner pricing + Extended 2-year comprehensive warranty at no extra cost.',
    samplePartners: ['Viveks', 'Croma', 'Reliance Digital', 'Pepperfry Studio'],
    iconName: 'Tv'
  },
  {
    id: 6,
    number: '06',
    title: 'Cinema & Entertainment Passes',
    subtitle: 'from Entertainment Partners',
    description: 'Enjoy privileged movie tickets, premiere screenings, and entertainment benefits across Chennai.',
    partnerOffer: 'Buy 1 Get 1 free weekend movie tickets + Complimentary gourmet popcorn combos.',
    samplePartners: ['PVR INOX Chennai', 'SPI Cinemas', 'BookMyShow Perks', 'AGS Cinemas'],
    iconName: 'Ticket'
  },
  {
    id: 7,
    number: '07',
    title: 'Curated Travel & Staycations',
    subtitle: 'with Hospitality Partners',
    description: 'Exclusive holiday packages, luxury weekend resort discounts, and curated flight experiences.',
    partnerOffer: 'Flat 20% privilege rate at Tamil Nadu heritage beach resorts and international holiday desks.',
    samplePartners: ['Taj Vivanta ECR', 'MakeMyTrip Elite', 'Sterling Holidays', 'Club Mahindra'],
    iconName: 'Plane'
  },
  {
    id: 8,
    number: '08',
    title: 'Dining & Gourmet Privileges',
    subtitle: 'from Culinary Partners',
    description: 'Special fine dining offers, reserved chef tables, and exclusive dining privileges across partner restaurants.',
    partnerOffer: 'Up to 25% discount on food bills and complimentary welcome mocktails for the family.',
    samplePartners: ['The Park Chennai', 'Annalakshmi', 'Absolute Barbecue', 'Zomato Gold Corporate'],
    iconName: 'Utensils'
  },
  {
    id: 9,
    number: '09',
    title: 'Education & Career Mentorship',
    subtitle: 'from Advisory Partners',
    description: 'Access expert career guidance, entrance prep resources, and international study scholarships.',
    partnerOffer: 'Complimentary career profiling test + 20% fee rebate on premier coaching institutes.',
    samplePartners: ['EduBridge Global', 'TIME Institute Chennai', 'Veranda Learning', 'Unacademy Plus'],
    iconName: 'GraduationCap'
  },
  {
    id: 10,
    number: '10',
    title: 'Financial & Wealth Guidance',
    subtitle: 'from Certified Wealth Advisors',
    description: 'Bespoke advice on financial planning, tax structuring on real estate gains, and investment banking solutions.',
    partnerOffer: 'Free portfolio review with SEBI-registered advisors and zero-processing fee home loans.',
    samplePartners: ['Kotak Wealth Management', 'Motilal Oswal', 'Bajaj Finserv Private', 'Zerodha Varsity'],
    iconName: 'TrendingUp'
  }
];

export const MEGA_PRIZE_INFO = {
  soldMilestone: 1000,
  currentSold: 742,
  prizes: ['Hyundai Creta / Tata Nexon EV', 'Royal Enfield Hunter 350', '2,400 Sq.Ft Villa Plot in Chennai Suburbs', 'Gold Sovereign Coins', 'Complete 3 BHK Modular Interior Fitment'],
  cashbackMilestone: 1000,
  currentMembers: 890,
  maxCashback: '₹1,00,000'
};
