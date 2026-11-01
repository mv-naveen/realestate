import React, { useState, useMemo } from 'react';
import { Property, PropertyCategory, ChennaiZone, PriceBracket } from '../types';
import { CHENNAI_PROPERTIES } from '../data/properties';
import {
  Building,
  Home,
  MapPin,
  Search,
  Filter,
  CheckCircle,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface PropertyListProps {
  initialCategory?: PropertyCategory | 'all';
  initialZone?: ChennaiZone | 'all';
  initialPrice?: PriceBracket;
  initialBhk?: number | 'all';
  initialSearch?: string;
  onOpenSiteVisit: (property?: Property) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  initialCategory = 'all',
  initialZone = 'all',
  initialPrice = 'all',
  initialBhk = 'all',
  initialSearch = '',
  onOpenSiteVisit,
  onSelectProperty
}) => {
  const [category, setCategory] = useState<PropertyCategory | 'all'>(initialCategory);
  const [zone, setZone] = useState<ChennaiZone | 'all'>(initialZone);
  const [priceBracket, setPriceBracket] = useState<PriceBracket>(initialPrice);
  const [bhk, setBhk] = useState<number | 'all'>(initialBhk);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'price_low' | 'price_high' | 'area'>('featured');

  // Filter and Sort Engine
  const filteredProperties = useMemo(() => {
    return CHENNAI_PROPERTIES.filter((prop) => {
      // Category filter
      if (category !== 'all' && prop.category !== category) {
        return false;
      }

      // Zone filter
      if (zone !== 'all' && prop.zone !== zone) {
        return false;
      }

      // Price Bracket filter
      if (priceBracket === 'below_1cr' && prop.priceInRupees >= 10000000) {
        return false;
      }
      if (priceBracket === '1cr_to_2cr' && (prop.priceInRupees < 10000000 || prop.priceInRupees > 20000000)) {
        return false;
      }
      if (priceBracket === 'above_2cr' && prop.priceInRupees <= 20000000) {
        return false;
      }

      // BHK filter
      if (bhk !== 'all' && prop.bhk !== bhk) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().replace('form land', 'farm land');
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesDev = prop.developer.toLowerCase().includes(q);
        const matchesLocality = prop.locality.toLowerCase().includes(q);
        const matchesZone = prop.zone.toLowerCase().includes(q) ||
          (q.includes('chenkal') && prop.zone === 'Chengalpattu') ||
          (q.includes('kanji') && prop.zone === 'Kanchipuram') ||
          (q.includes('thiruval') && prop.zone === 'Thiruvallur');
        const matchesCategory = prop.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDev && !matchesLocality && !matchesZone && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_low') return a.priceInRupees - b.priceInRupees;
      if (sortBy === 'price_high') return b.priceInRupees - a.priceInRupees;
      if (sortBy === 'area') return b.areaSqFt - a.areaSqFt;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [category, zone, priceBracket, bhk, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setCategory('all');
    setZone('all');
    setPriceBracket('all');
    setBhk('all');
    setSearchQuery('');
  };

  return (
    <div className="py-14 sm:py-20 bg-neutral-50/60 min-h-screen text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-2.5">
            <span>Chennai Metropolitan Area</span>
            <span>/</span>
            <span className="text-neutral-900 font-bold">Verified Asset Portfolio</span>
            <span>/</span>
            <span>Direct Developer Registry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-medium text-neutral-950 tracking-tight font-['Cormorant_Garamond',serif]">
            Verified Properties in Chennai & Greater Regions
          </h1>
          <p className="text-sm text-neutral-600 mt-1.5 font-normal">
            Direct builder developments with legal title verification, transparent developer pricing, and TERVOONE community privileges.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6 shadow-2xs mb-8 space-y-4">
          
          {/* Top row: Search input + Category segmented tabs + Reset */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by project name, developer, or locality..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

              {/* Category Segmented Control */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto scrollbar-none max-w-full min-w-0">
                <button
                  onClick={() => setCategory('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    category === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({CHENNAI_PROPERTIES.length})
                </button>
                <button
                  onClick={() => setCategory('Apartment')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    category === 'Apartment' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Apartments
                </button>
                <button
                  onClick={() => setCategory('Villa')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    category === 'Villa' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Villas
                </button>
                <button
                  onClick={() => setCategory('Plots')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    category === 'Plots' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Plots
                </button>
                <button
                  onClick={() => setCategory('Farm Land')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    category === 'Farm Land' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Farm Land
                </button>
              </div>

              {/* Reset Filters */}
              <button
                onClick={handleResetFilters}
                className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1.5 py-1 px-2 rounded hover:bg-slate-50 transition-colors cursor-pointer self-start lg:self-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Bottom row: Zone, Price Bracket, BHK, Sort By */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs">
              
              {/* Zone Selector */}
              <div>
                <span className="block font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Area Zone
                </span>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value as ChennaiZone | 'all')}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 font-semibold focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Chennai & Suburbs</option>
                  <option value="Chennai Central">Chennai Central (Anna Nagar, Kilpauk)</option>
                  <option value="Chennai South">Chennai South (Velachery, Medavakkam)</option>
                  <option value="Chennai North">Chennai North (Kolathur, Perambur)</option>
                  <option value="OMR & ECR">OMR & ECR Corridor</option>
                  <option value="Chengalpattu">Chenkalpattu (Chengalpattu)</option>
                  <option value="Kanchipuram">Kanjipuram (Kanchipuram)</option>
                  <option value="Thiruvallur">Thiruvalur (Thiruvallur)</option>
                </select>
              </div>

            {/* Price Bracket */}
            <div>
              <span className="block font-bold text-slate-500 uppercase tracking-wider mb-1">
                Price Budget
              </span>
              <select
                value={priceBracket}
                onChange={(e) => setPriceBracket(e.target.value as PriceBracket)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Budgets</option>
                <option value="below_1cr">Below ₹1 Cr</option>
                <option value="1cr_to_2cr">₹1 Cr to ₹2 Cr</option>
                <option value="above_2cr">Above ₹2 Cr</option>
              </select>
            </div>

            {/* BHK Filter */}
            <div>
              <span className="block font-bold text-slate-500 uppercase tracking-wider mb-1">
                Bedrooms
              </span>
              <select
                value={bhk === 'all' ? 'all' : String(bhk)}
                onChange={(e) => setBhk(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">Any Configuration</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <span className="block font-bold text-slate-500 uppercase tracking-wider mb-1">
                Sort Properties
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="area">Area: Largest First</option>
              </select>
            </div>

          </div>

        </div>

        {/* Results Count & Zero Results State */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 font-medium">
          <div>
            Showing <strong className="text-neutral-950 font-bold">{filteredProperties.length}</strong> verified assets in Chennai & Greater Regions
          </div>
          <div className="text-neutral-800 font-semibold font-mono text-[11px] uppercase tracking-wider">
            Direct Developer Inventory · RERA Certified
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-xl border border-neutral-200 p-12 text-center max-w-xl mx-auto shadow-2xs">
            <SlidersHorizontal className="w-9 h-9 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-950">No properties match your current criteria</h3>
            <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
              Adjust your zone, investment budget, or layout preferences to explore other verified opportunities.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Properties Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition-all flex flex-col justify-between group shadow-2xs"
                >
                  {/* Image container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                    <img
                      src={prop.imageUrl}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Zone & Category text markers */}
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-white font-semibold">
                      <span className="bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur-xs">
                        {prop.zone} · {prop.category}
                      </span>
                    </div>

                    {/* Price and per sq ft overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <div className="text-xl font-bold tracking-tight font-mono tabular-nums">
                          {prop.priceDisplay}
                        </div>
                        <div className="text-[11px] text-neutral-200 font-mono">
                          ₹{prop.pricePerSqFt.toLocaleString()} / sq.ft
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-neutral-200 font-medium">
                        {prop.possession}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Developer name */}
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-medium truncate">
                        {prop.developer}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-neutral-950 mt-1 group-hover:text-neutral-700 transition-colors line-clamp-1">
                        {prop.title}
                      </h3>

                      {/* Locality & Specs unboxed text */}
                      <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                        <span className="truncate">{prop.locality}</span>
                        <span className="text-neutral-300">·</span>
                        {prop.bhk > 0 ? (
                          <span>{prop.bhk} BHK</span>
                        ) : prop.category === 'Farm Land' ? (
                          <span>Organic Farm Land</span>
                        ) : (
                          <span>Residential Plot</span>
                        )}
                        <span className="text-neutral-300">·</span>
                        <span className="font-mono tabular-nums">{prop.areaSqFt.toLocaleString()} sq.ft</span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {prop.highlights.slice(0, 2).map((hl, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded"
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions: Book Site Visit & View Details */}
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2.5">
                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 text-center"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Specs</span>
                      </button>

                      <button
                        onClick={() => onOpenSiteVisit(prop)}
                        className="flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-1.5 text-center"
                      >
                        <span>Enquire</span>
                      </button>
                    </div>

                  </div>

                </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
