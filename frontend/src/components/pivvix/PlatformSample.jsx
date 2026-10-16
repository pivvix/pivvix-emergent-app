import { useEffect, useRef } from "react";
import {
  ArrowUpRight, Play, Check, Search, Send, Filter, CalendarDays,
  AudioLines, ClipboardCheck, CheckCircle2, Sparkles, Target, Gauge,
  Users2, FileCheck2, Home, LayoutGrid, MessageSquare, BarChart3, Settings,
  Volume2, Zap,
} from "lucide-react";
import { SharedHeader } from "./SharedHeader";
import "./pivvix.css";

const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".pv-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* ======================== Hero ======================== */
const PipelineCard = () => (
  <div className="pv-pipeline pv-reveal" data-testid="pv-pipeline">
    <div className="pv-pipeline-head">
      <h3>Senior Software Engineer</h3>
      <span className="pv-status"><i />Live pipeline</span>
    </div>
    <div className="pv-funnel">
      <div className="pv-funnel-step"><strong>124</strong><span>Applied</span></div>
      <div className="pv-funnel-step"><strong>42</strong><span>Qualified</span></div>
      <div className="pv-funnel-step"><strong>18</strong><span>Interviewed</span></div>
      <div className="pv-funnel-step"><strong>9</strong><span>Strong match</span></div>
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
            <strong>{c.m}%</strong>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Hero = ({ openDemo }) => (
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

/* ======================== Lifecycle ======================== */
const stages = [
  { n: "01", t: "Sourcing", d: "Find the right candidates across channels.", Icon: Search },
  { n: "02", t: "Outreach", d: "Engage with personalised communication.", Icon: Send },
  { n: "03", t: "Screening", d: "Identify and shortlist strong signals.", Icon: Filter },
  { n: "04", t: "Scheduling", d: "Coordinate interviews without back-and-forth.", Icon: CalendarDays },
  { n: "05", t: "AI Interview", d: "Run adaptive, role-specific conversations.", Icon: AudioLines, active: true },
  { n: "06", t: "Evaluation", d: "Review scorecards and evidence.", Icon: ClipboardCheck },
  { n: "07", t: "Decide", d: "Move forward with confidence.", Icon: CheckCircle2 },
];

const Lifecycle = () => (
  <section className="pv-section cream-2" aria-labelledby="pv-lifecycle-heading" id="platform">
    <div className="pv-container">
      <div className="pv-lifecycle-head pv-reveal">
        <div>
          <span className="pv-eyebrow">The hiring lifecycle</span>
          <h2 className="pv-h2" id="pv-lifecycle-heading" style={{ marginTop: 20 }}>
            Seven connected stages.<br /><em>One intelligent platform.</em>
          </h2>
        </div>
        <p className="pv-lead">
          Each stage is designed to work together, so your team gets a consistent,
          evidence-backed hiring process end-to-end.
        </p>
      </div>
      <div className="pv-stages pv-reveal">
        {stages.map(({ n, t, d, Icon, active }) => (
          <article key={n} className={`pv-stage ${active ? "active" : ""}`} data-testid={`pv-stage-${n}`}>
            <span className="pv-stage-num">{n}</span>
            <span className="pv-stage-icon"><Icon /></span>
            <h4>{t}</h4>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== AI Interview deep dive ======================== */
const AIFeature = ({ Icon, title, desc }) => (
  <div className="pv-ai-feature">
    <span className="pv-ai-feature-icon"><Icon /></span>
    <div>
      <strong>{title}</strong>
      <span>{desc}</span>
    </div>
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
        <div className="pv-nova-portrait-fig" aria-hidden="true" />
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
  <section className="pv-section dark" aria-labelledby="pv-ai-heading" id="solutions">
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

/* ======================== CTA band ======================== */
const CTABand = ({ openDemo }) => (
  <section className="pv-cta" aria-labelledby="pv-cta-heading" id="resources">
    <div className="pv-container pv-cta-inner pv-reveal">
      <span className="pv-eyebrow on-dark">Ready to build extraordinary teams?</span>
      <h2 className="pv-h2 on-dark" id="pv-cta-heading">
        Ready to see the<br /><em>full platform?</em>
      </h2>
      <p className="pv-lead on-dark">
        See how Pivvix connects every stage of hiring — from first conversation to final decision.
      </p>
      <div className="pv-cta-actions">
        <button className="pv-btn pv-btn--coral" onClick={openDemo} data-testid="pv-cta-demo">
          Book a demo <ArrowUpRight size={16} />
        </button>
        <button className="pv-btn pv-btn--outline on-dark" data-testid="pv-cta-tour">
          <Play size={16} /> Watch product tour
        </button>
      </div>
    </div>
  </section>
);

/* ======================== Page ======================== */
export default function PlatformSample() {
  useReveal();
  const titleRef = useRef(null);
  useEffect(() => { document.title = "Pivvix — Platform (sample)"; }, []);
  const openDemo = () => alert("Sample preview — Book-a-demo flow will be wired after design approval.");
  return (
    <div className="pv-root" data-testid="pv-sample" ref={titleRef}>
      <SharedHeader active="platform" onDemo={openDemo} />
      <main>
        <Hero openDemo={openDemo} />
        <Lifecycle />
        <AIDeepDive />
        <CTABand openDemo={openDemo} />
      </main>
    </div>
  );
}
