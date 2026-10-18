import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
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

const NAV_ITEMS = [
  { id: "platform", to: "/platform", label: "Platform", caret: true },
  { id: "solutions", to: "/solutions", label: "Solutions", caret: true },
  { id: "resources", to: "/resources", label: "Resources" },
  { id: "pricing", to: "/pricing", label: "Pricing" },
];

export const SharedHeader = ({ active = "platform", onDemo }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a, button")?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll("a[href], button:not([disabled])");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <header className="pv-header" data-testid="pv-header">
      <div className="pv-container pv-header-inner">
        <Link to="/platform" className="pv-brand" data-testid="pv-brand">
          <BrandMark />
          PIVVIX
        </Link>
        <nav className="pv-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={active === item.id ? "active" : ""}
              data-testid={`pv-nav-${item.id}`}
              onMouseEnter={prefetch[item.id]}
            >
              {item.label} {item.caret && <ChevronDown size={11} />}
            </Link>
          ))}
        </nav>
        <button type="button" className="pv-btn pv-btn--coral pv-header-cta" data-testid="pv-header-demo" onClick={onDemo}>
          Book a demo <ArrowUpRight size={16} />
        </button>
        <button
          type="button"
          ref={toggleRef}
          className="pv-menu-toggle"
          data-testid="pv-menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="pv-mobile-nav"
          onClick={() => (open ? close() : setOpen(true))}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="pv-mobile-nav"
        ref={panelRef}
        className={open ? "pv-mobile-nav is-open" : "pv-mobile-nav"}
        data-testid="pv-mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
          {...(open ? {} : { inert: true })}
      >
        <nav className="pv-mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={active === item.id ? "active" : ""}
              data-testid={`pv-mobile-nav-${item.id}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="pv-btn pv-btn--coral pv-mobile-nav-cta"
          data-testid="pv-mobile-nav-demo"
          onClick={() => {
            close();
            onDemo?.();
          }}
        >
          Book a demo <ArrowUpRight size={16} />
        </button>
      </div>
    </header>
  );
};
