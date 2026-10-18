import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const BrandMark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 6l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 12l9 4 9-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.6" />
    <path d="M3 18l9 4 9-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.3" />
  </svg>
);

/* Prefetch lazy-loaded route chunks on hover so the first click feels instant */
const prefetch = {
  platform: () => import("./PlatformPage"),
  solutions: () => import("./SolutionsPage"),
  resources: () => import("./ResourcesPage"),
  pricing: () => import("./PricingPage"),
};

export const SharedHeader = ({ active = "platform", onDemo }) => (
  <header className="pv-header" data-testid="pv-header">
    <div className="pv-container pv-header-inner">
      <Link to="/platform" className="pv-brand" data-testid="pv-brand">
        <BrandMark />
        PIVVIX
      </Link>
      <nav className="pv-nav" aria-label="Primary">
        <Link to="/platform" className={active === "platform" ? "active" : ""} data-testid="pv-nav-platform" onMouseEnter={prefetch.platform}>
          Platform <ChevronDown size={11} />
        </Link>
        <Link to="/solutions" className={active === "solutions" ? "active" : ""} data-testid="pv-nav-solutions" onMouseEnter={prefetch.solutions}>
          Solutions <ChevronDown size={11} />
        </Link>
        <Link to="/resources" className={active === "resources" ? "active" : ""} data-testid="pv-nav-resources" onMouseEnter={prefetch.resources}>
          Resources
        </Link>
        <Link to="/pricing" className={active === "pricing" ? "active" : ""} data-testid="pv-nav-pricing" onMouseEnter={prefetch.pricing}>
          Pricing
        </Link>
      </nav>
      <a href="#signin" className="pv-signin" data-testid="pv-signin">Sign in</a>
      <button type="button" className="pv-btn pv-btn--coral" data-testid="pv-header-demo" onClick={onDemo}>
        Book a demo <ArrowUpRight size={16} />
      </button>
    </div>
  </header>
);
