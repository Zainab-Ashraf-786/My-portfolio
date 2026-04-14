'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const rotatingTitles = [
  'Agentic AI Engineer',
  'Full Stack Developer',
  'AI Engineer',
  'Next.js Developer',
  'Python Engineer',
];

const techBadges = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Python', color: '#3776AB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'AGI', color: '#6366F1' },
  { name: 'Web3', color: '#06B6D4' },
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Rotating text typing effect
  useEffect(() => {
    const currentTitle = rotatingTitles[currentTitleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
        setTypingSpeed(80);
        if (displayedTitle === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
        setTypingSpeed(40);
        if (displayedTitle === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, currentTitleIndex, typingSpeed]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute top-10 right-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px] animate-float" />
        <motion.div style={{ y: y2 }} className="absolute bottom-10 left-10 w-80 h-80 bg-accent-teal/10 rounded-full blur-[100px] animate-float-delayed" />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[150px] animate-float-slow" />
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              x: [0, (i % 2 === 0 ? 40 : -40), 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${15 + i * 7}%`,
              left: `${5 + i * 8}%`,
              background: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-teal)' : 'var(--accent-secondary)',
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="inline-block mb-10"
        >
          <span className="relative px-6 py-3 bg-accent-teal/10 text-accent-teal text-sm font-bold uppercase tracking-widest rounded-full border border-accent-teal/30 shadow-lg shadow-accent-teal/10">
            <span className="absolute inset-0 rounded-full bg-accent-teal/5 animate-pulse" />
            AI System Online
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-primary mb-8 tracking-tight"
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-teal animate-gradient bg-[length:200%_auto]">
              Zainab
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent-primary/20 blur-xl" />
          </span>
        </motion.h1>

        {/* Rotating Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal mb-10 h-12"
        >
          ${displayedTitle}
          <span className="inline-block w-0.5 h-8 bg-accent-primary ml-1 animate-pulse" />
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Full Stack Development & AI Engineering — Innovating at the Intersection of Tech & Business
        </motion.p>

        {/* Tech Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techBadges.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="px-5 py-2.5 bg-bg-elevated/80 backdrop-blur-sm border border-border-color rounded-full text-sm font-bold hover:border-accent-primary/50 transition-all cursor-default"
              style={{ color: tech.color }}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('projects')}
            className="relative px-8 py-3.5 bg-accent-primary text-white text-base font-bold rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient bg-[length:200%_auto]" />
            <span className="relative flex items-center justify-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-teal)', boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3.5 bg-bg-surface/50 backdrop-blur-sm text-text-primary text-base font-bold rounded-full border-2 border-border-color hover:border-accent-teal/50 transition-all"
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-text-muted/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
