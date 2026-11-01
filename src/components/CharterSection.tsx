'use client';

import { ShieldCheck } from 'lucide-react';

export function CharterSection({
  onOpenSiteVisit,
  onReadCharter
}: {
  onOpenSiteVisit: () => void;
  onReadCharter: () => void;
}) {
  return (
    <section className="py-20 bg-neutral-50/80 text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
              The TERVOONE Charter
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-neutral-950 tracking-tight mt-1 text-balance font-['Cormorant_Garamond',serif] leading-tight">
              Too Many Intermediaries. Too Much Confusion. Property Acquisition Should Be Simpler.
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
              Avoid the fragmentation of unverified listing portals and relentless broker calls. TERVOONE connects discerning buyers directly with verified builders, combining transparent transaction advisory with exclusive lifestyle rewards.
            </p>
            <p className="mt-3 text-sm font-semibold text-neutral-900">
              We are not another transactional broker — we are your dedicated property acquisition partner.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onReadCharter}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-white rounded-md shadow-sm transition-all cursor-pointer"
              >
                Read Institutional Charter
              </button>
              <button
                onClick={onOpenSiteVisit}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 rounded-md transition-colors cursor-pointer"
              >
                Enquire
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border border-neutral-200/90 rounded-xl p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-neutral-950">TERVOONE Promise</div>
                <div className="text-[11px] text-neutral-500 font-medium">Buyer Privacy & Protection Code</div>
              </div>
            </div>
            <blockquote className="text-xs text-neutral-700 italic border-l-2 border-brand pl-4 py-1.5 my-3 leading-relaxed">
              "Zero unsolicited telemarketing calls. We conduct communication via an organized WhatsApp client desk, and if you conclude your search, simply let us know — your privacy is permanently respected."
            </blockquote>
            <div className="text-[11px] text-neutral-500 font-mono uppercase tracking-wider mt-2">
              TERVOONE · ONE PLATFORM. MORE POSSIBILITIES.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
