# 📸 GOKUL STUDIOS — Premium Photography & Cinematic Films Website Prototype

A luxury, high-conversion web prototype designed for **Gokul Studios** (Vaniyambadi, Tamil Nadu, India). Built with **React 19, TypeScript, Vite, and Tailwind CSS**, this prototype is structured specifically as an impressive client demonstration and ready-to-scale production foundation.

---

## 🌟 Visual Identity & Design Direction

- **Cinematic Dark Luxury Base**: Deep charcoal (`#09090b`), gold/champagne gradients, and high-contrast typography.
- **Editorial Magazine Feel**: Large photography displays, generous spacing, fine borders, and elegant serif typography.
- **Conversion Journey First**:
  $$\text{Social / Google / Referral} \longrightarrow \text{Hero & Trust} \longrightarrow \text{Services \& Portfolio} \longrightarrow \text{Enquiry Form} \longrightarrow \text{WhatsApp / Direct Call}$$
- **Interactive Features**: Full-screen photo Lightbox, category filters, quick service details modals, interactive sample package selectors, animated date/booking enquiry form with WhatsApp integration, and floating WhatsApp contact button.

---

## 📁 Project Structure

```
gokul-studios/
├── public/                     # Static assets & favicons
├── src/
│   ├── components/             # Reusable UI Components
│   │   ├── Navbar.tsx          # Sticky responsive nav + mobile drawer + CTA
│   │   ├── Hero.tsx            # Full-screen cinematic slideshow & headline
│   │   ├── TrustStats.tsx      # "YOUR STORY. OUR LENS" + Demo Metrics & Craft Pillars
│   │   ├── Services.tsx        # 10 Detailed service cards + category filter + modal
│   │   ├── Portfolio.tsx       # Masonry gallery with category tabs
│   │   ├── LightboxModal.tsx   # Full-screen photo lightbox with keyboard navigation
│   │   ├── FeaturedStory.tsx   # Magazine-style editorial spotlight
│   │   ├── Packages.tsx        # Sample investment tiers & package builder
│   │   ├── Testimonials.tsx    # Client reviews with event context
│   │   ├── InstagramFeed.tsx   # 6-post live Instagram grid with hover metrics
│   │   ├── EnquiryForm.tsx     # "Plan Your Shoot" booking form + WhatsApp launcher
│   │   ├── ContactSection.tsx  # Studio address, Google Maps embed & FAQ accordion
│   │   ├── WhatsAppFloat.tsx   # Floating animated WhatsApp CTA with tooltip
│   │   ├── Icons.tsx           # Social and brand icons
│   │   └── Footer.tsx          # Editorial footer with quick links & demo notice
│   │
│   ├── config/
│   │   └── studioData.ts       # ⚡ CENTRAL CONFIG: Studio info, photos, pricing & stats
│   │
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   │
│   ├── App.tsx                 # Main application view & state synchronization
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind CSS styles & typography definitions
│
├── index.html                  # HTML template with Google Fonts (Cinzel, Cormorant, Jakarta)
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ How to Edit Client Information & Images

All content, telephone numbers, prices, services, and photography URLs are centralized in a single file:

👉 **[`src/config/studioData.ts`](src/config/studioData.ts)**

### 1. Updating Studio Info & Contact
Open `src/config/studioData.ts` and modify `STUDIO_INFO`:
```typescript
export const STUDIO_INFO: StudioInfo = {
  name: "GOKUL STUDIOS",
  locationCity: "Vaniyambadi",
  locationState: "Tamil Nadu",
  phoneDisplay: "+91 98765 43210",    // Update with real phone number
  whatsappRaw: "919876543210",        // WhatsApp number without '+' or dashes
  email: "contact@gokulstudios.in",
  instagramHandle: "@gokulstudiosofficial",
  fullAddress: "Your actual shop/studio address in Vaniyambadi"
  // ...
};
```

### 2. Replacing Portfolio Images
To display the studio's actual photos:
1. Place the studio's image files in the `public/images/` folder (or host them on a CDN / Google Cloud / Cloudinary).
2. Open `src/config/studioData.ts` and update `PORTFOLIO_ITEMS` and `SERVICES_LIST` image paths.

### 3. Updating Sample Pricing & Packages
Modify `SAMPLE_PACKAGES` in `src/config/studioData.ts` to set actual rates once confirmed with the studio owner.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live prototype.

### 3. Production Build
```bash
npm run build
```
Generates production-optimized static assets in the `dist/` folder.

---

## 🛡️ Demo Safety Notice
All pricing, phone numbers, customer reviews, and metrics in this prototype are placeholders clearly marked as **DEMO VALUES** for presentation purposes.
