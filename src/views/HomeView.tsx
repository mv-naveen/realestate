'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { CHENNAI_PROPERTIES } from '../data/properties';
import { HeroSearch } from '../components/HeroSearch';
import { RoadmapSection } from '../components/RoadmapSection';
import { RewardsSection } from '../components/RewardsSection';
import { CharterSection } from '../components/CharterSection';
import { filtersToPath, useSite } from '../site/SiteContext';

export function HomeView() {
  const router = useRouter();
  const { openSiteVisit, inspectProperty, goToPage } = useSite();

  return (
    <div>
      <HeroSearch
        onSearch={(filters) => router.push(filtersToPath(filters))}
        onExploreRewards={() => goToPage('rewards')}
        onOpenSiteVisit={() => openSiteVisit()}
      />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
                Curated Property Options
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-950 tracking-tight mt-1 font-['Cormorant_Garamond',serif]">
                Featured Chennai Developments
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Direct developer opportunities across prime corridors. Zero intermediary markups.
              </p>
            </div>

            <button
              onClick={() => goToPage('listings')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-neutral-950 cursor-pointer"
            >
              <span>Explore Full Portfolio ({CHENNAI_PROPERTIES.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {CHENNAI_PROPERTIES.slice(0, 3).map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div className="relative aspect-16/10 bg-neutral-100 overflow-hidden">
                  <img
                    src={prop.imageUrl}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-white bg-neutral-950/80 px-2.5 py-1 rounded font-semibold backdrop-blur-xs">
                    {prop.zone} · {prop.category}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div className="font-mono text-xl font-bold tabular-nums">
                      {prop.priceDisplay}
                    </div>
                    <div className="text-xs text-neutral-200 font-medium">
                      {prop.possession}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">{prop.developer}</div>
                    <h3 className="text-lg font-bold text-neutral-950 mt-1 truncate group-hover:text-neutral-700 transition-colors">
                      {prop.title}
                    </h3>
                    <div className="mt-2 text-xs text-neutral-600 font-medium">
                      {prop.locality} · {prop.bhk > 0 ? `${prop.bhk} BHK` : prop.category === 'Farm Land' ? 'Organic Farm Land' : 'Residential Plot'} · {prop.areaSqFt.toLocaleString()} sq.ft
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2.5">
                    <button
                      onClick={() => inspectProperty(prop)}
                      className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer text-center"
                    >
                      View Specs
                    </button>
                    <button
                      onClick={() => openSiteVisit(prop)}
                      className="flex-1 py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors cursor-pointer text-center shadow-xs"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoadmapSection
        onGoToListings={() => goToPage('listings')}
        onOpenSiteVisit={() => openSiteVisit()}
      />

      <RewardsSection onOpenSiteVisit={() => openSiteVisit()} />

      <CharterSection
        onOpenSiteVisit={() => openSiteVisit()}
        onReadCharter={() => goToPage('about')}
      />
    </div>
  );
}
