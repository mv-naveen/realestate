export interface RoadmapStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  actionText: string;
  iconName: string;
}

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    stepNumber: '01',
    title: 'Choose Your Preferred Location',
    tagline: 'FIND IT',
    description: 'Select your preferred city, area and location across Chennai North, South, Central or OMR to discover properties that match your exact living and commute needs.',
    actionText: 'Filter by Chennai Zone',
    iconName: 'MapPin'
  },
  {
    stepNumber: '02',
    title: 'Add Your Favourite Properties',
    tagline: 'SAVE IT',
    description: 'Save the verified properties you love into your personal shortlist and explore their brochures, legal vetting notes, and floor layouts whenever you want.',
    actionText: 'Browse Curated Homes',
    iconName: 'Heart'
  },
  {
    stepNumber: '03',
    title: 'Shortlist the Right Property',
    tagline: 'SHORTLIST IT',
    description: 'Compare your favourite options side-by-side, review the price-per-sq.ft details, verify RERA credentials, and select the home that matches your family budget.',
    actionText: 'Compare Options',
    iconName: 'CheckSquare'
  },
  {
    stepNumber: '04',
    title: 'Book a Site Visit',
    tagline: 'VISIT IT',
    description: 'Schedule an on-ground site visit with a dedicated TERVOONE property advisor. Experience the neighborhood firsthand with zero pushy sales calls.',
    actionText: 'Enquire',
    iconName: 'Calendar'
  },
  {
    stepNumber: '05',
    title: 'Finalise Your Property',
    tagline: 'EVALUATE IT',
    description: 'Evaluate builder financing, clarify legal documentation doubts with our in-house experts, review cashback eligibility, and make a confident decision.',
    actionText: 'Review Transparency Kit',
    iconName: 'FileCheck'
  },
  {
    stepNumber: '06',
    title: 'Buy Your Property',
    tagline: 'OWN IT',
    description: 'Complete the purchase process directly with the promoter — and instantly unlock up to ₹1,00,000 cashback and entries into the 1,000-sale mega car/plot prize draw.',
    actionText: 'Unlock Community Perks',
    iconName: 'Key'
  }
];
