# Pivvix — Product and Website Brief

## Status
Two corporate-only marketing homepage design samples are implemented and awaiting testing and user comparison. These are illustrative frontend previews, not a functional hiring application. The backend remains the untouched FastAPI/MongoDB starter.

## Confirmed decisions and current task
- Initial deliverable: polished marketing website for the existing product.
- Corporate audience ONLY. User: "leave candidate side for now, we will add it later if needed. as it is still in discussion phase".
- Primary CTA: Book a demo.
- Visual direction unresolved. User approved two sample previews: "create 2 sample previews and if needed we can make mix of that".
- Current task: build and test Dark Precision and Light Editorial browsable homepage samples, with possible hybrid AFTER feedback. No live booking/AI/auth/integrations requested.
- Routes: `/` and `/preview/dark` (dark); `/preview/light` (light). Fixed bottom comparison switcher.
- Shared corporate copy, Nova state sample, evidence scorecard inspector, workflow, closing CTA. Responsive mobile menu. Informational booking/design-notes dialogs; no data collected or submitted.
- Main files: frontend/src/App.js, App.css, components/marketing/PreviewSections.jsx, components/marketing/ProductPreviews.jsx.
- Sample interview/scorecard interactions are MOCKED, explicitly labeled illustrative. Book a demo is a read-only preview dialog, not a real scheduling integration.
- Testing pending; no credentials are needed.

## Original user intent
Build a website for an AI hiring startup serving corporate hiring teams and candidates (the original concept mentions candidate resume tracking and editing). Act as a website designer, ask targeted questions, and agree a high-level design direction before coding.

User's explicit instruction: "ask me questions as a web designer so that it will be easier for you to build I will also provide you our tools features and information from which you can take reference. The document also explains how the website should be and all, just ignore those things and just take reference for tool features".

Latest user message: "I have attached the file".

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

## Design consultation
- Design agent produced `/app/design_guidelines.json`, PROPOSED/UNAPPROVED.
- Recommended visual concept: dark graphite, warm white, restrained amber accent; bold editorial sans typography; asymmetric layouts; product-led interview and scorecard visuals.
- Alternative: warm off-white, charcoal, muted green, lighter editorial styling.
- No explicit visual preferences have been supplied by the user. Neither direction is approved.
- Review caveat: the generated design JSON contains overreaching draft content (a Production-Verified badge, inferred roadmap items, live sandbox CTA, unsupported branding, and an outcomes strip echoing document advice). These MUST NOT be implemented. The JSON includes a review_status field recording these issues. Use only the visual concepts pending user approval, and regenerate a clean final design brief before coding.
- Independent navigation proposal for discussion: Product, For Hiring Teams, For Candidates, About. Exact scope and CTA are not chosen.

## Next decisions / P0
1. Confirm initial scope: marketing website vs website plus illustrative product previews vs functioning corporate/candidate application.
2. Confirm audience weighting and treatment of candidate resume tools missing from the attachment.
3. Approve visual direction or provide brand constraints.
4. Choose primary conversion action (e.g., book demo, request access, explore a product preview).
5. Use Pivvix as the document-supplied name unless user corrects it; no existing logo supplied.

## Testable implementation plan AFTER approval
1. Finalize content inventory and clean design brief. Verify every public product claim against the extracted capability boundaries and confirmed user input.
2. Implement approved site structure and responsive navigation. Verify each route/section and mobile navigation.
3. Implement approved product illustrations and conversion flow, explicitly labeling any simulated preview. Verify controls, CTA destination, validation, and submission result as applicable.
4. Only if a working application is explicitly selected: agree an MVP subset, data model, and integrations first; implement one end-to-end hiring/candidate flow before expanding. Verify persistence, authorization, and data boundaries.
5. Run one visual smoke check and focused testing agent after implementation; fix reported defects and update memory.

## Conditional backlog — not build authorization
- Corporate dashboard and candidate dashboard; resumes, jobs, and candidate persistence/routes if functional product scope is approved.
- AI resume processing/evaluation if approved; use integration playbook first.
- Real-time voice/video Nova is a substantial separate integration, not equivalent to a text LLM demo; scope/provider approval required.
- File uploads require persistent object storage and integration playbook; never store uploads as Base64 in MongoDB.
- Authentication requires integration playbook before any auth implementation. Do not ask auth-provider choices unless user requests auth.
- Do not add payments, external integrations, certifications, or a client portal just because mentioned in the source document.
- No refactoring needed at this stage.

## Architecture and testing
- Frontend: React starter `/app/frontend/src/App.js`, Tailwind and existing UI components.
- Backend: FastAPI `/app/backend/server.py`; only starter `/api/`, `/api/status` routes.
- Database: MongoDB; business schema not defined.
- No integrations implemented; no test credentials; no test reports yet.
- Use current frontend REACT_APP_BACKEND_URL for preview; never rely on an older session URL.
