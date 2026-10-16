import { useEffect, useState } from "react";
import {
  ArrowUpRight, ArrowRight, Users, Briefcase, Code2, Building2, Play,
  Check, FileCheck2, Clock, Award, UserCheck, TrendingUp,
} from "lucide-react";
import { SharedHeader } from "./SharedHeader";
import { SharedFooter, DemoDialog, useReveal, CTABand, CaseStudy } from "./shared";
import { useDemo } from "./useDemo";
import "./pivvix.css";

/* ======================== Hero ======================== */
const SolutionsHero = ({ openDemo }) => (
  <section className="pv-section cream pv-hero" id="top" aria-labelledby="pv-sh-heading">
    <div className="pv-container pv-hero-grid">
      <div className="pv-hero-copy pv-reveal">
        <span className="pv-eyebrow">Solutions</span>
        <h1 className="pv-h1" id="pv-sh-heading" data-testid="pv-sol-hero">
          Hiring intelligence<br />built around<br /><em>your team.</em>
        </h1>
        <p className="pv-lead">
          Different teams face different hiring challenges. Pivvix gives each of them
          the tools, structure, and evidence they need to make better hiring decisions.
        </p>
        <div className="pv-hero-ctas">
          <button className="pv-btn pv-btn--coral" onClick={openDemo} data-testid="pv-sol-demo">
            Book a demo <ArrowUpRight size={16} />
          </button>
          <a href="/platform" className="pv-btn pv-btn--link" data-testid="pv-sol-platform">
            Explore the platform <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="pv-stakes pv-reveal" aria-hidden="true">
        <div className="pv-stake s1" data-testid="pv-stake-talent">
          <span className="pv-stake-fig"><Users /></span>
          <div><strong>Talent teams</strong><span>Scale hiring with consistency</span></div>
        </div>
        <div className="pv-stake s2" data-testid="pv-stake-managers">
          <span className="pv-stake-fig"><Briefcase /></span>
          <div><strong>Hiring managers</strong><span>Review evidence, not just resumes</span></div>
        </div>
        <div className="pv-stake s3" data-testid="pv-stake-technical">
          <span className="pv-stake-fig"><Code2 /></span>
          <div><strong>Technical teams</strong><span>Assess real-world skill signals</span></div>
        </div>
        <div className="pv-stake s4" data-testid="pv-stake-agencies">
          <span className="pv-stake-fig"><Building2 /></span>
          <div><strong>Agencies teams</strong><span>Deliver client-ready summaries</span></div>
        </div>
      </div>
    </div>
  </section>
);

/* ======================== Teams grid ======================== */
const teamCards = [
  { Icon: Users, h: "Talent teams", d: "Keep high-volume hiring structured from candidate discovery through interview.", id: "talent" },
  { Icon: Briefcase, h: "Hiring managers", d: "Review structured candidate evidence instead of scattered feedback.", id: "managers" },
  { Icon: Code2, h: "Technical teams", d: "Assess the competencies that actually matter for the role.", id: "technical" },
  { Icon: Building2, h: "Staffing & agencies", d: "Run more open roles while producing consistent, evidence-backed summaries.", id: "agencies" },
];

const TeamsGrid = () => (
  <section className="pv-section dark" aria-labelledby="pv-teams-heading" id="teams">
    <div className="pv-container">
      <div className="pv-ai-head pv-reveal">
        <span className="pv-eyebrow on-dark">Who we build for</span>
        <h2 className="pv-h2 on-dark" id="pv-teams-heading" style={{ marginTop: 20 }}>
          Built for every team<br /><em>shaping the hiring decision.</em>
        </h2>
        <p className="pv-lead on-dark">Pivvix gives each stakeholder the signals and workflow they need.</p>
      </div>
      <div className="pv-teams-grid pv-reveal">
        {teamCards.map(({ Icon, h, d, id }) => (
          <article key={id} className="pv-team-card" data-testid={`pv-team-${id}`}>
            <span className="pv-team-card-icon"><Icon /></span>
            <h4>{h}</h4>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== Pipeline (reused for high-volume) ======================== */
const SmallPipeline = () => (
  <div className="pv-pipeline" data-testid="pv-sol-pipeline">
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
        { i: "AS", n: "Aarav Sharma", r: "7 yrs · Backend", m: 92, a: "a1" },
        { i: "NP", n: "Neha Patel", r: "6 yrs · Full-stack", m: 87, a: "a2" },
        { i: "RM", n: "Rohan Mehta", r: "5 yrs · Platform", m: 82, a: "a3" },
      ].map((c) => (
        <div className="pv-candidate" key={c.i}>
          <span className={`pv-avatar ${c.a}`}>{c.i}</span>
          <div><div className="pv-candidate-name">{c.n}</div><div className="pv-candidate-role">{c.r}</div></div>
          <div className="pv-match">
            <span className="pv-match-bar"><i style={{ width: `${c.m}%`, background: "#7FA89C" }} /></span>
            <strong>{c.m}%</strong>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HighVolumeSection = () => (
  <section className="pv-section cream" aria-labelledby="pv-hv-heading" id="talent">
    <div className="pv-container pv-two-col pv-reveal">
      <div className="pv-two-col-copy">
        <span className="pv-eyebrow">For talent teams</span>
        <h2 className="pv-h2" id="pv-hv-heading">High-volume hiring<br /><em>without losing consistency.</em></h2>
        <p className="pv-lead">
          When thousands of people apply, every candidate should move through a structured process —
          so your shortlist reflects the role rather than who reached a recruiter first.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Structured interviews for every candidate</li>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Consistent evaluation across your pipeline</li>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Faster time-to-shortlist with evidence</li>
        </ul>
      </div>
      <SmallPipeline />
    </div>
  </section>
);

/* ======================== Technical hiring ======================== */
const TechnicalSection = () => (
  <section className="pv-section cream-2" aria-labelledby="pv-tech-heading" id="technical">
    <div className="pv-container pv-two-col reverse pv-reveal">
      <div className="pv-two-col-copy">
        <span className="pv-eyebrow">For technical teams</span>
        <h2 className="pv-h2" id="pv-tech-heading">Technical hiring.<br /><em>Go beyond the resume.</em></h2>
        <p className="pv-lead">
          Skills checks and system-design conversations adapt to each candidate's answers,
          with the reasoning behind each rating captured for your engineers to review.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Adaptive system-design conversations</li>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Competency-level scoring with reasoning</li>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Transcript and evidence for every answer</li>
        </ul>
      </div>
      <div className="pv-assessment" data-testid="pv-assessment">
        <div className="pv-assessment-head">
          <h3>System Design Assessment</h3>
          <span className="pv-assessment-score">4<span>/5</span></span>
        </div>
        {[
          { h: "System Design", s: "4 / 5", w: 80 },
          { h: "Problem Solving", s: "4 / 5", w: 82 },
          { h: "Technical Depth", s: "4 / 5", w: 78 },
          { h: "Communication", s: "3 / 5", w: 62 },
        ].map(({ h, s, w }) => (
          <div className="pv-competency" key={h}>
            <div className="pv-competency-head"><strong>{h}</strong><em>{s}</em></div>
            <div className="pv-competency-bar"><i style={{ width: `${w}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== Staffing & agencies ======================== */
const StaffingSection = () => (
  <section className="pv-section dark-deeper" aria-labelledby="pv-staff-heading" id="agencies">
    <div className="pv-container pv-two-col pv-reveal">
      <div className="pv-two-col-copy">
        <span className="pv-eyebrow on-dark">For staffing &amp; agencies</span>
        <h2 className="pv-h2 on-dark" id="pv-staff-heading">Scale your<br /><em>recruiting operation.</em></h2>
        <p className="pv-lead on-dark">
          Run more open roles without adding recruiters. Pivvix helps structure first-round
          interviewing and produce candidate summaries backed by evidence.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-on-dark-muted)" }}><Check size={16} style={{ color: "var(--pv-mint)" }} /> Handle more roles per recruiter</li>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-on-dark-muted)" }}><Check size={16} style={{ color: "var(--pv-mint)" }} /> Consistent, structured candidate briefs</li>
          <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-on-dark-muted)" }}><Check size={16} style={{ color: "var(--pv-mint)" }} /> Shareable summaries with evidence</li>
        </ul>
      </div>
      <div className="pv-summary" data-testid="pv-summary">
        <div className="pv-summary-head">
          <h3>Client-ready summary</h3>
          <span>Ready to share</span>
        </div>
        {[
          { Icon: UserCheck, s: "Interview completed", e: "Aarav Sharma · Senior SWE" },
          { Icon: Award, s: "Competencies assessed", e: "4 of 4 competencies scored" },
          { Icon: FileCheck2, s: "Evidence available", e: "Transcript + candidate quotes" },
          { Icon: Clock, s: "Ready to share with client", e: "Summary generated · 12 min read" },
        ].map(({ Icon, s, e }) => (
          <div className="pv-summary-row" key={s}>
            <Icon />
            <div><strong>{s}</strong><em>{e}</em></div>
          </div>
        ))}
        <div className="pv-summary-cta">Sample preview — client sharing is a demo stub</div>
      </div>
    </div>
  </section>
);

/* ======================== Evidence scorecard (hiring managers) ======================== */
const EvidenceSection = () => {
  const [tab, setTab] = useState("Reasoning");
  return (
    <section className="pv-section cream" aria-labelledby="pv-ev-heading" id="managers">
      <div className="pv-container pv-two-col pv-reveal">
        <div className="pv-two-col-copy">
          <span className="pv-eyebrow">For hiring managers</span>
          <h2 className="pv-h2" id="pv-ev-heading">Give hiring managers<br /><em>the evidence to decide.</em></h2>
          <p className="pv-lead">
            Every competency score comes with the reasoning behind it and the candidate's own words —
            so your team can review the evidence, not guess at the AI.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Transparent reasoning for every rating</li>
            <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Evidence quotes with timestamps</li>
            <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--pv-ink-2)" }}><Check size={16} style={{ color: "var(--pv-sage-deep)" }} /> Your team owns the final decision</li>
          </ul>
        </div>
        <div className="pv-scorecard" data-testid="pv-scorecard">
          <div className="pv-scorecard-head">
            <div className="pv-scorecard-head-l">
              <span className="pv-avatar a1">AS</span>
              <div><strong>Aarav Sharma</strong><span>Senior Software Engineer</span></div>
            </div>
            <span className="pv-scorecard-head-r"><i />Interview completed</span>
          </div>
          <div className="pv-scorecard-tabs">
            {["Competencies", "Reasoning", "Evidence", "Summary"].map((t) => (
              <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)} data-testid={`pv-tab-${t.toLowerCase()}`}>{t}</button>
            ))}
          </div>
          <div className="pv-scorecard-body">
            <div className="pv-scorecard-row"><strong>Problem Solving</strong><em>4<span>/5</span></em></div>
            <div className="pv-scorecard-bar"><i style={{ width: "80%" }} /></div>
            <div className="pv-scorecard-why">
              <strong>Why this score?</strong>
              <p>Demonstrated a structured approach to breaking down the problem and evaluating trade-offs. Considered scalability but missed some edge cases.</p>
            </div>
            <div className="pv-scorecard-quote">
              <div className="pv-scorecard-quote-head">
                <span>Candidate response</span>
                <span className="pv-play"><Play /> 00:04:32</span>
              </div>
              <blockquote>"I would start by separating the system into three main components — the event producer, a message queue, and a worker service…"</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ======================== Page ======================== */
export default function SolutionsPage() {
  useReveal();
  const { openDemo, demoOpen, closeDemo } = useDemo();
  useEffect(() => { document.title = "Pivvix — Solutions"; }, []);
  return (
    <div className="pv-root" data-testid="pv-solutions">
      <SharedHeader active="solutions" onDemo={openDemo} />
      <main>
        <SolutionsHero openDemo={openDemo} />
        <TeamsGrid />
        <CaseStudy
          author="Marcus Lee" role="VP Engineering" company="GlobalWorks"
          initials="ML" avatarClass="a4" logo="GlobalWorks"
          testId="pv-case-solutions"
        >
          Pivvix handles our first-round interviews so our team can focus on the <em>final decisions.</em>
          We've nearly doubled our hiring throughput without adding recruiters.
        </CaseStudy>
        <HighVolumeSection />
        <TechnicalSection />
        <StaffingSection />
        <EvidenceSection />
        <CTABand eyebrow="Ready to build extraordinary teams?" heading="Ready to see Pivvix" headingEm="in action?" lead="See how Pivvix helps your team conduct better interviews and make clearer hiring decisions." onDemo={openDemo} />
      </main>
      <SharedFooter onDemo={openDemo} />
      <DemoDialog open={demoOpen} onClose={closeDemo} />
    </div>
  );
}
