import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Check, Layers2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Hero, EvidenceSection, Workflow, ClosingSection } from "@/components/marketing/PreviewSections";
import "@/App.css";

export const Brand = () => (
  <span className="brand"><svg viewBox="0 0 30 32" fill="none" aria-hidden="true"><path d="M2 8 14 1v9L2 17V8Zm14-7 12 7v9l-12-7V1ZM2 20l12-7v9L2 29v-9Zm14-7 12 7v9l-12-7v-9Z" fill="currentColor" /></svg>pivvix<span className="brand-dot">.</span></span>
);

const Navigation = ({ openDemo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header container">
      <a href="#top" aria-label="Pivvix home" data-testid="header-home-link"><Brand /></a>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation" id="main-navigation">
        {[["nova", "The interview"], ["intelligence", "The intelligence"], ["workflow", "The workflow"]].map(([id, label]) => <a key={id} href={`#${id}`} data-testid={`nav-${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <Button className="header-demo" data-testid="header-book-demo" onClick={openDemo}>Book a demo <ArrowUpRight size={16} /></Button>
      <Button variant="ghost" className="mobile-menu" data-testid="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </header>
  );
};

const ConceptSwitcher = ({ concept, openNotes }) => (
  <aside className="concept-dock" aria-label="Compare design concepts" data-testid="concept-switcher">
    <div className="dock-label"><Layers2 size={16} /><span>DESIGN<br />EXPLORATIONS</span></div>
    <div className="concept-options">
      <Link to="/preview/dark" className={`concept-option ${concept === "dark" ? "selected" : ""}`} aria-current={concept === "dark" ? "page" : undefined} data-testid="switch-dark"><span className="concept-swatch dark-swatch" /><span><small>CONCEPT 01</small>Dark Precision</span>{concept === "dark" && <Check size={14} />}</Link>
      <Link to="/preview/light" className={`concept-option ${concept === "light" ? "selected" : ""}`} aria-current={concept === "light" ? "page" : undefined} data-testid="switch-light"><span className="concept-swatch light-swatch" /><span><small>CONCEPT 02</small>Light Editorial</span>{concept === "light" && <Check size={14} />}</Link>
    </div>
    <Button variant="ghost" className="dock-notes" data-testid="dock-design-notes" onClick={openNotes}>Design notes <ArrowUpRight size={14} /></Button>
  </aside>
);

const PreviewDialog = ({ modal, setModal, concept, triggerRef }) => (
  <Dialog open={Boolean(modal)} onOpenChange={(open) => !open && setModal(null)}>
    <DialogContent className={`preview-dialog theme-${concept}`} data-testid={`${modal || "preview"}-dialog`} onCloseAutoFocus={(event) => { event.preventDefault(); triggerRef.current?.focus(); }}>
      <span className="eyebrow">PIVVIX / {modal === "demo" ? "LET’S TALK HIRING" : "DESIGN STUDY"}</span>
      <DialogTitle className="dialog-title">{modal === "demo" ? "A closer look at better interviews." : "Two directions. One clearer story."}</DialogTitle>
      <DialogDescription className="dialog-description">{modal === "demo" ? "A product walkthrough for your team, from a conversation with Nova to the evidence behind a scorecard." : "Both samples tell the same product story. Compare the atmosphere, typography, layout, and product presentation—not different feature sets."}</DialogDescription>
      {modal === "demo" ? <><div className="calendar-placeholder"><CalendarDays size={30} /><strong>A space for your booking calendar</strong><span>The final website can connect to your chosen booking flow.</span></div><p className="preview-notice" data-testid="booking-preview-notice"><strong>Design preview only.</strong> No calendar is connected and no booking request is sent.</p></> : <><div className="direction-notes"><div><span className="note-number">01</span><h3>Dark Precision</h3><p>Graphite, warm amber, bold typography. An interview studio with a technical, focused character.</p></div><div><span className="note-number">02</span><h3>Light Editorial</h3><p>Warm paper, forest green, expressive serif type. An open, considered approach with a human feel.</p></div></div><p className="preview-notice" data-testid="design-notes-disclaimer">Like parts of both? We can combine the typography, colours, layout, or product visuals after you’ve compared them. All interview and scorecard data here is illustrative.</p></>}
      <Button className="primary-button" data-testid="dialog-return-to-preview" onClick={() => setModal(null)}>Back to the preview <ArrowUpRight size={16} /></Button>
    </DialogContent>
  </Dialog>
);

function ConceptPage({ concept }) {
  const [modal, setModal] = useState(null);
  const triggerRef = useRef(null);
  const openModal = (type) => { triggerRef.current = document.activeElement; setModal(type); };
  const location = useLocation();
  useEffect(() => {
    document.title = `Pivvix — ${concept === "dark" ? "Dark Precision" : "Light Editorial"} Preview`;
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [concept, location.pathname, location.hash]);
  return (
    <div className={`preview-page theme-${concept}`} id="top" data-testid={`preview-${concept}`}>
      <a className="skip-link" href="#main" data-testid="skip-to-content">Skip to content</a>
      <div className="study-strip"><div className="container"><span data-testid="concept-name">DESIGN EXPLORATION <b>{concept === "dark" ? "01 / DARK PRECISION" : "02 / LIGHT EDITORIAL"}</b></span><button data-testid="study-design-notes" onClick={() => openModal("notes")}>A sample, not the final website <ArrowUpRight size={12} /></button></div></div>
      <Navigation openDemo={() => openModal("demo")} />
      <main id="main"><Hero concept={concept} openDemo={() => openModal("demo")} /><EvidenceSection /><Workflow /><ClosingSection openDemo={() => openModal("demo")} /></main>
      <footer className="site-footer container"><a href="#top" data-testid="footer-home-link" aria-label="Pivvix back to top"><Brand /></a><span>AI interviews. Human decisions.</span><small data-testid="footer-preview-notice">Interactive design concept · Illustrative product demonstration</small></footer>
      <ConceptSwitcher concept={concept} openNotes={() => openModal("notes")} />
      <PreviewDialog modal={modal} setModal={setModal} concept={concept} triggerRef={triggerRef} />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<ConceptPage key="dark-home" concept="dark" />} /><Route path="/preview/dark" element={<ConceptPage key="dark" concept="dark" />} /><Route path="/preview/light" element={<ConceptPage key="light" concept="light" />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></BrowserRouter>;
}
