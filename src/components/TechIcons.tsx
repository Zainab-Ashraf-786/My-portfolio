'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  { name: 'React', image: '/images/reactjs-966214a8.png' },
  { name: 'Next.js', image: '/images/download.webp' },
  { name: 'Node.js', image: '/images/logo-node-js-1024.png' },
  { name: 'Python', image: '/images/download%20(1).png' },
  { name: 'JavaScript', image: '/images/download%20(1).webp' },
  { name: 'HTML', image: '/images/html-92b76a73.png' },
  { name: 'CSS', image: '/images/css-79a7f026.png' },
  { name: 'Tailwind', image: '/images/tailwind-6ece120d.png' },
  { name: 'Docker', image: '/images/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing.png' },
  { name: 'OpenAI', image: '/images/OpenAI%20Logo%20PNG.jfif' },
  { name: 'Figma', image: '/images/figma-184a11e6.png' },
  { name: 'GitHub', image: '/images/github-3b4e1609.png' },
];

export default function TechIcons() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary text-[20px] font-bold uppercase tracking-widest rounded-full mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            Technologies I Use{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
              Daily
            </span>
          </h2>
        </motion.div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative p-6 bg-bg-surface border border-border-color rounded-2xl hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-glow/20 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="max-w-full max-h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Name */}
              <span className="relative block text-center text-text-secondary text-xs font-bold uppercase tracking-wider group-hover:text-text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
