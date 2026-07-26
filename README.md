# Conference Website — Next.js

A premium, fully responsive conference website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, featuring smooth scroll animations, countdown timers, and a modern light-mode aesthetic.

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Key Components](#-key-components)
- [Data & Configuration](#-data--configuration)
- [Getting Started](#-getting-started)
- [Design System](#-design-system)
- [License](#-license)

---

## 📖 About the Project

A fully-featured, production-ready conference website template. It provides attendees, researchers, and speakers with all the relevant information — including registration, paper submission guidelines, key dates, committee listings, publications, venue details, and more.

Built with a focus on performance, accessibility, and a premium visual experience.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | `^16.0.10` | React framework (App Router) |
| [React](https://react.dev/) | `^19.2.3` | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | `^4` | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | `^12.23.24` | Animations & transitions |
| [GSAP](https://gsap.com/) | `^3.13.0` | Advanced scroll animations |
| [Lenis](https://lenis.darkroom.engineering/) | `^1.3.15` | Smooth scroll behaviour |
| [Lucide React](https://lucide.dev/) | `^0.554.0` | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Conditional class utilities |
| [react-confetti](https://github.com/alampros/react-confetti) | `^6.1.0` | Confetti celebrations |
| TypeScript | `^5` | Static typing |

---

## 🗂 Project Structure

```
sist.confdemo/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── about/                  # About the conference
│   ├── committees/             # Committee listing + sub-pages
│   ├── contact/                # Contact page
│   ├── dates/                  # Key dates / timeline
│   ├── login/                  # Login page
│   ├── publications/           # Publication opportunities
│   ├── registration/           # Registration & fees
│   ├── schedule/               # Event schedule
│   ├── speakers/               # Speakers listing
│   ├── sponsors/               # Sponsors page
│   ├── submission/             # Paper submission guidelines
│   ├── themes/                 # Conference themes
│   ├── tracks/                 # Research tracks
│   └── venue/                  # Venue details
│
├── components/
│   ├── animations/             # Reusable animation wrappers
│   │   ├── FadeIn.tsx
│   │   ├── ScaleIn.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── TextReveal.tsx
│   ├── layout/                 # Site-wide layout components
│   │   ├── Navbar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/               # Page-level content sections (23 files)
│   │   ├── Hero.tsx
│   │   ├── AboutConference.tsx
│   │   ├── ChancellorMessage.tsx
│   │   ├── TracksPreviewSection.tsx
│   │   ├── PublicationsSection.tsx
│   │   ├── PaymentAndFees.tsx
│   │   ├── Registration.tsx
│   │   ├── Schedule.tsx
│   │   ├── Sponsors.tsx
│   │   ├── Venue.tsx
│   │   ├── TimelineSection.tsx
│   │   └── ... (and more)
│   ├── ui/                     # Standalone UI components
│   │   ├── CountdownTimer.tsx
│   │   ├── MemberCard.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   ├── SmokeReveal.tsx
│   │   └── FluidHoverReveal.tsx
│   └── payment/                # Payment-related components
│
├── data/
│   ├── speakers.json           # Speaker profiles
│   └── tracks.json             # Research tracks metadata
│
├── lib/
│   ├── committees-data.ts      # Committee member data
│   ├── utils.ts                # Utility helpers (cn)
│   └── hooks/                  # Custom React hooks
│
├── public/                     # Static assets (images, SVGs)
├── types/                      # TypeScript type declarations
├── tailwind.config.ts          # Tailwind theme configuration
├── next.config.ts              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🔗 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, welcome message, tracks preview, publications, payment |
| `/about` | About | Conference overview and background |
| `/dates` | Key Dates | Important milestones on a zigzag timeline |
| `/themes` | Conference Themes | Research theme areas with topic lists |
| `/tracks` | Research Tracks | Research tracks (AI/ML, Cybersecurity, IoT, Blockchain, Cloud) |
| `/submission` | Submission | Paper submission guidelines and templates |
| `/publications` | Publications | Journal indexing info (Scopus, WoS, PubMed, Google Scholar) |
| `/registration` | Registration | Fee structure, bank details, downloadable form |
| `/schedule` | Schedule | Event schedule |
| `/speakers` | Speakers | Invited speakers |
| `/sponsors` | Sponsors | Conference sponsors |
| `/venue` | Venue | Conference venue details |
| `/committees` | Committees | All committee members |
| `/committees/chief-patrons` | Patrons | Leadership patrons |
| `/committees/organising-chair` | Organising Chair | Chair & Co-Chairs |
| `/committees/advisory-committee` | Advisory Committee | International & National advisors |
| `/committees/editorial-committee` | Editorial Committee | Editorial members |
| `/committees/program-committee` | Program Committee | Program committee members |
| `/contact` | Contact | Venue address, email, phone |

---

## 🧩 Key Components

### Layout
- **`Navbar`** — Sticky top navbar with scroll-aware styling, animated hover pills, a banner image, and a dropdown for Committee sub-pages. Fully responsive with a mobile hamburger menu.
- **`Footer`** — Dark blue footer with contact info, quick links, social icons, and a "Back to Top" button.

### Animations
- **`FadeIn`** — Wraps content in a Framer Motion fade+slide reveal. Accepts `direction`, `delay`, and `duration` props.
- **`TextReveal`** — Character-level text reveal animation.
- **`ScaleIn`** — Scale-up entrance animation.
- **`SmoothScroll`** — Lenis-powered smooth scrolling provider.

### UI
- **`CountdownTimer`** — Live countdown to a configurable target date. Supports `dark`/`light` themes and `horizontal`/`vertical` layouts.
- **`MemberCard`** — Card for displaying committee member photos, names, and roles.
- **`ThemeSwitcher`** — Color theme switcher component.
- **`SmokeReveal`** / **`FluidHoverReveal`** — Advanced canvas/CSS reveal effects for interactive hover experiences.

### Sections (Home Page)
- **`Hero`** — Full-screen hero with background image, glassmorphism badge, title, CTA buttons, and a live countdown.
- **`TracksPreviewSection`** — Preview cards for the research tracks.
- **`PublicationsSection`** — Highlights the journal indexing opportunities.
- **`PaymentAndFees`** — Inline fee table with early-bird pricing.

---

## 📊 Data & Configuration

### `data/tracks.json`
Defines research tracks with `id`, `title`, `description`, and Lucide `icon` name:
- Artificial Intelligence & Machine Learning
- Cybersecurity & Privacy
- Internet of Things (IoT)
- Blockchain & Fintech
- Cloud Computing & Big Data

### `data/speakers.json`
Array of speaker objects with `id`, `name`, `designation`, `institution`, and `image` path.

### `lib/committees-data.ts`
Exports `committeeSections` — an array of all committee groups (Patrons, Organising Chair, Advisory Committee, Editorial Committee, Program Committee), each with member lists and optional photos.

### `next.config.ts`
- Image formats: `avif`, `webp`
- Turbopack enabled
- Security headers: `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`

### `tailwind.config.ts`
Custom color tokens:
- `primary.*` — CSS-variable-driven primary palette
- `secondary.*` — CSS-variable-driven secondary palette
- `sathyabama` — Brand accent color `#00afff`
- Custom animations: `blob`, `blob-bounce`, `spin-slow`
- Fonts: `Poppins` (heading/serif), `Open Sans` (body)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sist.confdemo

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 🎨 Design System

The site uses a **light-mode-first** design with the following design language:

- **Primary font**: `Open Sans` (body text)
- **Heading font**: `Poppins` (headings, bold UI elements)
- **Brand color**: `#00afff` (accent used throughout)
- **Dark UI color**: `#020817` (navbar background)
- **Footer color**: `#0c4a6e` (deep ocean blue)
- **Glassmorphism**: Used in the Hero badge and navigation pills
- **Rounded cards**: Consistent use of `rounded-[32px]` / `rounded-[40px]` for premium card aesthetics
- **Micro-animations**: Hover scale, translate, and opacity transitions on all interactive elements
- **Entrance animations**: All major sections use `FadeIn` for staggered reveal on scroll

---

## 📄 License

MIT License
Copyright (c) 2026 Gopianth
