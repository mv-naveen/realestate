import React from 'react';
import { REWARD_CATEGORIES } from '../data/rewards';
import { Handshake, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

interface PartnersSectionProps {
  onOpenSiteVisit: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenSiteVisit }) => {
  return (
    <div className="py-20 sm:py-28 bg-neutral-50/60 min-h-screen text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
            TERVOONE Commercial Ecosystem · Alliance Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 mt-2 text-balance font-['Cormorant_Garamond',serif]">
            Retail, Mobility, Banking & Lifestyle Partners
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            We establish direct enterprise alliances across retail essentials, automotive dealerships, interior architectural studios, and banking institutions to provide verified TERVOONE property owners enduring commercial privileges.
          </p>
        </div>

        {/* Partner Categories Bento (MNC Clean Architecture) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REWARD_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-neutral-200 p-7 flex flex-col justify-between shadow-2xs hover:border-neutral-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2.5">
                  <span className="font-mono font-bold text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded text-[11px]">
                    Sector {cat.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Verified Network</span>
                </div>

                <h3 className="text-xl font-medium text-neutral-950 font-['Cormorant_Garamond',serif]">
                  {cat.title}
                </h3>
                <div className="text-xs text-neutral-500 font-medium mt-0.5">{cat.subtitle}</div>

                <p className="text-xs text-neutral-600 mt-3.5 leading-relaxed font-normal">
                  {cat.description}
                </p>

                <div className="mt-5 p-3.5 bg-neutral-50 rounded-lg border border-neutral-200/80 text-xs">
                  <span className="font-semibold text-neutral-900 block mb-0.5">Corporate Benefit:</span>
                  <span className="text-neutral-700 leading-relaxed">{cat.partnerOffer}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 block mb-2">
                  Representative Brand Alliances:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.samplePartners.map((brand, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-neutral-50 border border-neutral-200 text-neutral-800 px-2.5 py-1 rounded font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partner Banner (MNC White Corporate Style) */}
        <div className="mt-16 bg-white border border-neutral-200 rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              Merchant Partnerships & Institutional Developers
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-neutral-950 mt-1 font-['Cormorant_Garamond',serif]">
              Become an Official TERVOONE Network Partner
            </h3>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
              Acquire verified, non-intrusive direct access to premier homeowners across Chennai and Greater Tamil Nadu at the exact moment of property completion.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919840122830?text=Hello%20TERVOONE%20Partnership%20Desk%2C%20our%20brand%20wants%20to%20explore%20joining%20the%20community%20rewards%20network."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-white rounded-md shadow-xs transition-colors text-center cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Partner Desk WhatsApp</span>
            </a>
            <button
              onClick={onOpenSiteVisit}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 rounded-md transition-colors cursor-pointer text-center"
            >
              Client Terms
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
