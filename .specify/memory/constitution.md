<!--
SYNC IMPACT REPORT
==================
Version change: 1.0.0 → 1.1.0 (Identity update + RAGBot integration)
Modified principles: Content Discipline (added identity + RAGBot), Technical Standards (added RAGBot component)
Added sections:
  - Identity Update (developer name, pronouns, first-person voice)
  - RAGBot — Zainab's Portfolio Assistant (AI chat widget specification)
Removed sections: None
Templates requiring updates: None
Follow-up TODOs: None
-->

# My Portfolio Constitution

## Core Principles

### I. Conversion-First
Every section must serve the primary goal: convert visitors (clients, recruiters, collaborators) into leads. Nothing decorative without purpose. Each component must have a clear call-to-action or value proposition that moves users toward contact.

**Rationale**: Portfolio exists to generate opportunities, not to showcase artistic experimentation.

### II. Single-Page Architecture
The entire site is a single scrollable page with sticky navigation. No sub-pages, no nested routes. All information accessible within one continuous experience. Sections: Navbar, Hero, About, Skills, Services, Projects, Testimonials, Contact, Footer.

**Rationale**: Reduces friction, maintains context, matches modern portfolio expectations.

### III. Dark-First Design
Background: #0a0a0a (near black). Surfaces: #111111 / #1a1a1a. Primary accent: #6C63FF (purple) for CTAs/highlights. Secondary accent: #00D9A6 (teal) for tags/badges. Text: #F5F5F5 (primary), #888888 (secondary). Borders: #222222. Subtle gradients only on accents—no loud colors.

**Rationale**: Professional, modern aesthetic that reduces eye strain and matches developer tooling environments.

### IV. Performance Budget
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Lighthouse score > 90
- No heavy libraries beyond Framer Motion
- Static site only—no backend overhead
- Deployment target: Vercel for edge optimization

**Rationale**: Visitors expect instant loading; performance signals technical competence.

### V. Mobile-First Responsiveness
Fully responsive design starting from mobile breakpoints. Touch-friendly tap targets (44px minimum). Readable typography at all sizes (16px base). No horizontal scrolling. Navigation collapses to hamburger menu on small screens.

**Rationale**: 40%+ of traffic comes from mobile devices; responsive design is non-negotiable.

### VI. Content Discipline
All placeholder text must be realistic and relevant to a Full-Stack AI Developer based in Karachi, Pakistan. Project cards reflect: ecommerce builds, chatbot projects, RAG systems, web apps. Copy is tight—no filler paragraphs, no buzzword soup. Tone: professional, confident, modern.

**Rationale**: Authentic content builds credibility; generic templates signal low effort.

### VII. Tech Stack Lock
Framework: Next.js 14 with App Router. Styling: Tailwind CSS. Animations: Framer Motion. Icons: Lucide React. Typography: Geist Sans (headings) + Inter (body). No backend needed. Component structure: every section in its own component file under `/components`. Global styles in `globals.css`. No inline style soup.

**Rationale**: Constrained stack ensures maintainability and demonstrates focused expertise.

## Design Standards

**Inspiration**: fatimamujahid.vercel.app — clean, result-driven, Next.js aesthetic.

**Motion**: Framer Motion with subtle entry animations only. No gimmicks, no excessive movement. Animations must enhance usability, not distract.

**Layout**: Section-based with clear visual hierarchy. Sticky navbar persists across scroll. Generous whitespace between sections (80-120px desktop, 40-60px mobile).

**Typography**:
- Headings: Geist Sans (700 weight for H1, 600 for H2-H4)
- Body: Inter (400 regular, 500 medium for emphasis)
- Base size: 16px
- Line height: 1.6 for body, 1.2 for headings

## Identity Update

- **Developer name**: Zainab Ashraf
- **Gender**: Female — use "she/her" in all placeholder copy and bio text
- **Voice**: The portfolio owner IS the developer — write all content in first person ("I build", "My work", "I help")

## Content Standards

**Hero Section**: Bold headline stating value proposition. Subline with specific expertise. Two CTA buttons (primary: "View Projects", secondary: "Contact Me"). All copy in first person.

**About Section**: Short bio paragraph (3-4 sentences) + profile image placeholder. Mention Karachi location, Full-Stack AI Developer identity, core services. Written in first person with she/her pronouns in any third-party references.

**Skills Section**: Tech stack badges with icons: Next.js, Python, FastAPI, Docker, PostgreSQL, OpenAI. Organized by category (Frontend, Backend, AI/ML, DevOps).

**Services Section**: 4 cards with clear value propositions:
1. Ecommerce Sites — "Full-stack online stores with payment integration"
2. Business Websites — "Professional sites that convert visitors to customers"
3. AI Chatbots — "Intelligent assistants powered by OpenAI"
4. RAG Systems — "Custom knowledge bases with retrieval-augmented generation"

**Projects Section**: 3-5 project cards. Each includes: title, description (2-3 sentences), tech tags, live demo link, GitHub link. Projects must reflect actual service offerings.

**Testimonials Section**: 2-3 quote cards with placeholder content. Format: quote, client name, company/role.

**RAGBot — Zainab's Portfolio Assistant**: A floating AI chat widget in the bottom-right corner that answers visitor questions about Zainab's skills, services, projects, availability, and how to hire her.
- **Widget name**: "Ask Zainab"
- **Trigger**: Floating button (bottom-right) with purple background and MessageCircle icon
- **Behavior**: Opens chat drawer/popup on click; greets visitors with "Hi! I'm Zainab's AI assistant. Ask me anything about her work, skills, or how to hire her."
- **Knowledge base**: Zainab's bio, skills, services, project descriptions, FAQs
- **Fallback**: If unable to answer, responds with "I'll let Zainab know you asked — you can also reach her at [email]"
- **Implementation**: Frontend chat UI in React (Phase 1); mock API responses initially; wire to real FastAPI backend in Phase 11

**Contact Section**: Clear CTA headline. Email button (mailto:). Social links: GitHub, LinkedIn, WhatsApp.

**Footer**: Name, "Built with Next.js & Tailwind CSS", copyright year.

## Technical Standards

**Project Structure**:
```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── services.tsx
│   ├── projects.tsx
│   ├── testimonials.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   └── ragbot/
│       ├── RAGBotWidget.tsx
│       ├── RAGBotChat.tsx
│       └── useRAGBot.ts
├── public/
│   └── images/
└── package.json
```

**Code Quality**:
- TypeScript strict mode enabled
- ESLint with Next.js recommended config
- Prettier for consistent formatting
- Components: functional with hooks only
- Props: typed interfaces in separate types file
- No `any` types without explicit justification

**Accessibility**:
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratio > 4.5:1
- Alt text on all images

## Governance

**Compliance**: All development work must verify adherence to these principles. Code reviews check for constitution violations before merge.

**Amendment Process**: Changes require:
1. Documented rationale in commit message
2. Version bump according to semantic versioning
3. Update to "Last Amended" date

**Versioning Policy**:
- MAJOR: Backward incompatible changes (section removal, principle redefinition)
- MINOR: New sections/principles added, material expansions
- PATCH: Clarifications, wording improvements, typo fixes

**Review Cadence**: Constitution reviewed quarterly or before major redesign initiatives.

**Version**: 1.1.0 | **Ratified**: 2026-04-02 | **Last Amended**: 2026-04-02
