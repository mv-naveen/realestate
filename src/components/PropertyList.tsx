import React, { useState, useMemo } from 'react';
import { Property, PropertyCategory, ChennaiZone, PriceBracket } from '../types';
import { CHENNAI_PROPERTIES } from '../data/properties';
import {
  Building,
  Home,
  MapPin,
  Heart,
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
  shortlistedIds: string[];
  onToggleShortlist: (id: string) => void;
  onOpenSiteVisit: (property?: Property) => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  initialCategory = 'all',
  initialZone = 'all',
  initialPrice = 'all',
  initialBhk = 'all',
  initialSearch = '',
  shortlistedIds,
  onToggleShortlist,
  onOpenSiteVisit,
  onSelectProperty
}) => {
  const [category, setCategory] = useState<PropertyCategory | 'all'>(initialCategory);
  const [zone, setZone] = useState<ChennaiZone | 'all'>(initialZone);
  const [priceBracket, setPriceBracket] = useState<PriceBracket>(initialPrice);
  const [bhk, setBhk] = useState<number | 'all'>(initialBhk);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [onlyShortlisted, setOnlyShortlisted] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price_low' | 'price_high' | 'area'>('featured');

  // Filter and Sort Engine
  const filteredProperties = useMemo(() => {
    return CHENNAI_PROPERTIES.filter((prop) => {
      // Shortlist filter
      if (onlyShortlisted && !shortlistedIds.includes(prop.id)) {
        return false;
      }

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
        const q = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesDev = prop.developer.toLowerCase().includes(q);
        const matchesLocality = prop.locality.toLowerCase().includes(q);
        const matchesZone = prop.zone.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDev && !matchesLocality && !matchesZone) {
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
  }, [category, zone, priceBracket, bhk, searchQuery, onlyShortlisted, shortlistedIds, sortBy]);

  const handleResetFilters = () => {
    setCategory('all');
    setZone('all');
    setPriceBracket('all');
    setBhk('all');
    setSearchQuery('');
    setOnlyShortlisted(false);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>Chennai Real Estate</span>
            <span>/</span>
            <span className="text-emerald-700 font-semibold">Verified Properties</span>
            <span>/</span>
            <span>Zero Lead Spam</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Verified Properties in Chennai
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Showing direct promoter properties with transparent pricing and TERVOONE community rewards.
              </p>
            </div>

            {/* Shortlist Counter Toggle */}
            <button
              onClick={() => setOnlyShortlisted(!onlyShortlisted)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                onlyShortlisted
                  ? 'bg-rose-50 text-rose-700 border-rose-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${onlyShortlisted ? 'fill-rose-600 text-rose-600' : 'text-slate-400'}`} />
              <span>
                {onlyShortlisted ? 'Showing Shortlisted' : `Shortlisted (${shortlistedIds.length})`}
              </span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs mb-8 space-y-4">
          
          {/* Top row: Search input + Category segmented tabs + Reset */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
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
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto scrollbar-none">
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
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Chennai Zones</option>
                <option value="Chennai North">Chennai North</option>
                <option value="Chennai South">Chennai South</option>
                <option value="Chennai Central">Chennai Central</option>
                <option value="OMR & ECR">OMR & ECR</option>
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
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <div>
            Showing <strong className="text-slate-800 font-bold">{filteredProperties.length}</strong> verified properties in Chennai
          </div>
          <div className="text-emerald-700 font-semibold">
            ✓ 100% Direct Builder Inventory · No Middleman Markups
          </div>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-xs">
            <SlidersHorizontal className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No properties found</h3>
            <p className="text-sm text-slate-600 mt-1">
              Try adjusting your zone, price bracket, or BHK criteria to explore more verified homes in Chennai.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Properties Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((prop) => {
              const isShortlisted = shortlistedIds.includes(prop.id);
              return (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Image container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={prop.imageUrl}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Zone & Category text markers (no pill badges) */}
                    <div className="absolute top-3 left-3 text-xs text-white font-semibold drop-shadow">
                      <span className="bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {prop.zone} · {prop.category}
                      </span>
                    </div>

                    {/* Shortlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleShortlist(prop.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-rose-600 transition-colors shadow-sm cursor-pointer"
                      title={isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
                      aria-label="Toggle shortlist"
                    >
                      <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
                    </button>

                    {/* Price and per sq ft overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <div className="text-xl font-extrabold tracking-tight font-mono tabular-nums">
                          {prop.priceDisplay}
                        </div>
                        <div className="text-[11px] text-slate-200 font-mono">
                          ₹{prop.pricePerSqFt.toLocaleString()} / sq.ft
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-emerald-300 font-medium">
                        {prop.possession}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Developer name */}
                      <div className="text-xs text-slate-500 font-medium truncate">
                        {prop.developer}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-emerald-700 transition-colors line-clamp-1">
                        {prop.title}
                      </h3>

                      {/* Locality & Specs unboxed text */}
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{prop.locality}</span>
                        <span className="text-slate-300">·</span>
                        {prop.bhk > 0 ? (
                          <span>{prop.bhk} BHK</span>
                        ) : (
                          <span>Residential Plot</span>
                        )}
                        <span className="text-slate-300">·</span>
                        <span className="font-mono tabular-nums">{prop.areaSqFt} sq.ft</span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {prop.highlights.slice(0, 2).map((hl, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions: Book Site Visit & View Details */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onOpenSiteVisit(prop)}
                        className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <span>Book Site Visit</span>
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
