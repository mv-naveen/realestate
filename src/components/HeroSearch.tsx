import React, { useState } from 'react';
import { PropertyCategory, ChennaiZone, PriceBracket } from '../types';
import {
  Search,
  Building,
  Home,
  MapPin,
  Sprout,
  LandPlot,
  ShieldCheck,
  ArrowRight,
  Award,
  WalletCards
} from 'lucide-react';

interface HeroSearchProps {
  onSearch: (filters: {
    category: PropertyCategory | 'all';
    zone: ChennaiZone | 'all';
    priceBracket: PriceBracket;
    bhk: number | 'all';
    searchQuery: string;
  }) => void;
  onExploreRewards: () => void;
  onOpenSiteVisit: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  onSearch,
  onExploreRewards,
  onOpenSiteVisit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory | 'all'>('all');
  const [selectedZone, setSelectedZone] = useState<ChennaiZone | 'all'>('all');
  const [selectedPrice, setSelectedPrice] = useState<PriceBracket>('all');
  const [selectedBhk, setSelectedBhk] = useState<number | 'all'>('all');
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      category: selectedCategory,
      zone: selectedZone,
      priceBracket: selectedPrice,
      bhk: selectedBhk,
      searchQuery: query
    });
  };

  return (
    <div className="relative bg-white text-neutral-900 overflow-hidden py-14 sm:py-20 border-b border-neutral-200">
      
      {/* Background Architectural Luxury Image (Very subtle, high-end MNC watermark) */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <img
          src="/src/assets/images/chennai_white_hero_1793381256808.jpg"
          alt="Chennai Luxury Architecture"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Grid: Executive Search Console on Left, Private Client Ecosystem on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Hero Headline & Architectural Search Console */}
          <div className="lg:col-span-7 flex flex-col min-w-0">
            <div>
              <div className="mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-500">
                  Institutional Real Estate Advisory · Chennai
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-neutral-950 leading-[1.12] text-balance font-['Cormorant_Garamond',serif]">
                Buy Property. Enjoy Rewards.{' '}
                <span className="italic font-normal text-neutral-600 block mt-1">
                  Be Part of Our Community.
                </span>
              </h1>
              
              <p className="mt-5 text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed font-normal">
                At <strong className="text-brand font-semibold">TERVOONE</strong>, we establish direct developer integrations across Chennai, Chengalpattu, Kanchipuram, and Thiruvallur. Discover verified apartments, luxury villas, gated plots, and managed farm lands with absolute transparency and zero broker markups.
              </p>
            </div>

            {/* Architectural Search Console (Clean White Box with Monochromatic Discipline) */}
            <div className="mt-8 bg-white rounded-xl p-5 sm:p-6 border border-neutral-200/90 shadow-sm">
              
              {/* Category Segmented Control with Farm Land */}
              <div className="flex items-center gap-1 pb-4 border-b border-neutral-200/80 overflow-x-auto scrollbar-none max-w-full min-w-0">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-neutral-900 text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  All Properties
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCategory('Apartment')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Apartment'
                      ? 'bg-neutral-900 text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Apartments</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCategory('Villa')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Villa'
                      ? 'bg-neutral-900 text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Villas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCategory('Plots')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Plots'
                      ? 'bg-neutral-900 text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <LandPlot className="w-3.5 h-3.5" />
                  <span>Plots</span>
                </button>

                {/* Added Farm Land Option */}
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Farm Land')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Farm Land'
                      ? 'bg-neutral-900 text-white shadow-2xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Farm Land</span>
                </button>
              </div>

              {/* Search Inputs Grid */}
              <form onSubmit={handleSearchSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                
                {/* Zone Select (With Chenkalpattu, Kanjipuram, Thiruvalur) */}
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] mb-1">
                    Area Zone
                  </label>
                  <select
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value as ChennaiZone | 'all')}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-neutral-900 font-medium focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Metropolitan Zones</option>
                    <option value="Chennai Central">Chennai Central (Anna Nagar, Kilpauk)</option>
                    <option value="Chennai South">Chennai South (Velachery, Medavakkam)</option>
                    <option value="Chennai North">Chennai North (Kolathur, Perambur)</option>
                    <option value="OMR & ECR">OMR & ECR Coastal Corridor</option>
                    <option value="Chengalpattu">Chenkalpattu (Chengalpattu)</option>
                    <option value="Kanchipuram">Kanjipuram (Kanchipuram)</option>
                    <option value="Thiruvallur">Thiruvalur (Thiruvallur)</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] mb-1">
                    Investment Budget
                  </label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value as PriceBracket)}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-neutral-900 font-medium focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Any Price</option>
                    <option value="below_1cr">Below ₹1 Crore</option>
                    <option value="1cr_to_2cr">₹1 Crore – ₹2 Crore</option>
                    <option value="above_2cr">Above ₹2 Crore</option>
                  </select>
                </div>

                {/* Configuration selector */}
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em] mb-1">
                    Configuration
                  </label>
                  <select
                    value={selectedBhk === 'all' ? 'all' : String(selectedBhk)}
                    onChange={(e) => setSelectedBhk(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full text-xs bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-neutral-900 font-medium focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Any Layout / Land</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4+ Bedrooms / Luxury Villa</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Search Portfolio</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Private Client & Institutional Ecosystem (Classic MNC Styling, Zero Candy Colors) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-50/70 border border-neutral-200/90 rounded-xl p-4 sm:p-8 min-w-0">
            
            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pb-3 border-b border-neutral-200">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-600">
                  Private Client Ecosystem
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  10 Vetted Categories
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium text-neutral-950 mt-4 font-['Cormorant_Garamond',serif] leading-snug">
                One Platform. More Possibilities.
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Property acquisitions transacted through TERVOONE unlock lifelong client privileges, merchant commercial benefits, and institutional milestone reward distributions.
              </p>

              {/* Two Elite Corporate Advantage Panels */}
              <div className="mt-6 space-y-3.5">
                
                {/* Milestone 1: 1,000 Transactions */}
                <div className="bg-white border border-neutral-200 rounded-lg p-4 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-md bg-neutral-100 text-neutral-900 shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-neutral-500">
                        Sales Milestone Protocol
                      </div>
                      <div className="text-sm font-semibold text-neutral-950 mt-0.5">
                        Executive Milestone Giveaways: Vehicles & Land Assets
                      </div>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Every 1,000 verified property completions unlock grand milestone distributions for registered community buyers across Tamil Nadu.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Milestone 2: 1,000 Members Cashback */}
                <div className="bg-white border border-neutral-200 rounded-lg p-4 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-md bg-neutral-100 text-neutral-900 shrink-0 mt-0.5">
                      <WalletCards className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-neutral-500">
                        Client Capital Program
                      </div>
                      <div className="text-sm font-semibold text-neutral-950 mt-0.5">
                        Up to ₹1,00,000 Direct Acquisition Cashback
                      </div>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Direct institutional cash incentive credited on subsequent property investments for every 1,000 community members.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quiet Action Buttons */}
            <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onExploreRewards}
                className="w-full sm:w-auto flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer uppercase tracking-wider"
              >
                <span>Review 10 Privilege Sectors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-900 font-medium text-xs py-2.5 px-4 rounded-md transition-colors cursor-pointer whitespace-nowrap border border-neutral-300 uppercase tracking-wider"
              >
                Enquire
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
