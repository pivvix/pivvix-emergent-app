# Pivvix — Product and Website Brief

## Status
Three corporate-only marketing homepage design samples are implemented and tested. Chromatic Editorial preserves the exact warm off-white background from Light Editorial, with richer terracotta and deep-blue content panels. The original Dark Precision and Light Editorial previews remain intact. These are illustrative frontend previews, not a functional hiring application. The backend is unchanged.

## Latest completed enhancement (2026-02 session)
- User likes Light Editorial's background but finds its other fills too stale. Wants colourful boxes/content without too many mixed colours.
- User selected: "Add it as a third preview to compare with the original light version".
- Added `/preview/chromatic`, three-way comparison controls, and design notes for all three concepts.
- Preserved page background #f7f6f0. Content surfaces use two coordinated accents, terracotta and deep blue, with tints; no rainbow or additional green/yellow accent families.
- Saturated blue Nova panel with peach frame and cream caption; colour-filled scorecard/header/evidence; pale-blue gap state; blue/peach workflow cards; deep-blue closing banner.
- CSS is scoped to .theme-chromatic. Shared changes only to three-way comparison/notes and ProductPreviews.jsx data-evidence attribute; no API or backend changes.
- Build compiled successfully. `/app/test_reports/iteration_3.json` passed: routes/history, matching backgrounds, responsive dock at 320/390/640/768/900/1024/1440/1920px, Nova controls, evidence states, dialogs, mobile menu, original concept regression. No console errors, duplicate IDs, or overflow.
- Awaiting user feedback on the third direction; do not select a final design without user approval.

## Confirmed decisions and current task
- Initial deliverable: polished marketing website for the existing product.
- Corporate audience ONLY. User: "leave candidate side for now, we will add it later if needed. as it is still in discussion phase".
- Primary CTA: Book a demo.
- Visual direction unresolved. User approved a third richer-colour sample while preserving both originals.
- Current task complete: Dark Precision, Light Editorial and Chromatic Editorial browsable samples. Awaiting visual feedback. No live booking/AI/auth/integrations requested.
- Routes: `/` and `/preview/dark` (dark); `/preview/light` (original light); `/preview/chromatic` (colourful light). Fixed bottom three-way comparison switcher.
- Shared corporate copy, Nova state sample, evidence scorecard inspector, workflow, closing CTA. Responsive mobile menu. Informational booking/design-notes dialogs; no data collected or submitted.
- Main files: frontend/src/App.js, App.css, components/marketing/PreviewSections.jsx, components/marketing/ProductPreviews.jsx.
- Sample interview/scorecard interactions are MOCKED, explicitly labeled illustrative. Book a demo is a read-only preview dialog, not a real scheduling integration.
- Testing complete: iteration_1 functional suite passed; iteration_2 verified the cosmetic overlap fix across both concepts at 320–1920px. No outstanding issues or credentials required.

## Original user intent
Build a website for an AI hiring startup serving corporate hiring teams and candidates (the original concept mentions candidate resume tracking and editing). Act as a website designer, ask targeted questions, and agree a high-level design direction before coding.

User's explicit instruction: "ask me questions as a web designer so that it will be easier for you to build I will also provide you our tools features and information from which you can take reference. The document also explains how the website should be and all, just ignore those things and just take reference for tool features".

Latest user choice: "Add it as a third preview to compare with the original light version". Third preview completed and tested; awaiting visual feedback.

Language: English.

## Supplied document
- Original artifact: https://customer-assets-jt897jd0.emergentagent.net/job_resume-pulse-4/artifacts/da44381c4d859d45_doc.pages
- Download: `/app/reference/product-features.pages`
- Unpacked Pages archive: `/app/reference/pages-extracted/`
- Extracted readable main text and table strings: `/app/reference/extracted-content.txt`
- Extraction utility: `/app/reference/extract_pages.py`; temporary cramjam dependency in `/tmp/pages-extractor`, NOT an application dependency.
- Document title: Pivvix Website Content Brief. Brand: Pivvix. Interviewer: Nova.
- Internal document date says 14 Oct 2026; do not treat this date or the document's assertions of verification as an independent audit.
- .pages is unsupported by document-analysis tools, so it was unzipped and Snappy-compressed IWA content decoded locally. Table strings are readable but not in original row order.
- Critical: extract product capabilities only. IGNORE its homepage structure, navigation, positioning instructions, visual ideas, and page-by-page copy recommendations.
- The attachment describes a separate existing product. None of its functionality or security assertions has been verified in this starter repository.

## Features described in the document
### Nova conversational interviews
- Real-time voice/video first-round interview with adaptive follow-ups.
- Listening, thinking, and speaking visual states with text labels; persistent question captions; movable candidate camera picture-in-picture.
- Encourages fuller answers, rephrases repeat requests, moves on after repeated unclear answers, and closes gracefully.
- Structured job-specific competencies and follow-up depth based on answer completeness.
- Designed to assess answer content rather than accent, fluency, or demeanor. Do not claim bias elimination or guarantee fairness.
- Human makes final hiring decision; candidate completion screen does not reveal score/outcome.

### Evaluation
- Structured scorecards: overall score, recommendation, per-competency scores, reasons and candidate evidence quotes, strengths, concerns, and missing evidence.
- Includes needs-review outcome and explicit insufficient-evidence flags.
- Same role-specific evaluation framework across candidates.

### Recruiter workflow
- Job creation/list/detail; per-job candidate counts, stages, and actual time-to-hire.
- Candidate records and profiles; pipeline Sourced -> Contacted -> Screening -> Interviewing -> Offer -> Hired/Rejected.
- Weighted job-specific screening questionnaires, knockout questions, tokenized candidate links, automatic response scores; assessments hub across jobs.
- Reusable cross-job talent pool.
- Sequenced templated email outreach with enrollment, opens/replies, and unsubscribe handling.
- AI-assisted hiring reports with summaries, comparisons, evidence, revocable share links, CSV export.
- Dashboard, recruiting funnel, organization/admin analytics.
- Teammate invitations and roles: Owner, Admin, Recruiter, Hiring Manager, Interviewer, Viewer.
- Organization settings and role-scoped AI usage visibility.

## Document limitations and factual boundaries
- Candidate resume tracking/editing is NOT described. Its availability/scope remains unknown; do not assume either shipped or planned.
- Interview-kit authoring exists per document but is NOT wired into live interviews.
- Integration provider registry exists but zero live providers are connected.
- Billing is read-only plan/usage information; no live payment processing described.
- Hiring manager/client review portal is explicitly not built.
- Open-web candidate sourcing, automatic JD-to-skill graphs, and automated timezone-aware interview scheduling are not established as shipped.
- Document claims database row-level security in its original platform and Supabase authentication. Do not copy this guarantee or stack to the current MongoDB starter.
- Do not invent customers, testimonials, metrics, certifications, team size, funding, or company facts.
- SOC 2/ISO certification status is unconfirmed; no certification badge/claim without verification.

## Design previews completed (2026-02 session)
- `/app/design_guidelines.json` is the two-concept blueprint. Approval is for producing samples, NOT approval of a final design.
- Dark Precision: graphite, warm amber, Bricolage Grotesque display type, interview-studio visual, evidence card on the left, bordered workflow cards.
- Light Editorial: warm paper, forest green, DM Serif Display headings, rounded folio composition, evidence ledger on the right, open ruled workflow layout.
- Both use Manrope body text and IBM Plex Mono metadata, original SVG interview imagery, shared corporate copy, no stock photos.
- Both contain navigation, hero, interactive Nova visual states, selectable competency evidence, workflow, closing demo CTA, footer, and a fixed concept-switch dock.
- Routes `/`, `/preview/dark`, `/preview/light` work with direct loading and navigation. Unknown routes redirect home.
- Mobile navigation, dialog keyboard access and focus return, reduced-motion handling, and descriptive test IDs are implemented.
- Book a demo opens an informational preview dialog. No calendar, contact endpoint, inquiry form or data transmission is connected.
- Design notes explain both directions and the possibility of combining elements after review.

## Verification completed
- Production frontend build compiled successfully.
- Full frontend QA: `/app/test_reports/iteration_1.json` — all functional flows passed; one cosmetic note overlapped the Speaking control.
- Fixed note placement using relative document flow and decorative-only edge overlap in App.css.
- Targeted QA: `/app/test_reports/iteration_2.json` — no issues. Both concepts verified at widths 1920, 1440, 768, 390, 320; no horizontal overflow, note/control collisions, or footnote collisions. Nova controls click normally.
- Routing, switcher, browser history, deep-link loads, all scorecard states, section links, mobile menu, booking and notes dialogs passed. No console/page errors.
- No test credentials needed. No backend tests applicable: backend intentionally unchanged for these frontend-only samples.

## Prioritized next steps
### P0 — Await user visual feedback
- User compares Chromatic Editorial with the original Dark Precision and Light Editorial via the three-way bottom switcher.
- Ask which typography, palette, layout, or product visuals they prefer, only when feedback arrives.
- If requested, make a hybrid of selected elements; do not arbitrarily select a final direction.

### P1 — After a direction is approved
- Refine the chosen direction into the complete corporate marketing website with Book a demo as primary action.
- Agree final page scope and copy. Continue excluding unverified social proof, certifications, integrations, and measured claims.
- Actual demo-booking connection is NOT part of the current sample task; gather destination/provider only when live booking is explicitly requested, and use integration playbook before connecting an external service.

### P2 — Deferred / conditional backlog
- Candidate-side pages and resume tools explicitly deferred because still under discussion. Do not suggest building them as a next action without a user priority change.
- No corporate dashboard/backend CRUD/AI interview implementation in current marketing-site scope.
- No live sourcing, ATS integrations, payments, or client portal authorized.
- Optional relevant design enhancement: guided answer-to-scorecard animation illustrating traceability. Not built or requested.
- No refactoring tasks necessary now; shared components avoid duplicating the content between concepts.

## Architecture
- Frontend: React, React Router, Tailwind + App.css, Lucide, Shadcn Button/Dialog.
- App.js contains shell, navigation, routing, comparison dock and dialogs.
- components/marketing/PreviewSections.jsx contains hero, evidence, workflow, and closing sections.
- components/marketing/ProductPreviews.jsx contains original SVG Nova visual and local state interactions, sample scorecards and evidence.
- public/index.html updated title, description and font loading. ui/dialog.jsx close control has test ID.
- Backend: untouched FastAPI `/app/backend/server.py`; only starter `/api/`, `/api/status` routes. MongoDB business schema not defined.
- No API calls, new backend integrations, or authentication introduced by this task.
- Current preview URL source remains frontend REACT_APP_BACKEND_URL; never hardcode an older session URL into API calls.
