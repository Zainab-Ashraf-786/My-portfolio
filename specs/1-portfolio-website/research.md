# Research: Portfolio Website Technology Decisions

**Date**: 2026-04-02 | **Feature**: Portfolio Website | **Phase**: 0

## Technology Decisions

### 1. Framework: Next.js 14 with App Router

**Decision**: Next.js 14 using App Router (not Pages Router)

**Rationale**:
- Latest stable version with full App Router support
- Server Components by default (better performance)
- Built-in optimization (images, fonts, scripts)
- Vercel deployment is seamless (same company)
- TypeScript support is first-class
- Matches constitution requirement for "Next.js 14 with App Router"

**Alternatives Considered**:
- Next.js 13 Pages Router: Older pattern, less future-proof
- Vite + React: Would need manual routing, less SSR support
- Astro: Great for static sites but less flexible for dynamic features like chat widget

---

### 2. Styling: Tailwind CSS v3

**Decision**: Tailwind CSS v3 with custom design tokens in `globals.css`

**Rationale**:
- Utility-first approach matches constitution "no inline style soup" principle
- Dark mode is native via CSS variables
- Responsive breakpoints built-in (sm, md, lg, xl)
- Small bundle size with PurgeCSS
- Pairs well with Framer Motion for animations
- Explicitly required in constitution

**Alternatives Considered**:
- CSS Modules: More verbose, less consistent
- Styled Components: Runtime overhead, larger bundle
- Vanilla CSS: No design token system, harder to maintain

---

### 3. Animations: Framer Motion

**Decision**: Framer Motion v10+ for all entrance animations

**Rationale**:
- React-first API (no imperative JS)
- `whileInView` prop perfect for scroll-triggered animations
- Respects `prefers-reduced-motion` natively
- Small bundle (~14kb gzipped)
- Explicitly allowed in constitution ("no heavy libraries beyond Framer Motion")
- Better DX than GSOD for React projects

**Alternatives Considered**:
- GSAP: More powerful but heavier, overkill for simple fade-ups
- CSS keyframes only: Less control, harder to stagger
- Intersection Observer API: Manual implementation, more code

---

### 4. Icons: Lucide React

**Decision**: Lucide React for all iconography

**Rationale**:
- Consistent stroke width across all icons
- Tree-shakeable (only import used icons)
- TypeScript types included
- MIT licensed
- Matches constitution "Icons: Lucide React" requirement
- Clean, modern aesthetic fitting developer portfolio

**Alternatives Considered**:
- Heroicons: Good but less icon variety
- FontAwesome: Heavier, some icons require Pro license
- Feather Icons: Discontinued (Lucide is the fork)

---

### 5. Typography: Geist + Inter

**Decision**: Geist Sans for headings, Inter for body text

**Rationale**:
- Geist: Designed by Vercel, modern geometric sans-serif
- Inter: Most popular web font, excellent readability
- Both optimized for screens
- Self-hostable (no external requests)
- Matches constitution "Typography: Geist Sans (headings) + Inter (body)"

**Alternatives Considered**:
- System fonts: Faster but less distinctive
- Google Fonts only: Geist not available on Google Fonts
- Single font family: Less visual hierarchy

---

### 6. Font Installation: npm package (geist)

**Decision**: Install Geist via `npm install geist` (not Google Fonts CDN)

**Rationale**:
- Zero external requests (fonts bundled in build)
- Better performance (no DNS lookup, no network latency)
- Works offline
- Version-locked via package.json
- Recommended by Vercel for Next.js projects

**Alternatives Considered**:
- Google Fonts CDN: Easier setup but external dependency
- Manual download: More maintenance overhead
- `next/font`: Built-in but Geist requires npm package anyway

---

### 7. Data Management: Static JSON in lib/data.ts

**Decision**: All content (skills, projects, services, testimonials) exported as static TypeScript objects

**Rationale**:
- No CMS overhead for single-page site
- Type-safe with TypeScript interfaces
- Easy to update (edit one file)
- Zero API calls (faster load)
- Matches constitution "Static site only—no backend overhead"

**Alternatives Considered**:
- Headless CMS (Sanity, Contentful): Overkill for 4 projects
- Markdown files: More parsing overhead
- Hardcoded in components: Violates DRY, harder to maintain

---

### 8. Chat Widget: Mock API First, Real Backend Phase 11

**Decision**: Chat widget uses mock responses initially; real FastAPI RAG backend wired in Phase 11

**Rationale**:
- Frontend can be built and tested independently
- No backend dependency for portfolio launch
- Mock responses demonstrate UX flow
- Real API can be swapped in later without UI changes
- Matches spec: "Mock API responses initially; wire to real FastAPI backend in Phase 11"

**Alternatives Considered**:
- Build backend first: Blocks frontend progress
- Use Vercel AI SDK: Adds complexity, requires API routes
- No chat widget: Violates spec requirement FR-021 to FR-027

---

### 9. Deployment: Vercel

**Decision**: Deploy to Vercel (not Netlify, Railway, or self-hosted)

**Rationale**:
- Built by Next.js creators (best compatibility)
- Zero-config deployment
- Edge network for global performance
- Automatic HTTPS
- Preview deployments for branches
- Free tier sufficient for personal portfolio
- Matches constitution "Deployment target: Vercel for edge optimization"

**Alternatives Considered**:
- Netlify: Great but Next.js support not as deep
- Railway: Better for backends, not static sites
- GitHub Pages: No SSR, slower builds

---

### 10. Responsive Breakpoints

**Decision**: Tailwind default breakpoints with mobile-first approach

```
Mobile:  < 640px  (sm)
Tablet:  ≥ 640px  (md)
Desktop: ≥ 768px  (lg)
Large:   ≥ 1024px (xl)
XLarge:  ≥ 1280px (2xl)
```

**Rationale**:
- Matches Tailwind defaults (no custom config needed)
- Mobile-first ensures touch-friendly design
- Covers spec requirements: 375px, 768px, 1280px
- Constitution requires "Mobile-First Responsiveness"

**Alternatives Considered**:
- Custom breakpoints: More config, less predictable
- Desktop-first: Violates constitution
- No breakpoints: Would fail responsive requirement

---

### 11. Color Palette (Design Tokens)

**Decision**: CSS variables in `globals.css` with exact values from constitution

```css
--bg-primary: #0a0a0a;
--bg-surface: #111111;
--bg-elevated: #1a1a1a;
--text-primary: #F5F5F5;
--text-secondary: #888888;
--text-muted: #666666;
--border-color: #222222;
--accent-purple: #6C63FF;
--accent-teal: #00D9A6;
```

**Rationale**:
- Exact values from constitution "Dark-First Design" principle
- CSS variables enable runtime theme switching if needed
- Tailwind `theme.extend.colors` can reference these
- Consistent across all components

**Alternatives Considered**:
- Tailwind config colors: Less flexible for runtime changes
- SCSS variables: Requires preprocessor
- Hardcoded hex values: Violates DRY, harder to maintain

---

### 12. Animation Stagger Timing

**Decision**: Fast stagger timing for badge groups (0.05s), slower for cards (0.1s)

**Rationale**:
- Badges: Many items need fast stagger to feel snappy
- Cards: Fewer items can use slower stagger for emphasis
- Matches spec: "staggerChildren: 0.05 for fast stagger" (Skills)
- Matches spec: "staggerChildren: 0.1" (Services, Projects)
- Framer Motion `transition.stagger` prop handles this

**Alternatives Considered**:
- No stagger: All items appear at once (less polished)
- Same stagger for all: Less visual variety
- Custom delays per item: More code, less maintainable

---

## Dependency Best Practices

### Next.js 14
- Use `app/` directory (App Router)
- Server Components by default; `"use client"` only when needed
- `next/image` for optimized images
- `next/font` for font optimization

### Framer Motion
- Use `whileInView` for scroll animations
- Set `viewport={{ once: true }}` to prevent re-animation
- Wrap conditional UI in `<AnimatePresence>` for exit animations
- Respect `prefers-reduced-motion` via `useReducedMotion` hook

### Tailwind CSS
- Extend theme in `tailwind.config.ts` for custom colors
- Use `@apply` sparingly (only for repeated patterns)
- Leverage `clsx` or `tailwind-merge` for conditional classes

### TypeScript
- Strict mode enabled
- Typed interfaces for all component props
- No `any` types without justification
- Type all data exports in `lib/data.ts`

---

## Integration Patterns

### Smooth Scroll Navigation
- Use native CSS `scroll-behavior: smooth` on `html`
- Anchor links: `<a href="#projects">` with matching `id="projects"` on sections
- No JavaScript scroll libraries needed

### Active Nav Link Highlighting
- Use `IntersectionObserver` to detect which section is in viewport
- Update state with active section ID
- Apply highlight class to matching nav link

### Mobile Hamburger Menu
- State: `const [isOpen, setIsOpen] = useState(false)`
- Slide-down animation with Framer Motion
- Close on link click (prevent stuck open state)
- Lock body scroll when menu is open

### Chat Widget State Management
- State: `isOpen`, `messages[]`, `isLoading`, `inputValue`
- `useRef` for messages end (auto-scroll)
- Mock API: `setTimeout` with 1000ms delay
- Real API: `fetch('/api/chat')` in Phase 11

---

## Unresolved Questions

None. All "NEEDS CLARIFICATION" items from Technical Context resolved.

---

## References

- Next.js 14 Docs: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/guide/packages/lucide-react
- Geist Font: https://github.com/vercel/geist-font
- Vercel Deployment: https://vercel.com/docs/deployments
