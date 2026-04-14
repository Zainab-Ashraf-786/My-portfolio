---
id: 0001
title: portfolio-constitution-initial
stage: constitution
date: 2026-04-02
surface: agent
model: qwen-coder-plus
feature: portfolio-website
branch: master
user: Admin
command: /sp.constitution
labels: ["constitution", "portfolio", "nextjs", "design-system"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - N/A (constitution document creation)
---

## Prompt

You are building a personal developer portfolio website. Before writing any code, internalize this constitution fully.

## IDENTITY
- Developer: Full-Stack AI Developer based in Karachi, Pakistan
- Stack: Next.js, Docker, OpenAI Agents SDK, Python, FastAPI, PostgreSQL
- Services: Ecommerce websites, business websites, chatbot integration, RAG chatbot systems
- Tone: Professional, confident, modern — not flashy, not minimal to the point of boring

## SITE GOAL
Convert visitors (clients, recruiters, collaborators) into leads.
Every section must serve this goal. Nothing decorative without purpose.

## DESIGN CONSTITUTION
- Inspiration: fatimamujahid.vercel.app — clean, result-driven, Next.js aesthetic
- Style: Dark-first design, subtle gradients only on accents, no loud colors
- Typography: Geist Sans (headings) + Inter (body)
- Motion: Framer Motion — subtle entry animations, no gimmicks
- Layout: Single-page scrollable, section-based, sticky navbar
- Mobile: Fully responsive, mobile-first

## COLOR PALETTE
- Background: #0a0a0a (near black)
- Surface: #111111 / #1a1a1a
- Primary accent: #6C63FF (purple) — used for CTAs, highlights
- Secondary accent: #00D9A6 (teal) — used for tags, badges
- Text primary: #F5F5F5
- Text secondary: #888888
- Border: #222222

## SECTIONS (in order)
1. Navbar — logo/name left, nav links right, "Hire Me" CTA button
2. Hero — bold headline, subline, two CTA buttons, subtle animated background
3. About — short bio paragraph + profile image placeholder
4. Skills — tech stack badges with icons (Next.js, Python, FastAPI, Docker, PostgreSQL, OpenAI)
5. Services — 4 cards: Ecommerce Sites, Business Websites, AI Chatbots, RAG Systems
6. Projects — 3-5 project cards with title, description, tech tags, live/GitHub links
7. Testimonials — 2-3 quote cards (placeholder content ok)
8. Contact — headline CTA, email button, social links (GitHub, LinkedIn, WhatsApp)
9. Footer — name, built-with note, copyright

## TECH DECISIONS
- Framework: Next.js 14 with App Router
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Deployment target: Vercel
- No backend needed — static site only

## CONTENT RULES
- All placeholder text must be realistic and relevant to a developer from Karachi
- Project cards should reflect: ecommerce builds, chatbot projects, RAG systems, web apps
- Keep copy tight — no filler paragraphs, no buzzword soup

## WHAT YOU MUST NOT DO
- Do not use template-looking layouts (e.g. generic hero with stock photo)
- Do not use heavy libraries beyond Framer Motion
- Do not add unnecessary pages — single page only
- Do not use default Next.js boilerplate styling
- Do not skip mobile responsiveness

## OUTPUT EXPECTATION
A production-ready, visually polished, single-page Next.js 14 portfolio. 
Clean component structure. Every section in its own component file under /components.
Global styles in globals.css. No inline style soup.

When ready to start, confirm you have understood this constitution and list the file structure you plan to create before writing a single line of code.

## Response snapshot

Created initial project constitution (v1.0.0) at `.specify/memory/constitution.md` with 7 core principles:
1. Conversion-First - Every section drives lead generation
2. Single-Page Architecture - One scrollable page, no sub-pages
3. Dark-First Design - Specific color palette with purple/teal accents
4. Performance Budget - FCP <1.5s, TTI <3s, Lighthouse >90
5. Mobile-First Responsiveness - Touch-friendly, 16px base, hamburger nav
6. Content Discipline - Realistic Karachi-based developer content
7. Tech Stack Lock - Next.js 14, Tailwind CSS, Framer Motion, Lucide React

Added supporting sections: Design Standards (typography, motion, layout), Content Standards (section-by-section guidance), Technical Standards (project structure, code quality, accessibility), and Governance (amendment process, versioning policy).

Validated alignment with existing templates (plan-template.md, spec-template.md, tasks-template.md) - all compatible with constitution principles.

## Outcome

- ✅ Impact: Established foundational design and technical principles for portfolio website; enables consistent decision-making during implementation
- 🧪 Tests: N/A (constitution document - validation via template alignment check)
- 📁 Files: Created/updated `.specify/memory/constitution.md` (1 file)
- 🔁 Next prompts: Implement feature specification (`/sp.specify`), create architecture plan (`/sp.plan`), generate tasks (`/sp.tasks`)
- 🧠 Reflection: Constitution captures all user requirements while maintaining flexibility for implementation details; color palette and tech stack are locked to prevent scope creep

## Evaluation notes (flywheel)

- Failure modes observed: None - straightforward constitution creation from detailed user input
- Graders run and results (PASS/FAIL): N/A (no grader configured for constitution stage)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
