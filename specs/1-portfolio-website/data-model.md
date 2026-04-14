# Data Model: Portfolio Entities

**Date**: 2026-04-02 | **Feature**: Portfolio Website | **Phase**: 1

## Overview

All data is static and exported from `lib/data.ts`. No database required. Each entity is a TypeScript interface with corresponding data array.

---

## Entity Definitions

### 1. DeveloperProfile

Represents Zainab Ashraf, the portfolio owner.

```typescript
interface DeveloperProfile {
  name: string;           // "Zainab Ashraf"
  title: string;          // "Full-Stack AI Developer"
  location: string;       // "Karachi, Pakistan"
  pronouns: string;       // "she/her"
  bio: string;            // First-person bio paragraph (3-4 sentences)
  experienceYears: number; // 2+
  projectsCount: number;   // 15+
  clientsCount: number;    // 5+
  email: string;          // mailto: link
  availability: string;   // "Open to opportunities"
}
```

**Validation Rules**:
- `name`: Required, non-empty string
- `title`: Must include "Full-Stack" and "AI" per spec
- `location`: City + Country format
- `bio`: First-person voice ("I build", "My work")
- `experienceYears`: Positive integer

**Source of Truth**: `lib/data.ts` → `developerProfile` export

---

### 2. Skill

A technology or tool the developer is proficient in.

```typescript
type SkillCategory = 'Frontend' | 'Backend' | 'AI/ML' | 'DevOps';

interface Skill {
  name: string;           // e.g., "Next.js", "Python", "FastAPI"
  category: SkillCategory;
  icon?: string;          // Lucide icon name (optional)
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}
```

**Validation Rules**:
- `name`: Required, unique within category
- `category`: Must be one of 4 defined categories
- `level`: Optional, defaults to "intermediate"

**Categories** (per spec):
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Python, FastAPI, Node.js, PostgreSQL
- AI/ML: OpenAI, RAG, LangChain, TensorFlow
- DevOps: Docker, Git, Vercel, GitHub Actions

**Source of Truth**: `lib/data.ts` → `skills` array

---

### 3. Service

A professional service offered by the developer.

```typescript
interface Service {
  id: string;             // kebab-case: "ecommerce-sites"
  title: string;          // "Ecommerce Sites"
  description: string;    // Value prop (1 sentence)
  icon: string;           // Lucide icon name
  techTags: string[];     // ["Next.js", "Stripe", "PostgreSQL"]
  features?: string[];    // Optional bullet points
}
```

**Validation Rules**:
- `id`: Required, unique, kebab-case
- `title`: Required, title case
- `description`: Required, 1-2 sentences max
- `icon`: Required, must exist in Lucide React
- `techTags`: 2-5 technologies

**Services** (per spec, exactly 4):
1. Ecommerce Sites — "Full-stack online stores with payment integration"
2. Business Websites — "Professional sites that convert visitors to customers"
3. AI Chatbots — "Intelligent assistants powered by OpenAI"
4. RAG Systems — "Custom knowledge bases with retrieval-augmented generation"

**Source of Truth**: `lib/data.ts` → `services` array

---

### 4. Project

A portfolio piece showcasing the developer's work.

```typescript
interface Project {
  id: string;             // kebab-case: "ecommerce-platform"
  title: string;          // "Ecommerce Platform"
  description: string;    // 2-3 sentences
  imageUrl?: string;      // /public/images/project-name.jpg
  techTags: string[];     // ["Next.js", "FastAPI", "PostgreSQL"]
  liveUrl?: string;       // https://...
  githubUrl?: string;     // https://github.com/...
  featured?: boolean;     // true for top projects
}
```

**Validation Rules**:
- `id`: Required, unique, kebab-case
- `title`: Required, title case
- `description`: Required, 2-3 sentences, first-person voice
- `techTags`: 3-6 technologies
- `liveUrl` XOR `githubUrl`: At least one required
- `imageUrl`: Optional, falls back to placeholder

**Projects** (per spec, 3-5 projects):
- Must reflect service offerings (ecommerce, chatbots, RAG, web apps)
- Realistic placeholder content

**Source of Truth**: `lib/data.ts` → `projects` array

---

### 5. Testimonial

A client quote endorsing the developer's work.

```typescript
interface Testimonial {
  id: string;             // kebab-case: "client-name"
  quote: string;          // The testimonial text (italic)
  authorName: string;     // "John Doe"
  authorTitle: string;    // "CEO, Tech Corp"
  authorAvatar?: string;  // /public/images/avatar-name.jpg
}
```

**Validation Rules**:
- `id`: Required, unique, kebab-case
- `quote`: Required, 2-4 sentences, realistic content
- `authorName`: Required, full name
- `authorTitle`: Required, includes role + company
- `authorAvatar`: Optional, falls back to placeholder

**Testimonials** (per spec, 2-3 testimonials):
- Realistic placeholder content
- Varied industries (ecommerce, SaaS, startup)

**Source of Truth**: `lib/data.ts` → `testimonials` array

---

### 6. SocialLink

A link to the developer's social media or communication platform.

```typescript
type SocialPlatform = 'github' | 'linkedin' | 'whatsapp' | 'twitter' | 'email';

interface SocialLink {
  platform: SocialPlatform;
  url: string;            // Full URL or mailto:
  icon: string;           // Lucide icon name
  label: string;          // Accessibility label
}
```

**Validation Rules**:
- `platform`: Required, one of defined types
- `url`: Required, valid URL format
- `icon`: Required, must exist in Lucide React
- `label`: Required, for accessibility

**Required Links** (per spec):
- GitHub: Icon button, opens in new tab
- LinkedIn: Icon button, opens in new tab
- WhatsApp: Icon button, opens chat
- Email: mailto: link in Contact section

**Source of Truth**: `lib/data.ts` → `socialLinks` array

---

### 7. ChatMessage

A message exchanged in the AI chat widget.

```typescript
type MessageSender = 'user' | 'assistant';

interface ChatMessage {
  id: string;             // UUID or timestamp
  sender: MessageSender;
  content: string;        // Message text
  timestamp: Date;        // ISO 8601
}
```

**Validation Rules**:
- `id`: Required, unique
- `sender`: Required, "user" or "assistant"
- `content`: Required, non-empty
- `timestamp`: Required, ISO 8601 format

**Special Messages**:
- Greeting: Auto-sent when chat opens: "Hi! I'm Zainab's AI assistant. Ask me anything about her work, skills, or how to hire her."
- Fallback: When AI cannot answer: "I'll let Zainab know you asked — you can also reach her at [email]"

**Source of Truth**: State managed in `ChatWidget.tsx` (not in data.ts)

---

### 8. NavItem

A navigation link in the navbar.

```typescript
interface NavItem {
  label: string;          // Display text
  href: string;           // Anchor: "#about", "#projects"
  sectionId: string;      // Matching section id
}
```

**Validation Rules**:
- `label`: Required, title case
- `href`: Required, must start with "#"
- `sectionId`: Required, must match existing section id

**Nav Items** (per spec):
- About → #about
- Skills → #skills
- Services → #services
- Projects → #projects
- Contact → #contact
- Hire Me (CTA button) → #contact

**Source of Truth**: `lib/data.ts` → `navItems` array

---

## Relationships

```
DeveloperProfile (1) ─┬─> Skills (many)
                      ├─> Services (many)
                      ├─> Projects (many)
                      ├─> Testimonials (many)
                      └─> SocialLinks (many)

NavItem (many) ──> Sections (1) [Hero, About, Skills, Services, Projects, Testimonials, Contact, Footer]

ChatMessage (many) ──> ChatWidget (1) [state-managed]
```

---

## State Transitions

### ChatWidget State Machine

```
IDLE → OPEN (on trigger click)
OPEN → CLOSED (on X button click)
SENDING → RECEIVING → IDLE (on message send)
```

**States**:
- `isOpen`: boolean (drawer open/closed)
- `messages`: ChatMessage[] (conversation history)
- `isLoading`: boolean (waiting for response)
- `inputValue`: string (current input)

**Transitions**:
1. Click trigger → `isOpen = true`, push greeting message
2. Type message → `inputValue` updates
3. Click send → push user message, `isLoading = true`, clear input
4. After 1000ms → push mock bot reply, `isLoading = false`
5. Click X → `isOpen = false`

---

## Data Validation Strategy

**Compile-time**: TypeScript interfaces enforce structure
**Runtime**: No validation needed (static data, no user input)
**Build-time**: ESLint catches unused exports, dead code

**Future Enhancement** (if CMS added):
- Zod schemas for runtime validation
- API route input sanitization
- Database constraints

---

## File Locations

| Entity | Type | Location |
|--------|------|----------|
| DeveloperProfile | Static | `lib/data.ts` |
| Skill[] | Static array | `lib/data.ts` |
| Service[] | Static array | `lib/data.ts` |
| Project[] | Static array | `lib/data.ts` |
| Testimonial[] | Static array | `lib/data.ts` |
| SocialLink[] | Static array | `lib/data.ts` |
| NavItem[] | Static array | `lib/data.ts` |
| ChatMessage[] | State | `components/ChatWidget.tsx` |

---

## References

- Spec: `/specs/1-portfolio-website/spec.md`
- Constitution: `/.specify/memory/constitution.md`
- Data File: `/lib/data.ts` (to be created in Phase 0)
