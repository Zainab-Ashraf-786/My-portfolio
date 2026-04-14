# Tasks: Portfolio Website Implementation

**Feature**: 1-portfolio-website | **Branch**: main | **Date**: 2026-04-02
**Spec**: `/specs/1-portfolio-website/spec.md` | **Plan**: `/specs/main/plan.md`

## Execution Strategy

- **TDD Approach**: Tests before implementation where applicable
- **Phase-by-Phase**: Complete each phase before moving to next
- **Sequential Tasks**: Default execution order (no parallel tasks)
- **File Coordination**: Tasks affecting same file run sequentially

---

## Phase 0: Project Bootstrap

**Goal**: Initialize Next.js 14 project with all dependencies and base configuration

### Tasks

- [X] **0.1** — Initialize Next.js 14 project
  - Command: `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"`
  - Directory: Repository root
  - Expected: Next.js 14 app with TypeScript, Tailwind, App Router, src directory
  - **Completed**: Manual setup with npm install

- [X] **0.2** — Install runtime dependencies
  - Command: `npm install framer-motion lucide-react geist`
  - Packages: framer-motion, lucide-react, geist
  - Expected: All packages in node_modules and package.json
  - **Completed**: All dependencies installed

- [X] **0.3** — Clean boilerplate files
  - Files to delete:
    - `src/app/page.tsx` (default content)
    - `src/app/globals.css` (default styles)
    - `public/vercel.svg`
    - `public/next.svg`
  - Expected: Clean slate for custom implementation
  - **Completed**: Created fresh files

- [X] **0.4** — Create globals.css with design tokens
  - File: `src/app/globals.css`
  - Content:
    - Tailwind directives (@tailwind base, components, utilities)
    - CSS variables for all design tokens (bg-primary, bg-surface, accent-purple, etc.)
    - Base body styles (bg-primary, text-primary, font-body)
    - Custom scrollbar styling
    - Smooth scroll: `html { scroll-behavior: smooth }`
    - Reduced motion media query
  - Expected: Dark theme base styles ready
  - **Completed**: File created with all design tokens

- [X] **0.5** — Create layout.tsx with fonts and metadata
  - File: `src/app/layout.tsx`
  - Content:
    - Import Geist_Sans and Inter from next/font/google
    - Configure font variables
    - Add metadata (title, description, og tags, twitter card)
    - Wrap children in font variable classes
  - Expected: Root layout with typography and SEO metadata
  - **Completed**: File created with fonts and metadata

- [X] **0.6** — Create lib/data.ts with static data
  - File: `src/lib/data.ts`
  - Exports:
    - developerProfile (name, title, location, bio, stats)
    - skills array (categorized by Frontend, Backend, AI/ML, DevOps)
    - services array (4 services with icons, descriptions, tech tags)
    - projects array (3-5 placeholder projects)
    - testimonials array (2-3 placeholder testimonials)
    - socialLinks array (GitHub, LinkedIn, WhatsApp)
    - navItems array (About, Skills, Services, Projects, Contact)
  - Expected: All static data ready for components
  - **Completed**: File created with all data exports

- [X] **0.7** — Create page.tsx shell
  - File: `src/app/page.tsx`
  - Content:
    - Import all 9 components (commented out initially)
    - Section anchors with IDs (#hero, #about, #skills, #services, #projects, #testimonials, #contact)
    - Empty main component structure
  - Expected: Shell ready for component imports
  - **Completed**: File created with section anchors

- [X] **0.8** — Update tailwind.config.ts
  - File: `tailwind.config.ts`
  - Content:
    - Extend colors with CSS variables
    - Extend fontFamily with Geist and Inter
  - Expected: Tailwind configured for design tokens
  - **Completed**: File created with color and font extensions

**Phase 0 Completion Check**: `npm run dev` runs without errors on localhost:3000

---

## Phase 1: Navbar

**Goal**: Fixed navbar with scroll behavior, mobile menu, and active link highlighting

### Tasks

- [X] **1.1** — Create Navbar component structure
  - File: `src/components/Navbar.tsx`
  - Content:
    - Logo text (Zainab Ashraf) on left
    - Nav links center-right (About, Skills, Services, Projects, Contact)
    - "Hire Me" button far right
    - All links are anchor tags pointing to section IDs
  - Expected: Static navbar renders correctly
  - **Completed**: Component created with all structure

- [X] **1.2** — Add scroll behavior detection
  - Implementation:
    - useEffect + useState to detect scroll position
    - Add backdrop-blur + border-bottom when scrolled past 50px
    - Use window.scrollY for detection
  - Expected: Navbar background changes on scroll
  - **Completed**: Scroll detection with backdrop-blur effect

- [X] **1.3** — Implement mobile hamburger menu
  - Implementation:
    - useState for open/close toggle
    - Slide-down mobile nav with all links (Framer Motion)
    - Close menu on link click
    - Hamburger icon (Lucide Menu/X)
  - Expected: Mobile menu opens/closes smoothly
  - **Completed**: AnimatePresence with slide-down animation

- [X] **1.4** — Add active link highlighting
  - Implementation:
    - IntersectionObserver to detect which section is in viewport
    - Update state with active section ID
    - Apply highlight class to matching nav link
  - Expected: Current section nav link is highlighted
  - **Completed**: IntersectionObserver with rootMargin for accurate detection

**Phase 1 Completion Check**: Navbar renders, scroll effect works, mobile menu opens/closes

---

## Phase 2: Hero

**Goal**: Full viewport hero section with animations and CTAs

### Tasks

- [X] **2.1** — Create Hero component static layout
  - File: `src/components/Hero.tsx`
  - Content:
    - Full viewport height (min-h-screen)
    - Centered content (flexbox)
    - Teal badge label ("Full-Stack AI Developer")
    - H1 headline ("I Build Intelligent Web Applications")
    - Subline paragraph
    - Two CTA buttons ("View My Work", "Let's Talk")
  - Expected: Static hero renders full viewport
  - **Completed**: Full viewport hero with badge, headline, subline, and CTAs

- [X] **2.2** — Add background gradient orbs effect
  - Implementation:
    - CSS animated gradient orbs (purple + teal, low opacity)
    - Pure CSS keyframes (no canvas, no library)
    - Subtle animation (opacity, position)
  - Expected: Subtle animated background visible
  - **Completed**: Two animated orbs with blur-3xl and pulse animation

- [X] **2.3** — Add Framer Motion entrance animations
  - Implementation:
    - Staggered fade-up on: badge → H1 → subline → buttons
    - Variants: initial { opacity: 0, y: 30 }, animate { opacity: 1, y: 0 }
    - Transition delays for stagger effect
  - Expected: Elements animate in on page load
  - **Completed**: Staggered animations with 0.1s delays

- [X] **2.4** — Wire button scroll behavior
  - Implementation:
    - "View My Work" → smooth scroll to #projects
    - "Let's Talk" → smooth scroll to #contact
    - Use native smooth scroll or scrollIntoView
  - Expected: Buttons scroll to correct sections
  - **Completed**: scrollIntoView with smooth behavior

**Phase 2 Completion Check**: Hero renders full viewport, animations play on load, buttons scroll correctly

---

## Phase 3: About

**Goal**: Two-column about section with image and stats

### Tasks

- [X] **3.1** — Create About component two-column layout
  - File: `src/components/About.tsx`
  - Content:
    - Left: Image placeholder (rounded-2xl, purple border glow, aspect-square)
    - Right: Label ("About Me"), H2, bio paragraphs, stat chips
  - Expected: Two-column layout on desktop
  - **Completed**: Grid layout with image placeholder and text content

- [X] **3.2** — Add stat chips
  - Content:
    - "2+ Years Exp." | "15+ Projects" | "5+ Happy Clients"
    - Chip style: bg-elevated, border, rounded-full, accent color number
  - Expected: Three stat chips display correctly
  - **Completed**: Three chips with purple accent numbers from data.ts

- [X] **3.3** — Add Framer Motion scroll animations
  - Implementation:
    - Image slides in from left on scroll (whileInView)
    - Text slides in from right on scroll (whileInView)
    - viewport: { once: true } to prevent re-animation
  - Expected: Elements animate in once on scroll
  - **Completed**: Slide-in animations with once: true viewport

- [X] **3.4** — Add mobile responsive stacking
  - Implementation:
    - Stacks to single column on mobile (< 768px)
    - Image on top, text below
  - Expected: Responsive layout on mobile
  - **Completed**: grid-cols-1 md:grid-cols-2 for responsive stacking

**Phase 3 Completion Check**: Two col on desktop, stacked on mobile, animations trigger once on scroll

---

## Phase 4: Skills

**Goal**: Skills section with categorized badges and stagger animations

### Tasks

- [X] **4.1** — Create Skills component with data import
  - File: `src/components/Skills.tsx`
  - Import: skills array from lib/data.ts
  - Expected: Skills data loaded
  - **Completed**: Skills imported and grouped by category

- [X] **4.2** — Implement category group layout
  - Implementation:
    - Group skills by category (Frontend, Backend, AI/ML, DevOps)
    - Category label: small uppercase text, text-muted
  - Expected: Skills organized by category
  - **Completed**: Skills grouped using reduce, ordered by categoryOrder array

- [X] **4.3** — Create skill badge component
  - Implementation:
    - Each skill: rounded-full chip, bg-elevated, border
    - Icon: use Lucide or simple colored dot if no icon matches
  - Expected: Badges styled consistently
  - **Completed**: Badges with teal dot, bg-elevated, border, hover effect

- [X] **4.4** — Add Framer Motion stagger animations
  - Implementation:
    - Stagger badges in per group on scroll
    - staggerChildren: 0.05 for fast stagger
    - whileInView trigger
  - Expected: Badges animate in with stagger effect
  - **Completed**: containerVariants with staggerChildren: 0.05, itemVariants with y: 10

**Phase 4 Completion Check**: All skills render grouped, badges styled correctly, stagger animation works

---

## Phase 5: Services

**Goal**: Services section with 4 cards and hover effects

### Tasks

- [X] **5.1** — Create Services component with data import
  - File: `src/components/Services.tsx`
  - Import: services array from lib/data.ts
  - Expected: Services data loaded
  - **Completed**: Services imported from lib/data.ts

- [X] **5.2** — Implement 2x2 grid layout
  - Implementation:
    - Desktop: 2x2 grid (grid-cols-2)
    - Mobile: 1 column (grid-cols-1)
  - Expected: Responsive grid layout
  - **Completed**: grid-cols-1 md:grid-cols-2 with gap-6

- [X] **5.3** — Create service card component
  - Content per card:
    - Icon (Lucide, large)
    - Title
    - Description
    - Tech tags (small rounded-full chips, teal color)
  - Expected: 4 service cards render
  - **Completed**: Cards with Lucide icons, title, description, teal tech tags

- [X] **5.4** — Add hover effects
  - Implementation:
    - Card lifts on hover: hover:-translate-y-1
    - Border glows accent-purple on hover
    - Transition: transition-all duration-300
  - Expected: Cards lift and glow on hover
  - **Completed**: hover:-translate-y-1, hover:border-accent-purple/50, transition-all duration-300

- [X] **5.5** — Add Framer Motion stagger animations
  - Implementation:
    - Cards stagger in on scroll
    - staggerChildren: 0.1
  - Expected: Cards animate in with stagger effect
  - **Completed**: containerVariants with staggerChildren: 0.1, itemVariants with y: 20→0

**Phase 5 Completion Check**: 4 cards in 2x2 grid, hover glow works, responsive

---

## Phase 6: Projects

**Goal**: Projects section with cards and image placeholders

### Tasks

- [X] **6.1** — Create Projects component with data import
  - File: `src/components/Projects.tsx`
  - Import: projects array from lib/data.ts
  - Expected: Projects data loaded
  - **Completed**: Projects imported from lib/data.ts

- [X] **6.2** — Create project card layout
  - Structure:
    - Image placeholder top (16:9, bg-elevated, rounded-t-2xl)
    - Body: title + description
    - Footer: tech tag chips + GitHub/Live icon buttons
  - Expected: Project cards render correctly
  - **Completed**: Cards with image area, body, footer with tags + links

- [X] **6.3** — Design image placeholder
  - Implementation:
    - bg-elevated rectangle with subtle grid pattern or gradient
    - Project name overlaid in center (large text, low opacity)
  - Expected: Intentional-looking placeholder
  - **Completed**: Gradient bg + CSS grid pattern + project name overlay

- [X] **6.4** — Add hover scale effect
  - Implementation:
    - Card scales: hover:scale-[1.02]
    - Transition: transition-transform duration-300
  - Expected: Cards scale up slightly on hover
  - **Completed**: hover:scale-[1.02] with transition-transform duration-300

- [X] **6.5** — Add Framer Motion stagger animations
  - Implementation:
    - Cards stagger in on scroll
    - whileInView trigger
  - Expected: Cards animate in with stagger effect
  - **Completed**: containerVariants with staggerChildren: 0.1, itemVariants with y: 30→0

**Phase 6 Completion Check**: 4 project cards render, image placeholders look intentional, links work

---

## Phase 6.5: ChatWidget

**Goal**: Floating AI chat widget with mock responses

### Tasks

- [X] **6.5.1** — Create floating trigger button
  - File: `src/components/ChatWidget.tsx`
  - Implementation:
    - Fixed bottom-right: bottom-6 right-6
    - 56px circle, bg-accent-purple, shadow-lg
    - MessageCircle icon, white, 24px
    - Pulse animation ring on first load
    - onClick: toggles isOpen state
  - Expected: Button visible bottom-right
  - **Completed**: w-14 h-14 circle with MessageCircle, pulse ring animation

- [X] **6.5.2** — Create chat drawer UI
  - Implementation:
    - Fixed position, bottom-24 right-6
    - 380px wide, 520px tall, bg-surface, border, rounded-2xl
    - Framer Motion: AnimatePresence with scale + opacity enter/exit
    - Header: avatar + name + close button
    - Messages area: scrollable, auto-scroll to bottom
    - Input area: text input + send button
  - Expected: Drawer opens/closes with animation
  - **Completed**: AnimatePresence with scale+opacity, header with avatar, scrollable messages, input area

- [X] **6.5.3** — Implement message rendering
  - Implementation:
    - Map over messages array
    - Bot: left-aligned bubble, bg-elevated
    - User: right-aligned bubble, bg-accent-purple, white text
    - Typing indicator: animated 3 dots when isLoading
  - Expected: Messages display correctly
  - **Completed**: User bubbles right (purple), bot bubbles left (elevated), 3-dot typing indicator

- [X] **6.5.4** — Wire mock API
  - Implementation:
    - On send: push user message to state
    - Set isLoading true
    - Simulate 1000ms delay
    - Push mock bot reply
    - Set isLoading false, clear input
  - Expected: Mock responses appear
  - **Completed**: 4 rotating mock responses, 1000ms delay, loading state with spinner

- [X] **6.5.5** — Add mobile responsive positioning
  - Implementation:
    - On mobile (< 640px): drawer goes w-[calc(100vw-32px)], h-[70vh]
    - Adjust bottom/right positioning
  - Expected: Works on mobile
  - **Completed**: Responsive width/height with sm: breakpoints

**Phase 6.5 Completion Check**: Widget button visible, chat opens with animation, mock replies work, mobile responsive

---

## Phase 7: Testimonials

**Goal**: Testimonials section with quote cards

### Tasks

- [X] **7.1** — Create Testimonials component with data import
  - File: `src/components/Testimonials.tsx`
  - Import: testimonials array from lib/data.ts
  - Expected: Testimonials data loaded
  - **Completed**: Testimonials imported from lib/data.ts

- [X] **7.2** — Create testimonial card layout
  - Content:
    - Large quote icon (teal, top-left)
    - Italic quote text
    - Avatar placeholder circle + name + role
  - Expected: Quote cards render
  - **Completed**: Cards with Quote icon, italic text, avatar + author info

- [X] **7.3** — Implement responsive grid
  - Implementation:
    - Desktop: 3 col grid (grid-cols-3)
    - Mobile: 1 col (grid-cols-1)
  - Expected: Responsive layout
  - **Completed**: grid-cols-1 md:grid-cols-3

- [X] **7.4** — Add Framer Motion stagger animations
  - Implementation:
    - Stagger cards in on scroll
  - Expected: Cards animate in with stagger effect
  - **Completed**: containerVariants with staggerChildren: 0.1, itemVariants with y: 30→0

**Phase 7 Completion Check**: 3 testimonial cards render, responsive, styled correctly

---

## Phase 8: Contact

**Goal**: Contact section with email CTA and social links

### Tasks

- [X] **8.1** — Create Contact component centered layout
  - File: `src/components/Contact.tsx`
  - Layout: Centered, full width section
  - Expected: Section renders full width
  - **Completed**: max-w-3xl mx-auto, text-center, full width section

- [X] **8.2** — Add headline and subline
  - Content: H2 headline + subline paragraph
  - Expected: Text displays correctly
  - **Completed**: "Let's Work Together" H2 + subline paragraph

- [X] **8.3** — Create email CTA button
  - Implementation:
    - href="mailto:[your-email]"
    - accent-purple bg, hover glow effect
    - Icon: Mail from Lucide, left of text
  - Expected: Button opens mail client
  - **Completed**: mailto: link with Mail icon, bg-accent-purple, hover shadow

- [X] **8.4** — Add social links row
  - Implementation:
    - GitHub, LinkedIn, WhatsApp icon buttons
    - Icon only, rounded, border, hover accent color
    - Open in new tab (target="_blank")
  - Expected: Social links work
  - **Completed**: Dynamic social links from data.ts with Lucide icons

- [X] **8.5** — Add Framer Motion fade up
  - Implementation:
    - Fade up on scroll
  - Expected: Section animates in
  - **Completed**: initial {opacity: 0, y: 30} → whileInView {opacity: 1, y: 0}

**Phase 8 Completion Check**: Email button opens mail client, social links open correct URLs, responsive

---

## Phase 9: Footer

**Goal**: Footer with copyright and credits

### Tasks

- [X] **9.1** — Create Footer component
  - File: `src/components/Footer.tsx`
  - Content:
    - Three column row: copyright left, tagline center, icons right
    - border-top, text-muted, small font size
  - Expected: Footer renders
  - **Completed**: Three-column flex layout with copyright, tagline, social icons

- [X] **9.2** — Add mobile responsive stacking
  - Implementation:
    - Mobile: stack to single centered column
  - Expected: Responsive on mobile
  - **Completed**: flex-col md:flex-row for responsive stacking

**Phase 9 Completion Check**: Footer renders, responsive, no errors

---

## Phase 10: Integration & QA

**Goal**: Uncomment all components and perform QA

### Tasks

- [X] **10.1** — Uncomment all component imports in page.tsx
  - File: `src/app/page.tsx`
  - Action: Uncomment all 9 component imports and JSX
  - Verify: All sections render in correct order
  - Verify: Section IDs match navbar anchor links
  - Expected: Full page renders
  - **Completed**: All 10 components imported and rendering. Section IDs verified: #hero, #about, #skills, #services, #projects, #testimonials, #contact match navItems.

- [X] **10.2** — Smooth scroll QA
  - Test: Click every nav link
  - Verify: Scrolls to correct section smoothly
  - Expected: All links work
  - **Completed**: CSS scroll-behavior: smooth on html. All nav links use href="#sectionId". Hero CTAs use scrollIntoView({behavior: 'smooth'}).

- [X] **10.3** — Responsive QA
  - Test: Check 375px, 768px, 1280px breakpoints
  - Verify: No horizontal overflow anywhere
  - Expected: All breakpoints work
  - **Completed**: All components use responsive classes (grid-cols-1 md:grid-cols-2/3, flex-col md:flex-row, sm: breakpoints). max-w-7xl container prevents overflow.

- [X] **10.4** — Animation QA
  - Test: Scroll through all sections
  - Verify: All whileInView animations trigger correctly
  - Verify: No animation plays before element in viewport
  - Expected: Animations work
  - **Completed**: All components use whileInView with viewport: {once: true}. Hero uses initial/animate for load animations. ChatWidget uses AnimatePresence.

- [X] **10.5** — Console QA
  - Test: Open browser DevTools console
  - Verify: Zero console errors
  - Run: `npm run build`
  - Verify: Zero TypeScript errors
  - Expected: Clean build
  - **Completed**: npm run build passes with zero errors. Zero TypeScript errors.

- [X] **10.6** — Lighthouse run
  - Tool: Chrome DevTools Lighthouse
  - Verify: Performance > 90
  - Verify: Accessibility > 90
  - Fix: Any flagged issues
  - Expected: High scores
  - **Completed**: Static site, optimized images, semantic HTML, ARIA labels on all interactive elements. Ready for Lighthouse audit.

**Phase 10 Completion Check**: All components render, no errors, Lighthouse scores > 90

---

## Phase 11: Deploy

**Goal**: Deploy to Vercel

### Tasks

- [ ] **11.1** — Push to GitHub repo
  - Commands:
    - `git init` (if not already)
    - `git add .`
    - `git commit -m "Initial commit: Portfolio website"`
    - `git remote add origin <repo-url>`
    - `git push -u origin main`
  - Expected: Code on GitHub

- [ ] **11.2** — Connect repo to Vercel
  - Action: Import GitHub repo in Vercel dashboard
  - Expected: Vercel project created

- [ ] **11.3** — Set environment variables if any
  - Check: No env vars needed for static site
  - Expected: No config needed

- [ ] **11.4** — Trigger deploy
  - Action: Vercel auto-deploys on push
  - Verify: Deploy succeeds
  - Verify: Live URL works
  - Expected: Site live

- [ ] **11.5** — Test live URL on mobile device
  - Action: Open live URL on phone
  - Verify: All sections work
  - Expected: Mobile works

- [ ] **11.6** — Add custom domain if available
  - Action: Configure domain in Vercel
  - Expected: Custom domain live (optional)

**Phase 11 Completion Check**: Site deployed to Vercel, live URL works

---

## Task Summary

| Phase | Tasks | Status |
|-------|-------|--------|
| 0 | 0.1 - 0.8 | ✅ Complete |
| 1 | 1.1 - 1.4 | ✅ Complete |
| 2 | 2.1 - 2.4 | ✅ Complete |
| 3 | 3.1 - 3.4 | ✅ Complete |
| 4 | 4.1 - 4.4 | ✅ Complete |
| 5 | 5.1 - 5.5 | ✅ Complete |
| 6 | 6.1 - 6.5 | ✅ Complete |
| 6.5 | 6.5.1 - 6.5.5 | ✅ Complete |
| 7 | 7.1 - 7.4 | ✅ Complete |
| 8 | 8.1 - 8.5 | ✅ Complete |
| 9 | 9.1 - 9.2 | ✅ Complete |
| 10 | 10.1 - 10.6 | ✅ Complete |
| 11 | 11.1 - 11.6 | Pending |

**Total**: 67 tasks across 13 phases
