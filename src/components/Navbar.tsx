import React from 'react';
import { ActivePage } from '../types';
import { ShieldCheck, MessageCircle, Heart, Clock } from 'lucide-react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  shortlistCount: number;
  enquiriesCount: number;
  onOpenSiteVisit: () => void;
  onOpenTracker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  shortlistCount,
  enquiriesCount,
  onOpenSiteVisit,
  onOpenTracker
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text/emblem element, no secondary pills) */}
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-xl shadow-sm group-hover:bg-emerald-700 transition-colors">
              <span className="tracking-tighter">T1</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                TERVO<span className="text-emerald-600">ONE</span>
              </span>
              <span className="text-[10px] tracking-wider font-semibold text-slate-500 uppercase -mt-1">
                Property · Rewards · Community
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-line, clean hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActivePage('home')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'home' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('listings')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'listings' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Chennai Listings
            </button>
            <button
              onClick={() => setActivePage('rewards')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'rewards' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Rewards & Cashback
            </button>
            <button
              onClick={() => setActivePage('partners')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'partners' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Reward Partners
            </button>
            <button
              onClick={() => setActivePage('investors')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'investors' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Investor Relations
            </button>
            <button
              onClick={() => setActivePage('about')}
              className={`hover:text-emerald-700 transition-colors whitespace-nowrap py-1 cursor-pointer ${
                activePage === 'about' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              About TERVOONE
            </button>
          </nav>

          {/* Zone 3: Actions (Single primary action + clean secondary affordances) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Shortlist affordance */}
            <button
              onClick={() => setActivePage('listings')}
              className="relative p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              title="Saved Properties"
              aria-label="Saved Properties"
            >
              <Heart className="w-5 h-5" />
              {shortlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {shortlistCount}
                </span>
              )}
            </button>

            {/* Live Enquiry Tracker trigger */}
            <button
              onClick={onOpenTracker}
              className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Track Site Visit Bookings"
            >
              <Clock className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline whitespace-nowrap">Track Enquiries</span>
              {enquiriesCount > 0 && (
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {enquiriesCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenSiteVisit}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <span>Book Site Visit</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center gap-4 py-2.5 overflow-x-auto border-t border-slate-100 text-xs font-medium text-slate-600 scrollbar-none">
          <button
            onClick={() => setActivePage('home')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'home' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => setActivePage('listings')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'listings' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Listings
          </button>
          <button
            onClick={() => setActivePage('rewards')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'rewards' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Rewards & Cashback
          </button>
          <button
            onClick={() => setActivePage('partners')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'partners' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Partners
          </button>
          <button
            onClick={() => setActivePage('investors')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'investors' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Investor Relations
          </button>
          <button
            onClick={() => setActivePage('about')}
            className={`whitespace-nowrap py-1 cursor-pointer ${activePage === 'about' ? 'text-emerald-700 font-bold' : ''}`}
          >
            About
          </button>
        </div>
      </div>
    </header>
  );
};
