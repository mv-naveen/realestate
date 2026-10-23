import React from 'react';
import { ShieldCheck, Sparkles, Target, Compass, MessageCircle, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenSiteVisit: () => void;
  onExploreListings: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenSiteVisit,
  onExploreListings
}) => {
  return (
    <div className="py-16 sm:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker & Title */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            About TERVOONE · Founded 4-Oct-2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mt-2 text-balance">
            One Platform. More Possibilities.
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            At TERVOONE, we make property buying simple, transparent, and rewarding.
          </p>
        </div>

        {/* The Core Manifesto Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Choose TERVOONE?
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-700 mt-2">
              Too Many Intermediaries. Too Much Confusion. Property Buying Should Be Simpler.
            </h3>
            
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              Avoid the confusion of multiple intermediaries and repeated follow-ups. TERVOONE helps you discover property options through a buyer-first platform with transparent communication, exciting rewards and lifestyle benefits.
            </p>

            <p className="mt-3 text-base font-semibold text-slate-900">
              We're not just another broker — we're your property-buying partner.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Zero Lead Selling</strong>
                  <span className="text-slate-600 text-xs">
                    We offer fresh property options without selling your enquiries as leads to builders or promoters.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">WhatsApp Preferred Communication</strong>
                  <span className="text-slate-600 text-xs">
                    No unwanted calls or repeated messages. If you're no longer interested, just let us know — we'll respect your choice.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                Our Purpose
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Our Mission</h3>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                To simplify property buying through genuine property opportunities, transparent communication and a buyer-first approach — while adding more value through exciting rewards, lifestyle benefits and community experiences.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-emerald-200/60 text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <span>FIND IT · SHORTLIST IT · VISIT IT · OWN IT</span>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center mb-5 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Our Horizon
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Our Vision</h3>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                To become a trusted property-buying ecosystem that brings real estate, rewards and community together, making every property purchase simpler, smarter and more rewarding.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <span>REWARDS · LIFESTYLE · COMMUNITY · GROW TOGETHER</span>
            </div>
          </div>

        </div>

        {/* Community & Rewards Callout */}
        <div className="mt-12 bg-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Ready to explore verified Chennai homes with assured perks?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Browse apartments, villas and gated community plots across Chennai North, South, Central, and OMR.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onExploreListings}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Browse Listings
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Schedule Free Visit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
