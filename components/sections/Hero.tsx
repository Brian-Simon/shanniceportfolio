'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Button } from '@/components/ui/Button';
import { FiDownload, FiArrowDown } from 'react-icons/fi';

// Placeholder 3D component - will be enhanced with Three.js
const HeroScene = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="w-48 h-48 rounded-full border-2 border-primary-500/30 border-t-primary-500"
      />
    </div>
  );
};

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-primary-50 -z-10" />

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
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-200/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary-300/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                Welcome to my digital space
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold font-grotesk leading-tight mb-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-gradient block"
                >
                  Helping Leaders
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-primary-700 block"
                >
                  Stay Organized
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-gradient block"
                >
                  Move Faster
                </motion.span>
              </h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-md"
            >
              Executive Assistant | Virtual Assistant | Operations Coordinator
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" icon={<FiArrowDown />}>
                Explore Journey
              </Button>
              <Button variant="outline" size="lg" icon={<FiDownload />}>
                Download Resume
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-primary-200 flex gap-8"
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '100+', label: 'Projects Handled' },
                { value: '50+', label: 'Happy Clients' },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary-700">{stat.value}</span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative h-96 md:h-full min-h-96 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md max-h-md">
              <Suspense fallback={<div>Loading...</div>}>
                <HeroScene />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
