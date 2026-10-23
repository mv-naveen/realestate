import React, { useState } from 'react';
import { REWARD_CATEGORIES, MEGA_PRIZE_INFO } from '../data/rewards';
import {
  ShoppingCart,
  Car,
  CreditCard,
  Armchair,
  Tv,
  Ticket,
  Plane,
  Utensils,
  GraduationCap,
  TrendingUp,
  Gift,
  Sparkles,
  Eye,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface RewardsSectionProps {
  onOpenSiteVisit: () => void;
}

export const RewardsSection: React.FC<RewardsSectionProps> = ({ onOpenSiteVisit }) => {
  const [selectedRewardId, setSelectedRewardId] = useState<number>(1);
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);

  const getRewardIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className={className} />;
      case 'Car':
        return <Car className={className} />;
      case 'CreditCard':
        return <CreditCard className={className} />;
      case 'Armchair':
        return <Armchair className={className} />;
      case 'Tv':
        return <Tv className={className} />;
      case 'Ticket':
        return <Ticket className={className} />;
      case 'Plane':
        return <Plane className={className} />;
      case 'Utensils':
        return <Utensils className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const currentReward = REWARD_CATEGORIES.find((r) => r.id === selectedRewardId) || REWARD_CATEGORIES[0];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              TERVOONE Community Lifestyle Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
              More Value With Every Property You Buy
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Once you buy a property through our platform, you receive lifetime membership into the TERVOONE Community with unmatched partner privileges across 10 lifestyle verticals.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowFlyerModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
            >
              <Eye className="w-4 h-4 text-emerald-600" />
              <span>Inspect Community Flyer</span>
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
            >
              <span>Unlock Benefits Today</span>
            </button>
          </div>
        </div>

        {/* 2 Mega Milestone Banners (Directly from flyer bottom) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Milestone 1: 1,000 Properties Sold Mega Prizes */}
          <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 border border-emerald-500/20 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  Sales Milestone Programme
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded">
                  {MEGA_PRIZE_INFO.currentSold} / {MEGA_PRIZE_INFO.soldMilestone} Sold
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Every 1,000 Properties Sold Win Exclusive Prizes!
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                For every 1,000 properties sold through TERVOONE, one lucky customer wins assured grand prizes like cars, bikes, plots, homes, and luxury interior fitments!
              </p>
              
              {/* Progress bar */}
              <div className="mt-5">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Current Milestone Batch</span>
                  <span className="font-mono text-emerald-400 font-bold">74.2% Complete</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '74.2%' }} />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-emerald-200">
                <span className="bg-white/10 px-2 py-1 rounded">🚗 SUV / EV Giveaway</span>
                <span className="bg-white/10 px-2 py-1 rounded">🏍️ Royal Enfield Hunter</span>
                <span className="bg-white/10 px-2 py-1 rounded">🏡 Free 2,400 Sq.Ft Plot</span>
              </div>
            </div>
          </div>

          {/* Milestone 2: 1,000 Members Cashback */}
          <div className="bg-gradient-to-br from-amber-950/90 via-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 border border-amber-500/20 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                  Community Cashback Guarantee
                </span>
                <span className="text-xs bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded">
                  {MEGA_PRIZE_INFO.currentMembers} / {MEGA_PRIZE_INFO.cashbackMilestone} Members
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Every 1,000 Members Get Up to ₹1,00,000 Cashback!
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                As our TERVOONE community grows, every 1,000 members unlocks up to ₹1,00,000 cashback for eligible members on their next property purchase.
              </p>

              {/* Progress bar */}
              <div className="mt-5">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Cashback Pool Maturation</span>
                  <span className="font-mono text-amber-400 font-bold">89.0% Complete</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '89%' }} />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-amber-200">
                <span className="bg-white/10 px-2 py-1 rounded">💰 Direct Bank Transfer Cashback</span>
                <span className="bg-white/10 px-2 py-1 rounded">📋 Zero Hidden Lock-in</span>
                <span className="bg-white/10 px-2 py-1 rounded">🤝 Verified Buyer Community</span>
              </div>
            </div>
          </div>

        </div>

        {/* 10 Lifestyle Categories Grid & Interactive Drawer */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              10 Privileged Lifestyle Categories
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Select any category to review verified merchant privileges and partner network
            </p>
          </div>

          {/* 10 Category Quick Selector Pills/Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {REWARD_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedRewardId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedRewardId(cat.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-600/30'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-100' : 'text-emerald-700'}`}>
                      {cat.number}
                    </span>
                    <div className={isSelected ? 'text-white' : 'text-slate-600'}>
                      {getRewardIcon(cat.iconName, 'w-4 h-4')}
                    </div>
                  </div>
                  <div className="text-xs font-bold leading-snug line-clamp-2">
                    {cat.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Expanded Details */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                    {getRewardIcon(currentReward.iconName, 'w-6 h-6')}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Category {currentReward.number} · {currentReward.subtitle}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {currentReward.title}
                    </h4>
                  </div>
                </div>

                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  {currentReward.description}
                </p>

                {/* Specific Partner Offer Callout */}
                <div className="mt-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                    TERVOONE Exclusive Partner Benefit:
                  </div>
                  <p className="text-sm font-semibold text-emerald-950">
                    {currentReward.partnerOffer}
                  </p>
                </div>

                {/* Partner Brands */}
                <div className="mt-5">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Representative Network Partners:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentReward.samplePartners.map((brand, i) => (
                      <span
                        key={i}
                        className="bg-white border border-slate-200 text-slate-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-2xs"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Sidebar */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <h5 className="font-bold text-sm text-slate-900 mb-2">
                    How To Claim This Benefit
                  </h5>
                  <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside">
                    <li>Browse and shortlist your verified Chennai property.</li>
                    <li>Book and complete a site visit via TERVOONE.</li>
                    <li>Upon booking confirmation, receive your unique TERVOONE Community ID.</li>
                    <li>Present your digital member code at any partner store or portal.</li>
                  </ol>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenSiteVisit}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Schedule Visit & Unlock Perks</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Zero spam · Direct WhatsApp assistance
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* High Resolution Flyer Modal Lightbox */}
        {showFlyerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">Official TERVOONE Community Lifestyle Flyer</h4>
                  <p className="text-xs text-slate-400">Authentic reference flyer provided by TERVOONE</p>
                </div>
                <button
                  onClick={() => setShowFlyerModal(false)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="p-2 max-h-[80vh] overflow-y-auto bg-slate-100 flex justify-center">
                <img
                  src="/public/assets/aistudio/image_c0de0076.png"
                  alt="TERVOONE Community Flyer"
                  className="w-full max-h-[75vh] object-contain rounded-lg shadow"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
