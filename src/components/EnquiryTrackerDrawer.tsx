import React from 'react';
import { EnquiryRecord } from '../types';
import { X, CheckCircle2, Clock, Calendar, MessageCircle, AlertCircle, Ban, ArrowRight } from 'lucide-react';

interface EnquiryTrackerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: EnquiryRecord[];
  onCancelEnquiry: (id: string) => void;
  onBookNewVisit: () => void;
}

export const EnquiryTrackerDrawer: React.FC<EnquiryTrackerDrawerProps> = ({
  isOpen,
  onClose,
  enquiries,
  onCancelEnquiry,
  onBookNewVisit
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl my-8 border border-slate-200">
        
        {/* Header (White Theme) */}
        <div className="p-6 bg-white border-b border-neutral-200 text-neutral-900 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-widest">
              Private Client Portal · Inspection Tracker
            </div>
            <h3 className="text-xl font-normal text-neutral-900 mt-1 font-['Cormorant_Garamond',serif]">
              Client Enquiries & Scheduled Inspections
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Zero-Spam Reassurance Banner */}
        <div className="bg-neutral-50 px-6 py-3 border-b border-neutral-200 flex items-center justify-between text-xs text-neutral-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
            <span>
              <strong className="text-neutral-900">Institutional Privacy Standard:</strong> Your contact dossier is strictly non-distributed and confidential.
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          {enquiries.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <Clock className="w-10 h-10 text-neutral-300 mx-auto" />
              <h4 className="text-base font-semibold text-neutral-800">No active site inspections scheduled</h4>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto font-light">
                Explore our verified Chennai portfolio and schedule a private site visit with chauffeured executive transit.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBookNewVisit();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-white font-medium text-xs rounded-sm hover:bg-neutral-800 transition-colors cursor-pointer uppercase tracking-wider"
              >
                <span>Schedule Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            enquiries.map((enq) => {
              const isCancelled = enq.status === 'Cancelled';
              return (
                <div
                  key={enq.id}
                  className={`p-5 rounded-lg border transition-all ${
                    isCancelled
                      ? 'bg-neutral-50 border-neutral-200 opacity-70'
                      : 'bg-white border-neutral-200 shadow-xs hover:border-neutral-400'
                  }`}
                >
                  {/* Top Bar of card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-100">
                    <div>
                      <span className="font-mono text-xs font-semibold text-neutral-900 bg-neutral-100 px-2.5 py-0.5 rounded-sm">
                        {enq.id}
                      </span>
                      <span className="text-xs text-neutral-400 ml-2">Booked on {enq.submittedAt}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-sm border ${
                          isCancelled
                            ? 'bg-neutral-100 text-neutral-500 border-neutral-200'
                            : 'bg-neutral-950 text-white border-neutral-950'
                        }`}
                      >
                        {isCancelled ? 'Cancelled (Choice Respected)' : enq.status}
                      </span>
                    </div>
                  </div>

                  {/* Main Info */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-neutral-500 block text-[11px] uppercase tracking-wider">Property & Locality</span>
                      <strong className="text-neutral-900 font-semibold text-sm block mt-0.5">
                        {enq.propertyTitle}
                      </strong>
                      <span className="text-neutral-600">{enq.propertyLocality}, Chennai Metro</span>
                    </div>

                    <div>
                      <span className="text-neutral-500 block text-[11px] uppercase tracking-wider">Scheduled Inspection</span>
                      <div className="font-medium text-neutral-900 flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                        <span>{enq.preferredDate}</span>
                      </div>
                      <div className="text-neutral-500 text-[11px] mt-0.5">
                        {enq.timeSlot}
                      </div>
                    </div>
                  </div>

                  {/* Advisor contact & Cancel actions */}
                  {!isCancelled && (
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-xs">
                        <span className="text-neutral-500">Designated Advisor:</span>
                        <div className="font-semibold text-neutral-900">{enq.assignedAdvisor}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/919840122830?text=Hello%20${encodeURIComponent(enq.assignedAdvisor)}%2C%20regarding%20my%20site%20visit%20Ref%3A%20${enq.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-sm transition-colors cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Advisor</span>
                        </a>

                        <button
                          onClick={() => onCancelEnquiry(enq.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-sm transition-colors cursor-pointer"
                          title="No longer interested"
                        >
                          <Ban className="w-3.5 h-3.5" />
                          <span>No Longer Interested</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {isCancelled && (
                    <div className="mt-3 text-[11px] text-neutral-500 italic">
                      Visit cancelled. In accordance with our protocol, you will receive no telemarketing contacts or unsolicited follow-ups.
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs">
          <span className="text-neutral-500">
            Direct Concierge Desk: +91 98401 22830 (Chennai Headquarters)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-sm transition-colors cursor-pointer uppercase tracking-wider"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
