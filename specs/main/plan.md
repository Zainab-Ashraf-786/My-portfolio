# Implementation Plan: Portfolio Website

**Branch**: `main` | **Date**: 2026-04-02 | **Spec**: `/specs/1-portfolio-website/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a single-page personal portfolio for Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan. The site uses Next.js 14 with App Router, Tailwind CSS for styling, and Framer Motion for subtle entrance animations. Key features include a fixed navbar with smooth scroll navigation, 9 content sections (Hero, About, Skills, Services, Projects, Testimonials, Contact, Footer), and a floating AI chat widget "Ask Zainab" that answers visitor questions using mock responses initially (real RAG backend wired in Phase 11).

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 18+
**Primary Dependencies**: Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lucide React, Geist font
**Storage**: Static JSON data in `lib/data.ts` (no database)
**Testing**: Manual QA + Lighthouse audits (no automated test suite required per spec)
**Target Platform**: Web (desktop + mobile responsive)
**Project Type**: Single-page static site
**Performance Goals**: FCP < 1.5s, TTI < 3s, Lighthouse Performance > 90
**Constraints**: No heavy libraries beyond Framer Motion, no backend overhead, dark-first design with specific color palette
**Scale/Scope**: 9 sections, 11 components, static deployment to Vercel

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Constitution Principle | Compliance Check |
|------------------------|------------------|
| **I. Conversion-First** | ✅ Every section has clear CTA or value prop; Hero has 2 CTAs, Contact has email + social links |
| **II. Single-Page Architecture** | ✅ All 9 sections in one scrollable page with sticky navbar |
| **III. Dark-First Design** | ✅ Background #0a0a0a, surfaces #111111/#1a1a1a, purple + teal accents |
| **IV. Performance Budget** | ✅ Static site, no heavy libs, Vercel deployment, FCP/TTI targets defined |
| **V. Mobile-First Responsiveness** | ✅ Responsive breakpoints (375px, 768px, 1280px), touch-friendly tap targets |
| **VI. Content Discipline** | ✅ First-person voice, realistic placeholder content for Karachi-based AI developer |
| **VII. Tech Stack Lock** | ✅ Next.js 14, Tailwind, Framer Motion, Lucide, Geist + Inter fonts |
| **Identity: She/Her Pronouns** | ✅ All third-party references use "she/her"; first-person "I build" voice |
| **RAGBot Integration** | ✅ Floating chat widget with mock API, wired to backend in Phase 11 |

**Gate Status**: ✅ PASS — All constitution principles satisfied

## Project Structure

### Documentation (this feature)

```text
specs/1-portfolio-website/
├── spec.md              # Feature specification
├── plan.md              # This file (implementation plan)
├── research.md          # Phase 0 output (technology decisions)
├── data-model.md        # Phase 1 output (entity definitions)
├── quickstart.md        # Phase 1 output (setup instructions)
├── contracts/           # Phase 1 output (API schemas)
│   └── chat-api.yaml    # Chat widget API contract (Phase 11)
└── tasks.md             # Phase 2 output (task breakdown)
```

### Source Code (repository root)

```text
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with fonts + metadata
│   ├── page.tsx         # Main page composing all sections
│   └── globals.css      # Tailwind + design tokens
├── components/
│   ├── Navbar.tsx       # Fixed navbar with scroll behavior
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── About.tsx        # Bio + stats
│   ├── Skills.tsx       # Skill badges by category
│   ├── Services.tsx     # Service cards
│   ├── Projects.tsx     # Project cards
│   ├── Testimonials.tsx # Testimonial quote cards
│   ├── Contact.tsx      # Email + social links
│   ├── Footer.tsx       # Footer row
│   └── ChatWidget.tsx   # Floating RAG chat widget
├── lib/
│   └── data.ts          # Static data exports
├── public/
│   └── images/          # Profile + project images
└── package.json
```

**Structure Decision**: Single project structure (Option 1) chosen. All components co-located under `/components` for simplicity. No backend required until Phase 11 (chat API wiring).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations detected. All constitution principles satisfied without justification needed.
