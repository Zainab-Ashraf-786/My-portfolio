'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', image: '/images/reactjs-966214a8.png' },
  { name: 'Next.js', image: '/images/download.webp' },
  { name: 'Node.js', image: '/images/logo-node-js-1024.png' },
  { name: 'Python', image: '/images/download (1).png' },
  { name: 'JavaScript', image: '/images/download (1).webp' },
  { name: 'HTML', image: '/images/html-92b76a73.png' },
  { name: 'CSS', image: '/images/css-79a7f026.png' },
  { name: 'Tailwind', image: '/images/tailwind-6ece120d.png' },
  { name: 'Docker', image: '/images/png-transparent-docker-logo-kubernetes-microservices-cloud-computing-dockers-logo-text-logo-cloud-computing.png' },
  { name: 'OpenAI', image: '/images/OpenAI Logo PNG.jfif' },
  { name: 'Figma', image: '/images/figma-184a11e6.png' },
  { name: 'GitHub', image: '/images/github-3b4e1609.png' },
];

export default function TechIcons() {
  return (
    <section id="tech-icons" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
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
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, type: 'spring' }}
              whileHover={{ 
                scale: 1.08, 
                y: -12,
                rotateY: 5,
                rotateX: 5,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className="group relative p-8 bg-bg-surface/50 backdrop-blur-sm border border-border-color rounded-2xl hover:border-accent-primary/50 hover:shadow-2xl hover:shadow-accent-glow/30 cursor-pointer overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all"
                />
              </div>
              
              {/* Name */}
              <span className="relative block text-center text-text-secondary text-sm font-bold group-hover:text-text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
