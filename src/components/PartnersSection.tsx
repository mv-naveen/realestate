import React, { useState } from 'react';
import { REWARD_CATEGORIES } from '../data/rewards';
import { Handshake, ShieldCheck, CheckCircle2, Search, ArrowRight, ExternalLink } from 'lucide-react';

interface PartnersSectionProps {
  onOpenSiteVisit: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenSiteVisit }) => {
  const [partnerFilter, setPartnerFilter] = useState<string>('all');

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            TERVOONE Partner Ecosystem
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            Our Lifestyle, Retail & Banking Partners
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We collaborate with industry-leading brands across supermarket essentials, automotive dealerships, interior studios, and financial institutions to bring verified TERVOONE property owners exclusive perks.
          </p>
        </div>

        {/* Partner Categories Bento */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REWARD_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-emerald-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Category {cat.number}
                  </span>
                  <span className="text-slate-400">Exclusive Perks</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {cat.title}
                </h3>
                <div className="text-xs text-slate-500 font-medium">{cat.subtitle}</div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                  <span className="font-bold text-emerald-800 block mb-0.5">Community Benefit:</span>
                  <span className="text-slate-700">{cat.partnerOffer}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Participating Brands:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.samplePartners.map((brand, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partner Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              For Retailers & Brands
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Become an Official TERVOONE Reward Partner
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Gain verified direct access to high-net-worth new homeowners in Chennai at the exact moment they purchase their dream homes.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919840122830?text=Hello%20TERVOONE%20Partnership%20Desk%2C%20our%20brand%20wants%20to%20explore%20joining%20the%20community%20rewards%20network."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-md transition-colors text-center cursor-pointer"
            >
              Partner Desk WhatsApp
            </a>
            <button
              onClick={onOpenSiteVisit}
              className="px-5 py-3 text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors cursor-pointer text-center"
            >
              Buyer Privileges
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
