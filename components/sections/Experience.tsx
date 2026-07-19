'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Card } from '@/components/ui/Card';

export const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const active = portfolioData.experience[selectedExperience];

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-primary-50/50 -z-10" />

      {/* Animated background elements */}
      <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-primary-200/10 blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk">Experience</h2>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Experience List */}
          <motion.div className="lg:col-span-1 space-y-3">
            {portfolioData.experience.map((exp, idx) => (
              <motion.button
                key={exp.id}
                onClick={() => setSelectedExperience(idx)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 ${
                  selectedExperience === idx
                    ? 'glass bg-primary-700/20 border-primary-500'
                    : 'hover:bg-primary-50/50'
                }`}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{exp.company}</p>
                    <p className="text-xs text-gray-600">{exp.period}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card variant="glass" hover={false} className="h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold font-grotesk text-gray-900 mb-2">
                          {active.title}
                        </h3>
                        <p className="text-xl text-gray-600">{active.company}</p>
                      </div>
                      <span className="text-4xl">{active.icon}</span>
                    </div>
                    <p className="text-sm text-primary-600 font-semibold">{active.period}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-8">{active.description}</p>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 font-grotesk">Key Achievements</h4>
                    <ul className="space-y-3">
                      {active.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="pt-6 border-t border-primary-200/50">
                    <p className="text-sm text-gray-600">
                      Experience #{active.id} of {portfolioData.experience.length}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
