'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            What My Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
              Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 bg-bg-surface/50 backdrop-blur-sm border border-border-color rounded-2xl hover:border-accent-primary/50 hover:shadow-2xl hover:shadow-accent-glow/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent-primary/20 mb-4 group-hover:text-accent-primary/30 transition-colors" />

              {/* Quote Text */}
              <p className="text-text-secondary text-base italic leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border-color">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-teal/20 flex items-center justify-center font-bold text-accent-primary">
                  {testimonial.authorName.charAt(0)}
                </div>
                <div>
                  <p className="text-text-primary font-bold text-sm">{testimonial.authorName}</p>
                  <p className="text-text-muted text-xs">{testimonial.authorTitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
