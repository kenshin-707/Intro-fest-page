# INTERO FEST ’26 — Official Website

> **One-Day National-Level Technical Symposium**  
> Presented by the **AIML & Cyber Department**  
> **Sree Sakthi Engineering College (Autonomous Technical Campus)**, Karamadai, Coimbatore, Tamil Nadu, India.  
> **Event Date:** October 31, 2026  
> **Joining Code:** `SSEC101`

A production-ready website built with **React 19**, **Vite 6**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, following the **Minimal Tech** creative editorial direction (inspired by [townhouse.dev](https://townhouse.dev/)).

---

## ✦ Key Features

1. **Brand Identity & Color Tokens**
   - Built around the symposium poster's red-and-yellow identity:
     - Warm Off-White: `#F7F7F5` (dominant background)
     - Near-Black typography: `#171717`
     - Secondary muted text: `#686868`
     - Brand Red Accent: `#C62828`
     - Deep Crimson: `#8F1717`
     - Yellow Highlight: `#F2C94C`
     - Hairline Dividers: `#E2E2DE`
     - High-contrast Dark Sections: `#171717`
2. **Mandatory Joining Code: `SSEC101`**
   - Prominently integrated into the sticky Navbar, Hero banner, Event detail pages, and Registration callout with a 1-click clipboard copy widget and confirmation toast.
3. **Exact Organizing Department & 3 Featured Events**
   - Organizing Department: **AIML & Cyber** (and CYRA Community / EMTRON Association).
   - Event 01: **Beat the Bot** (`/events/beat-the-bot`) — *Technical*
   - Event 02: **The Last Artifact** (`/events/the-last-artifact`) — *Technical* (CYRA Community, "2 Investigators. 1 Case. 2 Hours.", Venue: 205 Gallery Hall)
   - Event 03: **IPL Auction** (`/events/ipl-auction`) — *Non-technical*
4. **Single Central Google Form Registration**
   - Every registration CTA points to the single shared Google Form (`GOOGLE_FORM_URL`).
   - Graceful fallback: If the URL is empty or invalid, buttons automatically display a clean disabled "Registration Coming Soon" state without dead or broken links.
5. **WhatsApp Community Integration**
   - Standalone, distinct WhatsApp CTA pointing to the official discussion group (`WHATSAPP_GROUP_URL`).
6. **Townhouse-Inspired Spatial Composition**
   - Clean architectural hairline grids, telemetry badges, coordinate indicators, fluid clamp typography, interactive node graph, and high-res poster inspection modal.
7. **Production & Performance Standards**
   - Fully responsive on mobile, tablet, laptop, and desktop.
   - Zero layout shifts, accessible contrast, semantic HTML, and `prefers-reduced-motion` compliance.

---

## ✦ Project Structure

```text
website/
├── index.html                   # HTML entry point with Space Grotesk, Inter, JetBrains Mono fonts
├── vite.config.ts               # Vite configuration with React and Tailwind v4 plugins
├── tsconfig.json                # TypeScript compiler configuration
├── package.json                 # Scripts and dependencies
├── public/
│   └── images/
│       ├── intero-fest-poster.jpg        # Authoritative symposium poster
│       ├── the-last-artifact-poster.jpg  # Dedicated The Last Artifact poster
│       └── the-last-artifact-noir.jpg    # Noir variant artwork
└── src/
    ├── main.tsx                 # React DOM mount
    ├── App.tsx                  # Root component & React Router setup
    ├── config/
    │   └── site.ts              # Central site configuration, external links & JOINING_CODE
    ├── data/
    │   └── events.ts            # Typed array of the 3 featured events
    ├── styles/
    │   └── index.css            # Tailwind v4 theme, design tokens, and grid patterns
    ├── components/
    │   ├── Navbar.tsx           # Sticky editorial navbar with mobile drawer
    │   ├── Footer.tsx           # Minimal tech footer with verified college coordinates
    │   ├── Hero.tsx             # Typographic hero with joining code & interactive visual
    │   ├── EventCard.tsx        # Asymmetrical card with custom previews
    │   ├── Visuals.tsx          # Interactive SVG/canvas-style telemetry for all 3 events
    │   ├── DepartmentSection.tsx# AIML & Cyber department editorial split
    │   ├── FeaturedEvents.tsx   # Grid containing exactly the 3 signature events
    │   ├── WhyParticipate.tsx   # 4 value pillars for participants
    │   ├── SymposiumInfo.tsx    # Structured verified technical data sheet
    │   ├── ContactSection.tsx   # Official campus helplines & location
    │   ├── RegistrationCallout.tsx # High-contrast dark callout section
    │   ├── RegistrationButton.tsx  # Centralized Google Form button with safe target="_blank"
    │   ├── WhatsAppButton.tsx      # Centralized WhatsApp button with icon
    │   ├── JoiningCodeBadge.tsx    # 1-click copy widget for code SSEC101
    │   └── PosterModal.tsx      # Modal for inspecting high-res event posters
    └── pages/
        ├── Home.tsx             # Complete homepage (/)
        ├── EventPage.tsx        # Shared reusable event page (/events/:slug)
        └── NotFound.tsx         # 404 handler
```

---

## ✦ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This compiles TypeScript and outputs an optimized bundle into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Previews the built files locally at [http://localhost:4173](http://localhost:4173).

---

## ✦ Configuration Guide

### How to update Google Form URL & WhatsApp Link
Edit `src/config/site.ts`:

```typescript
// Replace with your Google Form URL:
export const GOOGLE_FORM_URL = 'https://forms.gle/1Kxyaemseu7Tz1iu7'

// Replace with your WhatsApp Community Invite link:
export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/LoxIvyuSC7B6h6R6oIs26I'

// Required joining code:
export const JOINING_CODE = 'SSEC101'
```

*Note: If either URL is empty or set to a placeholder, the buttons will safely display a "Coming Soon" state without causing broken links.*

### How to add or update Event Rules & Timings
Edit `src/data/events.ts`. Each event item provides typed fields:

```typescript
{
  slug: 'the-last-artifact',
  name: 'The Last Artifact',
  category: 'Technical',
  format: '2 Investigators. 1 Case.',
  teamSize: '2 Investigators (Team of 2)',
  duration: '2 Hours',
  venue: '205 Gallery Hall',
  fee: '₹250 / Person',
  // When rules are announced, populate this array:
  rules: [
    'Rule 1: Investigators must report 15 minutes before the briefing.',
    'Rule 2: External communication devices are restricted during active case analysis.'
  ],
  requirements: [
    'One laptop per team is recommended'
  ]
}
```

*When fields like `rules`, `venue`, or `timing` are `null`, the website discreetly displays "Event details will be announced soon" to maintain accurate reporting without fabricating information.*

---

## ✦ Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repository directly to Vercel (Framework Preset: **Vite**; Build Command: `npm run build`; Output Directory: `dist`).

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### SPA Routing Configuration (Vercel / Netlify)
For static hosting with React Router, a simple rewrite rule ensures all routes (`/events/:slug`) resolve to `index.html`:

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## ✦ Institution Information

- **Institution:** Sree Sakthi Engineering College, Autonomous Technical Campus
- **Location:** Ooty Main Road, Karamadai, Coimbatore - 641 104, Tamil Nadu, India
- **Helplines:** +91 92445 04444 / +91 92445 02222
- **Website:** [www.sreesakthi.edu.in](https://www.sreesakthi.edu.in)
- **Organizing Department:** AIML & Cyber (CYRA Community)
