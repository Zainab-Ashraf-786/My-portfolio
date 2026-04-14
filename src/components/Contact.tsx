'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, User, Phone } from 'lucide-react';
import { developerProfile } from '@/lib/data';

const socialLinks = [
  {
    icon: Globe,
    label: 'GitHub',
    url: 'https://github.com/Zainab-Ashraf-786',
    color: 'hover:text-white hover:border-white/50',
  },
  {
    icon: User,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zainab-ashraf-36b2a52bb',
    color: 'hover:text-blue-500 hover:border-blue-500/50',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    url: 'https://wa.me/923001234567',
    color: 'hover:text-green-500 hover:border-green-500/50',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary text-[20px] font-bold uppercase tracking-widest rounded-full mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-6">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-teal animate-gradient bg-[length:200%_auto]">
              Amazing
            </span>
          </h2>
          <p className="text-text-secondary text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.
          </p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${developerProfile.email}`}
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-accent-primary text-white text-lg font-bold rounded-full shadow-xl shadow-accent-glow hover:shadow-2xl transition-all mb-14 group"
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            {developerProfile.email}
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className={`p-4 bg-bg-surface border border-border-color rounded-xl text-text-secondary ${link.color} transition-all duration-300`}
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
