'use client';

import { AboutSection } from '../../src/components/AboutSection';
import { useSite } from '../../src/site/SiteContext';

export default function AboutPage() {
  const { openSiteVisit, goToPage } = useSite();

  return (
    <AboutSection
      onOpenSiteVisit={() => openSiteVisit()}
      onExploreListings={() => goToPage('listings')}
    />
  );
}
