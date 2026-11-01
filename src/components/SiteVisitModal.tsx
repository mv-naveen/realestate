import React, { useEffect, useState } from 'react';
import { Property, EnquiryRecord } from '../types';
import { CHENNAI_PROPERTIES } from '../data/properties';
import { X, CheckCircle2, Phone, User, Mail } from 'lucide-react';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
  onBookingComplete: (newEnquiry: EnquiryRecord) => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
  onBookingComplete
}) => {
  const [propertyId, setPropertyId] = useState<string>(selectedProperty?.id || CHENNAI_PROPERTIES[0].id);
  const [buyerName, setBuyerName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [confirmedRecord, setConfirmedRecord] = useState<EnquiryRecord | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setPropertyId(selectedProperty?.id || CHENNAI_PROPERTIES[0].id);
    setErrorMessage('');
    setConfirmedRecord(null);
  }, [isOpen, selectedProperty]);

  if (!isOpen) return null;

  const currentProperty = CHENNAI_PROPERTIES.find((p) => p.id === propertyId) || CHENNAI_PROPERTIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!buyerName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (email.trim() && !email.includes('@')) {
      setErrorMessage('Please enter a valid email address, or leave it blank.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newEnquiry: EnquiryRecord = {
      id: `TRV-${randomNum}`,
      propertyId: currentProperty.id,
      propertyTitle: currentProperty.title,
      propertyLocality: currentProperty.locality,
      buyerName: buyerName.trim(),
      mobileNumber: mobileNumber.trim(),
      email: email.trim(),
      status: 'Received',
      assignedAdvisor: 'Karthikeyan R. (Senior Chennai Advisor)',
      advisorWhatsApp: '+91 98401 22830',
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    setConfirmedRecord(newEnquiry);
    onBookingComplete(newEnquiry);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl my-8 border border-slate-200">
        <div className="p-6 bg-white border-b border-neutral-200 text-neutral-900 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-widest">
              Private Client Desk · Direct Advisory
            </div>
            <h3 className="text-xl font-normal text-neutral-900 mt-1 font-['Cormorant_Garamond',serif]">
              Enquire
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

        <div className="p-6">
          {confirmedRecord ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center mx-auto border border-neutral-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-light text-neutral-900 font-['Cormorant_Garamond',serif]">
                  Enquiry received
                </h4>
                <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  We have your details for {confirmedRecord.propertyTitle}. An advisor will contact you on WhatsApp.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded-sm transition-colors cursor-pointer uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Property
                </label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {CHENNAI_PROPERTIES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.locality} · {p.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center gap-3">
                <img
                  src={currentProperty.imageUrl}
                  alt={currentProperty.title}
                  className="w-14 h-14 object-cover rounded-sm shrink-0"
                />
                <div className="text-xs">
                  <div className="font-semibold text-neutral-900">{currentProperty.title}</div>
                  <div className="text-neutral-500">{currentProperty.locality} · {currentProperty.zone}</div>
                  <div className="font-mono text-neutral-900 font-medium mt-0.5">{currentProperty.priceDisplay}</div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address (optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium py-3 px-4 rounded-sm transition-colors cursor-pointer text-xs uppercase tracking-wider"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
