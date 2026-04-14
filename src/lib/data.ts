// Static data for portfolio

export const developerProfile = {
  name: 'Zainab Ashraf',
  title: 'Agentic AI Engineer',
  location: 'Karachi, Pakistan',
  pronouns: 'she/her',
  bio: "A passionate Generative AI and Agentic AI Engineer with strong expertise in OpenAI Agent SDKs, MCPs, RAG (Retrieval-Augmented Generation), and modern AI tools. Proficient in JavaScript, Python, React, Next.js, and TypeScript. My journey into technology began with a deep curiosity, leading me to master AI-driven development while exploring cutting-edge AI technologies and their transformative potential.",
  experienceYears: 1,
  projectsCount: 15,
  clientsCount: 5,
  email: 'farooqamal124@gmail.com',
  availability: 'Open to opportunities',
};

export const technicalSkills = [
  { name: 'React/Next.js', level: 95, icon: 'Code' },
  { name: 'Python/AI', level: 90, icon: 'Brain' },
  { name: 'TypeScript', level: 88, icon: 'FileCode' },
  { name: 'AI Agents', level: 85, icon: 'Bot' },
  { name: 'Business Analysis', level: 85, icon: 'BarChart3' },
];

export const aiFocusAreas = [
  {
    title: 'Agentic AI Development',
    description: 'Building intelligent agents with OpenAI SDK and custom workflows',
    icon: 'Brain',
  },
  {
    title: 'Web3 Integration',
    description: 'Smart contracts, metaverse development, and blockchain solutions',
    icon: 'Globe',
  },
  {
    title: 'Business Intelligence',
    description: 'Merging technical expertise with strategic business insights',
    icon: 'Lightbulb',
  },
];

export const education = {
  degree: 'Intermediate',
  institution: 'FG Girls Inter College',
  period: '2023 - 2025',
};

export const certifications = [
  {
    name: 'Generative AI, Web3 & Metaverse',
    issuer: 'Governor Sindh Initiative',
    icon: 'Award',
  },
  {
    name: 'AI Agent Development',
    issuer: 'OpenAI & Agent SDK',
    icon: 'Bot',
  },
  {
    name: 'Frontend Development',
    issuer: 'React, Next.js, TypeScript',
    icon: 'Code',
  },
];

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
    id: 'humonoid robotics book ',
    title: 'RAG Systems',
    description: 'Custom knowledge bases with retrieval-augmented generation',
    icon: 'Database',
    techTags: ['Python', 'OpenAI', 'PostgreSQL','NeonDB' , 'qdrant'],
  },
];

export const projects = [
  {
    id: 'aurawear-ecommerce',
    title: 'AuraWear - Feel It',
    description: 'A modern e-commerce website for fashion and accessories. Features include product catalog, shopping cart, secure checkout, and responsive design for seamless mobile shopping.',
    techTags: ['Next.js', 'Tailwind CSS', 'E-commerce', 'Responsive Design'],
    liveUrl: 'https://aurawear-feel-it.vercel.app/',
    githubUrl: 'https://github.com/Zainab-Ashraf-786/Full-Stack-E-commerce-Site-Aura-Wear',
    featured: true,
    image: '/images/project.png',
  },
  {
    id: 'ecommerce-platform',
    title: 'Ecommerce Platform',
    description: 'A full-featured online store with payment integration, inventory management, and order tracking. Built for a Karachi-based retail business.',
    techTags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    liveUrl: 'https://hackathon2-ruddy.vercel.app',
    githubUrl: 'https://github.com/Zainab-Ashraf-786/Hackathon2',
    featured: true,
    image: '/images/project1.png',
  },
  {
    id: 'ai-employee',
    title: 'AI employee',
    description: 'It proposes a futuristic, local-first approach to automation where an AI agent—powered by Claude Code and Obsidian—proactively manages personal and business affairs 24/7. You can also think of it as a "Smart Consultant" (General Agents). The focus is on high-level reasoning, autonomy, and flexibility. Think of it as hiring a senior employee who figures out how to solve the problems.',
    techTags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    liveUrl: 'under-development',
    githubUrl: 'https://github.com/Zainab-Ashraf-786/AI-employee',
    featured: true,
    image: '/images/under.jpg',
  },
  {
    id: 'humonoid-robotics-book',
    title: 'Humonoid Robotics Book',
    description: 'Custom knowledge base book for robotics enthusiasts and also conatin rag bot functionality. it also have translation feature .',
    techTags: ['Python', 'OpenAI', 'PostgreSQL','NeonDB' , 'qdrant'],
    liveUrl: 'https://humonoid-robotics-book.vercel.app/',
    githubUrl: 'https://github.com/Zainab-Ashraf-786/humonoid-robotics-book',
    featured: true,
    image: '/images/book.png',
  },
 
];

export const testimonials = [
  {
    id: 'ahmed-hassan',
    quote: "Zainab delivered our ecommerce platform on time and exceeded our expectations. Her attention to detail and technical expertise are outstanding.",
    authorName: 'Ahmed Hassan',
    authorTitle: 'CEO, RetailHub PK',
    authorAvatar: '/images/avatar-ahmed.jpg',
  },
  {
    id: 'sarah-khan',
    quote: "The AI chatbot Zainab built has transformed our customer support. Response times are down 80% and customer satisfaction is at an all-time high.",
    authorName: 'Sarah Khan',
    authorTitle: 'CTO, TechStart Solutions',
    authorAvatar: '/images/avatar-sarah.jpg',
  },
  {
    id: 'bilal-raza',
    quote: "Working with Zainab was a pleasure. She understood our requirements immediately and delivered a beautiful, functional website.",
    authorName: 'Bilal Raza',
    authorTitle: 'Founder, Raza Consulting',
    authorAvatar: '/images/avatar-bilal.jpg',
  },
];

export const socialLinks = [
  {
    platform: 'github' as const,
    url: 'https://github.com/Zainab-Ashraf-786',
    icon: 'Github',
    label: 'GitHub Profile',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://www.linkedin.com/in/zainab-ashraf-36b2a52bb',
    icon: 'Linkedin',
    label: 'LinkedIn Profile',
  },
  {
    platform: 'whatsapp' as const,
    url: 'https://wa.me/923352087240',
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
