import { useState } from "react";
import { AudioLines, ArrowUpRight, Check, ChevronRight, CircleDot, FileText, Quote, Sparkles } from "lucide-react";

const states = {
  listening: { label: "Listening", caption: "“I spoke with our support team to understand where customers were getting stuck.”", speaker: "SAMPLE ANSWER" },
  thinking: { label: "Thinking", caption: "Connecting the answer to the role’s competencies and considering a follow-up.", speaker: "SAMPLE INTERVIEW STATE" },
  speaking: { label: "Speaking", caption: "“Tell me about a time you turned a customer insight into a better product experience.”", speaker: "NOVA · SAMPLE QUESTION" },
};

const NovaVisual = ({ state }) => (
  <div className={`nova-visual nova-${state}`} aria-hidden="true">
    <svg viewBox="0 0 300 210" className="nova-art">
      {state === "speaking" && <g className="nova-orbit" transform="translate(150 105)">{Array.from({ length: 24 }, (_, i) => <ellipse key={i} cx="0" cy="0" rx="43" ry="86" transform={`rotate(${i * 7.5})`} fill="none" stroke="currentColor" strokeWidth="0.7" opacity={0.4 + i / 48} />)}<circle r="24" fill="none" stroke="currentColor" strokeWidth="0.5" /></g>}
      {state === "listening" && <g transform="translate(150 105)">{Array.from({ length: 9 }, (_, i) => <circle key={i} r={16 + i * 8} fill="none" stroke="currentColor" strokeWidth={i === 3 ? 2 : 0.7} opacity={1 - i / 12} />)}<circle r="5" fill="currentColor" /></g>}
      {state === "thinking" && <g className="nova-thinking-orbit" transform="translate(150 105)">{Array.from({ length: 8 }, (_, i) => <ellipse key={i} rx="86" ry="28" transform={`rotate(${i * 22.5})`} fill="none" stroke="currentColor" strokeWidth="0.8" />)}<circle r="5" fill="currentColor" /></g>}
    </svg>
    <span className="nova-orbit-label">NOVA</span>
  </div>
);

export const NovaPreview = () => {
  const [state, setState] = useState("speaking");
  const current = states[state];
  return (
    <div className="nova-composition" data-testid="nova-preview">
      <div className="folio-index" aria-hidden="true"><span>THE CONVERSATION</span><span>FIG. 01</span></div>
      <div className="nova-window">
        <div className="nova-window-header"><div className="nova-wordmark"><AudioLines size={18} /><strong>nova</strong><span>by pivvix</span></div><span className="sample-tag" data-testid="nova-sample-label">ILLUSTRATIVE PREVIEW</span></div>
        <div className="nova-session"><span><i /> First-round interview</span><span>Product designer</span></div>
        <NovaVisual state={state} />
        <div className="nova-state" aria-live="polite" data-testid="nova-current-state"><span className={`state-dot ${state}`} />Nova is {current.label.toLowerCase()}</div>
        <div className="nova-caption" aria-live="polite"><span className="eyebrow" data-testid="nova-speaker">{current.speaker}</span><p data-testid="nova-caption">{current.caption}</p></div>
        <div className="nova-controls" aria-label="Explore sample Nova states">{Object.entries(states).map(([key, item]) => <button key={key} data-testid={`nova-state-${key}`} aria-pressed={state === key} onClick={() => setState(key)} className={state === key ? "active" : ""}><span className={`state-dot ${key}`} />{item.label}</button>)}</div>
      </div>
      <div className="evidence-float"><span className="evidence-float-icon"><Check size={15} /></span><div><strong>Every conversation, connected.</strong><span>From an answer to meaningful evidence.</span></div><ArrowUpRight size={17} /></div>
      <div className="visual-footnote"><span>REAL CONVERSATION. STRUCTURED THINKING.</span><span>01—03</span></div>
    </div>
  );
};

const competencies = [
  { id: "problem-solving", name: "Problem solving", score: "4 / 5", progress: 80, quote: "I spoke with support, mapped the recurring issues, and tested a simpler onboarding flow.", reason: "Connects a customer problem to a concrete process for investigating and testing a solution.", note: "Follow up on how the outcome was measured.", timestamp: "04:32" },
  { id: "collaboration", name: "Collaboration", score: "3 / 5", progress: 60, quote: "I brought the support and engineering teams together to agree on the main customer issues.", reason: "Shows cross-functional collaboration, with room to explore how conflicting priorities were resolved.", note: "Explore the candidate’s approach to disagreement.", timestamp: "08:16" },
  { id: "strategic-thinking", name: "Strategic thinking", score: "Needs review", progress: 0, quote: null, reason: "The sample conversation does not establish how the candidate connects product decisions to longer-term goals.", note: "Insufficient evidence. A human follow-up is recommended.", timestamp: null },
];

export const ScorecardPreview = () => {
  const [selected, setSelected] = useState(competencies[0]);
  return (
    <div className="scorecard-preview" data-testid="scorecard-preview">
      <div className="scorecard-header"><span><FileText size={16} /> Interview scorecard</span><span className="sample-tag" data-testid="scorecard-sample-label">SAMPLE DATA</span></div>
      <div className="scorecard-person"><span className="sample-avatar">SC</span><div><strong>Sample candidate</strong><span>Product designer · First round</span></div><span className="review-badge" data-testid="scorecard-recommendation">For human review</span></div>
      <div className="competency-list" aria-label="Explore sample competency evidence">{competencies.map(item => <button key={item.id} className={`competency-row ${selected.id === item.id ? "active" : ""}`} data-testid={`competency-${item.id}`} aria-pressed={selected.id === item.id} onClick={() => setSelected(item)}><span>{item.name}</span><span className="score-track"><i style={{ width: `${item.progress}%` }} /></span><strong>{item.score}</strong><ChevronRight size={14} /></button>)}</div>
      <div className="evidence-detail" aria-live="polite" data-testid="evidence-detail"><div className="evidence-detail-heading"><span><Quote size={13} /> {selected.quote ? "THE EVIDENCE" : "EVIDENCE GAP"}</span>{selected.timestamp && <span data-testid="evidence-timestamp">{selected.timestamp}</span>}</div>{selected.quote && <blockquote data-testid="evidence-quote">“{selected.quote}”</blockquote>}<p data-testid="evidence-reason">{selected.reason}</p><div className="evidence-followup" data-testid="evidence-followup"><CircleDot size={13} /><span>{selected.note}</span></div></div>
      <div className="scorecard-bottom"><Sparkles size={13} /><span>AI-assisted assessment. Human-led decision.</span></div>
    </div>
  );
};
