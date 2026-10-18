# Pivvix Site — Mobile Nav & Honesty Fixes

A round of corrective work on the Pivvix marketing site: add a working mobile menu, remove a dead "Sign in" link, and make sample content and product claims honest.
No new pages or features — existing content and layout stay as they are.

## Who it's for

Prospective corporate buyers visiting the Pivvix site, a large share of them on phones, plus the internal team who needs the site to not overstate what the product does today.

## Core features and experience

**1. Mobile navigation (HIGH)**
A hamburger button appears in the header below the desktop breakpoint. Tapping it opens a full-width panel containing every primary nav item — Platform, Solutions, Resources, Pricing — plus the "Book a demo" button. The panel closes when a link is tapped, when the toggle is tapped again, or on Escape. Page scroll is locked while it is open. Desktop header is untouched.

Accessibility requirements for the toggle and panel:
- The toggle carries `aria-expanded` reflecting the true open/closed state, plus an accessible label and a reference to the panel it controls.
- While the panel is open, keyboard focus is trapped inside it — Tab and Shift+Tab cycle through the panel's links and buttons only, and focus moves into the panel when it opens.
- Focus returns to the toggle button whenever the panel closes, by any route: Escape, tapping a link, or tapping the toggle again.

**2. "Sign in" link (HIGH)**
The link currently points at `#signin`, which does not exist. It is removed from both desktop and mobile navigation. Rationale: adding a fake sign-in entry point on a demo-driven marketing site invites a dead end; "Book a demo" remains the single conversion path. When real authentication exists it can be reintroduced pointing at the real app.

**3. Trust strip logos (HIGH)**
The ten company names in the scrolling trust strip are invented. The strip is kept but labelled: the heading changes from "Trusted by" to wording that states the logos are illustrative placeholders, with a small "Illustrative" tag matching the style already used on the sample testimonial. Rationale: removing the strip leaves a visual hole in the page rhythm; labelling it is consistent with how the testimonial already handles the same problem. Swapping in real approved logos later is a content change only.

**4. Pricing FAQ data-training claim (HIGH)**
"We never train models on your candidate data" is removed as a statement of present fact and rewritten as a forward-looking commitment about how the platform is being built, phrased so it is clearly a design principle rather than an audited guarantee. No other FAQ answers change.

**5. Document title flash (LOW)**
Routes that currently inherit the stale default title briefly before setting their own — /pricing, /resources, /sample, /preview/* — are fixed so the correct title applies immediately on navigation, matching how /platform and /solutions already behave.

## User flow

Phone visitor lands on any page → taps hamburger in header → sees all four primary pages and "Book a demo" → taps a page, panel closes, navigation is instant (SPA, no reload) → or taps "Book a demo", panel closes and the existing demo modal opens → submits the form, which posts to the same demo endpoint as today.

## UI/UX feel

The mobile panel inherits the site's existing palette, type scale and motion — no new visual language. Open/close is a short eased transition, not a jump. The hamburger swaps to a close icon while open. The "Illustrative" tag is small and low-contrast: visible to anyone reading, not a banner that undercuts the section.

## Implementation phases

**Phase 1 — MVP (built now)**
All five items above: mobile menu, "Sign in" removal, trust strip labelling, FAQ claim rewrite, title flash fix.

**Phase 2 — Later**
Replace illustrative logos and the sample testimonial with real approved customer assets once they exist. Reintroduce "Sign in" pointing at the real application.

**Phase 3 — Later**
Remaining backlog from earlier sessions: ROI calculator on the pricing page, email notifications for demo requests.

## Assumptions

- "Sign in" is removed rather than rerouted to the demo flow — a sign-in label that opens a sales form is more confusing than no link at all.
- The trust strip is kept and labelled rather than deleted; no real customer logos are available to drop in.
- The FAQ claim is rewritten rather than deleted, so the privacy section does not lose its answer entirely.
- The demo-request POST and `REACT_APP_BACKEND_URL` integration shape are left exactly as they are.
- The legacy `/preview/*` and `/sample` mockup routes stay in the codebase; they only get the title fix, no other work.
- Desktop navigation, page content, and all other copy remain unchanged.
