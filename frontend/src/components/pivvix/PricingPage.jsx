import { useEffect } from "react";
import {
  ArrowUpRight, Check, X, Zap, Rocket, Crown, Sparkles, Star,
} from "lucide-react";
import { SharedHeader } from "./SharedHeader";
import { SharedFooter, DemoDialog, useReveal, CTABand } from "./shared";
import { useDemo } from "./useDemo";
import "./pivvix.css";

/* ======================== Hero ======================== */
const PricingHero = () => (
  <section className="pv-section cream pv-pricing-hero" id="top" aria-labelledby="pv-pricing-heading">
    <div className="pv-container pv-pricing-hero-inner pv-reveal">
      <span className="pv-eyebrow">Pricing</span>
      <h1 className="pv-h1" id="pv-pricing-heading" data-testid="pv-pricing-hero">
        Pricing that scales<br />with <em>your hiring.</em>
      </h1>
      <p className="pv-lead" style={{ textAlign: "center" }}>
        Pick the tier that matches your hiring volume. Every plan includes the full Pivvix
        platform — AI interviews, evidence-backed scorecards, and your hiring workspace.
      </p>
    </div>
  </section>
);

/* ======================== Tiers ======================== */
const starterIncludes = [
  { t: "Up to 50 AI interviews / month", on: true },
  { t: "Role-specific interview templates", on: true },
  { t: "Evidence-backed scorecards", on: true },
  { t: "Hiring workspace for up to 5 users", on: true },
  { t: "Email support", on: true },
  { t: "Custom competencies", on: false },
  { t: "Dedicated success manager", on: false },
];
const growthIncludes = [
  { t: "Up to 500 AI interviews / month", on: true },
  { t: "Role-specific + custom competencies", on: true },
  { t: "Evidence-backed scorecards + comparisons", on: true },
  { t: "Hiring workspace for up to 25 users", on: true },
  { t: "Priority support (24h response)", on: true },
  { t: "Shared candidate summaries", on: true },
  { t: "Dedicated success manager", on: false },
];
const enterpriseIncludes = [
  { t: "Unlimited AI interviews", on: true },
  { t: "Fully custom competencies and tracks", on: true },
  { t: "Advanced scorecards + audit trail", on: true },
  { t: "Unlimited users across workspaces", on: true },
  { t: "Dedicated success manager + onboarding", on: true },
  { t: "SSO, SAML, and role-based access", on: true },
  { t: "Custom integrations and SLAs", on: true },
];

const Tier = ({ Icon, name, desc, meta, cta, ctaType, items, featured, badge, onDemo }) => (
  <article className={`pv-tier ${featured ? "featured" : ""}`} data-testid={`pv-tier-${name.toLowerCase()}`}>
    {badge && <span className="pv-tier-badge"><Star />{badge}</span>}
    <span className="pv-tier-icon"><Icon size={20} /></span>
    <h3>{name}</h3>
    <p>{desc}</p>
    <div className="pv-tier-price">
      <strong>{meta}</strong>
      <em>{featured ? "Most popular — flexible for growing teams" : "Pricing on request"}</em>
    </div>
    <span className="pv-tier-meta">What's included</span>
    <ul>
      {items.map((it) => (
        <li key={it.t} className={!it.on ? "off" : ""}>
          {it.on ? <Check /> : <X />} {it.t}
        </li>
      ))}
    </ul>
    <button
      className={`pv-btn ${ctaType === "coral" ? "pv-btn--coral" : "pv-btn--outline"}`}
      onClick={onDemo}
      data-testid={`pv-tier-cta-${name.toLowerCase()}`}
    >
      {cta} <ArrowUpRight size={16} />
    </button>
  </article>
);

const Tiers = ({ onDemo }) => (
  <section className="pv-section cream" style={{ paddingTop: 20 }} aria-labelledby="pv-tiers-heading">
    <div className="pv-container">
      <h2 id="pv-tiers-heading" style={{ position: "absolute", left: "-9999px" }}>Pricing tiers</h2>
      <div className="pv-tiers pv-reveal">
        <Tier
          Icon={Zap} name="Starter" desc="For small teams piloting AI interviews on a handful of roles."
          meta="Contact us" cta="Book a demo" ctaType="outline" items={starterIncludes} onDemo={onDemo}
        />
        <Tier
          Icon={Rocket} name="Growth" desc="For growing teams hiring across multiple roles with consistency."
          meta="Contact us" cta="Book a demo" ctaType="coral" items={growthIncludes} onDemo={onDemo}
          featured badge="Most popular"
        />
        <Tier
          Icon={Crown} name="Enterprise" desc="For teams hiring at scale with dedicated success, SSO, and SLAs."
          meta="Talk to sales" cta="Talk to sales" ctaType="outline" items={enterpriseIncludes} onDemo={onDemo}
        />
      </div>
      <p className="pv-pricing-note">
        <strong>A note on pricing.</strong> Every Pivvix engagement is tailored to your hiring volume, workflows,
        and team size. Book a demo and we'll walk you through what makes sense for your team.
      </p>
    </div>
  </section>
);

/* ======================== Comparison matrix ======================== */
const matrix = [
  { f: "AI-powered interviews", s: "✓", g: "✓", e: "✓" },
  { f: "Role-specific templates", s: "✓", g: "✓", e: "✓" },
  { f: "Evidence-backed scorecards", s: "✓", g: "✓", e: "✓" },
  { f: "Candidate comparison matrix", s: "—", g: "✓", e: "✓" },
  { f: "Custom competencies", s: "—", g: "✓", e: "✓" },
  { f: "Shared candidate summaries", s: "—", g: "✓", e: "✓" },
  { f: "SSO, SAML, role-based access", s: "—", g: "—", e: "✓" },
  { f: "Dedicated success manager", s: "—", g: "—", e: "✓" },
  { f: "Custom integrations & SLAs", s: "—", g: "—", e: "✓" },
];

const Matrix = () => (
  <section className="pv-section cream-2" aria-labelledby="pv-matrix-heading">
    <div className="pv-container">
      <div className="pv-benefits-head pv-reveal" style={{ margin: "0 0 36px" }}>
        <span className="pv-eyebrow">Compare plans</span>
        <h2 className="pv-h2" id="pv-matrix-heading">Everything you can do,<br /><em>side by side.</em></h2>
      </div>
      <div className="pv-compare-table pv-reveal">
        <div className="pv-cmp-row head"><div>Feature</div><div>Starter</div><div>Growth</div><div>Enterprise</div></div>
        {matrix.map((r) => (
          <div className="pv-cmp-row" key={r.f}>
            <div>{r.f}</div>
            <div className={r.s === "✓" ? "yes" : "no"}>{r.s === "✓" ? <Check size={16} style={{ display: "inline" }} /> : "—"}</div>
            <div className={r.g === "✓" ? "yes" : "no"}>{r.g === "✓" ? <Check size={16} style={{ display: "inline" }} /> : "—"}</div>
            <div className={r.e === "✓" ? "yes" : "no"}>{r.e === "✓" ? <Check size={16} style={{ display: "inline" }} /> : "—"}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== FAQ ======================== */
const faqs = [
  { q: "How is pricing calculated?", a: "Pricing scales with hiring volume (number of interviews per month) and team size. Book a demo and we'll suggest the tier that fits your roadmap — no surprises, no per-seat gotchas." },
  { q: "Can we try Pivvix before committing?", a: "Yes. Every engagement starts with a demo and a pilot on one or two real roles. You see the AI interview, the scorecard, and the evidence before you commit." },
  { q: "Do you offer month-to-month plans?", a: "Growth and Starter can run month-to-month or annually. Enterprise typically runs on an annual contract with a dedicated success manager." },
  { q: "Who owns the interview data?", a: "You do. Transcripts, scorecards, and evidence belong to your team. We never train models on your candidate data." },
  { q: "What happens if we go over the included interview quota?", a: "You'll get a heads-up before you hit the limit, and we'll move you to a plan that fits — no interview is lost or capped mid-month." },
];

const FAQ = () => (
  <section className="pv-section cream" aria-labelledby="pv-faq-heading">
    <div className="pv-container">
      <div className="pv-benefits-head pv-reveal" style={{ margin: "0 0 40px" }}>
        <span className="pv-eyebrow">Pricing FAQ</span>
        <h2 className="pv-h2" id="pv-faq-heading">Common questions.</h2>
      </div>
      <div className="pv-faq pv-reveal">
        {faqs.map((f, i) => (
          <details className="pv-faq-item" key={f.q} data-testid={`pv-faq-${i}`}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== Page ======================== */
export default function PricingPage() {
  useReveal();
  const { openDemo, demoOpen, closeDemo } = useDemo();
  useEffect(() => { document.title = "Pivvix — Pricing"; }, []);
  return (
    <div className="pv-root" data-testid="pv-pricing">
      <SharedHeader active="pricing" onDemo={openDemo} />
      <main>
        <PricingHero />
        <Tiers onDemo={openDemo} />
        <Matrix />
        <FAQ />
        <CTABand
          eyebrow="Ready to pick a plan?"
          heading="Start the"
          headingEm="right conversation."
          lead="Book a demo and we'll walk you through the plan that fits your team."
          onDemo={openDemo}
        />
      </main>
      <SharedFooter onDemo={openDemo} />
      <DemoDialog open={demoOpen} onClose={closeDemo} />
    </div>
  );
}
