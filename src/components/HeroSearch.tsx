import React, { useState } from 'react';
import { PropertyCategory, ChennaiZone, PriceBracket } from '../types';
import { Search, MapPin, Building, Home, Sparkles, Gift, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-14 sm:py-20">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/src/assets/images/chennai_luxury_apartment_1792767293475.jpg"
          alt="Chennai Luxury Architecture"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Intermediary / Zero-Spam Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-emerald-300 uppercase tracking-wider text-[11px]">Zero-Spam Direct Platform</span>
            <span className="text-slate-500">·</span>
            <span>We never sell your contact info to third-party telemarketers</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline">Official Real Estate Ecosystem</span>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-emerald-400 font-medium">WhatsApp-First Direct Communication</span>
          </div>
        </div>

        {/* Dual Grid: Search Console on Left, Community Rewards Teaser on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Hero Headline & Roofandfloor-Inspired Search Console */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Buy property. Enjoy rewards. <br className="hidden sm:inline" />
                <span className="text-emerald-400">Be part of our community.</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                At <strong className="text-white font-semibold">TERVOONE</strong>, we make property buying simple, transparent, and rewarding across Chennai. Explore verified apartments, villas, and plots with zero unwanted calls.
              </p>
            </div>

            {/* Roofandfloor Style Search Console */}
            <div className="mt-8 bg-white text-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-200">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 overflow-x-auto scrollbar-none">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  All Properties
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Apartment')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Apartment'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Apartment</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Villa')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Villa'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Villa</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('Plots')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === 'Plots'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Plots</span>
                </button>
              </div>

              {/* Search Inputs Grid */}
              <form onSubmit={handleSearchSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Zone Select */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Area Zone
                  </label>
                  <select
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value as ChennaiZone | 'all')}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="all">All Chennai</option>
                    <option value="Chennai North">Chennai North</option>
                    <option value="Chennai South">Chennai South</option>
                    <option value="Chennai Central">Chennai Central</option>
                    <option value="OMR & ECR">OMR & ECR Corridor</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Price Budget
                  </label>
                  <select
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value as PriceBracket)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="all">Any Price</option>
                    <option value="below_1cr">Below ₹1 Cr</option>
                    <option value="1cr_to_2cr">₹1 Cr to ₹2 Cr</option>
                    <option value="above_2cr">Above ₹2 Cr</option>
                  </select>
                </div>

                {/* BHK selector */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Configuration
                  </label>
                  <select
                    value={selectedBhk === 'all' ? 'all' : String(selectedBhk)}
                    onChange={(e) => setSelectedBhk(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="all">Any BHK / Plot</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4+ BHK</option>
                  </select>
                </div>

                {/* Submit CTA */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm hover:shadow"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </div>
              </form>

              {/* Quick locality tags */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                <span className="font-medium text-slate-700">Popular Hubs:</span>
                <button
                  type="button"
                  onClick={() => { setSelectedZone('Chennai Central'); onSearch({ category: 'all', zone: 'Chennai Central', priceBracket: 'all', bhk: 'all', searchQuery: '' }); }}
                  className="hover:text-emerald-700 hover:underline cursor-pointer"
                >
                  Anna Nagar
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => { setSelectedZone('Chennai North'); onSearch({ category: 'all', zone: 'Chennai North', priceBracket: 'all', bhk: 'all', searchQuery: '' }); }}
                  className="hover:text-emerald-700 hover:underline cursor-pointer"
                >
                  Kolathur & Perambur
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => { setSelectedZone('Chennai South'); onSearch({ category: 'all', zone: 'Chennai South', priceBracket: 'all', bhk: 'all', searchQuery: '' }); }}
                  className="hover:text-emerald-700 hover:underline cursor-pointer"
                >
                  Velachery & Medavakkam
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => { setSelectedZone('OMR & ECR'); onSearch({ category: 'all', zone: 'OMR & ECR', priceBracket: 'all', bhk: 'all', searchQuery: '' }); }}
                  className="hover:text-emerald-700 hover:underline cursor-pointer"
                >
                  ECR Beach Villas
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: High-Impact Community & Rewards Feature Showcase (Flyer Alignment) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            
            {/* Soft decorative accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  TERVOONE Community Ecosystem
                </span>
                <span className="text-xs text-slate-400 font-mono">10 Partner Verticals</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
                One Platform. More Possibilities.
              </h2>

              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Once you purchase a property through our platform, you unlock assured lifestyle privileges, merchant discounts, and entry to milestone giveaways.
              </p>

              {/* Two Mega Rewards callouts from flyer */}
              <div className="mt-6 space-y-3">
                <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0 mt-0.5">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase text-amber-300 tracking-wider">Every 1,000 Properties Sold</span>
                    </div>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Win Exclusive Prizes: Cars, Bikes & Free Plots!
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      One verified customer wins assured prizes for every 1,000 sales milestone reached.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase text-emerald-300 tracking-wider">Community Growth Pool</span>
                    </div>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Every 1,000 Members Get Up to ₹1,00,000 Cashback!
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Direct cashback benefit on your subsequent property purchase across Tamil Nadu.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flyer Quick Buttons */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onExploreRewards}
                className="w-full sm:w-auto flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Explore 10 Reward Categories</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Schedule Site Visit
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
