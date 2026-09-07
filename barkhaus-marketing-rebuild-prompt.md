# Barkhaus Marketing Site Rebuild — Claude Code Prompt

## How to run
```
claude --dangerously-skip-permissions "$(cat barkhaus-marketing-rebuild-prompt.md)"
```

---

## Prompt

Do not ask for confirmation. Just execute.

Rebuild apps/marketing/ as a polished Astro SSG marketing site for Barkhaus — an all-in-one SaaS platform for animal rescues and shelters. A professional design package has been provided in barkhaus-platform-design/ at the repo root. Read it before writing any code.

Read these files from barkhaus-platform-design/ first:
- DESIGN.md — design tokens, color schemes, typography
- sitemap.md — all pages, sections, components, and color schemes
- react/globals.css — all CSS custom properties
- react/components/navbar-10.jsx — navbar with megamenu
- react/components/footer-13.jsx — footer
- react/components/home/header-103.jsx — hero with animated tabs
- react/components/home/layout-504.jsx — feature section
- react/components/home/testimonial-17.jsx — testimonials
- react/app/page.js — homepage assembly

---

### TECH STACK
- Astro SSG (output: static)
- Tailwind CSS v3
- TypeScript
- React islands (client:load) for interactive components only
- No framer-motion — replace animations with CSS transitions
- Deployed to Vercel (project: barkhaus-marketing)

---

### DESIGN SYSTEM

Implement exactly from DESIGN.md:

**Fonts:**
- Headings: Noto Serif, weight 500 — load from /public/fonts/ (woff2 files are in barkhaus-platform-design/fonts/)
- Body: Poppins, weight 400 — same

**Colors — implement as Tailwind config AND CSS custom properties:**
- Spicy Mix shade-4: #804E3F (primary brand color)
- Spicy Mix shade-1: #F2EDEB (light brand bg)
- Vanilla shade-1: #FAF7F5
- Vanilla shade-4: #CFB5A3
- Dorado shade-1: #EFEEED
- Dorado shade-4: #5F5754
- Neutral darkest: #060403
- Neutral white: #FFFFFF
- Cararra shade-4: #E9E8E6

**Color Schemes — implement as CSS classes:**
Each section gets a scheme class that sets --bg, --text, --accent, --border CSS variables:
- .scheme-1: bg #EFEEED, text #060403, accent #5F5754
- .scheme-2: bg #D9D9D9, text #060403, accent #5F5754
- .scheme-3: bg #CFB5A3, text #060403, accent #060403
- .scheme-5: bg #A68378, text #ffffff, accent #ffffff
- .scheme-6: bg #FAF7F5, text #060403, accent #5F5754
- .scheme-7: bg #FFFFFF, text #060403, accent #5F5754
- .scheme-8: bg #060403, text #ffffff, accent #ffffff

**Typography scale:**
Desktop: h1=72px h2=52px h3=44px h4=36px h5=28px h6=22px
Mobile: h1=44px h2=40px h3=32px h4=24px h5=20px h6=18px

**UI:** Button radius 6px, card border 1px outlined style, input radius 6px

---

### ASSET SETUP

Copy these from barkhaus-platform-design/ into apps/marketing/public/:
- fonts/ → public/fonts/ (all woff2 files)
- logo/logo-light.png → public/logo-light.png
- logo/logo-dark.png → public/logo-dark.png
- images/ → public/images/ (all jpg/png files)

---

### FILE STRUCTURE

```
apps/marketing/
├── public/
│   ├── fonts/
│   ├── images/
│   ├── logo-light.png
│   └── logo-dark.png
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Navbar.astro         # Megamenu navbar, scheme-8 default
│   │   ├── Footer.astro         # 4-col footer, scheme-8
│   │   ├── Hero.astro           # Animated tabs hero, scheme-7
│   │   ├── FeatureSection.astro # Image + text, alternating
│   │   ├── BenefitsSection.astro
│   │   ├── TestimonialSection.astro
│   │   ├── CTASection.astro
│   │   ├── NewsletterSection.astro
│   │   ├── PricingSection.astro
│   │   ├── FAQSection.astro     # Accordion
│   │   ├── ContactSection.astro
│   │   ├── StatsSection.astro
│   │   ├── LogoList.astro
│   │   └── SignupForm.tsx       # React island
│   └── pages/
│       ├── index.astro
│       ├── features.astro
│       ├── pricing.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── blog/index.astro
│       ├── sign-in.astro
│       └── sign-up.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── vercel.json
```

---

### PAGES TO BUILD

#### Homepage (index.astro) — follow sitemap.md exactly
Sections in order with correct scheme classes:
1. Navbar [scheme-8]
2. Hero — animated tabs showing 4 use cases of Barkhaus [scheme-7]
   Tab 1: Animal Management — "Manage every animal from intake to adoption in one place"
   Tab 2: Marketing Tools — "Auto-post available animals to social media and Petfinder"
   Tab 3: Adoption Tracking — "Review applications and track every adoption seamlessly"
   Tab 4: Website Builder — "Launch a beautiful rescue website in minutes"
   Each tab: heading, 2-line description, 2 buttons (Get Started, See Demo), image from public/images/home-hero-header-section-{0-3}.jpg
3. Benefits Section [scheme-8]: "Why rescues choose Barkhaus" — 3 benefits with icons
   - Replace 8 tools with 1 platform
   - Go live in under an hour
   - Built for rescues, not developers
4. Feature Section [scheme-1]: Animal Management — image right, text left
   Heading: "Every animal. Every detail. In one place."
   Body: Add animals, track health records, manage photos, update status from intake to adopted
   Image: home-feature-section-0.jpg
5. Feature Section [scheme-8]: Marketing Tools — image left, text right
   Heading: "Post to social media in seconds"
   Body: AI-generated posts, one-click sharing to Facebook and Instagram, auto-sync to Petfinder
   Image: home-feature-section-1.jpg
6. Feature Section [scheme-1]: Website Builder — image right, text left
   Heading: "Your rescue website, ready in minutes"
   Body: Edit content, upload photos, change colors — no code, no developer needed
   Image: home-feature-section-2.jpg
7. Features List [scheme-8]: "Everything you need to run your rescue"
   6 features in a grid: Animal Management, Adoption Applications, Website Builder, Social Media AI, Volunteer Tools, Donation Tracking
8. Benefits Section [scheme-1]: image left, stats/benefits right
   "Rescues using Barkhaus see results"
   Stat 1: 3x faster adoption processing
   Stat 2: 60% less admin time
   Stat 3: 2x more website traffic
   Image: home-benefits-section-1.png
9. CTA Section [scheme-8]: "See Barkhaus in Action"
   Heading: "Get early access today"
   Body: Join the rescues already saving time and finding more homes
   Button: "Start Free" → /sign-up
10. Testimonials [scheme-2]: 3 testimonials from rescue coordinators (placeholder names/orgs)
11. CTA [scheme-8]: "Start your free account"
    Button: "Get Started — It's Free" → /sign-up
12. Newsletter [scheme-8]: email input + subscribe button
13. CTA links to contact [scheme-2]: contact info card + "Talk to us" button → /contact
14. Footer [scheme-8]

#### Features Page (features.astro)
Follow sitemap.md Features section. Key sections:
- Hero: "Everything your rescue needs"
- Features grid (12 features): Animal mgmt, Applications, Website builder, Social media AI, Email marketing, Volunteer management, Donation tracking, Analytics, CSV import, Multi-location, Petfinder sync, API access
- 6 alternating feature deep-dives with images
- How it works: 3 steps
- Testimonials
- CTA to sign up

#### Pricing Page (pricing.astro)
3 tiers:
| | Starter | Professional | Enterprise |
|---|---|---|---|
| Price | Free forever | $49/mo | Custom |
| Animals | Up to 25 | Unlimited | Unlimited |
| Website | ✓ | ✓ | ✓ |
| Applications | ✓ | ✓ | ✓ |
| Social AI | 10/mo | Unlimited | Unlimited |
| Email tools | — | ✓ | ✓ |
| Volunteers | — | ✓ | ✓ |
| Donations | — | ✓ | ✓ |
| Analytics | Basic | Advanced | Custom |
| Support | Email | Priority | Dedicated |
| CTA | Start Free | Start Trial | Contact Sales |

Comparison table below pricing cards.
FAQ accordion (8 questions about pricing, billing, data, cancellation).

#### About Page (about.astro)
- Mission: empower every animal rescue with technology
- Story: founded by animal lovers frustrated by fragmented tools
- How it works: 3 steps (Sign up → Set up your rescue → Go live)
- Team placeholder section
- Testimonials

#### Contact Page (contact.astro)
- Contact form: name, email, org name, message, submit
- Contact info: hello@barkhaus.io
- No backend needed — show success state on submit via JS

#### Sign In Page (sign-in.astro)
- Email + password form
- On submit: POST to /api/auth/login (wrap in try/catch, show error inline)
- On success: redirect to https://app.barkhaus.io?token={token}
- Links: Forgot password, Sign up

#### Sign Up Page (sign-up.astro)
Uses SignupForm.tsx React island (client:load):
Step 1: Account details (org name, name, email, password, confirm password)
Step 2: Choose plan (Starter free / Professional $49/mo / Enterprise contact us)
Step 3: Processing → redirect to https://app.barkhaus.io?token={token}
All API calls wrapped in try/catch.

#### Blog Index (blog/index.astro)
Static placeholder — 6 placeholder blog post cards with:
- Title, excerpt, date, category badge, Read More link
- Categories: Shelter Tips, Marketing, Success Stories, Product Updates
No CMS needed — hardcoded placeholder content.

---

### NAVBAR (Navbar.astro)
- Logo left: use logo-light.png on scheme-8 sections, logo-dark.png on light sections
- Nav links with megamenu dropdowns:
  - Product: Features, Dashboard, Pricing, What's New
  - Solutions: Animal Shelters, Rescue Organizations, Foster Networks
  - Resources: Blog, Case Studies, Help Center, API Docs
  - Company: About, Contact, Careers
- Right: Log In (outline button → /sign-in), Get Started (filled warm-brown → /sign-up)
- Mobile: hamburger → slide-in drawer with all links
- Scroll behavior: transparent on top of scheme-7/scheme-1 hero, solid #060403 after scroll

---

### FOOTER (Footer.astro)
4 columns [scheme-8]:
- Col 1: logo-light.png + tagline "The all-in-one platform for animal rescues" + social icons (Instagram, Facebook, Twitter, LinkedIn)
- Col 2: Product — Features, Pricing, Dashboard, Changelog
- Col 3: Company — About, Blog, Careers, Contact
- Col 4: Support — Help Center, API Docs, Privacy Policy, Terms of Service
Bottom bar: © 2024 Barkhaus, Inc. · All rights reserved.

---

### CONFIG FILES

astro.config.mjs:
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), react()],
});
```

vercel.json:
```json
{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=3600, must-revalidate" }]
    }
  ]
}
```

---

### IMPORTANT RULES
- Do not use framer-motion — CSS transitions only
- All images use standard <img> tags with loading="lazy" below the fold
- Hero image uses loading="eager"
- Every page must work at 375px mobile width — no horizontal scroll
- Contact form: JS submit handler only, no backend, show success message
- Sign in/up forms: React islands with client:load
- Self-host fonts from public/fonts/ — no Google Fonts CDN
- Run npm run build from apps/marketing/ and fix all errors until build passes with zero errors
