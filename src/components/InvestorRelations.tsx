import React, { useState } from 'react';
import { InvestorApplication } from '../types';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users,
  Award,
  ArrowRight,
  Send,
  PieChart,
  Briefcase
} from 'lucide-react';

export const InvestorRelations: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [isVC, setIsVC] = useState<boolean>(true);
  const [vcName, setVcName] = useState('');
  const [fundSize, setFundSize] = useState('₹10 Cr - ₹50 Cr ($1M - $6M)');
  const [investmentThesis, setInvestmentThesis] = useState('');
  const [submittedApp, setSubmittedApp] = useState<InvestorApplication | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!mobile.trim() || mobile.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid corporate or investor email.');
      return;
    }
    if (isVC && !vcName.trim()) {
      setErrorMsg('Please specify your Venture Capital fund or angel network name.');
      return;
    }

    const app: InvestorApplication = {
      id: `INV-TERVO-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      isVC,
      vcName: isVC ? vcName.trim() : 'Private Angel Investor',
      fundSize,
      investmentThesis: investmentThesis.trim(),
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    setSubmittedApp(app);
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Investor Page Header in White Premium Theme */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700">
            Investor Relations & Venture Capital
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-2 leading-tight font-['Outfit',sans-serif]">
            Building India’s First Buyer-First Property & Lifestyle Ecosystem
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            The traditional Indian property discovery market relies on aggressive lead-selling brokers and cold spam. TERVOONE aligns incentives with homebuyers by recycling marketing commissions into real lifestyle rewards and cashback.
          </p>
        </div>

        {/* High-level Pillars (White Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-emerald-300 transition-colors">
            <Building2 className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900">Direct Builder Network</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Proprietary relationships with Chennai and South India’s top tier-1 and tier-2 builders, eliminating layers of redundant brokerage commissions.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-emerald-300 transition-colors">
            <Users className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900">High Lifetime Customer Value</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Home purchases unlock a 10-vertical consumer network (interiors, automotive, banking, dining) generating high multi-year transaction revenues.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-emerald-300 transition-colors">
            <PieChart className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900">Ethical Tech & Zero Spam</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Customer enquiries are never auctioned off. High conversion rates driven by genuine buyer trust and transparent WhatsApp communication.
            </p>
          </div>
        </div>

        {/* Application Form Section (White Theme Card) */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 max-w-3xl mx-auto">
          
          {submittedApp ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">
                Application Received · Reference ID: {submittedApp.id}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                Thank You, {submittedApp.name}
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Our founders and investor relations team will review your venture profile and dispatch the Confidential TERVOONE Seed Pitch Deck & Financial Model to <strong className="text-slate-900">{submittedApp.email}</strong>.
              </p>
              
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Entity / VC:</span>
                  <span className="text-slate-900 font-semibold">{submittedApp.vcName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Ticket / Stage:</span>
                  <span className="text-slate-900 font-semibold">{submittedApp.fundSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Submitted On:</span>
                  <span className="text-slate-900 font-semibold">{submittedApp.submittedAt}</span>
                </div>
              </div>

              <button
                onClick={() => setSubmittedApp(null)}
                className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-bold rounded-lg text-slate-800 transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div>
              <div className="border-b border-slate-200 pb-5 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                  Investor & Venture Capital Expression of Interest
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Connect directly with the leadership team to review current traction, market metrics, and upcoming funding rounds.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                {/* Name */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5 text-xs">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sundaram"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Mobile & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5 text-xs">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5 text-xs">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@venturefund.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Venture Capitalist: Yes / No Toggle */}
                <div className="pt-2">
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-2 text-xs">
                    Are you representing a Venture Capitalist / Institutional Fund? *
                  </label>
                  <div className="flex items-center gap-4">
                    <label className={`flex-1 p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isVC ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}>
                      <input
                        type="radio"
                        name="isVC"
                        checked={isVC === true}
                        onChange={() => setIsVC(true)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>Yes, Venture Capitalist / Fund</span>
                    </label>

                    <label className={`flex-1 p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      !isVC ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}>
                      <input
                        type="radio"
                        name="isVC"
                        checked={isVC === false}
                        onChange={() => setIsVC(false)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>No, Angel Investor / Family Office</span>
                    </label>
                  </div>
                </div>

                {/* VC Name (Mandatory if Yes) */}
                {isVC && (
                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5 text-xs">
                      VC / Fund Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nexus Venture Partners / Elevation Capital"
                      value={vcName}
                      onChange={(e) => setVcName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                )}

                {/* Ticket / Stage size */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5 text-xs">
                    Target Investment Range
                  </label>
                  <select
                    value={fundSize}
                    onChange={(e) => setFundSize(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 font-semibold focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer"
                  >
                    <option value="₹2 Cr - ₹10 Cr ($250K - $1.2M)">Seed / Pre-Series A: ₹2 Cr - ₹10 Cr</option>
                    <option value="₹10 Cr - ₹50 Cr ($1M - $6M)">Series A: ₹10 Cr - ₹50 Cr</option>
                    <option value="Above ₹50 Cr ($6M+)">Growth / Strategic: Above ₹50 Cr</option>
                  </select>
                </div>

                {/* Investment Thesis / Notes */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5 text-xs">
                    Investment Thesis / Inquiry Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your fund focus, key questions, or preferred meeting schedule..."
                    value={investmentThesis}
                    onChange={(e) => setInvestmentThesis(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Investor Expression of Interest</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    NDAs strictly honored. We do not distribute investor contact details.
                  </p>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
