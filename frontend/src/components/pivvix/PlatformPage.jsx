import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight, Play, Check, Search, Send, Filter, CalendarDays, AudioLines,
  ClipboardCheck, CheckCircle2, Sparkles, Target, Gauge, Users2, FileCheck2,
  Home, LayoutGrid, MessageSquare, BarChart3, Settings, Volume2, Shield,
  Scale, Mail, ThumbsUp, ArrowRight,
} from "lucide-react";
import { SharedHeader } from "./SharedHeader";
import { SharedFooter, DemoDialog, NovaAbstract, useReveal, CTABand, TrustStrip, CaseStudy } from "./shared";
import { useDemo } from "./useDemo";
import "./pivvix.css";

/* ======================== Count-up helpers ======================== */
const useInView = (threshold = 0.3) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold, seen]);
  return [ref, seen];
};

const CountUp = ({ to, duration = 1400, start }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setVal(to); return; }
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, start]);
  return <>{val}</>;
};

/* ======================== Hero + pipeline card ======================== */
const PipelineCard = () => {
  const [ref, inView] = useInView(0.3);
  return (
    <div className="pv-pipeline pv-reveal" data-testid="pv-pipeline" ref={ref}>
      <div className="pv-pipeline-head">
        <h3>Senior Software Engineer</h3>
        <span className="pv-status"><i />Live pipeline</span>
      </div>
      <div className="pv-funnel">
        <div className="pv-funnel-step"><strong><CountUp to={124} start={inView} /></strong><span>Applied</span></div>
        <div className="pv-funnel-step"><strong><CountUp to={42} start={inView} /></strong><span>Qualified</span></div>
        <div className="pv-funnel-step"><strong><CountUp to={18} start={inView} /></strong><span>Interviewed</span></div>
        <div className="pv-funnel-step"><strong><CountUp to={9} start={inView} /></strong><span>Strong match</span></div>
      </div>
      <div className="pv-candidates">
        {[
          { i: "AS", n: "Aarav Sharma", r: "7 yrs · Backend · Bengaluru", m: 92, c: "#7FA89C", a: "a1" },
          { i: "NP", n: "Neha Patel", r: "6 yrs · Full-stack · Remote", m: 87, c: "#7FA89C", a: "a2" },
          { i: "RM", n: "Rohan Mehta", r: "5 yrs · Platform · Pune", m: 82, c: "#A9CBB9", a: "a3" },
          { i: "PN", n: "Priya Nair", r: "8 yrs · Infra · Hyderabad", m: 78, c: "#A9CBB9", a: "a4" },
        ].map((c) => (
          <div className="pv-candidate" key={c.i} data-testid={`pv-cand-${c.i}`}>
            <span className={`pv-avatar ${c.a}`}>{c.i}</span>
            <div>
              <div className="pv-candidate-name">{c.n}</div>
              <div className="pv-candidate-role">{c.r}</div>
            </div>
            <div className="pv-match">
              <span className="pv-match-bar"><i style={{ width: `${c.m}%`, background: c.c }} /></span>
              <strong><CountUp to={c.m} start={inView} />%</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlatformHero = ({ openDemo }) => (
  <section className="pv-section cream pv-hero" aria-labelledby="pv-hero-heading" id="top">
    <div className="pv-container pv-hero-grid">
      <div className="pv-hero-copy pv-reveal">
        <span className="pv-eyebrow">The Pivvix Platform</span>
        <h1 className="pv-h1" id="pv-hero-heading" data-testid="pv-hero-heading">
          An end-to-end<br />hiring platform<br />built for <em>real teams.</em>
        </h1>
        <p className="pv-lead">
          From candidate discovery to evidence-backed evaluation, Pivvix brings structure,
          intelligence, and speed to every stage of hiring.
        </p>
        <div className="pv-hero-ctas">
          <button className="pv-btn pv-btn--coral" onClick={openDemo} data-testid="pv-hero-demo">
            Book a demo <ArrowUpRight size={16} />
          </button>
          <button className="pv-btn pv-btn--link" data-testid="pv-hero-tour">
            <Play size={16} /> Watch product tour
          </button>
        </div>
        <div className="pv-hero-chips">
          <span className="pv-chip"><Check /> Role-specific interviews</span>
          <span className="pv-chip"><Check /> Evidence-backed scores</span>
          <span className="pv-chip"><Check /> Built for high-volume hiring</span>
        </div>
      </div>
      <PipelineCard />
    </div>
  </section>
);

/* ======================== Interactive Lifecycle ======================== */

const SourcingMock = () => (
  <div className="pv-mini">
    <div className="pv-mini-head"><strong>Candidate sources</strong><span className="pv-mini-badge">124 FOUND</span></div>
    {[
      { i: "AS", n: "Aarav Sharma", r: "Backend · 7y", c: "linkedin", t: "LinkedIn", a: "a1" },
      { i: "NP", n: "Neha Patel", r: "Full-stack · 6y", c: "referral", t: "Referral", a: "a2" },
      { i: "RM", n: "Rohan Mehta", r: "Platform · 5y", c: "direct", t: "Direct apply", a: "a3" },
    ].map((x) => (
      <div className="pv-mini-row" key={x.i}>
        <div className="pv-mini-row-l">
          <span className={`pv-avatar ${x.a}`}>{x.i}</span>
          <div><strong>{x.n}</strong><span>{x.r}</span></div>
        </div>
        <span className={`pv-mini-chip ${x.c}`}>{x.t}</span>
      </div>
    ))}
  </div>
);

const OutreachMock = () => (
  <div className="pv-mini">
    <div className="pv-mini-head"><strong>Outreach draft</strong><span className="pv-mini-badge">42 QUALIFIED</span></div>
    <div className="pv-compose">
      <div className="pv-compose-field"><span>To</span><strong>42 qualified candidates</strong></div>
      <div className="pv-compose-field"><span>Subject</span><strong>Senior Software Engineer — would love to chat</strong></div>
      <p className="pv-compose-body">Hi {"{{first_name}}"}, I came across your profile and your work on {"{{project}}"} caught my eye. We're hiring for a Senior SWE role and I'd love to tell you more…</p>
      <div className="pv-compose-foot">
        <span style={{ fontSize: 11, color: "var(--pv-ink-muted)" }}>Personalised per candidate</span>
        <button className="pv-compose-send" type="button"><Send size={11} /> Send 42</button>
      </div>
    </div>
  </div>
);

const ScreeningMock = () => (
  <div className="pv-mini">
    <div className="pv-mini-head"><strong>Screening responses</strong><span className="pv-mini-badge">18 OF 42</span></div>
    {[
      { q: "Years of production backend experience?", r: "pass", t: "Pass" },
      { q: "Comfortable with on-call rotations?", r: "pass", t: "Pass" },
      { q: "Describe a recent system-design decision.", r: "review", t: "Review" },
    ].map((x, i) => (
      <div className="pv-mini-row" key={x.q}>
        <div className="pv-mini-row-l" style={{ gap: 8 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "var(--pv-ink-muted)", width: 20 }}>Q{i + 1}</span>
          <div><strong style={{ fontSize: 11.5 }}>{x.q}</strong></div>
        </div>
        <span className={`pv-mini-chip ${x.r}`}>{x.t}</span>
      </div>
    ))}
  </div>
);

const SchedulingMock = () => (
  <div className="pv-mini">
    <div className="pv-mini-head"><strong>Interview slots · This week</strong><span className="pv-mini-badge">18 BOOKED</span></div>
    <div className="pv-cal">
      {[
        { d: "MON", slots: [{ t: "10:00", s: "booked" }, { t: "14:00", s: "" }] },
        { d: "TUE", slots: [{ t: "11:00", s: "selected" }, { t: "15:30", s: "" }] },
        { d: "WED", slots: [{ t: "09:30", s: "" }, { t: "16:00", s: "booked" }] },
        { d: "THU", slots: [{ t: "10:30", s: "" }, { t: "14:30", s: "" }] },
        { d: "FRI", slots: [{ t: "11:30", s: "booked" }, { t: "15:00", s: "" }] },
      ].map((c) => (
        <div className="pv-cal-col" key={c.d}>
          <span className="pv-cal-day">{c.d}</span>
          {c.slots.map((s) => (
            <span key={`${c.d}-${s.t}`} className={`pv-cal-slot ${s.s}`}>{s.t}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const InterviewMock = () => (
  <div className="pv-mini-nova">
    <NovaAbstract />
    <span className="pv-mini-nova-label"><i />Nova is interviewing · 04:32</span>
  </div>
);

const EvaluationMock = () => (
  <div className="pv-mini">
    <div className="pv-mini-head"><strong>Scorecard · Aarav Sharma</strong><span className="pv-mini-badge">4/5</span></div>
    {[
      { h: "Problem Solving", s: "4 / 5", w: 80 },
      { h: "System Design", s: "4 / 5", w: 80 },
      { h: "Collaboration", s: "3 / 5", w: 60 },
    ].map((x) => (
      <div className="pv-eval-row" key={x.h}>
        <div className="pv-eval-head"><strong>{x.h}</strong><em>{x.s}</em></div>
        <div className="pv-eval-bar"><i style={{ width: `${x.w}%` }} /></div>
      </div>
    ))}
    <p className="pv-eval-ev">"I would split the system into an event producer, a message queue, and a worker service…"</p>
  </div>
);

const DecideMock = () => (
  <div className="pv-decide-card">
    <div className="pv-decide-top">
      <span className="pv-avatar a1">AS</span>
      <div><strong>Aarav Sharma</strong><span>Senior Software Engineer · 1 of 9 strong matches</span></div>
    </div>
    <div className="pv-decide-score">
      <span>Overall match</span>
      <strong>92%</strong>
    </div>
    <div className="pv-decide-actions">
      <button type="button"><ArrowRight /> Keep in pipeline</button>
      <button type="button" className="primary"><ThumbsUp /> Move to offer</button>
    </div>
  </div>
);

const stages = [
  { n: "01", t: "Sourcing", d: "Find the right candidates across channels.", Icon: Search,
    preview: {
      title: <>Reach the right candidates, <em>everywhere.</em></>,
      desc: "Pull from LinkedIn, referrals, direct applications, and your talent pool into a single structured source list.",
      bullets: ["Candidate discovery across every channel", "Source-level attribution and quality signals", "One structured candidate record"],
      Mock: SourcingMock,
    }},
  { n: "02", t: "Outreach", d: "Engage with personalised communication.", Icon: Send,
    preview: {
      title: <>Personalised outreach <em>at scale.</em></>,
      desc: "Draft once, personalise per candidate. Send consistent, warm messages that respect each candidate's context.",
      bullets: ["Personalised per candidate", "Templates with context awareness", "Response tracking and follow-ups"],
      Mock: OutreachMock,
    }},
  { n: "03", t: "Screening", d: "Identify and shortlist strong signals.", Icon: Filter,
    preview: {
      title: <>Screen for signal, <em>not noise.</em></>,
      desc: "Role-specific screening questions surface the candidates worth investing a full interview in — automatically.",
      bullets: ["Role-specific screening questionnaires", "Auto-flagged responses for review", "Shortlist with reasoning"],
      Mock: ScreeningMock,
    }},
  { n: "04", t: "Scheduling", d: "Coordinate interviews without back-and-forth.", Icon: CalendarDays,
    preview: {
      title: <>Scheduling without the <em>back-and-forth.</em></>,
      desc: "Candidates pick a slot that works. Your team's calendars stay in sync. No email chains, no missed replies.",
      bullets: ["Candidate self-serve booking", "Calendar sync across your team", "Automated reminders"],
      Mock: SchedulingMock,
    }},
  { n: "05", t: "AI Interview", d: "Run adaptive, role-specific conversations.", Icon: AudioLines,
    preview: {
      title: <>Adaptive AI interviews. <em>Clearer evidence.</em></>,
      desc: "Nova runs a structured, role-specific conversation that follows up on each answer — producing evidence, not opinions.",
      bullets: ["Adaptive, role-specific questions", "Real-time evaluation with reasoning", "Full transcript + candidate quotes"],
      Mock: InterviewMock,
    }},
  { n: "06", t: "Evaluation", d: "Review scorecards and evidence.", Icon: ClipboardCheck,
    preview: {
      title: <>Review the <em>evidence</em> behind every score.</>,
      desc: "Each competency score is linked back to the candidate's own words — so your team reviews the reasoning, not the AI.",
      bullets: ["Competency-level reasoning", "Evidence quotes with timestamps", "Side-by-side candidate comparison"],
      Mock: EvaluationMock,
    }},
  { n: "07", t: "Decide", d: "Move forward with confidence.", Icon: CheckCircle2,
    preview: {
      title: <>Move forward with <em>confidence.</em></>,
      desc: "Hiring teams decide, backed by consistent evidence. Pivvix helps you move forward — the final call stays with your people.",
      bullets: ["Hiring team collaboration", "Decision log with reasoning", "Audit trail for every hire"],
      Mock: DecideMock,
    }},
];

const Lifecycle = () => {
  const [active, setActive] = useState("05");
  const stage = stages.find((s) => s.n === active);
  const { Mock } = stage.preview;
  return (
    <section className="pv-section cream-2" aria-labelledby="pv-lifecycle-heading" id="lifecycle">
      <div className="pv-container">
        <div className="pv-lifecycle-head pv-reveal">
          <div>
            <span className="pv-eyebrow">The hiring lifecycle</span>
            <h2 className="pv-h2" id="pv-lifecycle-heading" style={{ marginTop: 20 }}>
              Seven connected stages.<br /><em>One intelligent platform.</em>
            </h2>
          </div>
          <p className="pv-lead">
            Click any stage to explore it. Each one is designed to work together,
            so your team gets a consistent, evidence-backed process end-to-end.
          </p>
        </div>
        <div className="pv-stages pv-reveal" role="tablist" aria-label="Hiring lifecycle stages">
          {stages.map(({ n, t, d, Icon }) => (
            <button
              key={n}
              type="button"
              role="tab"
              aria-selected={active === n}
              aria-controls="pv-lifecycle-preview"
              className={`pv-stage ${active === n ? "active" : ""}`}
              onClick={() => setActive(n)}
              data-testid={`pv-stage-${n}`}
            >
              <span className="pv-stage-num">{n}</span>
              <span className="pv-stage-icon"><Icon /></span>
              <h4>{t}</h4>
              <p>{d}</p>
            </button>
          ))}
        </div>
        <div className="pv-prev pv-reveal" id="pv-lifecycle-preview" role="tabpanel" aria-live="polite" data-testid={`pv-prev-${active}`}>
          <div className="pv-prev-copy" key={`copy-${active}`} style={{ animation: "pv-prev-swap .5s cubic-bezier(0.2,0.8,0.2,1)" }}>
            <span className="pv-tag">{stage.n} / {stage.t}</span>
            <h3>{stage.preview.title}</h3>
            <p>{stage.preview.desc}</p>
            <ul>
              {stage.preview.bullets.map((b) => <li key={b}><Check /> {b}</li>)}
            </ul>
          </div>
          <div className="pv-prev-mock" key={`mock-${active}`}>
            <Mock />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ======================== AI Interview deep dive ======================== */
const AIFeature = ({ Icon, title, desc }) => (
  <div className="pv-ai-feature">
    <span className="pv-ai-feature-icon"><Icon /></span>
    <div><strong>{title}</strong><span>{desc}</span></div>
  </div>
);

const NovaMock = () => (
  <div className="pv-nova pv-reveal" data-testid="pv-nova-mock">
    <div className="pv-nova-rail" aria-hidden="true">
      <span className="pv-nova-rail-item on"><AudioLines /></span>
      <span className="pv-nova-rail-item"><Home /></span>
      <span className="pv-nova-rail-item"><LayoutGrid /></span>
      <span className="pv-nova-rail-item"><MessageSquare /></span>
      <div className="pv-nova-rail-sep" />
      <span className="pv-nova-rail-item"><BarChart3 /></span>
      <span className="pv-nova-rail-item"><Volume2 /></span>
      <span className="pv-nova-rail-item"><Settings /></span>
    </div>
    <div className="pv-nova-body">
      <div className="pv-nova-topbar">
        <span className="pv-nova-title"><i />AI Interview · Aarav Sharma</span>
        <span className="pv-nova-live"><i />Live</span>
      </div>
      <div className="pv-nova-portrait">
        <NovaAbstract />
        <div className="pv-nova-waveform" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span />
        </div>
        <span className="pv-nova-timecode">04:32 / 12:00</span>
      </div>
      <div className="pv-nova-chat">
        <div className="pv-nova-msg">
          <div className="pv-nova-msg-head"><span className="pv-nova-msg-who">Nova</span><span className="pv-nova-msg-time">04:28</span></div>
          <p>Can you walk me through how you would design a scalable notification system?</p>
        </div>
        <div className="pv-nova-msg candidate">
          <div className="pv-nova-msg-head"><span className="pv-nova-msg-who">Candidate</span><span className="pv-nova-msg-time">04:32</span></div>
          <p>I would start by separating the system into three main components — the event producer, a message queue, and a worker service…</p>
        </div>
      </div>
      <div className="pv-nova-pills">
        <span className="pv-nova-pill"><Sparkles /> Follow-up</span>
        <span className="pv-nova-pill"><Target /> Probe</span>
        <span className="pv-nova-pill"><FileCheck2 /> Evidence</span>
      </div>
      <div className="pv-nova-progress">
        <span className="pv-nova-progress-track"><i /></span>
        <span className="pv-nova-progress-time">04:32 / 12:00</span>
      </div>
    </div>
  </div>
);

const AIDeepDive = () => (
  <section className="pv-section dark" aria-labelledby="pv-ai-heading" id="ai">
    <div className="pv-container">
      <div className="pv-ai-head pv-reveal">
        <span className="pv-eyebrow on-dark">A closer look at the AI interview</span>
        <h2 className="pv-h2 on-dark" id="pv-ai-heading" style={{ marginTop: 20 }}>
          Adaptive conversations.<br /><em>Clearer evidence.</em>
        </h2>
        <p className="pv-lead on-dark">
          Nova leads a structured, role-specific interview and adapts its follow-ups to each answer —
          so you move forward with signal, not guesswork.
        </p>
      </div>
      <div className="pv-ai-grid">
        <div className="pv-ai-features pv-reveal">
          <AIFeature Icon={Sparkles} title="Adaptive questions" desc="Nova adjusts in real time to the candidate's answers and the role's competencies." />
          <AIFeature Icon={Target} title="Role-specific assessments" desc="Technical, behavioural, and system-design tracks tailored to each opening." />
          <AIFeature Icon={Gauge} title="Real-time evaluation" desc="Structured scoring and reasoning as the conversation unfolds." />
          <AIFeature Icon={FileCheck2} title="Complete evidence" desc="Every rating is linked back to the candidate's own words." />
          <AIFeature Icon={Users2} title="Built for your team" desc="Share, review, and collaborate on candidates in one hiring workspace." />
        </div>
        <NovaMock />
      </div>
    </div>
  </section>
);

/* ======================== Platform benefits ======================== */
const PlatformBenefits = () => (
  <section className="pv-section cream" aria-labelledby="pv-benefits-heading" id="benefits">
    <div className="pv-container">
      <div className="pv-benefits-head pv-reveal">
        <span className="pv-eyebrow">Platform benefits</span>
        <h2 className="pv-h2" id="pv-benefits-heading">Built for how<br /><em>modern teams hire.</em></h2>
        <p className="pv-lead" style={{ textAlign: "center" }}>Everything you need to run structured, consistent, and efficient interviews at scale.</p>
      </div>
      <div className="pv-benefits-grid pv-reveal">
        {[
          { Icon: Target, h: "Role-specific interviews", d: "Tailored to the skills and competencies that matter for each opening." },
          { Icon: FileCheck2, h: "Evidence-backed scorecards", d: "Understand the reasoning behind every rating — in the candidate's own words." },
          { Icon: Users2, h: "Collaborative review", d: "Share evidence, compare candidates, and align as a hiring team." },
          { Icon: Scale, h: "Scales with you", d: "From a few roles to thousands of candidates, structured end-to-end." },
        ].map(({ Icon, h, d }) => (
          <article className="pv-benefit" key={h} data-testid={`pv-benefit-${h.split(" ")[0].toLowerCase()}`}>
            <span className="pv-benefit-icon"><Icon /></span>
            <h4>{h}</h4>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== Candidate Comparison ======================== */
const comparisonRows = [
  { label: "Overall match", a: { score: "92%", bar: 92, color: "#7FA89C" }, b: { score: "87%", bar: 87, color: "#7FA89C" } },
  { label: "Problem Solving", a: { score: "4 / 5", bar: 80, color: "#FF6B5B" }, b: { score: "4 / 5", bar: 80, color: "#FF6B5B" },
    qa: '"I split the system into an event producer, a message queue, and a worker service — then measured latency at each hop."', qt: "04:32",
    qb: '"I\'d normalise the schema first, add indexes, then look at caching the hot read paths before scaling horizontally."', qbt: "06:18" },
  { label: "System Design", a: { score: "4 / 5", bar: 80, color: "#FF6B5B" }, b: { score: "3 / 5", bar: 60, color: "#A9CBB9" },
    qa: '"At scale, the message queue avoids tightly coupling producers to workers — we can scale workers independently."', qt: "08:14",
    qb: '"I\'d probably start with a monolith and extract services only when the pain is clear."', qbt: "09:02" },
  { label: "Communication", a: { score: "3 / 5", bar: 60, color: "#A9CBB9" }, b: { score: "4 / 5", bar: 80, color: "#FF6B5B" },
    qa: '"The main trade-off is complexity versus latency — but I\'d want data from a load test before deciding."', qt: "11:07",
    qb: '"I usually sketch the shape first and then walk through two or three failure modes with the team."', qbt: "11:52" },
];

const Comparison = () => (
  <section className="pv-section cream" aria-labelledby="pv-cmp-heading" id="compare">
    <div className="pv-container">
      <div className="pv-benefits-head pv-reveal" style={{ margin: "0 0 44px" }}>
        <span className="pv-eyebrow">Candidate comparison</span>
        <h2 className="pv-h2" id="pv-cmp-heading">Compare candidates,<br /><em>side by side.</em></h2>
        <p className="pv-lead" style={{ textAlign: "center" }}>
          Line up scores and the evidence behind them. Your hiring team can see where each
          candidate is strong — and why — in a single glance.
        </p>
      </div>
      <div className="pv-compare pv-reveal" data-testid="pv-compare">
        <div className="pv-compare-controls">
          <strong>Senior Software Engineer</strong>
          <span>· 2 of 9 strong matches</span>
          <span className="pv-tag">Sample data</span>
        </div>
        <div className="pv-compare-grid">
          {/* Header row */}
          <div className="pv-compare-cell header label">Candidate</div>
          <div className="pv-compare-cell header">
            <div className="pv-compare-header-inner">
              <span className="pv-avatar a1">AS</span>
              <div><strong>Aarav Sharma</strong><span>7 yrs · Backend · Bengaluru</span></div>
            </div>
            <span className="pv-compare-header-pct">Overall match <strong>92%</strong></span>
          </div>
          <div className="pv-compare-cell header">
            <div className="pv-compare-header-inner">
              <span className="pv-avatar a2">NP</span>
              <div><strong>Neha Patel</strong><span>6 yrs · Full-stack · Remote</span></div>
            </div>
            <span className="pv-compare-header-pct">Overall match <strong>87%</strong></span>
          </div>

          {comparisonRows.slice(1).map((row) => (
            <div key={row.label} style={{ display: "contents" }}>
              <div className="pv-compare-cell label">{row.label}</div>
              <div className="pv-compare-cell">
                <div className="pv-compare-score"><strong>{row.a.score}</strong><em>Score</em></div>
                <div className="pv-compare-bar"><i style={{ width: `${row.a.bar}%`, background: row.a.color }} /></div>
                {row.qa && (
                  <div className="pv-compare-quote">
                    {row.qa}
                    <span className="pv-compare-quote-time">▶ {row.qt}</span>
                  </div>
                )}
              </div>
              <div className="pv-compare-cell">
                <div className="pv-compare-score"><strong>{row.b.score}</strong><em>Score</em></div>
                <div className="pv-compare-bar"><i style={{ width: `${row.b.bar}%`, background: row.b.color }} /></div>
                {row.qb && (
                  <div className="pv-compare-quote">
                    {row.qb}
                    <span className="pv-compare-quote-time">▶ {row.qbt}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="pv-compare-foot">
          <span>Every quote links back to the transcript, with full context for your hiring team.</span>
          <strong>AI informs. People decide.</strong>
        </div>
      </div>
    </div>
  </section>
);

/* ======================== Page ======================== */
export default function PlatformPage() {
  useReveal();
  const { openDemo, demoOpen, closeDemo } = useDemo();
  return (
    <div className="pv-root" data-testid="pv-platform">
      <SharedHeader active="platform" onDemo={openDemo} />
      <main>
        <PlatformHero openDemo={openDemo} />
        <TrustStrip />
        <Lifecycle />
        <AIDeepDive />
        <CaseStudy
          author="Sarah Chen" role="Head of Talent" company="InnovateTech"
          initials="SC" avatarClass="a1" logo="InnovateTech"
          testId="pv-case-platform"
        >
          Pivvix changed how we evaluate candidates. We finally see the <em>reasoning behind every rating</em> —
          not just a number — and our hiring team moves faster, with more confidence.
        </CaseStudy>
        <Comparison />
        <PlatformBenefits />
        <CTABand heading="Ready to see the" headingEm="full platform?" lead="See how Pivvix connects every stage of hiring — from first conversation to final decision." onDemo={openDemo} />
      </main>
      <SharedFooter onDemo={openDemo} />
      <DemoDialog open={demoOpen} onClose={closeDemo} />
    </div>
  );
}
