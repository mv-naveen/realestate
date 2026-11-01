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
  Eye,
  Award,
  WalletCards,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface RewardsSectionProps {
  onOpenSiteVisit: () => void;
}

export const RewardsSection: React.FC<RewardsSectionProps> = ({ onOpenSiteVisit }) => {
  const [selectedRewardId, setSelectedRewardId] = useState<number>(1);
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);

  const getRewardIcon = (iconName: string, className = 'w-4 h-4') => {
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
        return <Award className={className} />;
    }
  };

  const currentReward = REWARD_CATEGORIES.find((r) => r.id === selectedRewardId) || REWARD_CATEGORIES[0];

  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (MNC Editorial Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              Private Client Privileges & Community Rewards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-medium text-neutral-950 tracking-tight mt-1 text-balance font-['Cormorant_Garamond',serif]">
              More Value With Every Property You Acquire
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Every home acquisition concluded through our platform confers lifetime status in the TERVOONE Private Client Network, featuring negotiated institutional terms across 10 lifestyle verticals.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowFlyerModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-100 transition-colors shadow-2xs cursor-pointer"
            >
              <Eye className="w-4 h-4 text-neutral-700" />
              <span>Inspect Community Flyer</span>
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
            >
              <span>Unlock Client Status</span>
            </button>
          </div>
        </div>

        {/* 2 Strategic Institutional Milestone Panels (No Toy Emojis or Candy Colors) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Milestone 1: 1,000 Transactions Milestone */}
          <div className="bg-neutral-50/70 border border-neutral-200/90 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-500">
                  Transaction Milestone Protocol
                </span>
                <span className="text-xs font-mono font-bold text-neutral-900">
                  {MEGA_PRIZE_INFO.currentSold} / {MEGA_PRIZE_INFO.soldMilestone} Registered
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-neutral-950 mt-4 font-['Cormorant_Garamond',serif] leading-snug">
                Every 1,000 Properties Transacted Unlocks Major Milestone Giveaways
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
                For every 1,000 completed property acquisitions through TERVOONE, verified homeowners enter exclusive milestone asset allocations, including premium electric vehicles, high-end motorcycles, and registered residential land parcels.
              </p>
              
              {/* Discrete Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-neutral-600 mb-2 font-mono">
                  <span>Current Cohort Completion</span>
                  <span className="text-brand font-bold">74.2%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-1">
                  <div className="bg-brand h-1 rounded-full" style={{ width: '74.2%' }} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
                <span className="bg-white border border-neutral-200 px-3 py-1 rounded-md">Executive SUV & EV Allocation</span>
                <span className="bg-white border border-neutral-200 px-3 py-1 rounded-md">Royal Enfield Hunter Fleet</span>
                <span className="bg-white border border-neutral-200 px-3 py-1 rounded-md">2,400 Sq.Ft Clear-Title Plot</span>
              </div>
            </div>
          </div>

          {/* Milestone 2: 1,000 Members Cashback */}
          <div className="bg-neutral-50/70 border border-neutral-200/90 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-500">
                  Client Capital Program
                </span>
                <span className="text-xs font-mono font-bold text-neutral-900">
                  {MEGA_PRIZE_INFO.currentMembers} / {MEGA_PRIZE_INFO.cashbackMilestone} Members
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-neutral-950 mt-4 font-['Cormorant_Garamond',serif] leading-snug">
                Every 1,000 Members Unlocks Up to ₹1,00,000 Direct Acquisition Cashback
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
                As the TERVOONE community expands, every 1,000 verified members unlocks up to ₹1,00,000 direct institutional cashback credited against subsequent real estate transactions across Tamil Nadu.
              </p>

              {/* Discrete Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-neutral-600 mb-2 font-mono">
                  <span>Community Capital Maturation</span>
                  <span className="text-brand font-bold">89.0%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-1">
                  <div className="bg-brand h-1 rounded-full" style={{ width: '89%' }} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
                <span className="bg-white border border-neutral-200 px-3 py-1 rounded-md">Direct Wire Transfer Credit</span>
                <span className="bg-white border border-neutral-200 px-3 py-1 rounded-md">Zero Lock-In Or Redundancies</span>
                <span className="bg-white border border-neutral-200 px-3 py-1 rounded-md">Subsequent Purchase Protection</span>
              </div>
            </div>
          </div>

        </div>

        {/* 10 Lifestyle Sectors Grid & Catalog */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
                Institutional Catalog
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-neutral-950 font-['Cormorant_Garamond',serif] mt-0.5">
                10 Privileged Lifestyle Categories
              </h3>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Select any category to inspect merchant terms and participating corporate partners.
            </p>
          </div>

          {/* 10 Category Monochromatic Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {REWARD_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedRewardId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedRewardId(cat.id)}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                      : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold tracking-wider ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {cat.number}
                    </span>
                    <div className={isSelected ? 'text-white' : 'text-neutral-600'}>
                      {getRewardIcon(cat.iconName, 'w-4 h-4')}
                    </div>
                  </div>
                  <div className="text-xs font-semibold leading-snug line-clamp-2">
                    {cat.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Detail Panel (MNC Clean Architecture) */}
          <div className="mt-8 bg-neutral-50/70 border border-neutral-200 rounded-xl p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
                    {getRewardIcon(currentReward.iconName, 'w-5 h-5')}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Sector {currentReward.number} · {currentReward.subtitle}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-medium text-neutral-950 font-['Cormorant_Garamond',serif] mt-0.5">
                      {currentReward.title}
                    </h4>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {currentReward.description}
                </p>

                {/* Specific Partner Offer Callout */}
                <div className="mt-6 p-4 bg-white border border-neutral-200 rounded-lg">
                  <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-[0.15em] mb-1">
                    TERVOONE Guaranteed Institutional Benefit
                  </div>
                  <p className="text-sm font-semibold text-neutral-950">
                    {currentReward.partnerOffer}
                  </p>
                </div>
              </div>

              {/* Action Sidebar */}
              <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-xl p-6 shadow-2xs flex flex-col justify-between h-full">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-900 mb-3">
                    Privilege Redemption Protocol
                  </h5>
                  <ol className="space-y-2 text-xs text-neutral-600 list-decimal list-inside leading-relaxed">
                    <li>Shortlist your verified Chennai or suburban property.</li>
                    <li>Conduct your advisory site visit with TERVOONE.</li>
                    <li>Upon booking confirmation, obtain your TERVOONE Client ID.</li>
                    <li>Present your verified credential at partner counters or portals.</li>
                  </ol>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <button
                    onClick={onOpenSiteVisit}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] font-mono text-center text-neutral-400 uppercase tracking-wider mt-2">
                    Zero spam · Direct WhatsApp assistance
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* High Resolution Flyer Modal Lightbox */}
        {showFlyerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-white border-b border-neutral-200 text-neutral-900 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Official TERVOONE Community Lifestyle Flyer</h4>
                  <p className="text-xs text-neutral-500">Authentic reference document provided by TERVOONE</p>
                </div>
                <button
                  onClick={() => setShowFlyerModal(false)}
                  className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold rounded-md text-neutral-700 cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="p-2 max-h-[80vh] overflow-y-auto bg-neutral-100 flex justify-center">
                <img
                  src="/public/assets/aistudio/image_c0de0076.png"
                  alt="TERVOONE Community Flyer"
                  className="w-full max-h-[75vh] object-contain rounded-md shadow-xs"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
