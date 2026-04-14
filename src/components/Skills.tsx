'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { 
  Code, Server, Brain, Container, GitBranch, Cloud, Database, 
  FileCode, Globe, Cpu, Terminal, Layers 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Next.js': Globe,
  'React': Code,
  'TypeScript': FileCode,
  'Tailwind CSS': Layers,
  'Python': Terminal,
  'FastAPI': Server,
  'Node.js': Server,
  'PostgreSQL': Database,
  'OpenAI': Brain,
  'RAG': Brain,
  'LangChain': Brain,
  'Docker': Container,
  'Git': GitBranch,
  'Vercel': Cloud,
};

const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

const categoryOrder = ['Frontend', 'Backend', 'AI/ML', 'DevOps'];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary text-[20px] font-bold uppercase tracking-widest rounded-full mb-4">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            Technologies I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
              Work With
            </span>
          </h2>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categoryOrder.map((category) => {
            const categorySkills = skillsByCategory[category];
            if (!categorySkills) return null;

            return (
              <div key={category}>
                <h3 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-bold">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, i) => {
                    const IconComponent = iconMap[skill.name];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                      >
                        <div className="flex items-center gap-2 px-5 py-2.5 bg-bg-surface border border-border-color rounded-full text-text-primary text-sm font-medium hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-glow/20 transition-all">
                          {IconComponent && <IconComponent className="w-4 h-4 text-accent-teal" />}
                          {skill.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
