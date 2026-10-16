import { ArrowUpRight, ChevronDown } from "lucide-react";

const BrandMark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 6l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 12l9 4 9-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.6" />
    <path d="M3 18l9 4 9-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.3" />
  </svg>
);

export const SharedHeader = ({ active = "platform", onDemo }) => (
  <header className="pv-header" data-testid="pv-header">
    <div className="pv-container pv-header-inner">
      <a href="#top" className="pv-brand" data-testid="pv-brand">
        <BrandMark />
        PIVVIX
      </a>
      <nav className="pv-nav" aria-label="Primary">
        <a href="/platform" className={active === "platform" ? "active" : ""} data-testid="pv-nav-platform">
          Platform <ChevronDown size={11} />
        </a>
        <a href="/solutions" className={active === "solutions" ? "active" : ""} data-testid="pv-nav-solutions">
          Solutions <ChevronDown size={11} />
        </a>
        <a href="/resources" className={active === "resources" ? "active" : ""} data-testid="pv-nav-resources">
          Resources
        </a>
        <a href="/pricing" className={active === "pricing" ? "active" : ""} data-testid="pv-nav-pricing">
          Pricing
        </a>
      </nav>
      <a href="#signin" className="pv-signin" data-testid="pv-signin">Sign in</a>
      <button type="button" className="pv-btn pv-btn--coral" data-testid="pv-header-demo" onClick={onDemo}>
        Book a demo <ArrowUpRight size={16} />
      </button>
    </div>
  </header>
);
