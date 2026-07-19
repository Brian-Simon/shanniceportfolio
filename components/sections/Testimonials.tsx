'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number) => Math.abs(offset) * 2;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent(
      (prev) => (prev + newDirection + portfolioData.testimonials.length) % portfolioData.testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            What Others Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk">Testimonials</h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              drag="x"
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0 }}
              dragTransition={{
                power: 0.2,
                timeConstant: 200,
                restDelta: swipeConfidenceThreshold,
              }}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x) - velocity.x * swipeConfidenceThreshold;
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: portfolioData.testimonials[current].rating }).map((_, i) => (
                    <FiStar key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl text-gray-900 mb-8 italic">"{portfolioData.testimonials[current].content}"</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-700">
                    {portfolioData.testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{portfolioData.testimonials[current].name}</h4>
                  <p className="text-sm text-gray-600">{portfolioData.testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-primary-100 hover:bg-primary-200 text-primary-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {portfolioData.testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-primary-700 w-8' : 'bg-primary-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-primary-100 hover:bg-primary-200 text-primary-700 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              {current + 1} of {portfolioData.testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
