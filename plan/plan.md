# AI Hiring Platform — Website Proposal

A public website that introduces a more thoughtful way for companies to hire and candidates to navigate their careers.
Its first release builds trust, explains the two-sided vision, and lets each audience join an early-access waitlist.

## Who it's for

- **Hiring teams and recruiters** looking for clearer job descriptions and more useful, human-reviewed insights into candidate-to-job fit.
- **Candidates** who want a future place to improve resumes and keep track of their applications and hiring progress.
- **Company decision-makers** assessing whether the platform is trustworthy, practical, and respectful of candidate data.

## Core features and experience

- **Clear positioning:** “AI helps you move hiring forward. People make the decisions.” The website describes the intended product without presenting future tools as already available.
- **Distinct audience paths:** A shared homepage leads to dedicated *For Employers* and *For Candidates* pages. Employer content leads with the planned job-post drafting and candidate-fit review; candidate content previews future resume guidance and application tracking.
- **An approach page:** Brief, plain-language principles on human oversight, responsible AI use, and candidate privacy. Avoid invented testimonials, performance claims, or guarantees.
- **A working early-access waitlist:** Visitors select employer or candidate, enter name and email, and—if an employer—may add a company name. They receive an on-page success message, with clear feedback for invalid or duplicate entries.
- **Useful supporting content:** A short FAQ distinguishes what the platform aims to offer from what is available at launch. Navigation and calls to action lead naturally to the right audience page or waitlist form.
- **No account, resume upload, hiring workflow, or live AI tool in the first release.** The first release is a website and waitlist, not a simulation of a finished hiring product.

## User flow

1. A visitor arrives at the homepage, sees the core promise, and chooses **I'm hiring** or **I'm a candidate**.
2. They scan their audience-specific page to understand the relevant future benefits and the platform's human-led approach.
3. They follow a **Join early access** call to action, complete the short form, and see a confirmation on the page.
4. If they return or make a mistake, the form explains what happened rather than silently failing.

## UI/UX feel

- **Editorial and credible, rather than generic “AI startup.”** Expressive but legible typography; crisp white and charcoal foundations with confident green and sparing coral accents.
- **People-centered imagery:** Authentic, diverse workplace and career imagery that shows real recruiting contexts, not abstract robots or vague tech graphics.
- **Confident first impression:** A concise, image-led homepage opening, followed by visible employer and candidate paths; audience pages provide focused detail instead of crowding everything into one screen.
- **Accessible and responsive:** Readable contrast, clear focus states, comfortable mobile layouts, restrained motion, and short forms with helpful labels and errors.

## Implementation phases

1. **Phase 1 — Website MVP (the only phase to build after this proposal is approved):** Public homepage, employer page, candidate page, approach/FAQ content, and a functioning audience-specific waitlist. Future product capabilities are clearly labeled as coming later.
2. **Phase 2 — Employer tools:** Secure employer access, AI-assisted job-post drafting, and evidence-based candidate-to-job fit review using information an employer is authorized to provide. The preferred text model is **GPT 5.6 Terra via the Emergent LLM key**. AI offers explanations and limitations; people retain every hiring decision.
3. **Phase 3 — Candidate workspace:** Resume editing support, application and hiring-stage tracking, and candidate-facing visibility into relevant opportunities. Define candidate consent, data controls, and any employer-to-candidate information sharing before building these workflows.

## Assumptions

- This is a **discussion proposal only**; development begins only after the website direction is finalized and approved.
- The public website is English-first. The company name, logo, and final brand copy are not yet supplied, so their presentation remains easy to replace.
- An employer-first product story reflects the stated AI priority, but candidates receive an equally clear route to the waitlist and future vision.
- The waitlist collects only the short form details above; it does not collect resumes or sensitive hiring information. Initial confirmation is on the website, without an automated email sequence.
- AI is **not active on the public site** in Phase 1. The chosen model is reserved for Phase 2, so early visitors are not led to expect an interactive AI demo.
- No testimonials, customer logos, outcome statistics, or compliance certifications appear unless genuine, approved materials are provided.
- Candidate-fit guidance is advisory, should not use protected characteristics, and must not automatically reject or select applicants.