import React from 'react';
import { ActivePage } from '../types';
import { ShieldCheck, MessageCircle, Handshake, TrendingUp, Building2, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenSiteVisit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenSiteVisit
}) => {
  return (
    <footer className="bg-slate-50 text-slate-600 text-xs border-t border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Top 5-column layout in White Premium Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & Ethos (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
              <img
              src="/assets/logo/TERVOONE_logo_bg.png"
              alt="TERVOONE"
              className="h-8 sm:h-11 w-auto shrink-0 object-contain"
            />
                <span className="text-[10px] tracking-wider font-bold text-slate-500 uppercase -mt-0.5">
                  Property · Rewards · Community
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              One Platform. More Possibilities. <br />
              We make property buying simple, transparent, and rewarding across Chennai and Greater Chennai without selling buyer enquiries to external telemarketers.
            </p>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 max-w-sm shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Spam & Respect Promise</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                "No unwanted calls or repeated messages. We prefer WhatsApp communication, and if you're no longer interested, just let us know — we'll respect your choice."
              </p>
            </div>
          </div>

          {/* Column 2: Properties & Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Properties
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button
                  onClick={() => setActivePage('listings')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left font-medium"
                >
                  All Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('listings')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  Chennai Apartments
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('listings')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  Luxury Beach Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('listings')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  Gated Community Plots
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('listings')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  Farm Land & Agro Plots
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner & Investor Ecosystem (MOVED TO FOOTER PER PDF INSTRUCTIONS) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Partners & Investors
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button
                  onClick={() => setActivePage('rewards')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left font-semibold text-slate-800 flex items-center gap-1.5"
                >
                  <Handshake className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Rewards & Cashback</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('partners')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left font-semibold text-slate-800 flex items-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Property Partners</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('investors')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left font-semibold text-slate-800 flex items-center gap-1.5"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Investor Relations (VC / Angel)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('about')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  About TERVOONE
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('about')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  Mission & Vision Manifesto
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Zones & Direct WhatsApp Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Buyer Desk & Zones
            </h4>
            <p className="text-xs text-slate-600 leading-snug">
              Preferred WhatsApp channel for visit coordination and verified builder legal documentation:
            </p>
            
            <a
              href="https://wa.me/919840122830?text=Hello%20TERVOONE%2C%20I%20would%20like%20to%20learn%20more%20about%20Chennai%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all cursor-pointer text-xs shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Connect</span>
            </a>

            <div className="pt-2 space-y-1 text-[11px] text-slate-500">
              <div className="font-semibold text-slate-700">Covered Regions:</div>
              <div>Chennai Central · South · North · OMR & ECR</div>
              <div className="text-emerald-800 font-semibold">Chenkalpattu · Kanjipuram · Thiruvalur</div>
            </div>

          </div>

        </div>

        {/* Bottom Bar in White Theme */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 TERVOONE Ecosystem. All rights reserved. Founded 4-Oct-2026 · Chennai, Tamil Nadu.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-slate-700">RERA Registered Partner Network</span>
            <span>·</span>
            <span className="font-semibold text-slate-700">Zero Unwanted Calls Policy</span>
            <span>·</span>
            <button
              onClick={() => setActivePage('about')}
              className="hover:text-emerald-700 font-semibold cursor-pointer"
            >
              Mission & Vision
            </button>
            <span>·</span>
            <button
              onClick={() => setActivePage('investors')}
              className="hover:text-emerald-700 font-semibold cursor-pointer"
            >
              Investor Relations
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
