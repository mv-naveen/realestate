import React from 'react';
import { Property } from '../types';
import { X, MapPin, Building, ShieldCheck, Check, Calendar, Heart, Share2, Sparkles } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onBookVisit: (property: Property) => void;
  isShortlisted: boolean;
  onToggleShortlist: (id: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onBookVisit,
  isShortlisted,
  onToggleShortlist
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl my-8 border border-slate-200">
        
        {/* Header / Image banner */}
        <div className="relative aspect-16/9 bg-slate-900">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top category badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-xs">
              {property.zone} · {property.category}
            </span>
            <span className="bg-slate-900/80 text-white text-xs font-medium px-2.5 py-1 rounded-md">
              RERA: {property.reraId}
            </span>
          </div>

          {/* Bottom Title & Price */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div>
              <div className="text-xs text-slate-300 font-medium">{property.developer}</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-200 mt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{property.locality}, Chennai</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                {property.priceDisplay}
              </div>
              <div className="text-xs text-slate-300 font-mono">
                ₹{property.pricePerSqFt.toLocaleString()} / sq.ft
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block uppercase font-bold text-[10px]">Configuration</span>
              <span className="text-slate-900 font-bold text-sm">
                {property.bhk > 0 ? `${property.bhk} BHK` : 'Residential Plot'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-[10px]">Super Built-up Area</span>
              <span className="text-slate-900 font-bold text-sm font-mono tabular-nums">
                {property.areaSqFt} Sq.Ft
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-[10px]">Possession</span>
              <span className="text-slate-900 font-bold text-sm">
                {property.possession}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-[10px]">Cashback Pool</span>
              <span className="text-emerald-700 font-bold text-sm">
                Up to ₹1,00,000
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Property Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Key Project Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {property.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Clubhouse & Campus Amenities
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {property.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg font-medium"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* TERVOONE Buyer Assurance Card */}
          <div className="p-4 bg-slate-900 text-white rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white uppercase tracking-wider block">
                TERVOONE Direct-Promoter Guarantee
              </span>
              <p className="text-slate-300 mt-1 leading-relaxed">
                Your enquiry is never sold as a lead. You receive direct promoter pricing, free site visit pick-up assistance, verified legal title certificates, and full TERVOONE Community Reward privileges upon purchase.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onToggleShortlist(property.id)}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                isShortlisted
                  ? 'bg-rose-50 text-rose-700 border-rose-300'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-4 h-4 ${isShortlisted ? 'fill-rose-600 text-rose-600' : 'text-slate-400'}`} />
              <span>{isShortlisted ? 'Shortlisted' : 'Save to Shortlist'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBookVisit(property);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Site Visit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
