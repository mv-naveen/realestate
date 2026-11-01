import React from 'react';
import { ActivePage } from '../types';
import { Clock, MessageCircle, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  enquiriesCount: number;
  onOpenSiteVisit: () => void;
  onOpenTracker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  enquiriesCount,
  onOpenSiteVisit,
  onOpenTracker
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-neutral-200/80 transition-colors">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-8 h-16 sm:h-20 min-w-0">
          
          {/* Zone 1: MNC Corporate Brand Identity (Minimalist, Prestigious Typographic Wordmark) */}
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center gap-2.5 sm:gap-3.5 text-left focus:outline-none group cursor-pointer min-w-0"
            aria-label="TERVOONE Home"
          >
            <img
              src="/assets/logo/TERVOONE_logo.png"
              alt="TERVOONE"
              className="h-8 sm:h-11 w-auto shrink-0 object-contain"
            />
            <span className="hidden md:block text-[9px] tracking-[0.25em] font-medium text-neutral-500 uppercase">
              Property · Rewards · Community
            </span>
          </button>

          {/* Zone 2: Navigation Links (Clean, Single-line, MNC Precision) */}
          <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-600">
            <button
              onClick={() => setActivePage('home')}
              className={`hover:text-neutral-900 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'home' ? 'text-neutral-950 font-bold border-b-2 border-brand' : ''
              }`}
            >
              Home
            </button>

            {/* Changed from "Chennai listings" to "Properties" */}
            <button
              onClick={() => setActivePage('listings')}
              className={`hover:text-neutral-900 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'listings' ? 'text-neutral-950 font-bold border-b-2 border-brand' : ''
              }`}
            >
              Properties
            </button>

            <button
              onClick={() => setActivePage('rewards')}
              className={`hover:text-neutral-900 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'rewards' ? 'text-neutral-950 font-bold border-b-2 border-brand' : ''
              }`}
            >
              Rewards
            </button>

            <button
              onClick={() => setActivePage('about')}
              className={`hover:text-neutral-900 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'about' ? 'text-neutral-950 font-bold border-b-2 border-brand' : ''
              }`}
            >
              About Us
            </button>
          </nav>

          {/* Zone 3: Quiet Corporate Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Track Enquiries Button */}
            {/* <button
              onClick={onOpenTracker}
              className="flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-all cursor-pointer"
              title="Track Site Visit Bookings"
            >
              <Clock className="w-3.5 h-3.5 text-neutral-600" />
              <span className="hidden sm:inline whitespace-nowrap">Track Enquiries</span>
              {enquiriesCount > 0 && (
                <span className="bg-neutral-900 text-white text-[10px] font-mono font-bold px-1.5 py-0.2 rounded">
                  {enquiriesCount}
                </span>
              )}
            </button> */}

            {/* Primary Action Button (MNC Classic Dark Obsidian CTA) */}
            <button
              onClick={onOpenSiteVisit}
              className="px-3 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              Enquire
            </button>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center justify-between gap-3 py-2.5 overflow-x-auto border-t border-neutral-200 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] sm:tracking-wider text-neutral-600 scrollbar-none">
          <button
            onClick={() => setActivePage('home')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'home' ? 'text-neutral-950 font-bold border-b border-brand' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage('listings')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'listings' ? 'text-neutral-950 font-bold border-b border-brand' : ''}`}
          >
            Properties
          </button>
          <button
            onClick={() => setActivePage('rewards')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'rewards' ? 'text-neutral-950 font-bold border-b border-brand' : ''}`}
          >
            Rewards
          </button>
          <button
            onClick={() => setActivePage('about')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'about' ? 'text-neutral-950 font-bold border-b border-brand' : ''}`}
          >
            About Us
          </button>
        </div>
      </div>
    </header>
  );
};
