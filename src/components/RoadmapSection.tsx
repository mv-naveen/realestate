import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/roadmap';
import { MapPin, Heart, CheckSquare, Calendar, FileCheck, Key, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface RoadmapSectionProps {
  onGoToListings: () => void;
  onOpenSiteVisit: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  onGoToListings,
  onOpenSiteVisit
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-neutral-900" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-neutral-900" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-neutral-900" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-neutral-900" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-neutral-900" />;
      case 'Key':
        return <Key className="w-5 h-5 text-neutral-900" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-neutral-50/60 border-t border-b border-neutral-200 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (MNC Editorial Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              Acquisition Roadmap · Advisory Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-medium text-neutral-950 tracking-tight mt-1 text-balance font-['Cormorant_Garamond',serif]">
              Your Dream Property, Just 6 Simple Steps Away
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl font-normal leading-relaxed">
              From initial discovery to registered ownership, our structured advisory protocol ensures complete legal vetting, transparent terms, and lifelong private rewards.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* View Official Roadmap Document */}
            <button
              onClick={() => setShowFlyerModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 bg-white border border-neutral-300 rounded-md hover:bg-neutral-100 transition-colors shadow-2xs cursor-pointer"
            >
              <Eye className="w-4 h-4 text-neutral-700" />
              <span>Inspect Official Roadmap</span>
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
            >
              <span>Begin With Step 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6-Step Horizontal Progress Bar & Cards */}
        <div className="mt-10">
          {/* Step Selector Tabs (Architectural Minimalist Tabs) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {ROADMAP_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3 sm:p-4 rounded-lg border transition-all cursor-pointer min-w-0 overflow-hidden ${
                  activeStep === idx
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between gap-2 min-w-0">
                  <span className={`text-[10px] font-mono font-bold tracking-wider uppercase shrink-0 ${activeStep === idx ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    Step 0{step.stepNumber}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-widest truncate ${activeStep === idx ? 'text-neutral-400' : 'text-neutral-400'}`}>
                    {step.tagline}
                  </span>
                </div>
                <div className="font-semibold text-xs sm:text-sm mt-1.5 truncate">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Showcase (Clean Luxury White Presentation) */}
          <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0">
                    {getStepIcon(ROADMAP_STEPS[activeStep].iconName)}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-[0.2em]">
                      Protocol Step 0{ROADMAP_STEPS[activeStep].stepNumber} · {ROADMAP_STEPS[activeStep].tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-neutral-950 font-['Cormorant_Garamond',serif] mt-0.5">
                      {ROADMAP_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl font-normal">
                  {ROADMAP_STEPS[activeStep].description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {activeStep <= 2 && (
                    <button
                      onClick={onGoToListings}
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-md shadow-xs transition-colors cursor-pointer"
                    >
                      {ROADMAP_STEPS[activeStep].actionText}
                    </button>
                  )}
                  {activeStep >= 3 && (
                    <button
                      onClick={onOpenSiteVisit}
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-md shadow-xs transition-colors cursor-pointer"
                    >
                      {ROADMAP_STEPS[activeStep].actionText}
                    </button>
                  )}

                  <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                    FIND IT · SHORTLIST IT · VISIT IT · OWN IT
                  </span>
                </div>
              </div>

              {/* Advisory Assurance Box */}
              <div className="lg:col-span-4 bg-neutral-50/80 border border-neutral-200 rounded-xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-600 mb-3 font-mono">
                  <span>Advisory Journey Phase</span>
                  <span className="text-brand font-bold">0{activeStep + 1} / 06</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-1">
                  <div
                    className="bg-brand h-1 rounded-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                  />
                </div>
                
                <ul className="mt-5 space-y-2.5 text-xs text-neutral-600">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>No uninvited broker solicitations or repeated follow-ups</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>WhatsApp-first transparent scheduling with senior advisor</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Direct access to builder-promoted prices and RERA kits</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Private client cashback & merchant network unlocked</span>
                  </li>
                </ul>
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
                  <h4 className="font-bold text-sm text-neutral-900">Official TERVOONE 6-Step Roadmap Flyer</h4>
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
                  src="/public/assets/aistudio/image_e8c4d57e.png"
                  alt="TERVOONE Roadmap Flyer"
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
