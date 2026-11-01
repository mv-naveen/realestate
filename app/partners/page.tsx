'use client';

import { PartnersSection } from '../../src/components/PartnersSection';
import { useSite } from '../../src/site/SiteContext';

export default function PartnersPage() {
  const { openSiteVisit } = useSite();

  return <PartnersSection onOpenSiteVisit={() => openSiteVisit()} />;
}
