'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ActivePage, EnquiryRecord, Property, PropertyCategory, ChennaiZone, PriceBracket } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PropertyDetailModal } from '../components/PropertyDetailModal';
import { SiteVisitModal } from '../components/SiteVisitModal';

const PAGE_ROUTES: Record<ActivePage, string> = {
  home: '/',
  listings: '/properties',
  rewards: '/rewards',
  partners: '/partners',
  investors: '/investors',
  about: '/about'
};

export function pageFromPath(pathname: string): ActivePage {
  if (pathname.startsWith('/properties')) return 'listings';
  if (pathname.startsWith('/rewards')) return 'rewards';
  if (pathname.startsWith('/partners')) return 'partners';
  if (pathname.startsWith('/investors')) return 'investors';
  if (pathname.startsWith('/about')) return 'about';
  return 'home';
}

export type SearchFilters = {
  category: PropertyCategory | 'all';
  zone: ChennaiZone | 'all';
  priceBracket: PriceBracket;
  bhk: number | 'all';
  searchQuery: string;
};

export function filtersToPath(filters: SearchFilters) {
  const params = new URLSearchParams();
  if (filters.category !== 'all') params.set('category', filters.category);
  if (filters.zone !== 'all') params.set('zone', filters.zone);
  if (filters.priceBracket !== 'all') params.set('price', filters.priceBracket);
  if (filters.bhk !== 'all') params.set('bhk', String(filters.bhk));
  if (filters.searchQuery.trim()) params.set('q', filters.searchQuery.trim());
  const query = params.toString();
  return query ? `/properties?${query}` : '/properties';
}

type SiteContextValue = {
  openSiteVisit: (property?: Property) => void;
  inspectProperty: (property: Property) => void;
  goToPage: (page: ActivePage) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error('useSite must be used within SiteShell');
  return value;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [selectedPropertyForVisit, setSelectedPropertyForVisit] = useState<Property | null>(null);
  const [inspectedProperty, setInspectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    try {
      const savedEnquiries = localStorage.getItem('tervoone_enquiries');
      if (savedEnquiries) setEnquiries(JSON.parse(savedEnquiries));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem('tervoone_enquiries', JSON.stringify(enquiries));
    } catch {}
  }, [enquiries, hydrated]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const goToPage = (page: ActivePage) => {
    router.push(PAGE_ROUTES[page]);
  };

  const openSiteVisit = (property?: Property) => {
    setSelectedPropertyForVisit(property || null);
    setIsSiteVisitOpen(true);
  };

  const value: SiteContextValue = {
    openSiteVisit,
    inspectProperty: (property) => setInspectedProperty(property),
    goToPage
  };

  return (
    <SiteContext.Provider value={value}>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <Navbar
          activePage={pageFromPath(pathname)}
          setActivePage={goToPage}
          enquiriesCount={enquiries.filter((enquiry) => enquiry.status !== 'Cancelled').length}
          onOpenSiteVisit={() => openSiteVisit()}
          onOpenTracker={() => openSiteVisit()}
        />

        <main className="flex-1">{children}</main>

        <PropertyDetailModal
          property={inspectedProperty}
          onClose={() => setInspectedProperty(null)}
          onBookVisit={(property) => openSiteVisit(property)}
        />

        <SiteVisitModal
          isOpen={isSiteVisitOpen}
          onClose={() => setIsSiteVisitOpen(false)}
          selectedProperty={selectedPropertyForVisit}
          onBookingComplete={(newEnquiry) => setEnquiries((prev) => [newEnquiry, ...prev])}
        />

        <Footer
          setActivePage={goToPage}
          onOpenSiteVisit={() => openSiteVisit()}
        />
      </div>
    </SiteContext.Provider>
  );
}
