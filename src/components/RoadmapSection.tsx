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
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-emerald-600" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-emerald-600" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-emerald-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-emerald-600" />;
      case 'Key':
        return <Key className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Our Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
              Your Dream Property, Just 6 Simple Steps Away
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              From searching to owning, we make your property journey simple, transparent and rewarding.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* View Original Flyer Button */}
            <button
              onClick={() => setShowFlyerModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm cursor-pointer"
            >
              <Eye className="w-4 h-4 text-emerald-600" />
              <span>View Official Roadmap Flyer</span>
            </button>
            <button
              onClick={onOpenSiteVisit}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
            >
              <span>Start With Step 1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6-Step Horizontal Progress Bar & Cards */}
        <div className="mt-12">
          {/* Step Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {ROADMAP_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-600/30'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${activeStep === idx ? 'text-emerald-100' : 'text-emerald-600'}`}>
                    Step {step.stepNumber}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${activeStep === idx ? 'text-emerald-100' : 'text-slate-400'}`}>
                    {step.tagline}
                  </span>
                </div>
                <div className="font-semibold text-xs sm:text-sm mt-1 truncate">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Showcase */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    {getStepIcon(ROADMAP_STEPS[activeStep].iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                      Step {ROADMAP_STEPS[activeStep].stepNumber} · {ROADMAP_STEPS[activeStep].tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {ROADMAP_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-3xl">
                  {ROADMAP_STEPS[activeStep].description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {activeStep <= 2 && (
                    <button
                      onClick={onGoToListings}
                      className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      {ROADMAP_STEPS[activeStep].actionText}
                    </button>
                  )}
                  {activeStep >= 3 && (
                    <button
                      onClick={onOpenSiteVisit}
                      className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      {ROADMAP_STEPS[activeStep].actionText}
                    </button>
                  )}

                  <span className="text-xs text-slate-400">
                    FIND IT. SHORTLIST IT. VISIT IT. OWN IT.
                  </span>
                </div>
              </div>

              {/* Visual illustration box */}
              <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                  <span>TERVOONE Journey Tracker</span>
                  <span className="text-emerald-600 font-mono">{(activeStep + 1)} of 6 Steps</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                  />
                </div>
                
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No uninvited broker calls or harassment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp-first transparent scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct access to builder-promoted prices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cashback & rewards unlocked at registration</span>
                  </li>
                </ul>
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
                  <h4 className="font-bold text-sm">Official TERVOONE 6-Step Roadmap Flyer</h4>
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
                  src="/public/assets/aistudio/image_e8c4d57e.png"
                  alt="TERVOONE Roadmap Flyer"
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
