import { useEffect } from "react";
import {
  ArrowUpRight, ArrowRight, BookOpen, Sparkles, ClipboardCheck, Users2,
  Lightbulb, Zap, TrendingUp, BarChart3, FileText,
} from "lucide-react";
import { SharedHeader } from "./SharedHeader";
import { SharedFooter, DemoDialog, useReveal, CTABand } from "./shared";
import { useDemo } from "./useDemo";
import "./pivvix.css";

/* ======================== Hero ======================== */
const ResourcesHero = () => (
  <section className="pv-section cream pv-res-hero" id="top" aria-labelledby="pv-res-heading">
    <div className="pv-container pv-res-hero-inner pv-reveal">
      <span className="pv-eyebrow">Resources</span>
      <h1 className="pv-h1" id="pv-res-heading" data-testid="pv-res-hero">
        Ideas for better<br /><em>hiring decisions.</em>
      </h1>
      <p className="pv-lead">
        Practical guidance for teams building more structured, thoughtful,
        and evidence-based hiring processes.
      </p>
    </div>
  </section>
);

/* ======================== Featured article ======================== */
const FeaturedIllustration = () => (
  <svg viewBox="0 0 400 300" width="320" height="240" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="f-g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A9CBB9" />
        <stop offset="100%" stopColor="#7FA89C" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="150" r="110" fill="none" stroke="rgba(169,203,185,0.3)" strokeWidth="0.8" strokeDasharray="3 6" />
    <circle cx="200" cy="150" r="80" fill="none" stroke="rgba(243,240,232,0.25)" strokeWidth="0.6" />
    <rect x="140" y="110" width="120" height="80" rx="10" fill="url(#f-g1)" opacity="0.9" />
    <rect x="156" y="128" width="60" height="6" rx="3" fill="#0E3033" opacity="0.7" />
    <rect x="156" y="142" width="80" height="4" rx="2" fill="#0E3033" opacity="0.4" />
    <rect x="156" y="152" width="70" height="4" rx="2" fill="#0E3033" opacity="0.4" />
    <circle cx="235" cy="170" r="7" fill="#FF6B5B" />
    <circle cx="130" cy="80" r="6" fill="#FF6B5B" opacity="0.8" />
    <circle cx="300" cy="220" r="4" fill="#F3F0E8" opacity="0.9" />
  </svg>
);

const FeaturedArticle = () => (
  <section className="pv-section cream" style={{ paddingTop: 0 }} aria-labelledby="pv-feat-heading" id="featured">
    <div className="pv-container">
      <article className="pv-featured pv-reveal" data-testid="pv-featured">
        <div className="pv-featured-art" aria-hidden="true"><FeaturedIllustration /></div>
        <div className="pv-featured-body">
          <span className="pv-featured-cat">Featured guide</span>
          <h3 id="pv-feat-heading">How to build a more <em>structured</em> interview process.</h3>
          <p>
            A practical framework for defining competencies, writing better interview questions,
            and keeping evaluation consistent across every hire — without over-engineering your process.
          </p>
          <div className="pv-featured-meta">
            <span>12 min read</span><i /><span>Hiring guide</span><i />
            <span style={{ display: "inline-flex", padding: "3px 10px", background: "var(--pv-cream)", border: "1px solid var(--pv-border-soft)", borderRadius: 999, fontSize: 10, fontWeight: 500, letterSpacing: 0.5 }}>Sample content</span>
          </div>
          <a href="#" className="pv-btn pv-btn--link" data-testid="pv-featured-read">Read the guide <ArrowRight size={16} /></a>
        </div>
      </article>
    </div>
  </section>
);

/* ======================== Categories ======================== */
const categories = [
  { Icon: BookOpen, h: "Hiring guides", d: "Practical guides for building structured hiring workflows.", id: "guides" },
  { Icon: Sparkles, h: "AI interviews", d: "Insights into adaptive interviews, design, and candidate experience.", id: "ai" },
  { Icon: ClipboardCheck, h: "Assessment & evaluation", d: "Guidance on competency-based evaluation, evidence, and scorecards.", id: "evaluation" },
  { Icon: Users2, h: "Recruiting operations", d: "Ideas for improving consistency across candidate pipelines.", id: "ops" },
];

const Categories = () => (
  <section className="pv-section cream-2" aria-labelledby="pv-cat-heading" id="categories">
    <div className="pv-container">
      <div className="pv-benefits-head pv-reveal" style={{ textAlign: "left", alignItems: "flex-start", margin: "0 0 48px" }}>
        <span className="pv-eyebrow">Explore by topic</span>
        <h2 className="pv-h2" id="pv-cat-heading">Resources organised<br /><em>by what you're hiring for.</em></h2>
      </div>
      <div className="pv-cats-grid pv-reveal">
        {categories.map(({ Icon, h, d, id }) => (
          <a key={id} href={`#${id}`} className="pv-cat" data-testid={`pv-cat-${id}`}>
            <span className="pv-cat-icon"><Icon size={20} /></span>
            <h4>{h}</h4>
            <p>{d}</p>
            <span className="pv-cat-link">Explore <ArrowRight /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== Articles grid ======================== */
const ArticleArt = ({ Icon, color }) => (
  <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="40" fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="2 4" opacity="0.4" /><circle cx="60" cy="60" r="22" fill={color} opacity="0.25" /><g transform="translate(42 42)"><Icon size={36} color={color} /></g></svg>
);

const articles = [
  { art: "a1", Icon: Lightbulb, color: "#4F7A6D", cat: "Hiring guides", h: "Writing interview questions that signal, not noise.", d: "How to craft prompts that reveal real reasoning instead of rehearsed answers.", meta: "8 min read" },
  { art: "a2", Icon: Sparkles, color: "#123B3F", cat: "AI interviews", h: "What adaptive interviews actually look like.", d: "A walkthrough of how an AI interviewer should (and shouldn't) follow up on an answer.", meta: "6 min read" },
  { art: "a3", Icon: ClipboardCheck, color: "#A9CBB9", cat: "Evaluation", h: "Competency scorecards without the guesswork.", d: "Why evidence-first scorecards reduce bias and speed up decision-making.", meta: "10 min read" },
  { art: "a4", Icon: Zap, color: "#E85547", cat: "Operations", h: "Running high-volume hiring with consistency.", d: "A framework for keeping evaluation consistent when the funnel is wide.", meta: "7 min read" },
  { art: "a5", Icon: TrendingUp, color: "#4F7A6D", cat: "Hiring guides", h: "Signals that actually predict job performance.", d: "A short survey of what research says — and doesn't — about predictive hiring signals.", meta: "9 min read" },
  { art: "a6", Icon: FileText, color: "#A9CBB9", cat: "AI interviews", h: "Transcripts, evidence, and the audit trail.", d: "Why keeping the full conversation matters more than keeping the score.", meta: "5 min read" },
];

const Articles = () => (
  <section className="pv-section cream" aria-labelledby="pv-art-heading" id="articles">
    <div className="pv-container">
      <div className="pv-benefits-head pv-reveal" style={{ textAlign: "left", alignItems: "flex-start", margin: "0 0 44px", flexDirection: "row", justifyContent: "space-between", width: "100%", maxWidth: "none" }}>
        <div>
          <span className="pv-eyebrow">Latest</span>
          <h2 className="pv-h2" id="pv-art-heading" style={{ marginTop: 12 }}>Fresh thinking on hiring.</h2>
        </div>
      </div>
      <div className="pv-articles-grid pv-reveal">
        {articles.map((a, i) => (
          <a key={i} className="pv-article" href="#" data-testid={`pv-article-${i}`}>
            <div className={`pv-article-art ${a.art}`}>
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <circle cx="60" cy="60" r="40" fill="none" stroke={a.color} strokeWidth="1.2" strokeDasharray="2 4" opacity="0.5" />
                <circle cx="60" cy="60" r="26" fill={a.color} opacity="0.28" />
                <foreignObject x="42" y="42" width="36" height="36"><div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: a.color }}><a.Icon size={36} /></div></foreignObject>
              </svg>
            </div>
            <div className="pv-article-body">
              <span className="pv-article-cat">{a.cat}</span>
              <h4>{a.h}</h4>
              <p>{a.d}</p>
              <span className="pv-sample-tag">Sample content</span>
              <span className="pv-article-meta">{a.meta}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ======================== Page ======================== */
export default function ResourcesPage() {
  useReveal();
  const { openDemo, demoOpen, closeDemo } = useDemo();
  useEffect(() => { document.title = "Pivvix — Resources"; }, []);
  return (
    <div className="pv-root" data-testid="pv-resources">
      <SharedHeader active="resources" onDemo={openDemo} />
      <main>
        <ResourcesHero />
        <FeaturedArticle />
        <Categories />
        <Articles />
        <CTABand eyebrow="Ready to see Pivvix in action?" heading="Make your next hiring decision" headingEm="a better one." lead="Explore how Pivvix connects interviews, evaluation, and evidence." onDemo={openDemo} />
      </main>
      <SharedFooter onDemo={openDemo} />
      <DemoDialog open={demoOpen} onClose={closeDemo} />
    </div>
  );
}
