import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Check, ArrowUpRight, Twitter, Linkedin, Github, Youtube } from "lucide-react";

/* ---------- Reveal-on-scroll hook ---------- */
export const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    const nodes = document.querySelectorAll(".pv-reveal");
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ---------- Abstract animated Nova entity ---------- */
export const NovaAbstract = () => (
  <div className="pv-nova-abstract" aria-hidden="true" data-testid="nova-abstract">
    <svg viewBox="0 0 300 300">
      <defs>
        <radialGradient id="pv-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B5B" stopOpacity="1" />
          <stop offset="50%" stopColor="#FF8A7C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6B5B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pv-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A9CBB9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#A9CBB9" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft outer halo */}
      <circle cx="150" cy="150" r="140" fill="url(#pv-halo)" />
      {/* Outer slow rotating ring */}
      <g className="ring-slow">
        <circle cx="150" cy="150" r="118" fill="none" stroke="#A9CBB9" strokeWidth="0.7" strokeDasharray="2 10" opacity="0.45" />
        <circle cx="150" cy="32" r="2" fill="#A9CBB9" />
        <circle cx="268" cy="150" r="1.5" fill="#F3F0E8" opacity="0.6" />
      </g>
      {/* Middle counter-rotating ring */}
      <g className="ring-mid">
        <circle cx="150" cy="150" r="92" fill="none" stroke="#F3F0E8" strokeWidth="0.6" strokeDasharray="1 7" opacity="0.42" />
        <ellipse cx="150" cy="150" rx="92" ry="92" fill="none" stroke="#7FA89C" strokeWidth="0.5" opacity="0.35" />
      </g>
      {/* Fast inner ring with Moss dashes */}
      <g className="ring-fast">
        <circle cx="150" cy="150" r="66" fill="none" stroke="#7FA89C" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.6" />
      </g>
      {/* Orbit dots */}
      <g className="orbit-a">
        <circle cx="150" cy="40" r="3" fill="#A9CBB9" />
      </g>
      <g className="orbit-b">
        <circle cx="150" cy="260" r="2.5" fill="#FF6B5B" opacity="0.85" />
        <circle cx="40" cy="150" r="1.8" fill="#F3F0E8" opacity="0.7" />
      </g>
      {/* Pulse rings around core */}
      <circle className="core-ring" cx="150" cy="150" r="24" fill="none" stroke="#FF6B5B" strokeWidth="1" opacity="0" />
      <circle className="core-ring b" cx="150" cy="150" r="24" fill="none" stroke="#A9CBB9" strokeWidth="1" opacity="0" />
      <circle className="core-ring c" cx="150" cy="150" r="24" fill="none" stroke="#FF6B5B" strokeWidth="1" opacity="0" />
      {/* Core glow */}
      <circle cx="150" cy="150" r="40" fill="url(#pv-core)" opacity="0.9" />
      {/* Breathing core */}
      <g className="core">
        <circle cx="150" cy="150" r="16" fill="#FF8A7C" />
        <circle cx="150" cy="150" r="9" fill="#F3F0E8" opacity="0.95" />
      </g>
    </svg>
  </div>
);

/* ---------- Shared Footer ---------- */
export const SharedFooter = ({ onDemo }) => (
  <footer className="pv-footer" data-testid="pv-footer">
    <div className="pv-container">
      <div className="pv-footer-grid">
        <div className="pv-footer-brand">
          <Link to="/platform" className="pv-brand">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M3 12l9 4 9-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.6" />
              <path d="M3 18l9 4 9-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.3" />
            </svg>
            PIVVIX
          </Link>
          <p>AI interviews. Human decisions. An end-to-end hiring platform built for real teams.</p>
          <button type="button" className="pv-btn pv-btn--coral" onClick={onDemo} data-testid="pv-footer-demo">
            Book a demo <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="pv-footer-col">
          <h5>Platform</h5>
          <ul>
            <li><Link to="/platform">Overview</Link></li>
            <li><Link to="/platform#lifecycle">Hiring lifecycle</Link></li>
            <li><Link to="/platform#ai">AI interview</Link></li>
            <li><Link to="/platform#compare">Comparison</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div className="pv-footer-col">
          <h5>Solutions</h5>
          <ul>
            <li><Link to="/solutions#talent">Talent teams</Link></li>
            <li><Link to="/solutions#managers">Hiring managers</Link></li>
            <li><Link to="/solutions#technical">Technical teams</Link></li>
            <li><Link to="/solutions#agencies">Staffing &amp; agencies</Link></li>
          </ul>
        </div>
        <div className="pv-footer-col">
          <h5>Resources</h5>
          <ul>
            <li><Link to="/resources">All articles</Link></li>
            <li><Link to="/resources#guides">Hiring guides</Link></li>
            <li><Link to="/resources#ai">AI interviews</Link></li>
            <li><Link to="/resources#evaluation">Assessment</Link></li>
          </ul>
        </div>
      </div>
      <div className="pv-footer-bottom">
        <small>© {new Date().getFullYear()} Pivvix. AI interviews. Human decisions.</small>
        <div className="pv-footer-socials">
          <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
          <a href="#" aria-label="GitHub"><Github /></a>
          <a href="#" aria-label="YouTube"><Youtube /></a>
        </div>
      </div>
    </div>
  </footer>
);

/* ---------- Demo Dialog ---------- */
const BACKEND = process.env.REACT_APP_BACKEND_URL;

export const DemoDialog = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", team_size: "11-50", message: "" });
  const [state, setState] = useState({ submitting: false, success: false, error: null });

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setState({ submitting: true, success: false, error: null });
    try {
      const res = await fetch(`${BACKEND}/api/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submit failed");
      setState({ submitting: false, success: true, error: null });
    } catch (err) {
      setState({ submitting: false, success: false, error: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="pv-dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="pv-dialog-title" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pv-dialog" data-testid="pv-dialog">
        <button type="button" className="pv-dialog-close" onClick={onClose} aria-label="Close" data-testid="pv-dialog-close"><X size={16} /></button>
        {state.success ? (
          <>
            <h3 id="pv-dialog-title">Thanks — we'll be in touch.</h3>
            <p>A member of the Pivvix team will reach out within one business day to schedule your demo.</p>
            <div className="pv-form-success"><Check size={16} /> Demo request submitted successfully.</div>
          </>
        ) : (
          <>
            <h3 id="pv-dialog-title">Book a demo.</h3>
            <p>See how Pivvix helps your team run structured interviews and make clearer hiring decisions.</p>
            <form className="pv-form" onSubmit={submit}>
              <div className="pv-form-row">
                <label>Full name<input required value={form.name} onChange={update("name")} data-testid="pv-form-name" placeholder="Jane Doe" /></label>
                <label>Work email<input required type="email" value={form.email} onChange={update("email")} data-testid="pv-form-email" placeholder="jane@company.com" /></label>
              </div>
              <div className="pv-form-row">
                <label>Company<input required value={form.company} onChange={update("company")} data-testid="pv-form-company" placeholder="Acme Inc." /></label>
                <label>Team size
                  <select value={form.team_size} onChange={update("team_size")} data-testid="pv-form-size">
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                </label>
              </div>
              <label>Tell us about your hiring needs
                <textarea value={form.message} onChange={update("message")} data-testid="pv-form-message" placeholder="Roles you hire for, volume, current challenges…" />
              </label>
              {state.error && <div className="pv-form-error">{state.error}</div>}
              <button type="submit" className="pv-btn pv-btn--coral" disabled={state.submitting} data-testid="pv-form-submit">
                {state.submitting ? "Sending…" : "Request demo"} <ArrowUpRight size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

/* ---------- Reusable CTA band ---------- */
export const CTABand = ({ eyebrow = "Ready to build extraordinary teams?", heading, headingEm, lead, onDemo }) => (
  <section className="pv-cta" aria-labelledby="pv-cta-heading">
    <div className="pv-container pv-cta-inner pv-reveal">
      <span className="pv-eyebrow on-dark">{eyebrow}</span>
      <h2 className="pv-h2 on-dark" id="pv-cta-heading">
        {heading}{headingEm && <> <em>{headingEm}</em></>}
      </h2>
      {lead && <p className="pv-lead on-dark">{lead}</p>}
      <div className="pv-cta-actions">
        <button className="pv-btn pv-btn--coral" onClick={onDemo} data-testid="pv-cta-demo">
          Book a demo <ArrowUpRight size={16} />
        </button>
        <Link to="/platform" className="pv-btn pv-btn--outline on-dark" data-testid="pv-cta-platform">
          Explore the platform
        </Link>
      </div>
    </div>
  </section>
);

/* ---------- Case study / testimonial strip ---------- */
export const CaseStudy = ({ children, author, role, company, initials, avatarClass = "a1", logo, testId = "pv-case" }) => (
  <section className="pv-case-section cream" aria-label="Customer testimonial">
    <div className="pv-container">
      <figure className="pv-case pv-reveal" data-testid={testId}>
        <span className="pv-case-tag">Illustrative</span>
        <span className="pv-case-mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="pv-case-body"><p>{children}</p></blockquote>
        <figcaption className="pv-case-foot">
          <span className={`pv-avatar ${avatarClass}`}>{initials}</span>
          <div className="pv-case-who">
            <strong>{author}</strong>
            <span>{role} · {company}</span>
          </div>
          {logo && (
            <span className="pv-case-logo">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12l4 4 12-12" stroke="currentColor" strokeWidth="2" /></svg>
              {logo}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  </section>
);

/* ---------- Trust strip — monochrome scrolling logos ---------- */
const LOGOS = [
  { n: "InnovateTech", m: (<svg viewBox="0 0 24 24" fill="none"><path d="M3 20L12 4l9 16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M8.5 14h7" stroke="currentColor" strokeWidth="1.6" /></svg>) },
  { n: "GlobalWorks", m: (<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.2" /></svg>) },
  { n: "SparkLabs", m: (<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" /><path d="M13 7l-4 7h3l-1 4 4-7h-3l1-4z" fill="currentColor" /></svg>) },
  { n: "Nimbus", m: (<svg viewBox="0 0 24 24" fill="none"><path d="M7 17a4 4 0 010-8 5 5 0 019.6-1 4 4 0 01.4 8 M7 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>) },
  { n: "Core Systems", m: (<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" /></svg>) },
  { n: "Northwind", m: (<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v6M12 21v-6M3 12h6M21 12h-6M6 6l4 4M18 18l-4-4M6 18l4-4M18 6l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>) },
  { n: "Lumen", m: (<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>) },
  { n: "Vertex", m: (<svg viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4M3 7l9 5 9-5M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>) },
  { n: "Harbor", m: (<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></svg>) },
  { n: "Prism", m: (<svg viewBox="0 0 24 24" fill="none"><path d="M4 20L12 4l8 16H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 4v16M8 12h8" stroke="currentColor" strokeWidth="1.2" /></svg>) },
];

export const TrustStrip = () => (
  <section className="pv-trust" aria-label="Trusted by">
    <div className="pv-container">
      <div className="pv-trust-head">Trusted by teams building what's next</div>
    </div>
    <div className="pv-trust-marquee" aria-hidden="true">
      <div className="pv-trust-track" data-testid="pv-trust-track">
        {[...LOGOS, ...LOGOS].map((l, i) => (
          <span key={`${l.n}-${i}`} className="pv-trust-logo">{l.m}{l.n}</span>
        ))}
      </div>
    </div>
  </section>
);
