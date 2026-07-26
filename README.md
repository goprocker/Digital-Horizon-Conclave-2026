# 🌐 Digital Horizon Conclave 2026

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-E91E8C?style=for-the-badge&logo=framer)

**The Convergence of AI, Gaming, and Smart Realities**
*A National Level Technical Symposium — Sathyabama Institute of Science & Technology*

📅 **Feb 23–25, 2026** &nbsp;|&nbsp; ⏰ **10:00 AM Onwards** &nbsp;|&nbsp; 📍 **Sathyabama Institute, Chennai**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [System Architecture](#-system-architecture)
- [Digital System Workflow](#-digital-system-workflow)
- [Folder Structure](#-folder-structure)
- [Component Breakdown](#-component-breakdown)
- [Design System](#-design-system)
- [Key Features](#-key-features)
- [Event Schedule](#-event-schedule)
- [Speakers](#-speakers)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Deployment](#-deployment)

---

## 🎯 Overview

**Digital Horizon Conclave 2026** is the official event website for a premier **National-Level Technical Symposium** organized by the *School of Computing, Department of Computer Science & Engineering* at **Sathyabama Institute of Science and Technology**.

The website serves as a fully-featured, single-page event portal covering:

- 🤖 Artificial Intelligence & Generative AI
- 🎮 Game Design & Development
- 🥽 Extended Reality (XR / AR / VR)
- 🦾 Robotics & Automation
- 🎨 UI/UX Design
- 🌐 Internet of Things (IoT)

Built with a **dark futuristic theme**, neon accents, glassmorphism effects, and fluid physics-based animations to create a premium digital experience.

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js | 16.0.10 | App Router, SSR, routing, image optimization |
| **UI Library** | React | 19.2.1 | Component model, hooks |
| **Language** | TypeScript | ^5 | Type safety across all components |
| **Styling** | Tailwind CSS | ^4 | Utility-first CSS, responsive design |
| **Animations** | Framer Motion | ^12.23.26 | Scroll animations, transitions, `AnimatePresence` |
| **Icons** | Lucide React | ^0.561.0 | SVG icon set (Calendar, Clock, MapPin, Linkedin, etc.) |
| **Fonts** | Google Fonts | via `next/font` | Geist, Geist Mono, Orbitron |
| **Background FX** | Unicorn Studio | v1.5.3 (CDN) | Animated interactive background scenes |
| **Linting** | ESLint | ^9 | Code quality with `eslint-config-next` |
| **PostCSS** | @tailwindcss/postcss | ^4 | Tailwind compilation |

---

## 🏗️ Project Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                    Next.js App Router                            │
│            src/app  (Server Components by default)               │
└─────────────────────────┬────────────────────────────────────────┘
                          │
┌─────────────────────────▼────────────────────────────────────────┐
│                  RootLayout  (layout.tsx)                        │
│                                                                  │
│  • Google Fonts: Geist / Geist Mono / Orbitron                   │
│  • Global <Navbar /> (fixed floating pill)                       │
│  • Unicorn Studio CDN Loader (afterInteractive scripts)          │
│  • SEO Metadata export                                           │
└─────────────────────────┬────────────────────────────────────────┘
                          │
┌─────────────────────────▼────────────────────────────────────────┐
│                    Home Page  (page.tsx)                         │
│                                                                  │
│   Single-page layout — section render order:                     │
│                                                                  │
│   <Hero />             Full-screen landing + fluid reveal bg     │
│   <ChancellorMessage/> Chancellor welcome card                   │
│   <About />            Event description                         │
│   <Highlights />       Key stats / feature highlights            │
│   <Speakers />         3-day tabbed speaker cards                │
│   <Schedule />         3-day event timeline                      │
│   <Registration />     QR code + registration info               │
│   <Organizers />       Organizing team                           │
│   <Accreditation />    Institutional accreditation info          │
│   <SecureSpotCTA />    Full-width final CTA                      │
│   <Footer />           Footer with links & socials               │
└──────────────────────────────────────────────────────────────────┘
```

### Rendering Strategy

| Component | Mode | Reason |
|---|---|---|
| `page.tsx` | Server Component | Static export, no browser APIs |
| `layout.tsx` | Server Component | Metadata + font injection |
| `Navbar.tsx` | Client Component | `useState` for mobile menu toggle |
| `Hero.tsx` | Client Component | Framer Motion animations |
| `FluidHoverReveal.tsx` | Client Component | `useEffect` + `requestAnimationFrame` + DOM APIs |
| `Speakers.tsx` | Client Component | `useState` for day tab switching |
| `Schedule.tsx` | Client Component | Framer Motion `whileInView` |
| All others | Client Component | Framer Motion scroll triggers |

---

## 🖥️ System Architecture

The system follows a **modern JAMstack-inspired architecture** — a statically generated Next.js frontend served via a CDN, with all data embedded at build time (no database or API server required).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DEPLOYMENT LAYER                                 │
│                     Vercel / Netlify / Node.js Host                        │
│                                                                            │
│  ┌─────────────┐   ┌──────────────┐   ┌──────────────────────────────────┐  │
│  │   CDN Edge  │   │  SSL / HTTPS │   │   Serverless Functions (SSR)    │  │
│  │   Caching   │◄──│  Termination │◄──│   (if dynamic routes needed)    │  │
│  └──────┬──────┘   └──────────────┘   └──────────────────────────────────┘  │
│         │                                                                   │
│         ▼                                                                   │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                      STATIC ASSETS (.next/)                          │   │
│  │  HTML · CSS · JS Bundles · Optimized Images · Fonts                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ▲
                                    │  npm run build
                                    │
┌─────────────────────────────────────────────────────────────────────────────┐
│                          BUILD LAYER (CI/CD)                                │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐     │
│  │                    Next.js Compiler (SWC + Turbopack)              │     │
│  │                                                                    │     │
│  │  • TypeScript → JavaScript transpilation                           │     │
│  │  • Tailwind CSS purging & minification                             │     │
│  │  • Tree-shaking & code-splitting per route                         │     │
│  │  • Static page generation (SSG) for "/"                            │     │
│  │  • Image optimization (WebP/AVIF conversion)                       │     │
│  │  • Font subsetting & self-hosting (next/font)                      │     │
│  └────────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ▲
                                    │  Source Code
                                    │
┌─────────────────────────────────────────────────────────────────────────────┐
│                        APPLICATION LAYER                                    │
│                                                                            │
│  ┌──────────────┐    ┌───────────────┐    ┌──────────────────────────┐      │
│  │  App Router  │    │  React 19     │    │   Framer Motion          │      │
│  │  (Next.js)   │───▶│  Components   │───▶│   Animation Engine       │      │
│  │              │    │  (15 modules) │    │   (scroll, transitions)  │      │
│  └──────────────┘    └───────┬───────┘    └──────────────────────────┘      │
│                              │                                              │
│                   ┌──────────▼──────────┐                                   │
│                   │   Tailwind CSS 4    │                                   │
│                   │   Design Tokens     │                                   │
│                   │   + Custom Utils    │                                   │
│                   └─────────────────────┘                                   │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                     EXTERNAL SERVICES                                │   │
│  │                                                                      │   │
│  │  • Unicorn Studio CDN (v1.5.3) — Animated WebGL backgrounds          │   │
│  │  • Google Fonts CDN — Geist, Geist Mono, Orbitron                    │   │
│  │  • Lucide Icons (bundled) — SVG icon library                         │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ▲
                                    │  Static Data
                                    │
┌─────────────────────────────────────────────────────────────────────────────┐
│                          DATA LAYER                                         │
│                                                                            │
│  ┌────────────────────┐  ┌────────────────┐  ┌────────────────────────┐     │
│  │  Speaker Data      │  │  Schedule Data │  │  Static Assets         │     │
│  │  (Speakers.tsx)    │  │  (Schedule.tsx)│  │  /public/*.jpg/webp    │     │
│  │  9 speakers ×      │  │  3 days ×      │  │  Headshots, QR code,  │     │
│  │  3 days, inline    │  │  3 sessions    │  │  backgrounds          │     │
│  └────────────────────┘  └────────────────┘  └────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Layer Summary

| Layer | Purpose | Technologies |
|---|---|---|
| **Deployment** | Edge delivery, SSL, caching | Vercel CDN / Netlify Edge / any Node host |
| **Build** | Compile, optimize, bundle | Next.js 16, SWC, Turbopack, PostCSS |
| **Application** | UI rendering, interactivity, animations | React 19, Framer Motion 12, Tailwind CSS 4 |
| **External Services** | Runtime-loaded assets | Unicorn Studio CDN, Google Fonts |
| **Data** | Event content & media | Inline TypeScript objects + `/public/` images |

---

## 🔄 Digital System Workflow

This section describes the end-to-end workflow — from development to the user's browser.

### 1. Development Workflow

```
 ┌──────────────┐     ┌──────────────┐     ┌──────────────────┐
 │  Developer   │────▶│  Code Editor │────▶│  npm run dev     │
 │  (Gopinath)  │     │  (VS Code)   │     │  (localhost:3000) │
 └──────────────┘     └──────────────┘     └────────┬─────────┘
                                                     │
                                                     ▼
                                            ┌────────────────┐
                                            │  Hot Module     │
                                            │  Replacement    │
                                            │  (HMR - Instant │
                                            │   live preview) │
                                            └────────────────┘
```

### 2. Build & Deploy Pipeline

```
┌─────────┐    ┌──────────┐    ┌───────────┐    ┌──────────┐    ┌──────────┐
│  git    │───▶│  GitHub   │───▶│  CI/CD    │───▶│  Build   │───▶│  Deploy  │
│  push   │    │  Repo     │    │  Trigger  │    │  Process │    │  to CDN  │
└─────────┘    └──────────┘    └───────────┘    └──────────┘    └──────────┘
                                                     │
                                    ┌────────────────┼────────────────┐
                                    ▼                ▼                ▼
                              ┌──────────┐   ┌──────────┐   ┌──────────────┐
                              │ TypeScript│   │ Tailwind │   │ Image        │
                              │ Compile  │   │ Purge &  │   │ Optimization │
                              │ & Bundle │   │ Minify   │   │ (WebP/AVIF)  │
                              └──────────┘   └──────────┘   └──────────────┘
```

### 3. User Request Lifecycle

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                         USER REQUEST LIFECYCLE                               │
│                                                                              │
│  ┌─────────┐                                                                 │
│  │  User   │                                                                 │
│  │ Browser │                                                                 │
│  └────┬────┘                                                                 │
│       │  1. HTTP GET /                                                       │
│       ▼                                                                      │
│  ┌──────────┐    2. Cache    ┌──────────┐    3. Origin    ┌──────────────┐   │
│  │ DNS +    │───────HIT?────▶│  CDN     │────── MISS ───▶│  Origin      │   │
│  │ TLS      │                │  Edge    │                │  Server      │   │
│  └──────────┘                │  Node    │                │  (.next/)    │   │
│                              └────┬─────┘                └──────────────┘   │
│                                   │                                          │
│                                   │  4. Return pre-rendered HTML             │
│                                   ▼                                          │
│                           ┌───────────────┐                                  │
│                           │  Browser      │                                  │
│                           │  Receives     │                                  │
│                           │  HTML + CSS   │                                  │
│                           └───────┬───────┘                                  │
│                                   │                                          │
│                    ┌──────────────┼──────────────┐                           │
│                    ▼              ▼              ▼                           │
│            ┌─────────────┐ ┌──────────┐ ┌────────────────┐                  │
│            │ 5. Hydrate  │ │ 6. Load  │ │ 7. Load        │                  │
│            │ React 19    │ │ Fonts    │ │ Unicorn Studio │                  │
│            │ (Client     │ │ (Google) │ │ (CDN Script)   │                  │
│            │  Components)│ │          │ │                │                  │
│            └──────┬──────┘ └──────────┘ └────────────────┘                  │
│                   │                                                          │
│                   ▼                                                          │
│         ┌──────────────────┐                                                 │
│         │ 8. Interactive   │                                                 │
│         │ Page Ready       │                                                 │
│         │                  │                                                 │
│         │ • Navbar hover   │                                                 │
│         │ • Fluid reveal   │                                                 │
│         │ • Scroll anims   │                                                 │
│         │ • Tab switching  │                                                 │
│         │ • CTA animations │                                                 │
│         └──────────────────┘                                                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 4. Component Interaction Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      COMPONENT INTERACTION MAP                          │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                        RootLayout                               │    │
│  │  ┌──────────┐                                                   │    │
│  │  │  Navbar  │◄──── scroll-smooth anchor links (#hero, #about…)  │    │
│  │  └──────────┘                                                   │    │
│  │       │                                                         │    │
│  │       ▼                                                         │    │
│  │  ┌──────────────────────────────────────────────────────────┐   │    │
│  │  │                     page.tsx                              │   │    │
│  │  │                                                          │   │    │
│  │  │  ┌────────────────────────────────────────────────────┐  │   │    │
│  │  │  │  Hero                                              │  │   │    │
│  │  │  │  ├── FluidHoverReveal (requestAnimationFrame loop) │  │   │    │
│  │  │  │  │   ├── Base Image (1.jpg, z-10)                  │  │   │    │
│  │  │  │  │   ├── Reveal Image (2.jpeg, z-20, clip-path)    │  │   │    │
│  │  │  │  │   └── Dark Overlay (z-30)                       │  │   │    │
│  │  │  │  └── SecureSpotButton ──▶ Registration QR           │  │   │    │
│  │  │  └────────────────────────────────────────────────────┘  │   │    │
│  │  │                          │                                │   │    │
│  │  │                          ▼                                │   │    │
│  │  │  ┌───────────────────────────────────────────────┐       │   │    │
│  │  │  │  ChancellorMessage → About → Highlights       │       │   │    │
│  │  │  │  (Scroll-triggered whileInView animations)    │       │   │    │
│  │  │  └───────────────────────────────────────────────┘       │   │    │
│  │  │                          │                                │   │    │
│  │  │                          ▼                                │   │    │
│  │  │  ┌───────────────────────────────────────────────┐       │   │    │
│  │  │  │  Speakers (useState: activeDay)               │       │   │    │
│  │  │  │  ├── Day Tab Buttons ──▶ setActiveDay()       │       │   │    │
│  │  │  │  └── AnimatePresence ──▶ Speaker Cards        │       │   │    │
│  │  │  │      └── CardEffects.module.css (3D hover)    │       │   │    │
│  │  │  └───────────────────────────────────────────────┘       │   │    │
│  │  │                          │                                │   │    │
│  │  │                          ▼                                │   │    │
│  │  │  ┌───────────────────────────────────────────────┐       │   │    │
│  │  │  │  Schedule → Registration → Organizers         │       │   │    │
│  │  │  │  → Accreditation → SecureSpotCTA → Footer     │       │   │    │
│  │  │  └───────────────────────────────────────────────┘       │   │    │
│  │  └──────────────────────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
```

### Workflow Summary Table

| Phase | Steps | Tools / Output |
|---|---|---|
| **Development** | Write components, style with Tailwind, animate with Framer Motion | VS Code → `npm run dev` → HMR preview |
| **Build** | TypeScript compile, CSS purge, tree-shake, image optimize | `npm run build` → `.next/` output |
| **Deploy** | Push to GitHub → CI/CD auto-deploy | Vercel / Netlify → CDN Edge |
| **User Visit** | DNS → CDN → HTML response → React hydration → interactive page | Pre-rendered HTML + client-side React 19 |
| **Interaction** | Navbar nav, fluid hover, scroll animations, tab switches, CTA clicks | Framer Motion + `requestAnimationFrame` + `useState` |

---

## 📁 Folder Structure

```
Digital-Horizon-Conclave-2026/
│
├── public/                          # Static assets (served at URL root "/")
│   ├── 1.jpg                        # Hero section — base background image
│   ├── 2.jpeg                       # Hero section — fluid hover-reveal image
│   ├── QRCODE.jpeg                  # Registration QR code
│   ├── chancellor.webp              # Chancellor profile photo
│   │
│   ├── ArvindNeelakantan.jpg        # Speaker: Arvind Neelakandan (Epic Games)
│   ├── DeepanRaj.jpg                # Speaker: Deepan Raj (HCL)
│   ├── GaneshR.jpg                  # Speaker: Ganesh R (Monolith Asia)
│   ├── Gayathri Shri.jpg            # Speaker: Gayathri Shri (Agreal Studios)
│   ├── JainaresshBC.jpg             # Speaker: Jai Naressh (Cavin Infotech)
│   ├── JoshuaJebadurai.jpg          # Speaker: Joshua Jebadurai (Weloadin)
│   ├── KavithaKalyan.jpg            # Speaker: Kavitha Kalyan (TCS)
│   ├── MarioRoyston.jpg             # Speaker: Mario Royston (Weloadin)
│   ├── SridharSankar.jpg            # Speaker: Sridhar Shankar (Intrino Robotics)
│   ├── VinodKumar.jpg               # Speaker: Vinod Kumar V (Phantom FX)
│   │
│   └── [Default Next.js SVGs]       # file.svg, globe.svg, next.svg, vercel.svg, window.svg
│
├── src/
│   ├── app/                         # Next.js App Router root
│   │   ├── favicon.ico              # Browser tab favicon
│   │   ├── globals.css              # CSS custom properties, utilities, keyframes
│   │   ├── layout.tsx               # Root layout (fonts, navbar, scripts, metadata)
│   │   └── page.tsx                 # Home page — assembles all section components
│   │
│   └── components/                  # All React UI components
│       ├── Navbar.tsx               # Fixed floating pill navbar
│       ├── Hero.tsx                 # Full-screen hero with CTA buttons
│       ├── FluidHoverReveal.tsx     # Physics-based fluid mask animation (hero bg)
│       ├── ChancellorMessage.tsx    # Chancellor's message section
│       ├── About.tsx                # Event description section
│       ├── Highlights.tsx           # Event highlights / key stats
│       ├── Speakers.tsx             # Day-tabbed speaker grid cards
│       ├── Schedule.tsx             # 3-day event timeline
│       ├── Registration.tsx         # QR code + registration details
│       ├── Organizers.tsx           # Organizing team display
│       ├── Accreditation.tsx        # NAAC / institutional accreditation
│       ├── SecureSpotButton.tsx     # Standalone animated registration CTA button
│       ├── SecureSpotCTA.tsx        # Full-width pre-footer CTA section
│       ├── Footer.tsx               # Site footer
│       └── CardEffects.module.css   # CSS Module — 3D card hover tilt effect
│
├── hover-reveal.html                # Standalone prototype for fluid reveal (dev only)
├── hover-reveal.css                 # Styles for standalone prototype
├── hover-reveal.js                  # Logic for standalone prototype
│
├── next.config.ts                   # Next.js configuration
├── postcss.config.mjs               # PostCSS / Tailwind compilation config
├── eslint.config.mjs                # ESLint rules (extends eslint-config-next)
├── tsconfig.json                    # TypeScript compiler config
├── package.json                     # Dependencies & npm scripts
├── package-lock.json                # Lockfile (committed for reproducible installs)
└── README.md                        # Project documentation (this file)
```

---

## 🧩 Component Breakdown

### `layout.tsx` — Root Layout
The application shell, wrapping every page.

**Responsibilities:**
- Loads **Google Fonts** via `next/font/google`:
  - `Geist` → body text (`--font-geist-sans`)
  - `Geist Mono` → monospace (`--font-geist-mono`)
  - `Orbitron` → futuristic headings (`--font-orbitron`)
- Exports **Next.js `Metadata`** object (title, description) for SEO
- Injects `<Navbar />` above page content
- Bootstraps **Unicorn Studio** animated background library via two `<Script>` tags with `strategy="afterInteractive"`:
  1. Lazy-loads the UnicornStudio UMD bundle from jsDelivr CDN
  2. Re-initializes on DOM-ready for hot-reload compatibility

---

### `Navbar.tsx` — Floating Pill Navigation

A **fixed, glassmorphic** navigation bar centred at the top of the viewport.

- `position: fixed; top: 2rem` — floats above page content
- **Desktop (lg+):** Horizontal link list + prominent "Registration" button
- **Mobile:** Compact brand + "Register" button + hamburger icon; dropdown animated with `AnimatePresence`
- Uses `useState` to track `isOpen` mobile menu state
- **Nav links:** Home · About · Highlights · Speakers · Schedule · Team · Contact

---

### `Hero.tsx` — Full-Screen Landing

The primary above-the-fold section.

- Full viewport height (`min-h-screen`) with centered content
- Uses **`<FluidHoverReveal />`** as an interactive animated background layer
- Institution name badge + "NATIONAL LEVEL TECHNICAL SYMPOSIUM" pill
- Large `h1` in `font-orbitron`, neon gradient (`from-white via-blue-200 to-primary`)
- Event meta-info row: Date / Time / Venue with Lucide icons
- **Two CTA buttons:**
  - `<SecureSpotButton />` — primary animated registration CTA
  - "View Schedule" — secondary anchor link to `#schedule`
- Fade-in-up entry animation via Framer Motion

---

### `FluidHoverReveal.tsx` — Interactive Fluid Mask Animation

The hero's interactive background — a custom physics simulation built with pure DOM APIs.

**Architecture:**
```
┌───────────────────────────────────────────────────┐
│  <div ref={containerRef}>  (absolute, inset-0)    │
│                                                   │
│  [z-10] <img src="1.jpg" />   ← Base image        │
│  [z-20] <img src="2.jpeg" />  ← Reveal image      │
│            └─ clip-path: polygon(...)             │
│  [z-30] <div> bg-black/40 </div>  ← Dark overlay  │
└───────────────────────────────────────────────────┘
```

**Animation loop (requestAnimationFrame):**
1. Global `mousemove` listener tracks cursor relative to container
2. Target position and radius updated on hover enter/exit
3. Each frame:
   - Current position lerped toward target (`ease: 0.08`)
   - Current radius lerped toward target (`radiusEase: 0.12`)
   - 12 morph points updated with spring-physics offsets
   - `clip-path: polygon(...)` computed from morphed circle points
   - Applied to reveal image via `style.clipPath`

| Config | Value | Description |
|---|---|---|
| `ease` | 0.08 | Position follow delay |
| `radiusEase` | 0.12 | Mask growth/shrink speed |
| `maxRadius` | 20% | Maximum reveal bubble size |
| `numPoints` | 12 | Polygon smoothness |
| `spring` | 0.15 | Deformation spring force |
| `friction` | 0.7 | Deformation damping |

---

### `ChancellorMessage.tsx` — Chancellor's Welcome

- Full-width section with Chancellor's profile photo and message
- `whileInView` scroll-triggered animation
- Glassmorphic card with neon border accent

---

### `About.tsx` — Event Description

- Centered text section describing the conclave's purpose
- Highlights technology focus areas: AI, Gaming, XR, Robotics, UI/UX, IoT
- `whileInView` fade-in animation with subtle background gradient

---

### `Highlights.tsx` — Key Statistics

Showcase grid of notable event highlights (speaker count, topics, audience size, etc.), each rendered as a stat/feature card with Framer Motion stagger.

---

### `Speakers.tsx` — Distinguished Speakers (3-Day Tabbed)

Tab switcher with animated content transitions.

- **Tab bar:** Three pill buttons (Day 1 / Day 2 / Day 3) with dates
- **Active tab styling:** `bg-primary text-black` with neon glow shadow
- **Card grid:** 3 columns on desktop, 1–2 on mobile
- **Card content:** Speaker photo (circular, gradient border), name, role, time slot, LinkedIn icon, talk title
- `AnimatePresence mode="wait"` for slide-in/out transitions between days
- 3D card hover effect via `CardEffects.module.css`

---

### `Schedule.tsx` — 3-Day Event Timeline

Vertical timeline for all 9 sessions across 3 days.

- `whileInView` stagger animation per day group
- Each session: time | talk title | speaker name + company
- `border-l-2` timeline track on mobile, hidden on desktop

---

### `Registration.tsx` — Registration Info

Displays the event registration QR code (`QRCODE.jpeg`) and associated instructions for participants to register.

---

### `Organizers.tsx` — Organizing Team

Displays the event organizing committee members with their names and roles.

---

### `Accreditation.tsx` — Institutional Accreditation

Shows Sathyabama's NAAC accreditation grade and related institutional achievements.

---

### `SecureSpotButton.tsx` — Animated CTA Button

A standalone, animated registration button used inline within `<Hero />` and other sections. Features hover/tap animations via Framer Motion.

---

### `SecureSpotCTA.tsx` — Full-Width CTA Section

A dedicated pre-footer section with a large headline, subtext, and the `<SecureSpotButton />` to drive final conversions before the footer.

---

### `Footer.tsx` — Site Footer

- Event brand + tagline
- Quick navigation links
- Social media icons
- Department and institution credits
- Copyright notice

---

## 🎨 Design System

All tokens defined in `src/app/globals.css`:

### Color Tokens

| Token | Hex | Role |
|---|---|---|
| `--background` | `#020617` | Page background — Deep Space Blue/Black |
| `--foreground` | `#f8fafc` | Primary text — Near white |
| `--primary` | `#00f0ff` | Neon Cyan — CTAs, accents, highlights |
| `--secondary` | `#1e1b4b` | Navy — secondary surfaces |
| `--accent` | `#3b82f6` | Blue — links, secondary highlights |
| `--muted` | `#475569` | Slate — subdued text, borders |
| `--card` | `rgba(15,23,42,0.6)` | Glassmorphic card base |

### Typography Scale

| Font Family | Variable | Weight | Usage |
|---|---|---|---|
| Geist Sans | `--font-geist-sans` | 400–700 | Body text, UI labels |
| Geist Mono | `--font-geist-mono` | 400 | Code, time slots |
| Orbitron | `--font-orbitron` | 400–900 | Headings, brand name, hero title |

### Utility Classes

| Class | CSS Effect |
|---|---|
| `.glass` | `background: rgba(15,23,42,0.4); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1)` |
| `.neon-text` | `text-shadow: 0 0 10px rgba(0,240,255,0.5)` |
| `.neon-border` | `box-shadow: 0 0 10px rgba(0,240,255,0.2)` |
| `.animate-aurora` | Infinite gradient pan animation (`aurora-flow` keyframes, 20s) |
| `.bg-noise` | SVG fractal noise texture overlay |

---

## ✨ Key Features

| Feature | Implementation |
|---|---|
| 🖱️ Fluid Hover Reveal | Custom `requestAnimationFrame` loop + CSS `clip-path` polygon morphing with spring physics |
| 🌊 Glassmorphism | `.glass` utility class with `backdrop-filter: blur` |
| 💫 Scroll Animations | Framer Motion `whileInView` + `AnimatePresence` |
| 📱 Responsive | Tailwind mobile-first breakpoints + hamburger menu |
| ⚓ Smooth Scroll Nav | `scroll-smooth` on `<html>` + anchor links |
| 🔡 Premium Fonts | Orbitron for futuristic headings, Geist for clean body copy |
| 🌑 Dark Theme | `#020617` deep space background |
| 🎨 Neon Accents | `#00f0ff` cyan glow throughout |
| 🎭 3D Card Effects | CSS Module perspective + translateZ hover |
| ♿ Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>` structure |

---

## 📅 Event Schedule

### Day 1 — February 23, 2026

| Time | Session | Speaker | Company |
|---|---|---|---|
| 10:30–11:30 AM | Beyond the Screen: How UI/UX is Redefining Digital Reality | Kavitha Kalyan | TCS |
| 11:45–1:00 PM | Generative AI Unleashed: A Tool for Automation or a New Intelligence? | Deepan Raj | HCL |
| 2:00–3:00 PM | Next-Gen Robotics: Bridging the Gap Between Humans and Machines | Sridhar Shankar | Intrino Robotics |

### Day 2 — February 24, 2026

| Time | Session | Speaker | Company |
|---|---|---|---|
| 10:00–11:30 AM | Human-Centric Design: The Secret Code to Digital Success | Vinod Kumar V | Phantom FX |
| 11:45–1:00 PM | The Psychology of Play: How Game Design Hooks the Mind | Mario Royston | Weloadin |
| 2:00–3:00 PM | Next-Gen Gaming: A Technological Leap or a Creative Shift? | Joshua Jebadurai | Weloadin |

### Day 3 — February 25, 2026

| Time | Session | Speaker | Company |
|---|---|---|---|
| 10:00–11:30 AM | Building Worlds: The Power of Unreal in Modern Simulation | Aravind Neelakandan | Epic Games |
| 11:45–1:00 PM | Extended Reality: Blurring the Lines Between Physical and Digital | Ganesh R | Monolith Asia |
| 2:00–3:00 PM | Smart World: How Intelligent IoT is Reshaping Our Lives | Jai Naressh | Cavin Infotech |

---

## 🎤 Speakers

| Name | Role | Company | Topic Area |
|---|---|---|---|
| Kavitha Kalyan | Director of Design | TCS | UI/UX Design |
| Deepan Raj | Director of Design | HCL | Generative AI |
| Sridhar Shankar | Founder & CEO | Intrino Robotics | Robotics |
| Vinod Kumar V | Senior L&D Professional | Phantom FX | Human-Centric Design |
| Mario Royston | Co-Founder | Weloadin | Game Design |
| Joshua Jebadurai | Game Developer | Weloadin | Gaming Technology |
| Ms. Gayathri Shri | Creative Director | Agreal Studios | Augmented Reality |
| Ganesh R | Vice President | Monolith Asia | Extended Reality (XR) |
| Jai Naressh | Director | Cavin Infotech | IoT / Smart Systems |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or `yarn` / `pnpm`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/Digital-Horizon-Conclave-2026.git
cd Digital-Horizon-Conclave-2026

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

> The development server supports **Hot Module Replacement (HMR)** — changes reflect instantly without a full reload.

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| **Development** | `npm run dev` | Start Next.js dev server with HMR |
| **Production Build** | `npm run build` | Compile and optimize for production |
| **Production Start** | `npm run start` | Serve the production build locally |
| **Lint** | `npm run lint` | Run ESLint across the codebase |

---

## 🌍 Deployment

### Vercel (Recommended)

This project is built for **Vercel** — the native Next.js deployment platform.

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project root
vercel
```

Follow the prompts to link your repository. Subsequent pushes to `main` auto-deploy.

### Other Providers

Any provider that supports Node.js can run this project:

```bash
npm run build    # Generates .next/ output folder
npm run start    # Serves on port 3000 (configurable)
```

---

## 📄 License

This project is proprietary and developed exclusively for the **Digital Horizon Conclave 2026** at **Sathyabama Institute of Science and Technology**. All rights reserved.

---

<div align="center">

Designed & Developed with ❤️ by **Gopinath**

*Sathyabama Institute of Science and Technology · School of Computing · Dept. of Computer Science & Engineering*

</div>
