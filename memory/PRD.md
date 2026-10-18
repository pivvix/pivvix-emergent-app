# Pivvix Marketing Website — PRD

## Problem Statement
Build a polished, premium marketing website for **Pivvix**, an AI-native hiring platform. The site must convince hiring teams (recruiters, hiring managers, technical leads, agencies) to **"Book a demo"**. Candidate-side features are explicitly deferred.

## Current Status (Feb 2026)
**Phase 2 complete — full three-page marketing site is live.**

### Live routes
- `/` → redirects to `/platform`
- `/platform` — The Pivvix Platform page
- `/solutions` — Solutions by team type
- `/resources` — Articles, guides, categories
- `/preview/dark|light|chromatic` — kept for design history
- `/sample` — original approved sample slice

### What's been implemented
- **Shared design system** (`pivvix.css`): Deep Petrol + Warm White + Coral + Sage/Mint palette, Manrope + Fraunces italic, consistent components (buttons, cards, chips, scorecard, pipeline, Nova mock, abstract Nova entity).
- **Shared header** (sticky, blurred, Platform/Solutions/Resources + Sign in + coral Book-a-demo).
- **Shared footer** (4-col: Platform / Solutions / Resources / brand + socials).
- **Platform page**: hero with live-pipeline product UI (124→42→18→9 funnel + candidate list), 7-stage lifecycle (AI Interview highlighted), dark AI deep-dive with animated abstract Nova entity, 4-card benefits grid, CTA band.
- **Solutions page**: hero with 4 stakeholder cards (abstract illustrated — no face licensing), dark 4-card teams grid, high-volume hiring section (text + pipeline), technical hiring (text + competency assessment), staffing & agencies (dark text + client-ready summary), hiring managers evidence section with full tabbed scorecard (Competencies/Reasoning/Evidence/Summary), CTA band.
- **Resources page**: hero, featured guide card, 4-category grid, 6-article grid with abstract gradient cards, CTA.
- **Nova abstract entity** (animated, no faces, no licensing): layered SVG with slow/mid/fast rotating rings, orbit dots, pulsing coral core, breathing animation, triple ping ring; respects `prefers-reduced-motion`.
- **Book-a-demo modal**: form with name/email/company/team_size/message → POST `/api/demo-requests` → MongoDB `demo_requests` collection → success state.
- **Backend endpoint**: `POST /api/demo-requests` + `GET /api/demo-requests` (admin list), with EmailStr validation.
- **Reveal-on-scroll animations** via IntersectionObserver.
- **Trust strip** on Platform page.
- **Responsive**: desktop first, degrades gracefully to tablet (2-col grids) and mobile (1-col, hidden nav, stacked stakeholder cards).

### Key files
- `/app/frontend/src/components/pivvix/pivvix.css` — all design system styles
- `/app/frontend/src/components/pivvix/SharedHeader.jsx`
- `/app/frontend/src/components/pivvix/shared.jsx` — Footer, Dialog, NovaAbstract, CTABand, TrustStrip, useReveal
- `/app/frontend/src/components/pivvix/useDemo.js`
- `/app/frontend/src/components/pivvix/PlatformPage.jsx`
- `/app/frontend/src/components/pivvix/SolutionsPage.jsx`
- `/app/frontend/src/components/pivvix/ResourcesPage.jsx`
- `/app/backend/server.py` — demo-requests endpoints

### Design decisions
- **No real portraits anywhere** — stylized initials for candidates, animated abstract Nova entity for interview visual, abstract icons for stakeholder cards. Unique brand identity, no face licensing.
- **Italic emphasis** = Fraunces 500 italic in coral `#E85547` on key headline words.
- **Section rhythm**: cream → cream-2 → dark → cream → dark-deeper → cream → dark CTA. Clear editorial pacing.

## Backlog (P1 / P2)
- **P1** Make the lifecycle stages interactive — clicking a stage swaps a preview panel.
- **P1** Live-counter animation on the pipeline numbers.
- **P1** Case-study testimonial strip between dark sections.
- **P1** Sticky anchored sub-nav for long pages.
- **P2** Replace sample article content with real guides.
- **P2** Admin page for `/api/demo-requests`.
- **P2** Email notification on new demo request (Resend/SendGrid integration).
- **P2** Candidate-side features (resume tracking) — deferred by user.

## Test credentials
No auth yet. See `/app/memory/test_credentials.md`.

## 2026-06 — Mobile nav & honesty pass
- Mobile hamburger menu in SharedHeader (focus trap, Escape, scroll lock, aria-expanded/controls); desktop header unchanged.
- Removed dead "Sign in" link (`#signin`) from header + CSS.
- Trust strip relabelled: "The kind of teams Pivvix is built for" + "Illustrative — placeholder logos, not customers" tag.
- Pricing FAQ data-training claim rewritten as a forward-looking design commitment.
- Document titles now set centrally in App.js (`RouteTitle`, useLayoutEffect) — no stale-title flash on /pricing, /resources, /sample, /preview/*.
- Verified via mobile + desktop screenshots (open/close, link nav, Escape focus return, demo modal from mobile CTA).

### Backlog
- P2: Replace illustrative logos/testimonial with real customer assets; reintroduce Sign in when real auth exists.
- P2: ROI calculator on pricing page; email notifications (Resend/SendGrid) for demo requests.
