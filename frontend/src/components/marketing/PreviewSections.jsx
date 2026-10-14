import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Check, CirclePlay, FileCheck2, GitBranch, MessageSquareText, ScanLine, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NovaPreview, ScorecardPreview } from "./ProductPreviews";

export const Hero = ({ concept, openDemo }) => (
  <section className="hero container" id="nova" aria-labelledby="hero-title">
    <div className="hero-copy">
      <div className="hero-eyebrow"><span className="eyebrow-line" /><AudioLines size={14} /><span>MORE THAN A FIRST IMPRESSION</span></div>
      <h1 id="hero-title" data-testid="hero-title">Better interviews.<br /><em>Clearer hiring</em><br />decisions.</h1>
      <p className="hero-description">Meet Nova, your conversational AI interviewer. Go beyond the résumé with real conversations, meaningful evidence, and a clearer picture of every candidate.</p>
      <div className="hero-actions"><Button className="primary-button" data-testid="hero-book-demo" onClick={openDemo}>Book a demo <ArrowUpRight size={18} /></Button><a className="text-action" href="#intelligence" data-testid="hero-explore"><CirclePlay size={20} /> See how it works</a></div>
      <div className="hero-assurance"><span><Check size={13} /> Structured interviews</span><span><Check size={13} /> Human-led decisions</span></div>
      {concept === "light" && <div className="editorial-note"><span>OUR POINT OF VIEW</span><p>A good hiring decision begins<br />with a better conversation.</p></div>}
    </div>
    <NovaPreview />
    <div className="hero-bottom-note"><span>BUILT FOR THE PEOPLE BEHIND THE HIRE</span><a href="#intelligence" data-testid="scroll-to-intelligence" aria-label="Discover evidence-linked scorecards"><ArrowDown size={17} /></a></div>
  </section>
);

export const EvidenceSection = () => (
  <section className="evidence-section" id="intelligence" aria-labelledby="evidence-heading">
    <div className="container evidence-layout">
      <div className="evidence-copy"><h2 className="eyebrow" id="evidence-heading">01 / THE INTELLIGENCE</h2><p className="section-statement">Don’t just see a score.<br /><em>See the story behind it.</em></p><p className="section-description">Every competency score comes with a reason and the candidate’s own words. So your team can review the evidence—not guess what the AI was thinking.</p><ul className="evidence-benefits"><li><MessageSquareText size={18} /><span>Answers, not assumptions.<small>Candidate quotes connected to each competency.</small></span></li><li><ScanLine size={18} /><span>Clarity, including the gaps.<small>Missing evidence is flagged, never filled in.</small></span></li><li><ShieldCheck size={18} /><span>Your team makes the call.<small>AI informs the decision. People own it.</small></span></li></ul><span className="try-hint"><ArrowUpRight size={15} /> Select a competency to explore the sample</span></div>
      <ScorecardPreview />
    </div>
  </section>
);

const workflowSteps = [
  { number: "01", icon: GitBranch, title: "Set the context.", detail: "Keep roles, screening questionnaires, and candidate stages organised in one workspace.", tag: "JOBS & SCREENING" },
  { number: "02", icon: AudioLines, title: "Make space for a conversation.", detail: "Nova leads a structured, job-specific interview and adapts its follow-ups to each answer.", tag: "CONVERSATIONAL INTERVIEWS" },
  { number: "03", icon: FileCheck2, title: "Move forward with evidence.", detail: "Review scorecards, compare candidates, and share hiring reports with your team.", tag: "SCORECARDS & REPORTS" },
];

export const Workflow = () => (
  <section className="workflow-section container" id="workflow" aria-labelledby="workflow-heading"><div className="workflow-heading"><div><h2 className="eyebrow" id="workflow-heading">02 / THE WORKFLOW</h2><p className="section-statement">A thoughtful process.<br /><em>Not another disconnected tool.</em></p></div><p className="section-description">From the first screen to the next step.<br />One connected hiring workspace.</p></div><div className="workflow-steps">{workflowSteps.map(({ number, icon: Icon, title, detail, tag }) => <article key={number} className="workflow-step" data-testid={`workflow-step-${number}`}><div className="step-top"><Icon size={23} strokeWidth={1.4} /><span>{number}</span></div><h3>{title}</h3><p>{detail}</p><span className="step-tag">{tag}<ArrowRight size={14} /></span></article>)}</div></section>
);

export const ClosingSection = ({ openDemo }) => (
  <section className="closing-section container" aria-labelledby="closing-heading"><div className="closing-mark" aria-hidden="true"><AudioLines size={38} strokeWidth={1} /></div><div><h2 id="closing-heading" className="eyebrow">YOUR NEXT GREAT HIRE STARTS HERE</h2><p className="closing-statement">Let’s make the first<br />conversation <em>count.</em></p></div><Button className="primary-button" data-testid="closing-book-demo" onClick={openDemo}>Book a demo <ArrowUpRight size={18} /></Button></section>
);
