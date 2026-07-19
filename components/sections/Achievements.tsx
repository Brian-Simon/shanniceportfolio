'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import gsap from 'gsap';

export const Achievements: React.FC = () => {
  const counters = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.current.forEach((counter, idx) => {
              if (counter) {
                const endValue = parseInt(counter.getAttribute('data-value') || '0', 10);
                gsap.fromTo(
                  counter,
                  { textContent: '0' },
                  {
                    textContent: endValue,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    delay: idx * 0.1,
                  }
                );
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('achievements');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const achievementData = [
    { stat: '5', label: 'Years Experience', description: 'Supporting leaders and teams' },
    { stat: '100', label: 'Meetings Coordinated', description: 'Annually for executives' },
    { stat: '1000', label: 'Hours Saved', description: 'Through automation and optimization' },
    { stat: '50', label: 'Marketing Materials', description: 'Created with precision and design' },
  ];

  return (
    <section id="achievements" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-primary-50/50 -z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-200/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Impact & Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk">Achievements</h2>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievementData.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 text-center"
            >
              {/* Animated Counter */}
              <div className="mb-4">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f0e4f8" strokeWidth="2" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${Math.PI * 90}`}
                      initial={{ strokeDashoffset: Math.PI * 90 }}
                      whileInView={{
                        strokeDashoffset: Math.PI * 90 * (1 - parseInt(achievement.stat) / 100),
                      }}
                      transition={{ delay: idx * 0.1 + 0.2, duration: 2, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8A5CF6" />
                        <stop offset="100%" stopColor="#5D2A7F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span
                        ref={(el) => {
                          counters.current[idx] = el;
                        }}
                        data-value={achievement.stat}
                        className="text-4xl font-bold font-grotesk text-primary-700"
                      >
                        0
                      </span>
                      <span className="text-2xl font-bold text-primary-700">+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Label and Description */}
              <h3 className="text-xl font-bold font-grotesk text-gray-900 mb-2">{achievement.label}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
