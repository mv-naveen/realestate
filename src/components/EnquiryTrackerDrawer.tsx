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
        
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Live Buyer Portal · Real-Time Updates
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Enquiry & Site Visit Tracker
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Zero-Spam Reassurance Banner */}
        <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Zero Telemarketing Policy:</strong> Your contact information has not been shared with external lead brokers.
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          {enquiries.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <Clock className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-800">No active site visits scheduled</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore our verified Chennai listings and schedule a complimentary site visit with free cab assistance.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBookNewVisit();
                }}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-semibold text-xs rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                <span>Book a Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            enquiries.map((enq) => {
              const isCancelled = enq.status === 'Cancelled';
              return (
                <div
                  key={enq.id}
                  className={`p-5 rounded-xl border transition-all ${
                    isCancelled
                      ? 'bg-slate-50 border-slate-200 opacity-75'
                      : 'bg-white border-slate-200 shadow-xs hover:border-emerald-300'
                  }`}
                >
                  {/* Top Bar of card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {enq.id}
                      </span>
                      <span className="text-xs text-slate-400 ml-2">Booked on {enq.submittedAt}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isCancelled
                            ? 'bg-slate-200 text-slate-600'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {isCancelled ? 'Cancelled (Choice Respected)' : enq.status}
                      </span>
                    </div>
                  </div>

                  {/* Main Info */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Property & Locality</span>
                      <strong className="text-slate-900 font-bold text-sm block">
                        {enq.propertyTitle}
                      </strong>
                      <span className="text-slate-600">{enq.propertyLocality}, Chennai</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block">Scheduled Slot</span>
                      <div className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{enq.preferredDate}</span>
                      </div>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        {enq.timeSlot}
                      </div>
                    </div>
                  </div>

                  {/* Advisor contact & Cancel actions */}
                  {!isCancelled && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="text-xs">
                        <span className="text-slate-500">Dedicated Advisor:</span>
                        <div className="font-bold text-slate-900">{enq.assignedAdvisor}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/919840122830?text=Hello%20${encodeURIComponent(enq.assignedAdvisor)}%2C%20regarding%20my%20site%20visit%20Ref%3A%20${enq.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Advisor</span>
                        </a>

                        <button
                          onClick={() => onCancelEnquiry(enq.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                          title="No longer interested"
                        >
                          <Ban className="w-3.5 h-3.5" />
                          <span>No Longer Interested</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {isCancelled && (
                    <div className="mt-3 text-[11px] text-slate-500 italic">
                      Visit cancelled. As promised, you will receive no unwanted calls or repeated messages.
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Need urgent assistance? WhatsApp our Chennai Desk at +91 98401 22830
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
