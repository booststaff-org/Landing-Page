# Boost Staff — Landing Page

The marketing site for [Boost Staff](https://boostaff.io), built with **Next.js 14** (App Router), **React 18**, **TypeScript**, and **Tailwind CSS**.

## Stack

- **Next.js 14** (App Router) — per PRD §4.1
- **TypeScript** — strict mode
- **Tailwind CSS** — custom Material-Design-inspired token palette in `tailwind.config.ts`
- **`next/font`** — self-hosted Inter (body) + Plus Jakarta Sans (headlines), no CDN flash
- **`next/image`** — optimized logo delivery
- **`lucide-react`** — tree-shaken SVG icons
- **`framer-motion`** — scroll-triggered reveals (respects `prefers-reduced-motion`)

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Local dev server with HMR                 |
| `npm run build`  | Production build                          |
| `npm run start`  | Run the production build                  |
| `npm run lint`   | ESLint (Next.js core-web-vitals ruleset)  |

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, SEO metadata, Schema.org JSON-LD
  page.tsx            # Composes the page from section components
  globals.css         # Tailwind directives + base styles
  sitemap.ts          # Next metadata route → /sitemap.xml
  robots.ts           # Next metadata route → /robots.txt
  (legal)/
    layout.tsx        # Shared header/footer shell for legal pages
    privacy/page.tsx
    terms/page.tsx
    careers/page.tsx
    contact/page.tsx
components/
  Header.tsx          # Client: nav + mobile hamburger
  Hero.tsx            # Gradient backdrop + staggered reveals
  PhoneMockup.tsx
  HowItWorks.tsx
  Pricing.tsx
  Reviews.tsx          # Client: testimonial carousel
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
  Reveal.tsx          # Client: framer-motion scroll fade-up
  icons/
    AppleIcon.tsx
    GooglePlayIcon.tsx
    SocialIcons.tsx
public/
  boost-staff-logo.png
  favicon.png
  og-image.png        # 1200x630 OpenGraph card
tailwind.config.ts
tsconfig.json
next.config.mjs
postcss.config.mjs
```

## Routing TODOs

The CTA buttons currently link to placeholder paths. Wire these up to real routes or external redirects:

| Component       | href                  | Where it should go                         |
| --------------- | --------------------- | ------------------------------------------ |
| `Header`        | `/download`           | App download page or smart deep link       |
| `Header`        | `/signin`             | Existing user login                        |
| `Hero`          | `/post-shift`         | Employer signup / shift-posting flow       |
| `Hero`          | `/find-shifts`        | Worker signup flow                         |
| `Hero` & CTA    | `/download/ios`       | App Store smart link (or universal link)   |
| `Hero` & CTA    | `/download/android`   | Play Store smart link                      |

Legal pages (`/privacy`, `/terms`, `/careers`, `/contact`) exist as stubs —
replace the placeholder copy with counsel-reviewed content before launch.

## Copy / Legal TODOs

Grep the codebase for `TODO` to find everything that needs a human decision
before production launch. The hotspots are:

- `components/Footer.tsx` — confirm registered legal entity name and support phone
- `components/Pricing.tsx` — lock final pricing tiers with Finance
- `components/Reviews.tsx` — replace placeholder quotes with real customer testimonials (with permission)
- `app/(legal)/**` — fill stub copy with counsel-reviewed legal text
- `app/(legal)/contact/page.tsx` — confirm support phone number
- `app/layout.tsx` — confirm `contactPoint.telephone` in Schema.org JSON-LD

The earlier "Built for Hospitality" pillars block was removed for a more
minimal layout. The current `Reviews.tsx` carousel ships with three
placeholder quotes — replace them with real, attributed customer quotes
before launch.

## SEO

- `app/sitemap.ts` emits `/sitemap.xml` from the route list
- `app/robots.ts` emits `/robots.txt`
- Organization Schema.org JSON-LD is rendered from the root layout via `next/script`
- OpenGraph and Twitter cards point at `/og-image.png` (1200×630)

## Deployment

Designed for Vercel — push to a connected Git repo and it Just Works. For other targets (`next start` on EC2/ECS per the PRD's AWS architecture), use `npm run build && npm run start`.

## Brand tokens

All brand colors live in `tailwind.config.ts`. The two anchors:

- **Primary navy** `#1b5dad` (`bg-primary-container`, `text-primary-container`)
- **Boost orange** `#fd983a` (`bg-secondary-container`, `text-secondary-container`)

Text default is `on-background` (`#111c2d`) — never pure black, per the design system.
