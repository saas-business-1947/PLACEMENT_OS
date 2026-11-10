# PlacementOS

**PlacementOS** is a comprehensive e-book library and catalog system designed for final-year college students preparing for campus placements. It provides a curated collection of digital books covering placement preparation, aptitude training, resume building, LinkedIn personal branding, DSA (Data Structures & Algorithms) practice, and career skills.

## 📚 Featured Books

The library contains **10 e-books** organized into categories:

### Placement & Technical Prep (₹149 each)
- **AI for Placement Preparation** (₹149) - Master AI tools for placement preparation
- **Cracking Aptitude with AI** (₹149) - Ace aptitude tests with AI assistance
- **From No Job to Job Offer in 30 Days** (₹149) - Fast-track placement sprint playbook

### Career, Communication & Mindset (₹99 each)
- **The GD & Negotiation Playbook** (₹99) - Group discussion strategies and tips
- **Unshakable Focus & Time Mastery** (₹99) - Master productivity and eliminate placement anxiety
- **Selling Skills for Engineers & Freshers** (₹99) - Pitch yourself and your projects with poise
- **Fresher Offer & Salary Negotiation** (₹99) - Demystify CTC, variable pay & bonus structures
- **The Unhired Mind: Essential Lessons** (₹99) - Think like a commercial problem-solver
- **First Company on Github** (₹99) - Navigate corporate culture shock and ship proof of work
- **Time & Attention Architecture for Final Years** (₹99) - Protect unbroken daily focus blocks

## 💰 Pricing

### Individual Books
- AI/aptitude titles: **₹149** each
- Career skills titles: **₹99** each

### Bundle Deal
- **Complete 10-book library: ₹699**
- Original price: ₹1,140
- **You save 39%**

### Multi-Book Tiers (flat discount applied in cart)
- **Any 3 books → ₹249** (flat discount from subtotal)
- **Any 5 books → ₹399** (flat discount from subtotal)
- **Complete 10 books → ₹699** (same as bundle deal)

**Note:** Tier discounts are flat subtotal subtractions applied in cart/checkout. They are additive with promo codes (not multiplicative), preventing double-discount situations.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev     # Vite dev server at http://localhost:3000
```

### Build
```bash
npm run build   # Production build to dist/
```

### Lint
```bash
npm run lint    # TypeScript type checking
```

## 🛠 Tech Stack

- **React 19** + **Vite 8** for the frontend
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Lucide React** for icons
- **Express** (backend server)
- **@google/genai** for AI integration

## 📁 Project Structure

```
src/
├── App.tsx           # Main app component, cart & bundle logic
├── components/       # UI components
│   ├── App.tsx
│   ├── CartDrawer.tsx
│   ├── Catalog.tsx
│   ├── FaqSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── StudentGuidanceSection.tsx
│   ├── TypingHooks.tsx
│   └── FlyToBag.tsx
├── data/             # Core data files
│   ├── books.ts      # BOOKS array, BUNDLE_DEAL, MULTI_BOOK_TIERS
│   └── fullBookContents.ts  # Full book descriptions/excerpts
├── types.ts          # Type definitions
├── utils/
│   ├── format.ts     # Price formatting utilities
│   └── pricing.ts    # Multi-book offer calculation
└── assets/
    └── images/       # Book cover images ( Unsplash-sourced )
```

## 🌟 Key Features

- **Full 10-book catalog** with cover images, descriptions, TOC, excerpts, and reviews
- **Smart bundle pricing** with 39% savings vs. individual purchase
- **Multi-book tier discounts** (3, 5, or 10 books) applied flat from cart subtotal
- **Responsive design** works mobile and desktop
- **Unsplash-sourced cover photos** with consistent series styling (cream `#faf8f5` panel, amber `#b45309` rule, "PlacementOS · Final Year Series" eyebrow, serif titles)
- **AI-powered features** via Google GenAI integration
- **Cart management** with quantity limits, tier discounts, and promo code support

## 🔄 Recent Changes

- Replaced 3 original books (monk-mode-focus, campus-to-cubicle-worklife, deep-work-time-architecture) with new titles:
  - Resume That Gets Interviews
  - LinkedIn & Personal Branding for Freshers
  - DSA & Coding Round Survival Guide
- Updated price list: 3 titles at ₹149, 7 titles at ₹99
- Bundle: ₹699 (was ₹899), original ₹1,140 (was ₹2,490), savings 39% (was 64%)
- Added multi-book tiers: Any 3 → ₹249, Any 5 → ₹399, Complete 10 → ₹699
- Updated UI copy across all 9 components
- Removed broken edition imports; kept full contents inline
- Generated 7 cover images from Unsplash photographs
- `npm run lint` and `npm run build` both pass clean

## 📦 Deployment

```bash
npm run build     # Build production files
# Serve dist/ with any static server (vite preview, serve, etc.)
```