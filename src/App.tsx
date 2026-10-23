/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage, Property, PropertyCategory, ChennaiZone, PriceBracket, EnquiryRecord } from './types';
import { CHENNAI_PROPERTIES } from './data/properties';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { RoadmapSection } from './components/RoadmapSection';
import { RewardsSection } from './components/RewardsSection';
import { PropertyList } from './components/PropertyList';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { SiteVisitModal } from './components/SiteVisitModal';
import { EnquiryTrackerDrawer } from './components/EnquiryTrackerDrawer';
import { InvestorRelations } from './components/InvestorRelations';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ShieldCheck, MessageCircle, ArrowRight, Heart, Gift } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  
  // Property Shortlisting (Local Storage backed)
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tervoone_shortlisted');
      return saved ? JSON.parse(saved) : ['prop-1', 'prop-3'];
    } catch {
      return ['prop-1', 'prop-3'];
    }
  });

  // Enquiries & Site Visits (Local Storage backed)
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>(() => {
    try {
      const saved = localStorage.getItem('tervoone_enquiries');
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'TRV-4821',
          propertyId: 'prop-1',
          propertyTitle: 'The Grand Marina Heights',
          propertyLocality: 'Anna Nagar West',
          buyerName: 'Naveen Kumar',
          mobileNumber: '+91 98401 22830',
          email: 'emailnaveenmv@gmail.com',
          preferredDate: '2026-10-25',
          timeSlot: '10:00 AM - 12:00 PM (Morning Slot)',
          pickupRequired: true,
          status: 'Site Visit Confirmed',
          assignedAdvisor: 'Karthikeyan R. (Senior Chennai Advisor)',
          advisorWhatsApp: '+91 98401 22830',
          submittedAt: '4 Oct 2026'
        }
      ];
    } catch {
      return [];
    }
  });

  // Modal states
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState<boolean>(false);
  const [selectedPropertyForVisit, setSelectedPropertyForVisit] = useState<Property | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [inspectedProperty, setInspectedProperty] = useState<Property | null>(null);

  // Search filter query state for passing from Hero to Listings
  const [searchFilters, setSearchFilters] = useState<{
    category: PropertyCategory | 'all';
    zone: ChennaiZone | 'all';
    priceBracket: PriceBracket;
    bhk: number | 'all';
    searchQuery: string;
  }>({
    category: 'all',
    zone: 'all',
    priceBracket: 'all',
    bhk: 'all',
    searchQuery: ''
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('tervoone_shortlisted', JSON.stringify(shortlistedIds));
    } catch {}
  }, [shortlistedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('tervoone_enquiries', JSON.stringify(enquiries));
    } catch {}
  }, [enquiries]);

  // Scroll to top on page switch
  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleShortlist = (id: string) => {
    setShortlistedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenSiteVisit = (property?: Property) => {
    setSelectedPropertyForVisit(property || null);
    setIsSiteVisitOpen(true);
  };

  const handleBookingCompleted = (newEnquiry: EnquiryRecord) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const handleCancelEnquiry = (id: string) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: 'Cancelled' as const } : e))
    );
  };

  const handleHeroSearch = (filters: {
    category: PropertyCategory | 'all';
    zone: ChennaiZone | 'all';
    priceBracket: PriceBracket;
    bhk: number | 'all';
    searchQuery: string;
  }) => {
    setSearchFilters(filters);
    setActivePage('listings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Strict 3-Zone Top Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        shortlistCount={shortlistedIds.length}
        enquiriesCount={enquiries.filter((e) => e.status !== 'Cancelled').length}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <div>
            {/* Dual Hero Section */}
            <HeroSearch
              onSearch={handleHeroSearch}
              onExploreRewards={() => handlePageChange('rewards')}
              onOpenSiteVisit={() => handleOpenSiteVisit()}
            />

            {/* 6-Step Interactive Roadmap from Flyer */}
            <RoadmapSection
              onGoToListings={() => handlePageChange('listings')}
              onOpenSiteVisit={() => handleOpenSiteVisit()}
            />

            {/* Curated Properties Preview Strip */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Curated Property Options
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                      Featured Chennai Developments
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fresh property options directly from builders. Zero broker markups.
                    </p>
                  </div>

                  <button
                    onClick={() => handlePageChange('listings')}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                  >
                    <span>View All Chennai Properties ({CHENNAI_PROPERTIES.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Grid of 3 marquee properties */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CHENNAI_PROPERTIES.slice(0, 3).map((prop) => (
                    <div
                      key={prop.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                        <img
                          src={prop.imageUrl}
                          alt={prop.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 text-xs text-white bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-xs font-medium">
                          {prop.zone} · {prop.category}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white drop-shadow">
                          <div className="font-mono text-xl font-extrabold tabular-nums">
                            {prop.priceDisplay}
                          </div>
                          <div className="text-xs text-emerald-300 font-medium">
                            {prop.possession}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="text-xs text-slate-500">{prop.developer}</div>
                          <h3 className="text-base font-bold text-slate-900 mt-0.5 truncate">
                            {prop.title}
                          </h3>
                          <div className="mt-2 text-xs text-slate-600 font-medium">
                            {prop.locality} · {prop.bhk > 0 ? `${prop.bhk} BHK` : 'Residential Plot'} · {prop.areaSqFt} sq.ft
                          </div>
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                          <button
                            onClick={() => setInspectedProperty(prop)}
                            className="flex-1 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleOpenSiteVisit(prop)}
                            className="flex-1 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
                          >
                            Book Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 10 Lifestyle Rewards Bento Grid */}
            <RewardsSection onOpenSiteVisit={() => handleOpenSiteVisit()} />

            {/* Zero-Spam Buyer Movement Section */}
            <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-8">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Why Choose TERVOONE?
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-1 text-balance">
                      Too Many Intermediaries. Too Much Confusion. Property Buying Should Be Simpler.
                    </h2>
                    <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl">
                      Avoid the confusion of multiple intermediaries and repeated follow-ups. TERVOONE helps you discover property options through a buyer-first platform with transparent communication, exciting rewards and lifestyle benefits.
                    </p>
                    <p className="mt-2 text-base font-semibold text-emerald-400">
                      We're not just another broker — we're your property-buying partner.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <button
                        onClick={() => handlePageChange('about')}
                        className="px-5 py-2.5 text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
                      >
                        Read Our Mission & Vision
                      </button>
                      <button
                        onClick={() => handleOpenSiteVisit()}
                        className="px-5 py-2.5 text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
                      >
                        Schedule Free Site Visit
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">TERVOONE Promise</div>
                        <div className="text-xs text-slate-400">Buyer Protection Code</div>
                      </div>
                    </div>
                    <blockquote className="text-xs text-slate-300 italic border-l-2 border-emerald-500 pl-3 py-1 my-3">
                      "No unwanted calls or repeated messages. We prefer WhatsApp communication, and if you're no longer interested, just let us know — we'll respect your choice."
                    </blockquote>
                    <div className="text-[11px] text-slate-400">
                      TERVOONE — One Platform. More Possibilities.
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* Listings Directory Page */}
        {activePage === 'listings' && (
          <PropertyList
            initialCategory={searchFilters.category}
            initialZone={searchFilters.zone}
            initialPrice={searchFilters.priceBracket}
            initialBhk={searchFilters.bhk}
            initialSearch={searchFilters.searchQuery}
            shortlistedIds={shortlistedIds}
            onToggleShortlist={handleToggleShortlist}
            onOpenSiteVisit={handleOpenSiteVisit}
            onSelectProperty={(prop) => setInspectedProperty(prop)}
          />
        )}

        {/* Rewards & Community Page */}
        {activePage === 'rewards' && (
          <div className="pt-6">
            <RewardsSection onOpenSiteVisit={() => handleOpenSiteVisit()} />
          </div>
        )}

        {/* Partners Page */}
        {activePage === 'partners' && (
          <PartnersSection onOpenSiteVisit={() => handleOpenSiteVisit()} />
        )}

        {/* Investor Relations Page */}
        {activePage === 'investors' && <InvestorRelations />}

        {/* About Us Page */}
        {activePage === 'about' && (
          <AboutSection
            onOpenSiteVisit={() => handleOpenSiteVisit()}
            onExploreListings={() => handlePageChange('listings')}
          />
        )}
      </main>

      {/* Global Interactive Overlays */}
      <PropertyDetailModal
        property={inspectedProperty}
        onClose={() => setInspectedProperty(null)}
        onBookVisit={(prop) => handleOpenSiteVisit(prop)}
        isShortlisted={inspectedProperty ? shortlistedIds.includes(inspectedProperty.id) : false}
        onToggleShortlist={handleToggleShortlist}
      />

      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        selectedProperty={selectedPropertyForVisit}
        onBookingComplete={handleBookingCompleted}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

      <EnquiryTrackerDrawer
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        enquiries={enquiries}
        onCancelEnquiry={handleCancelEnquiry}
        onBookNewVisit={() => handleOpenSiteVisit()}
      />

      {/* Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenSiteVisit={() => handleOpenSiteVisit()}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

    </div>
  );
}
