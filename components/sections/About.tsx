'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';

export const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-white -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-6">
            More Than Just an Assistant
          </h2>
          <p className="text-lg text-gray-600">
            I'm a dedicated professional with a passion for organization, excellence, and helping
            leaders achieve their goals.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-2 glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-grotesk">Who I Am</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{portfolioData.personal.summary}</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: portfolioData.personal.location },
                { label: 'Experience', value: '5+ Years' },
                { label: 'Languages', value: portfolioData.languages.join(', ') },
                { label: 'Focus', value: 'Excellence & Growth' },
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  className="py-4 border-t border-primary-200/50"
                >
                  <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                  <p className="font-semibold text-gray-900">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-grotesk">Interests</h3>
            <div className="space-y-3">
              {portfolioData.interests.map((interest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary-50/50 hover:bg-primary-100/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-gray-700 font-medium">{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Detail-Oriented',
              description: 'Meticulous attention to every detail ensures nothing is overlooked',
              icon: '🎯',
            },
            {
              title: 'Proactive',
              description: 'Anticipating needs and solving problems before they arise',
              icon: '⚡',
            },
            {
              title: 'Reliable',
              description: 'Consistent, dependable support you can count on',
              icon: '✓',
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="glass rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 font-grotesk">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
