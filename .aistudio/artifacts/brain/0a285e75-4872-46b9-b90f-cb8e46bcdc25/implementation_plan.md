# TERVOONE — One Platform. More Possibilities.

TERVOONE is a modern, transparent, and buyer-first real estate discovery and community lifestyle ecosystem. It simplifies property acquisition across Chennai while rewarding verified buyers with cashback (up to ₹1,00,000), mega giveaway entries (cars, plots, appliances for every 1,000 properties sold), and exclusive partnerships across 10 lifestyle categories without ever selling customer data or unsolicited broker spam.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The architectural direction below integrates all user preferences confirmed during Phase 1 clarification:
> - **Language Localization**: English-first primary release with structured localization architecture ready for Tamil asset embeds and future language toggling.
> - **Homepage Layout & Balance**: Dual-focus layout providing an intuitive Roofandfloor-style property search engine alongside high-impact visual showcases of the TERVOONE Community Rewards and 6-step buying roadmap.
> - **Lead Management & Booking**: Comprehensive multi-step site visit scheduler accompanied by an interactive **Enquiry & Booking Tracker** guaranteeing zero lead sales and direct WhatsApp coordination.

---

### 1. Overview & Core Concept

- **Core Proposition**: Eliminates the chaotic intermediary layer in Indian real estate. TERVOONE connects buyers directly to verified builder inventory (apartments, villas, and plots in Chennai North, South, Central, and OMR) while recycling marketing commissions into real buyer benefits (cashback, electronics, interiors, auto discounts).
- **Target Audience**: Homebuyers, NRI property investors, and first-time plot seekers who demand transparent pricing, clear WhatsApp communication, and zero aggressive telemarketing calls.
- **Key Value**: 
  - **Zero-Spam Promise**: Inquiries are never sold as raw phone numbers to third-party telecallers.
  - **Buyer Lifestyle Network**: Membership unlocked upon reservation, conferring benefits across 10 categories (Groceries, Vehicles, Credit Cards, Interiors, Appliances, Cinema, Travel, Dining, Education, Investment).
  - **Milestone Rewards**: Transparent counters tracking community milestones toward the ₹1,00,000 cashback pool and every 1,000th property mega prize draw.

---

### 2. User Experience & Visual Design

#### A. Key User Flows & Multi-Page Navigation
1. **Home Experience**:
   - **Hero Section**: Dual-action layout featuring a prominent quick-filter search console (Category, Chennai Zone, Price Tier, BHK) adjacent to live community reward highlights.
   - **6-Step Interactive Roadmap**: Visual interactive reproduction of the flyer roadmap (*Choose Location → Favorite → Shortlist → Book Site Visit → Finalise → Buy*).
   - **Community Rewards Spotlight**: Interactive carousel and bento grid displaying the 10 partner reward verticals.
   - **Featured Verified Properties**: High-resolution property cards with clear price per sq.ft., Chennai zone tag, possession date, and direct "Book Site Visit" action.
2. **Listings Directory (`/listings`)**:
   - Real-time client-side multi-filter bar:
     - **Category**: Apartment, Villa, Plots
     - **Area Zone**: Chennai North (Perambur, Kolathur, Madhavaram), Chennai South (Velachery, Tambaram, Medavakkam), Chennai Central (Anna Nagar, T. Nagar), OMR/ECR
     - **Price Bracket**: Below ₹1 Cr, ₹1 Cr to ₹2 Cr, Above ₹2 Cr
     - **BHK & Possession Status**: 1, 2, 3, 4 BHK, Ready-to-Move, Under Construction
   - Instant property shortlisting (saved favorites list in local state) and side-by-side comparison.
3. **Rewards & Community (`/rewards`)**:
   - Full breakdown of the 10 reward categories with verified partner perks.
   - Live simulated milestone tracker: Every 1,000 properties sold mega prize draw + ₹1,00,000 cashback programme details and eligibility guidelines.
4. **Partner Ecosystem (`/partners`)**:
   - Directory of lifestyle, interior, automobile, and retail partners with exclusive coupon codes and redemption guides.
5. **Investor Relations (`/investors`)**:
   - Dedicated institutional and venture portal featuring the application form: Name, Mobile Number, Email, Venture Capitalist (Yes/No), VC/Fund Name, and Investment Thesis notes.
6. **Multi-Step Site Visit & Enquiry Tracker Modal**:
   - Step 1: Property selection & preferred date/time slot.
   - Step 2: Buyer details (Name, WhatsApp Mobile Number, Email, Pick-up assistance preference).
   - Step 3: Instant Confirmation with Unique Enquiry ID, WhatsApp Concierge link, and a live Interactive Enquiry Tracker showing real-time stage progression.

#### B. Visual Identity & Theme
- **Color Palette**:
  - Dominant Neutral Canvas (60%): Crisp alpine white (`#FFFFFF`) with cool neutral slates (`#F8FAFC`, `#F1F5F9`) providing clarity and spaciousness.
  - Structural Surfaces (30%): Deep rich slate (`#0F172A`) for footers and high-contrast anchors; subtle hairline borders (`#E2E8F0`).
  - Accent Budget (10%): Forest Emerald & Mint Green (`#059669`, `#10B981`) inspired by the TERVOONE leaf and infinity logo symbol, paired with subtle warm gold accents (`#F59E0B`) for reward milestones.
- **Typography & Scale**:
  - Headings: `Plus Jakarta Sans` with tight tracking (`tracking-tight`) and balanced headline wrapping (`text-wrap: balance`).
  - Body & UI: `DM Sans` / `Plus Jakarta Sans` for optimal legibility at 15–16px.
  - Numbers & Metrics: Tabular numerals (`font-mono tabular-nums`) for currency (₹) and countdown metrics.
- **Zero-Pill & Clean Design Discipline**:
  - No candy pill badges for static metadata (uses unboxed clean typographic markers with `·` dividers).
  - No fake AI jargon, no pulsing decorative dots, no asymmetric thick left borders.
  - Clean one-row Top Bar with Brand Wordmark, clean navigation links, and single primary "Book Site Visit" CTA.

---

### 3. Key Product Decisions & Trade-Offs

- **Multi-Page Architecture in React SPA**:
  - *Chosen Approach*: Route-driven single-page architecture using an elegant tabbed and hash-compatible navigation system (`home`, `listings`, `rewards`, `partners`, `investors`, `about`).
  - *Why*: Delivers instantaneous view switching without page reloads, preserves active filter states, and keeps the multi-step visit scheduler accessible from anywhere.
- **Site Visit Scheduling & Enquiry Tracker**:
  - *Chosen Approach*: A 3-step structured booking flow that generates a persistent simulated ticket stored in browser state, allowing the user to view their active visit requests, assigned property advisor, and WhatsApp direct status.
  - *Why*: Fully satisfies the user's explicit preference for a structured multi-step form with an enquiry tracker while reinforcing the zero-spam guarantee.
- **Embedded Visual Assets**:
  - *Chosen Approach*: Direct integration of the user's uploaded flyer assets (`/public/assets/aistudio/image_c0de0076.png`, `/public/assets/aistudio/image_e8c4d57e.png`) alongside tailored high-resolution property imagery.
  - *Why*: Honors the exact visual assets provided in the brief while ensuring responsive desktop and mobile fidelity.

---

### 4. Technical Architecture & Component Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│                          TERVOONE Application                         │
├────────────────────────────────────────────────────────────────────────┤
│  Top Navigation (Brand Wordmark · Nav Links · Track Enquiry · CTA)     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Active View Router (State-Driven: Home / Listings / ... / Form)  │  │
│  ├──────────────────────────────────────────────────────────────────┤  │
│  │ [Home View]                                                      │  │
│  │   ├── Dual Hero (Search Console + Community Highlights)           │  │
│  │   ├── 6-Step Journey Roadmap (Interactive from Flyer)            │  │
│  │   ├── Curated Listings Spotlight (Apartment / Villa / Plots)     │  │
│  │   ├── 10 Lifestyle Rewards Bento Grid                            │  │
│  │   └── Zero-Spam Anti-Broker Trust Section                        │  │
│  │                                                                  │  │
│  │ [Listings View]                                                  │  │
│  │   ├── Zone Filter: Chennai North / South / Central / OMR         │  │
│  │   ├── Type: Apartment / Villa / Plots · Price: <1Cr / 1-2Cr / >2Cr│  │
│  │   └── Interactive Property Grid with Modal Detail & Save         │  │
│  │                                                                  │  │
│  │ [Rewards & Partners View]                                        │  │
│  │   ├── 10 Reward Categories Directory & Partner Cards             │  │
│  │   └── ₹1,00,000 Cashback & 1000th Sale Mega Prize Tracker        │  │
│  │                                                                  │  │
│  │ [Investor Relations View]                                        │  │
│  │   └── Structured VC Application Form (Name, Mobile, VC Name)     │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  Interactive Overlays:                                                 │
│  ├── Multi-Step Site Visit Scheduler (3 Steps)                         │
│  ├── Live Enquiry & Status Tracker Drawer                              │
│  └── Property Inspection Detail Modal                                  │
├────────────────────────────────────────────────────────────────────────┤
│  Global Footer (Mission, Vision, Zero-Spam Guarantee, Copyright)       │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Entities & State Model
- `Property`: ID, title, developer, zone (North/South/Central/OMR), locality, category (Apartment/Villa/Plot), price (INR), pricePerSqFt, bhk, areaSqFt, image, amenities, possessionDate, reraApproved.
- `RewardCategory`: ID, title, flyerIndex, description, perks, partnerBrands, icon.
- `EnquiryRecord`: ID, propertyId, propertyTitle, buyerName, mobileNumber, email, preferredDate, timeSlot, status ('Submitted' | 'Advisor Assigned' | 'Site Visit Confirmed' | 'Visit Completed'), notes.
- `InvestorApplication`: ID, name, email, mobileNumber, isVC (boolean), vcName, message, submittedAt.
