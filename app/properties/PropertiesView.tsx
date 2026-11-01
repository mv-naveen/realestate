'use client';

import { useSearchParams } from 'next/navigation';
import { PropertyList } from '../../src/components/PropertyList';
import { useSite } from '../../src/site/SiteContext';
import { ChennaiZone, PriceBracket, PropertyCategory } from '../../src/types';

const CATEGORIES: Array<PropertyCategory | 'all'> = ['all', 'Apartment', 'Villa', 'Plots', 'Farm Land'];
const ZONES: Array<ChennaiZone | 'all'> = [
  'all',
  'Chennai North',
  'Chennai South',
  'Chennai Central',
  'OMR & ECR',
  'Chengalpattu',
  'Kanchipuram',
  'Thiruvallur'
];
const PRICES: PriceBracket[] = ['all', 'below_1cr', '1cr_to_2cr', 'above_2cr'];

export function PropertiesView() {
  const params = useSearchParams();
  const { openSiteVisit, inspectProperty } = useSite();

  const categoryParam = params.get('category');
  const zoneParam = params.get('zone');
  const priceParam = params.get('price');
  const bhkParam = params.get('bhk');
  const bhkNumber = bhkParam ? Number(bhkParam) : NaN;

  return (
    <PropertyList
      key={params.toString()}
      initialCategory={CATEGORIES.includes(categoryParam as PropertyCategory | 'all') ? (categoryParam as PropertyCategory | 'all') : 'all'}
      initialZone={ZONES.includes(zoneParam as ChennaiZone | 'all') ? (zoneParam as ChennaiZone | 'all') : 'all'}
      initialPrice={PRICES.includes(priceParam as PriceBracket) ? (priceParam as PriceBracket) : 'all'}
      initialBhk={bhkNumber === 2 || bhkNumber === 3 || bhkNumber === 4 ? bhkNumber : 'all'}
      initialSearch={params.get('q') ?? ''}
      onOpenSiteVisit={openSiteVisit}
      onSelectProperty={inspectProperty}
    />
  );
}
