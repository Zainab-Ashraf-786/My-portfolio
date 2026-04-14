'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { GitFork, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
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
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-bg-surface/50 backdrop-blur-sm border border-border-color rounded-2xl overflow-hidden hover:border-accent-primary/30 hover:shadow-2xl hover:shadow-accent-glow/10 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-gradient-to-br from-bg-elevated to-bg-surface overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-teal/10" />
                )}
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.techTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-accent-teal/10 text-accent-teal text-xs font-bold rounded-full border border-accent-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-bg-elevated border border-border-color rounded-xl text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitFork className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-bg-elevated border border-border-color rounded-xl text-text-secondary hover:text-accent-teal hover:border-accent-teal/50 transition-all"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
