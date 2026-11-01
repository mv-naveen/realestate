import React from 'react';
import { Target, Compass, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenSiteVisit: () => void;
  onExploreListings: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenSiteVisit,
  onExploreListings
}) => {
  return (
    <div className="py-20 sm:py-28 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker & Title */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-500">
            About TERVOONE · Founded 4-Oct-2026 · Chennai
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-950 mt-2 text-balance font-['Cormorant_Garamond',serif]">
            One Platform. More Possibilities.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            At TERVOONE, we institutionalize real estate acquisition across Chennai and Tamil Nadu — making property buying simple, transparent, and enduringly rewarding.
          </p>
        </div>

        {/* The Core Manifesto Banner (MNC White Corporate Style) */}
        <div className="mt-14 bg-neutral-50/80 border border-neutral-200 rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              The TERVOONE Charter
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-neutral-950 font-['Cormorant_Garamond',serif] mt-1">
              Too Many Intermediaries. Too Much Confusion. Property Acquisition Should Be Simpler.
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Avoid the friction of multiple intermediaries, conflicting pricing, and repeated follow-up calls. TERVOONE connects discerning buyers with vetted developer portfolios through a buyer-first platform combining transparent pricing, legal verification, and unmatched private client rewards.
            </p>

            <p className="mt-3 text-sm font-semibold text-neutral-950">
              We are not another transactional broker — we are your dedicated property acquisition partner.
            </p>

            <div className="mt-8 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-950 block font-semibold text-sm">Zero Lead Brokering</strong>
                  <span className="text-neutral-600 text-xs leading-relaxed mt-0.5 block">
                    We offer verified developer opportunities without ever selling your personal contact information to third-party telemarketers.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-950 block font-semibold text-sm">WhatsApp-First Advisory</strong>
                  <span className="text-neutral-600 text-xs leading-relaxed mt-0.5 block">
                    No unsolicited cold calls or aggressive sales pitches. If you conclude your property search, simply notify us — your decision is permanently respected.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mission & Vision Grid (Classic Editorial Monochromatic Contrast) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-8 rounded-xl bg-white border border-neutral-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
                Our Purpose
              </span>
              <h3 className="text-2xl font-medium text-neutral-950 mt-1 font-['Cormorant_Garamond',serif]">Our Mission</h3>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                To simplify property acquisition through verified developer opportunities, transparent transaction advisory, and an unwavering buyer-first standard — while returning real value to buyers through milestone rewards, merchant privileges, and community wealth building.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-neutral-100 text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              FIND IT · SHORTLIST IT · VISIT IT · OWN IT
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-xl bg-neutral-50/80 border border-neutral-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
                Our Horizon
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 mt-1 font-['Cormorant_Garamond',serif]">Our Vision</h3>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                To stand as South India’s most trusted real estate ecosystem, harmonizing direct property acquisition with community capital benefits, and ensuring that every homeowner enjoys lifelong commercial and lifestyle advantages.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              REWARDS · LIFESTYLE · COMMUNITY · GROW TOGETHER
            </div>
          </div>

        </div>

        {/* Corporate Consultation Callout */}
        <div className="mt-12 bg-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-neutral-200 shadow-xs">
          <div>
            <h4 className="text-xl font-medium text-neutral-950 font-['Cormorant_Garamond',serif]">
              Ready to explore verified Chennai developments with guaranteed privileges?
            </h4>
            <p className="text-xs text-neutral-600 mt-1">
              Browse prime residences, coastal villas, gated community plots, and managed farm lands across Chennai Central, South, North, OMR, Chengalpattu, Kanchipuram, and Thiruvallur.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onExploreListings}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
            >
              Browse Portfolio
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors cursor-pointer shadow-xs"
            >
              Enquire
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
