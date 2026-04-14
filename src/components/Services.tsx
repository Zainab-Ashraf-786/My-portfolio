'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
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
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            Services Tailored to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
              Your Needs
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative p-8 bg-bg-surface/50 backdrop-blur-sm border border-border-color rounded-2xl overflow-hidden hover:border-accent-primary/50 hover:shadow-2xl hover:shadow-accent-glow/20 transition-all duration-500"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  {IconComponent && (
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-teal/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    >
                      <IconComponent className="w-8 h-8 text-accent-primary" />
                    </motion.div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-accent-teal/10 text-accent-teal text-xs font-bold rounded-full border border-accent-teal/20 group-hover:border-accent-teal/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
