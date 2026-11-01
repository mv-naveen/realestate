import React from 'react';
import { Property } from '../types';
import { X, MapPin, Building, ShieldCheck, Check, Calendar, Share2, Sparkles, ArrowRight } from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onBookVisit: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onBookVisit
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl my-8 border border-neutral-200">
        
        {/* Header / Image banner */}
        <div className="relative aspect-16/9 bg-neutral-900">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors cursor-pointer border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top category badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-neutral-900/90 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-sm border border-neutral-700 backdrop-blur-xs">
              {property.zone} · {property.category}
            </span>
            <span className="bg-white/90 text-neutral-900 text-[11px] font-mono font-medium px-2.5 py-1 rounded-sm shadow-xs backdrop-blur-xs">
              RERA: {property.reraId}
            </span>
          </div>

          {/* Bottom Title & Price */}
          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">{property.developer}</div>
              <h2 className="text-2xl sm:text-3xl font-light text-white font-['Cormorant_Garamond',serif] tracking-tight mt-0.5">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-neutral-200 mt-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                <span>{property.locality}, Chennai Metro</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-normal font-['Cormorant_Garamond',serif] text-white tabular-nums">
                {property.priceDisplay}
              </div>
              <div className="text-[11px] text-neutral-300 font-mono">
                ₹{property.pricePerSqFt.toLocaleString()} / sq.ft
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs">
            <div>
              <span className="text-neutral-500 block uppercase font-bold text-[10px] tracking-wider">Configuration</span>
              <span className="text-neutral-900 font-semibold text-sm">
                {property.bhk > 0 ? `${property.bhk} BHK Residence` : property.category === 'Farm Land' ? 'Organic Farm Land' : 'Residential Plot'}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase font-bold text-[10px] tracking-wider">Super Built-up Area</span>
              <span className="text-neutral-900 font-semibold text-sm font-mono tabular-nums">
                {property.areaSqFt} Sq.Ft
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase font-bold text-[10px] tracking-wider">Possession Timeline</span>
              <span className="text-neutral-900 font-semibold text-sm">
                {property.possession}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase font-bold text-[10px] tracking-wider">Institutional Rebate</span>
              <span className="text-neutral-900 font-semibold text-sm font-mono">
                Up to ₹1,00,000
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2 font-mono">
              Development Overview
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2.5 font-mono">
              Key Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {property.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-neutral-700">
                  <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-2.5 font-mono">
              Clubhouse & Estate Amenities
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {property.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="bg-neutral-100 text-neutral-800 border border-neutral-200 px-3 py-1.5 rounded-sm font-medium text-[11px]"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* TERVOONE Buyer Assurance Card */}
          <div className="p-4 bg-neutral-900 text-white rounded-lg flex items-start gap-3 border border-neutral-800">
            <ShieldCheck className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-white uppercase tracking-wider block">
                The TERVOONE Direct-Promoter Standard
              </span>
              <p className="text-neutral-300 mt-1 leading-relaxed font-light">
                Your enquiry is never sold as a commercial lead. You receive direct promoter pricing, chauffeured site visit inspection, verified legal title certificates, and verified community rewards upon settlement.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-end gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 rounded-sm transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBookVisit(property);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-neutral-950 hover:bg-neutral-800 rounded-sm transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
