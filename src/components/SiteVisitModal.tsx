import React, { useState } from 'react';
import { Property, EnquiryRecord } from '../types';
import { CHENNAI_PROPERTIES } from '../data/properties';
import {
  X,
  Calendar,
  Clock,
  Car,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Building,
  Phone,
  User,
  Mail
} from 'lucide-react';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
  onBookingComplete: (newEnquiry: EnquiryRecord) => void;
  onOpenTracker: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
  onBookingComplete,
  onOpenTracker
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [propertyId, setPropertyId] = useState<string>(selectedProperty?.id || CHENNAI_PROPERTIES[0].id);
  const [preferredDate, setPreferredDate] = useState<string>('2026-10-26');
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM - 12:00 PM (Morning Slot)');
  const [pickupRequired, setPickupRequired] = useState<boolean>(true);

  // Contact details
  const [buyerName, setBuyerName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [respectChoiceAccepted, setRespectChoiceAccepted] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [confirmedRecord, setConfirmedRecord] = useState<EnquiryRecord | null>(null);

  const currentProperty = CHENNAI_PROPERTIES.find((p) => p.id === propertyId) || CHENNAI_PROPERTIES[0];

  const handleNextToStep2 = () => {
    setErrorMessage('');
    if (!preferredDate) {
      setErrorMessage('Please select a visit date.');
      return;
    }
    setStep(2);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!buyerName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit WhatsApp mobile number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
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
      preferredDate,
      timeSlot,
      pickupRequired,
      status: 'Site Visit Confirmed',
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
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl my-8 border border-slate-200">
        
        {/* Modal Top Banner */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              TERVOONE · Direct Booking Concierge
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Schedule Your Free Site Visit
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

        {/* Progress Indicator */}
        <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-semibold">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">1</span>
            <span>Property & Slot</span>
          </div>
          <div className="h-0.5 w-8 bg-slate-300" />
          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-600'}`}>2</span>
            <span>Contact Details</span>
          </div>
          <div className="h-0.5 w-8 bg-slate-300" />
          <div className={`flex items-center gap-1.5 ${step === 3 ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-600'}`}>3</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {errorMessage && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-medium">
              {errorMessage}
            </div>
          )}

          {/* STEP 1: Property and Time Selection */}
          {step === 1 && (
            <div className="space-y-4 text-xs">
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

              {/* Property Snapshot */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center gap-3">
                <img
                  src={currentProperty.imageUrl}
                  alt={currentProperty.title}
                  className="w-14 h-14 object-cover rounded-lg shrink-0"
                />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">{currentProperty.title}</div>
                  <div className="text-slate-600">{currentProperty.locality} · {currentProperty.zone}</div>
                  <div className="font-mono text-emerald-800 font-bold mt-0.5">{currentProperty.priceDisplay}</div>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  min="2026-10-24"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    '10:00 AM - 12:00 PM (Morning Slot)',
                    '02:00 PM - 04:00 PM (Afternoon Slot)',
                    '04:30 PM - 06:30 PM (Evening Sunset)'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2.5 rounded-lg border text-left text-[11px] font-medium transition-colors cursor-pointer ${
                        timeSlot === slot
                          ? 'bg-emerald-600 text-white border-emerald-600 font-semibold'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {slot.split(' (')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Free Pick-up Checkbox */}
              <label className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={pickupRequired}
                  onChange={(e) => setPickupRequired(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <div>
                  <span className="font-bold text-slate-900 block">
                    Free AC Cab Pick-up & Drop Assistance
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    A dedicated driver and property guide will pick you up from any Chennai location at zero cost.
                  </span>
                </div>
              </label>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleNextToStep2}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Continue to Buyer Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Buyer Contact & Zero-Spam Guarantee */}
          {step === 2 && (
            <form onSubmit={handleSubmitBooking} className="space-y-4 text-xs">
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
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Exact TERVOONE Promise Guarantee */}
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The TERVOONE Zero-Spam Code</span>
                </div>
                <p className="text-[11px] text-emerald-950 leading-relaxed">
                  "No unwanted calls or repeated messages. We prefer WhatsApp communication, and if you're no longer interested, just let us know — we'll respect your choice."
                </p>
                <label className="flex items-center gap-2 pt-1 text-[11px] text-slate-700 font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={respectChoiceAccepted}
                    onChange={(e) => setRespectChoiceAccepted(e.target.checked)}
                    className="w-3.5 h-3.5 text-emerald-600 rounded"
                  />
                  <span>I agree to WhatsApp communication and TERVOONE terms.</span>
                </label>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Confirm Site Visit</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmation & Tracking Access */}
          {step === 3 && confirmedRecord && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
                  Booking Confirmed · Zero Leads Sold
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-1">
                  Your Site Visit Is Scheduled!
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Booking Ref: <strong className="font-mono text-slate-900 font-bold">{confirmedRecord.id}</strong>
                </p>
              </div>

              {/* Details card */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Property:</span>
                  <span className="font-semibold text-slate-900">{confirmedRecord.propertyTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled Date:</span>
                  <span className="font-semibold text-slate-900">{confirmedRecord.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time Window:</span>
                  <span className="font-semibold text-slate-900">{confirmedRecord.timeSlot.split(' (')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Advisor:</span>
                  <span className="font-semibold text-emerald-800">{confirmedRecord.assignedAdvisor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Complimentary Cab:</span>
                  <span className="font-semibold text-slate-900">{confirmedRecord.pickupRequired ? 'Requested' : 'Self-Drive'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center">
                <a
                  href={`https://wa.me/919840122830?text=Hi%20TERVOONE%2C%20I%20have%20scheduled%20a%20site%20visit%20for%20${encodeURIComponent(confirmedRecord.propertyTitle)}%20(Ref%3A%20${confirmedRecord.id}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp Now</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenTracker();
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  View in Enquiry Tracker
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                You can cancel or reschedule at any time with one click.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
