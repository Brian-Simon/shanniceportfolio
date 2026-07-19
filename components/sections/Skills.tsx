'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';

const categories = ['Core', 'Soft Skills', 'Technology', 'Specialized'];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Core');

  const filteredSkills = portfolioData.skills.filter((skill) => skill.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white -z-10" />

      {/* Animated background elements */}
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-primary-300/10 blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">
            A comprehensive toolkit of skills to support executive operations and drive success.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'glass bg-primary-700/20 border-primary-500 text-primary-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div key={skill.name} variants={item} className="group">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-bold text-primary-600">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: idx * 0.05 + 0.2, duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold font-grotesk text-gray-900 mb-6">
            Complete Skill Set
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioData.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-lg bg-primary-50/50 hover:bg-primary-100 transition-colors text-center"
              >
                <p className="text-sm font-medium text-gray-900 flex items-center justify-center gap-2">
                  <span>{skill.icon}</span>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
