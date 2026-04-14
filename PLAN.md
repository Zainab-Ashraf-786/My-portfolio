# PLAN.md

## Rules for this build
- Follow SPEC.md as the single source of truth
- Build one component at a time, in order
- After each component, stop and wait for approval
- Never skip ahead or bundle multiple components in one step
- If something in SPEC.md is ambiguous, ask before assuming
- Every component must work in isolation before moving to next

---

## Phase 0 — Project Bootstrap
Tasks:
  [ ] 0.1 — Init Next.js 14 with App Router + TypeScript
        command: npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
  [ ] 0.2 — Install dependencies
        npm install framer-motion lucide-react
        npm install -D @types/node
  [ ] 0.3 — Install Geist font
        npm install geist
  [ ] 0.4 — Clean boilerplate
        - Delete default page.tsx content
        - Delete globals.css default styles
        - Delete public/vercel.svg and next.svg
  [ ] 0.5 — Setup globals.css
        - Define all CSS variables from SPEC.md design tokens
        - Base body styles: bg-primary, text-primary, font-body
        - Custom scrollbar styling
        - Smooth scroll: html { scroll-behavior: smooth }
  [ ] 0.6 — Setup layout.tsx
        - Import Geist + Inter fonts
        - Add metadata (title, description, og tags)
        - Wrap children in font variables
  [ ] 0.7 — Setup lib/data.ts
        - Export all static data: skills, services, projects, testimonials
        - Use exact structure defined in SPEC.md
  [ ] 0.8 — Setup page.tsx shell
        - Import all 9 components (they don't exist yet, comment them out)
        - Add section id anchors ready for smooth scroll

Completion check: `npm run dev` runs without errors on localhost:3000

---

## Phase 1 — Navbar
File: src/components/Navbar.tsx

Tasks:
  [ ] 1.1 — Static navbar structure
        - Logo text left, nav links center-right, Hire Me button far right
        - All links are anchor tags pointing to section IDs
  [ ] 1.2 — Scroll behavior
        - useEffect + useState to detect scroll position
        - Add backdrop-blur + border-bottom when scrolled past 50px
  [ ] 1.3 — Mobile hamburger menu
        - useState for open/close toggle
        - Slide-down mobile nav with all links
        - Close menu on link click
  [ ] 1.4 — Active link highlight
        - Highlight nav link based on which section is in viewport
        - Use IntersectionObserver

Completion check: Navbar renders, scroll effect works, mobile menu opens/closes

---

## Phase 2 — Hero
File: src/components/Hero.tsx

Tasks:
  [ ] 2.1 — Static layout
        - Full viewport height, centered content
        - Teal badge label, H1 headline, subline, two CTA buttons
  [ ] 2.2 — Background effect
        - Subtle CSS animated gradient orbs (purple + teal, low opacity)
        - Pure CSS keyframes — no canvas, no library
  [ ] 2.3 — Framer Motion animations
        - Staggered fade-up on: badge → H1 → subline → buttons
        - initial: { opacity: 0, y: 30 } → animate: { opacity: 1, y: 0 }
  [ ] 2.4 — Button behavior
        - "View My Work" → smooth scroll to #projects
        - "Let's Talk" → smooth scroll to #contact

Completion check: Hero renders full viewport, animations play on load, buttons scroll correctly

---

## Phase 3 — About
File: src/components/About.tsx

Tasks:
  [ ] 3.1 — Two column layout
        - Left: image placeholder (rounded-2xl, purple border glow, aspect-square)
        - Right: label, H2, paragraphs, stat chips
  [ ] 3.2 — Stat chips
        - "2+ Years Exp." | "15+ Projects" | "5+ Happy Clients"
        - Chip style: bg-elevated, border, rounded-full, accent color number
  [ ] 3.3 — Framer Motion
        - Image slides in from left on scroll (whileInView)
        - Text slides in from right on scroll (whileInView)
        - viewport: { once: true }
  [ ] 3.4 — Mobile stack
        - Stacks to single column on mobile
        - Image on top, text below

Completion check: Two col on desktop, stacked on mobile, animations trigger once on scroll

---

## Phase 4 — Skills
File: src/components/Skills.tsx

Tasks:
  [ ] 4.1 — Read skills data from lib/data.ts
  [ ] 4.2 — Category group layout
        - Render each category as a labeled group
        - Category label: small uppercase text, text-muted
  [ ] 4.3 — Badge component
        - Each skill: rounded-full chip, bg-elevated, border
        - Icon: use Lucide or a simple colored dot if no icon matches
  [ ] 4.4 — Framer Motion
        - Stagger badges in per group on scroll
        - staggerChildren: 0.05 for fast stagger

Completion check: All skills render grouped, badges styled correctly, stagger animation works

---

## Phase 5 — Services
File: src/components/Services.tsx

Tasks:
  [ ] 5.1 — Read services from lib/data.ts
  [ ] 5.2 — 2x2 grid layout (desktop), 1 col (mobile)
  [ ] 5.3 — Service card component
        - Icon (Lucide), title, description, tech tags
        - Tag style: small rounded-full chips, teal color
  [ ] 5.4 — Hover effect
        - Card lifts on hover: hover:-translate-y-1
        - Border glows accent-purple on hover
        - Transition: transition-all duration-300
  [ ] 5.5 — Framer Motion
        - Cards stagger in on scroll
        - staggerChildren: 0.1

Completion check: 4 cards in 2x2 grid, hover glow works, responsive

---

## Phase 6 — Projects
File: src/components/Projects.tsx

Tasks:
  [ ] 6.1 — Read projects from lib/data.ts
  [ ] 6.2 — Card layout
        - Image placeholder top (16:9, bg-elevated, rounded-t-2xl)
        - Body: title + description
        - Footer: tech tag chips + GitHub/Live icon buttons
  [ ] 6.3 — Image placeholder
        - bg-elevated rectangle with a subtle grid pattern or gradient
        - Project name overlaid in center
  [ ] 6.4 — Hover effect
        - Card scales: hover:scale-[1.02]
        - Transition: transition-transform duration-300
  [ ] 6.5 — Framer Motion
        - Cards stagger in on scroll

Completion check: 4 project cards render, image placeholders look intentional, links work

---

## Phase 7 — Testimonials
File: src/components/Testimonials.tsx

Tasks:
  [ ] 7.1 — Read testimonials from lib/data.ts
  [ ] 7.2 — Card layout
        - Large quote icon (teal, top-left)
        - Italic quote text
        - Avatar placeholder circle + name + role
  [ ] 7.3 — 3 col grid (desktop), 1 col (mobile)
  [ ] 7.4 — Framer Motion
        - Stagger cards in on scroll

Completion check: 3 testimonial cards render, responsive, styled correctly

---

## Phase 8 — Contact
File: src/components/Contact.tsx

Tasks:
  [ ] 8.1 — Centered layout, full width section
  [ ] 8.2 — H2 headline + subline
  [ ] 8.3 — Email CTA button
        - href="mailto:[your-email]"
        - accent-purple bg, hover glow effect
        - Icon: Mail from Lucide, left of text
  [ ] 8.4 — Social links row
        - GitHub, LinkedIn, WhatsApp icon buttons
        - Icon only, rounded, border, hover accent color
        - Open in new tab
  [ ] 8.5 — Framer Motion
        - Fade up on scroll

Completion check: Email button opens mail client, social links open correct URLs, responsive

---

## Phase 9 — Footer
File: src/components/Footer.tsx

Tasks:
  [ ] 9.1 — Three column row: copyright left, tagline center, icons right
  [ ] 9.2 — border-top, text-muted, small font size
  [ ] 9.3 — Mobile: stack to single centered column
  [ ] 9.4 — No animations

Completion check: Footer renders, responsive, no errors

---

## Phase 6.5 — ChatWidget (Floating RAG Assistant)
File: src/components/ChatWidget.tsx

Tasks:
  [ ] 6.5.1 — Floating trigger button
        - Fixed bottom-right: bottom-6 right-6
        - 56px circle, bg-accent-purple, shadow-lg
        - MessageCircle icon, white, 24px
        - Pulse animation ring on first load to draw attention
        - onClick: toggles isOpen state

  [ ] 6.5.2 — Chat drawer UI
        - Fixed position, bottom-24 right-6
        - 380px wide, 520px tall, bg-surface, border, rounded-2xl
        - Framer Motion: AnimatePresence with scale + opacity enter/exit
        - Header: avatar + name + close button
        - Messages area: scrollable, auto-scroll to bottom on new message
        - Input area: text input + send button

  [ ] 6.5.3 — Message rendering
        - Map over messages array
        - Bot: left-aligned bubble, bg-elevated
        - User: right-aligned bubble, bg-accent-purple, white text
        - Typing indicator: animated 3 dots when isLoading is true

  [ ] 6.5.4 — Mock API wiring
        - On send: push user message to state
        - Set isLoading true
        - Simulate 1000ms delay
        - Push mock bot reply: "Great question! Zainab specializes in
          Next.js, FastAPI, and AI-powered systems. Want to know more
          about a specific skill or project?"
        - Set isLoading false
        - Clear input

  [ ] 6.5.5 — Mobile responsive
        - On mobile (< 640px): drawer goes w-[calc(100vw-32px)], h-[70vh]
        - Adjust bottom/right positioning for mobile

  [ ] 6.5.6 — Real API wiring (Phase 11 — do not build now)
        - Replace mock delay with real fetch to POST /api/chat
        - This is wired after FastAPI backend is deployed

Completion check:
  - Widget button visible on all pages bottom-right
  - Click opens chat drawer with animation
  - First bot message auto-appears
  - User can type and send a message
  - Mock reply appears after loading indicator
  - Closes cleanly on X button click
  - Works on mobile

---

## Phase 10 — Integration & QA
Tasks:
  [ ] 10.1 — Uncomment all imports in page.tsx
        - Verify all sections render in correct order
        - Verify section IDs match navbar anchor links
  [ ] 10.2 — Smooth scroll QA
        - Click every nav link, confirm scrolls to correct section
  [ ] 10.3 — Responsive QA
        - Check 375px, 768px, 1280px breakpoints
        - No horizontal overflow anywhere
  [ ] 10.4 — Animation QA
        - All whileInView animations trigger correctly
        - No animation plays before element is in viewport
  [ ] 10.5 — Console QA
        - Zero console errors
        - Zero TypeScript errors (npm run build must pass)
  [ ] 10.6 — Lighthouse run
        - Performance > 90
        - Accessibility > 90
        - Fix any flagged issues

---

## Phase 11 — Deploy
Tasks:
  [ ] 11.1 — Push to GitHub repo
  [ ] 11.2 — Connect repo to Vercel
  [ ] 11.3 — Set environment variables if any
  [ ] 11.4 — Trigger deploy, verify live URL works
  [ ] 11.5 — Test live URL on mobile device
  [ ] 11.6 — Add custom domain if available

---

## Build Order Summary
Phase 0 → Bootstrap
Phase 1 → Navbar
Phase 2 → Hero
Phase 3 → About
Phase 4 → Skills
Phase 5 → Services
Phase 6 → Projects
Phase 6.5 → ChatWidget
Phase 7 → Testimonials
Phase 8 → Contact
Phase 9 → Footer
Phase 10 → Integration + QA
Phase 11 → Deploy

## Agent Rules (repeat for emphasis)
- One phase at a time
- Stop after each phase and confirm completion check passes
- Never skip a completion check
- If a check fails, fix it before moving forward
- Ask if unclear, never assume
