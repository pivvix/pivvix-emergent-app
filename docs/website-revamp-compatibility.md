# Website revamp — compatibility map

Maps `pivvix-emergent-app` (the new frontend, replacing `packages/website` as the
deployed `pivvix.com` marketing site) against existing Pivvix functionality in the
`pivvix` monorepo (`packages/web`, the real product at `app.pivvix.com`).

**Scope finding (confirmed by investigation, see below):** `pivvix-emergent-app`
contains no authenticated/app functionality at all — no signup, login, account,
dashboard, or product-workflow pages anywhere in its codebase. It is a pure public
marketing site. The scope of this revamp is therefore **swap the deployed marketing
frontend only** — `app.pivvix.com` (`packages/web`) is untouched and stays a fully
separate deployment, exactly as it is separate from `packages/website` today.

## Compatibility table

| Feature / workflow | Existing frontend route/component | Existing backend endpoint/service | Auth/authz | Request/response contract | Data dependencies | Emergent page/component | Integration approach | Tests required | Status | Known risks |
|---|---|---|---|---|---|---|---|---|---|---|
| Public marketing pages (home/platform/solutions/resources/pricing) | `packages/website/src/app/(marketing)/*` | None (static content) | None (public) | N/A | None | `frontend/src/components/pivvix/{PlatformPage,SolutionsPage,ResourcesPage,PricingPage}.jsx` | Deploy `pivvix-emergent-app` to the `pivvix.com` Vercel project in place of `packages/website`. No backend wiring needed — all content is hardcoded illustrative/marketing copy in both old and new frontends. | Manual QA pass (already done — see prior session's QA report) | **Reuse (replace)** | None beyond normal deploy-swap risk |
| Demo / contact request ("Book a demo") | `packages/website/src/app/api/demo/route.ts` | Same file — validates, rate-limits, sends via Resend to `DEMO_INBOX` | None (public, unauthenticated by design) | `POST {name,email,company,teamSize,message}` → `{ok:boolean,error?}` | None (fire-and-forget email, no DB write) | `frontend/src/components/pivvix/shared.jsx` `DemoDialog` | **New endpoint added**: `packages/web/src/app/api/public/demo-request/route.ts` — same validation/rate-limit/Resend logic, reused rather than duplicated, with CORS added (the one cross-origin-by-design endpoint in `packages/web`). Frontend's `BACKEND`/fetch URL updated to point at it. Bundled FastAPI/Mongo backend (`backend/` in this repo) removed — it had an unauthenticated PII-read endpoint, no production use, and nothing else depended on it. | Manual: submit the form against a deployed preview, confirm email arrives; confirm empty-submit validation still blocks (already verified pre-change) | **Adapt** (reused existing logic, new deployment location) | CORS is wildcard-origin — acceptable here since the endpoint takes no credentials/cookies and returns no sensitive data, but should NOT be used as a precedent for any endpoint that does |
| Sign in / Sign up / account | `packages/web/src/app/(auth)/{signin,signup}/page.tsx`, Supabase Auth, `provision_membership` | Supabase Auth + `membershipActions.ts` | Supabase session (cookies, same-origin) | N/A | `tenants`, `users` (membership) tables | **None exists** | Not applicable — no login/signup UI anywhere in `pivvix-emergent-app`. A `href="#signin"` link existed in the old header and was already removed as a dead link in a prior session. | N/A | **Not applicable** | If a real "Sign in" entry point is wanted later, it should link to `app.pivvix.com/signin` directly (same pattern `packages/website`'s `next.config.ts` redirects already use for `/signin`, `/signup`), not attempt to build auth UI into this frontend — Server Actions and cookie-based sessions are same-origin only (see Phase 1 architecture report) |
| Jobs, candidates, interviews, scorecards, billing, integrations, admin | `packages/web/src/app/actions/*.ts` (31 Server Action files) | Server Actions + Supabase, RLS-scoped by `tenant_id` | Supabase session, membership-based | Next.js internal RPC, not REST | Full product schema (`supabase/migrations/`) | **None exists** | Not applicable — none of this functionality has any equivalent page in `pivvix-emergent-app` | N/A | **Not applicable** | None — out of scope, untouched |
| LiveKit interview token | `packages/web/src/app/api/interview/token/route.ts` | Same | Session-derived, server-side | `POST` → LiveKit token | `interview_sessions` | **None exists** | Not applicable | N/A | **Not applicable** | None — out of scope, untouched |

## Summary

- **1 real integration**: the demo-request form, now pointed at a new, reused-logic
  endpoint on the real backend instead of the discarded bundled FastAPI/Mongo app.
- **Everything else in `pivvix-emergent-app`** is static marketing content with no
  backend dependency, and **everything else in `packages/web`** (auth, product
  workflows) has no corresponding page in the new frontend and is untouched.
- No duplicate backend, no duplicate auth system, no new database introduced.
