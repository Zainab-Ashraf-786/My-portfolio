'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developerProfile, technicalSkills, aiFocusAreas, education, certifications } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

type TabType = 'overview' | 'skills' | 'education';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-primary/10 text-accent-primary text-[20px] font-bold uppercase tracking-widest rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary">
            Get to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
              Know Me
            </span>
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-14">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-accent-primary text-white shadow-lg shadow-accent-glow'
                  : 'bg-bg-surface text-text-secondary border border-border-color hover:text-text-primary hover:border-accent-primary/50'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative p-10 bg-bg-surface/50 backdrop-blur-sm border border-border-color rounded-3xl">
                {/* Decorative quote mark */}
                <div className="absolute -top-4 -left-2 text-8xl text-accent-primary/10 font-serif leading-none">"</div>
                
                <p className="relative text-text-secondary text-xl leading-relaxed mb-8">
                  {developerProfile.bio}
                </p>
                <p className="relative text-text-secondary text-xl leading-relaxed">
                  I aim to merge advanced AI technical expertise with strategic business insights. 
                  My work involves building innovative AI-powered applications, intelligent agent systems, 
                  workflow automation, and leveraging cutting-edge technologies.
                </p>
                
                {/* Stats Row */}
                <div className="relative grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border-color">
                  {[
                    { value: `${developerProfile.experienceYears}+`, label: 'Years Experience' },
                    { value: `${developerProfile.projectsCount}+`, label: 'Projects Completed' },
                    { value: `${developerProfile.clientsCount}+`, label: 'Happy Clients' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-teal">
                        {stat.value}
                      </div>
                      <div className="text-text-muted text-sm font-medium mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              {/* Technical Skills */}
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
                {technicalSkills.map((skill, i) => {
                  const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-bg-surface border border-border-color rounded-xl p-5 hover:border-accent-primary/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {IconComponent && (
                            <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-accent-primary" />
                            </div>
                          )}
                          <span className="text-text-primary font-bold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-accent-teal font-black text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-bg-elevated rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-teal rounded-full"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* AI & Business Focus */}
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                AI & Business Focus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {aiFocusAreas.map((area, i) => {
                  const IconComponent = LucideIcons[area.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
                  return (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group p-6 bg-bg-surface border border-border-color rounded-xl hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-glow/20 transition-all duration-300"
                    >
                      {IconComponent && (
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-primary/20 to-accent-teal/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-accent-primary" />
                        </div>
                      )}
                      <h4 className="text-lg font-bold text-text-primary mb-2">{area.title}</h4>
                      <p className="text-text-secondary text-sm">{area.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              {/* Education */}
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Education</h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto mb-14"
              >
                <div className="relative p-8 bg-bg-surface border border-border-color rounded-2xl hover:border-accent-primary/50 transition-colors overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-3xl" />
                  <div className="relative flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-primary/20 to-accent-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <LucideIcons.GraduationCap className="w-7 h-7 text-accent-primary" />
                    </div>
                    <div>
                      <h4 className="text-text-primary font-black text-xl">{education.degree}</h4>
                      <p className="text-accent-primary font-semibold text-lg mt-1">{education.institution}</p>
                      <p className="text-text-muted text-base mt-1">{education.period}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                Certifications & Training
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {certifications.map((cert, i) => {
                  const IconComponent = LucideIcons[cert.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;
                  return (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="p-6 bg-bg-surface border border-border-color rounded-xl hover:border-accent-teal/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {IconComponent && (
                          <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-accent-teal" />
                          </div>
                        )}
                        <div>
                          <h4 className="text-text-primary font-bold text-sm">{cert.name}</h4>
                          <p className="text-text-muted text-xs mt-1">{cert.issuer}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
