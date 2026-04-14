# Quickstart: Portfolio Website Setup

**Date**: 2026-04-02 | **Feature**: Portfolio Website | **Phase**: 1

## Prerequisites

- Node.js 18+ installed ([download](https://nodejs.org))
- npm 9+ (comes with Node.js)
- Git installed (for version control)
- Code editor (VS Code recommended)

---

## Step 1: Initialize Next.js Project

Run from repository root:

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

**Flags explained**:
- `--typescript`: Enable TypeScript
- `--tailwind`: Install Tailwind CSS
- `--app`: Use App Router (not Pages Router)
- `--src-dir`: Create `src/` directory
- `--import-alias "@/*"`: Use `@/` for imports

**Expected output**:
```
✔ Would you like to use ESLint? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? … Yes
✔ Would you like to customize the default import alias? … Yes
✔ What import alias would you like configured? … @/*
```

---

## Step 2: Install Dependencies

```bash
# Runtime dependencies
npm install framer-motion lucide-react geist

# Dev dependencies (already included by create-next-app)
# npm install -D @types/node  # Usually pre-installed
```

**Verify installation**:
```bash
npm list framer-motion lucide-react geist
```

Expected output should show all three packages with versions.

---

## Step 3: Clean Boilerplate

Delete the following files:

```bash
# Delete default page content
rm src/app/page.tsx
rm src/app/globals.css

# Delete public assets (Windows PowerShell)
Remove-Item public/vercel.svg -ErrorAction SilentlyContinue
Remove-Item public/next.svg -ErrorAction SilentlyContinue
```

**Manual cleanup** (in VS Code):
- Delete `src/app/page.tsx`
- Delete `src/app/globals.css`
- Delete `public/vercel.svg`
- Delete `public/next.svg`

---

## Step 4: Setup globals.css

Create `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Design tokens from constitution */
  --bg-primary: #0a0a0a;
  --bg-surface: #111111;
  --bg-elevated: #1a1a1a;
  --text-primary: #F5F5F5;
  --text-secondary: #888888;
  --text-muted: #666666;
  --border-color: #222222;
  --accent-purple: #6C63FF;
  --accent-teal: #00D9A6;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-inter);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-surface);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

---

## Step 5: Setup layout.tsx

Edit `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import { Geist_Sans, Inter } from 'next/font/google';
import './globals.css';

const geistSans = Geist_Sans({
  subsets: ['latin'],
  variable: '--font-geist',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Zainab Ashraf | Full-Stack AI Developer',
  description: 'Portfolio of Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan specializing in Next.js, FastAPI, and AI-powered systems.',
  openGraph: {
    title: 'Zainab Ashraf | Full-Stack AI Developer',
    description: 'Portfolio of Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zainab Ashraf | Full-Stack AI Developer',
    description: 'Portfolio of Zainab Ashraf, a Full-Stack AI Developer based in Karachi, Pakistan.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## Step 6: Setup lib/data.ts

Create `src/lib/data.ts`:

```typescript
// Static data for portfolio

export const developerProfile = {
  name: 'Zainab Ashraf',
  title: 'Full-Stack AI Developer',
  location: 'Karachi, Pakistan',
  pronouns: 'she/her',
  bio: "I build intelligent web applications that combine elegant frontend design with powerful backend systems. Based in Karachi, I specialize in Next.js, Python, and AI-powered solutions that help businesses convert visitors into customers.",
  experienceYears: 2,
  projectsCount: 15,
  clientsCount: 5,
  email: 'zainab@example.com',
  availability: 'Open to opportunities',
};

export const skills = [
  // Frontend
  { name: 'Next.js', category: 'Frontend' as const },
  { name: 'React', category: 'Frontend' as const },
  { name: 'TypeScript', category: 'Frontend' as const },
  { name: 'Tailwind CSS', category: 'Frontend' as const },
  // Backend
  { name: 'Python', category: 'Backend' as const },
  { name: 'FastAPI', category: 'Backend' as const },
  { name: 'Node.js', category: 'Backend' as const },
  { name: 'PostgreSQL', category: 'Backend' as const },
  // AI/ML
  { name: 'OpenAI', category: 'AI/ML' as const },
  { name: 'RAG', category: 'AI/ML' as const },
  { name: 'LangChain', category: 'AI/ML' as const },
  // DevOps
  { name: 'Docker', category: 'DevOps' as const },
  { name: 'Git', category: 'DevOps' as const },
  { name: 'Vercel', category: 'DevOps' as const },
];

export const services = [
  {
    id: 'ecommerce-sites',
    title: 'Ecommerce Sites',
    description: 'Full-stack online stores with payment integration',
    icon: 'ShoppingCart',
    techTags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Professional sites that convert visitors to customers',
    icon: 'Globe',
    techTags: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    description: 'Intelligent assistants powered by OpenAI',
    icon: 'Bot',
    techTags: ['Python', 'FastAPI', 'OpenAI'],
  },
  {
    id: 'rag-systems',
    title: 'RAG Systems',
    description: 'Custom knowledge bases with retrieval-augmented generation',
    icon: 'Database',
    techTags: ['Python', 'LangChain', 'PostgreSQL'],
  },
];

export const projects = [
  // Add 3-5 placeholder projects
];

export const testimonials = [
  // Add 2-3 placeholder testimonials
];

export const socialLinks = [
  {
    platform: 'github' as const,
    url: 'https://github.com/yourusername',
    icon: 'Github',
    label: 'GitHub Profile',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
    label: 'LinkedIn Profile',
  },
  {
    platform: 'whatsapp' as const,
    url: 'https://wa.me/92XXXXXXXXXXX',
    icon: 'MessageCircle',
    label: 'WhatsApp',
  },
];

export const navItems = [
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];
```

---

## Step 7: Setup page.tsx Shell

Create `src/app/page.tsx`:

```typescript
// Import all components (commented out until created)
// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Skills from '@/components/Skills';
// import Services from '@/components/Services';
// import Projects from '@/components/Projects';
// import Testimonials from '@/components/Testimonials';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';
// import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      
      <section id="hero">
        {/* <Hero /> */}
      </section>
      
      <section id="about">
        {/* <About /> */}
      </section>
      
      <section id="skills">
        {/* <Skills /> */}
      </section>
      
      <section id="services">
        {/* <Services /> */}
      </section>
      
      <section id="projects">
        {/* <Projects /> */}
      </section>
      
      <section id="testimonials">
        {/* <Testimonials /> */}
      </section>
      
      <section id="contact">
        {/* <Contact /> */}
      </section>
      
      {/* <Footer /> */}
      {/* <ChatWidget /> */}
    </main>
  );
}
```

---

## Step 8: Update Tailwind Config

Edit `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-color': 'var(--border-color)',
        'accent-purple': 'var(--accent-purple)',
        'accent-teal': 'var(--accent-teal)',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Step 9: Verify Setup

Run the development server:

```bash
npm run dev
```

**Expected output**:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Completion checks**:
- [ ] Server starts without errors
- [ ] Navigate to `http://localhost:3000` → blank page (no content yet)
- [ ] No console errors in browser DevTools
- [ ] No TypeScript errors in VS Code terminal

---

## Troubleshooting

### Error: "Module not found: framer-motion"
**Solution**: Run `npm install framer-motion`

### Error: "Cannot find module 'next/font/google'"
**Solution**: Ensure Next.js 14 is installed: `npm install next@14`

### Port 3000 already in use
**Solution**: Run on different port: `npm run dev -- -p 3001`

### Tailwind styles not applying
**Solution**: Check `tailwind.config.ts` content paths match your structure

---

## Next Steps

After completing setup:
1. **Phase 1**: Build Navbar component
2. **Phase 2**: Build Hero component
3. **Phase 3**: Build About component
4. Continue through all 11 phases

---

## References

- Spec: `/specs/1-portfolio-website/spec.md`
- Constitution: `/.specify/memory/constitution.md`
- Next.js Docs: https://nextjs.org/docs/app
- Tailwind Docs: https://tailwindcss.com/docs
