'use client';

import { RewardsSection } from '../../src/components/RewardsSection';
import { useSite } from '../../src/site/SiteContext';

export default function RewardsPage() {
  const { openSiteVisit } = useSite();

  return (
    <div className="pt-6">
      <RewardsSection onOpenSiteVisit={() => openSiteVisit()} />
    </div>
  );
}
