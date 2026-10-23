import React from 'react';
import { ActivePage } from '../types';
import { ShieldCheck, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenSiteVisit: () => void;
  onOpenTracker: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenSiteVisit,
  onOpenTracker
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Ethos (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-lg">
                <span>T1</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                TERVO<span className="text-emerald-500">ONE</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              One Platform. More Possibilities. <br />
              We make property buying simple, transparent, and rewarding across Chennai without selling customer leads to third parties.
            </p>

            <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-1 max-w-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero-Spam & Respect Promise</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                "No unwanted calls or repeated messages. If you're no longer interested, just let us know — we'll respect your choice."
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform Views
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActivePage('home')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('listings')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Chennai Listings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('rewards')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Rewards & Cashback
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('partners')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Reward Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('investors')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Investor Relations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('about')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  About TERVOONE
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Chennai Zones */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Chennai Zones
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Chennai North (Kolathur, Perambur)</li>
              <li>Chennai South (Velachery, Tambaram)</li>
              <li>Chennai Central (Anna Nagar, Kilpauk)</li>
              <li>OMR & ECR Coastal Corridor</li>
              <li>Gated Community Plots</li>
              <li>Beachfront Villas</li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Direct Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Buyer Assistance
            </h4>
            <p className="text-xs text-slate-400">
              Preferred WhatsApp channel for visit coordination and legal kit queries:
            </p>
            <a
              href="https://wa.me/919840122830?text=Hello%20TERVOONE%2C%20I%20would%20like%20to%20learn%20more%20about%20Chennai%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors cursor-pointer text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
            <div className="pt-2">
              <button
                onClick={onOpenTracker}
                className="text-xs text-slate-300 hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
              >
                <span>Track My Active Site Visits</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 TERVOONE Ecosystem. All rights reserved. Founded 4-Oct-2026 · Chennai, Tamil Nadu.
          </div>
          <div className="flex items-center gap-4">
            <span>RERA Registered Partner Network</span>
            <span>·</span>
            <span>Zero Unwanted Calls Policy</span>
            <span>·</span>
            <button
              onClick={() => setActivePage('about')}
              className="hover:text-slate-300 cursor-pointer"
            >
              Mission & Vision
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
