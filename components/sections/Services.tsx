'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Card } from '@/components/ui/Card';

export const Services: React.FC = () => {
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-primary-50/50 -z-10" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-5 w-96 h-96 rounded-full bg-primary-200/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 rounded-full bg-primary-300/10 blur-3xl -z-10 animate-pulse" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive support tailored to your executive and operational needs.
          </p>
        </motion.div>

        {/* Services Grid - Floating Islands Effect */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{ y: -20 }}
              className="h-full"
            >
              <Card variant="gradient" hover className="h-full flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-grotesk text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>

                {/* Features */}
                <div className="pt-6 border-t border-primary-200/50">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, fidx) => (
                      <motion.li
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 + fidx * 0.05, duration: 0.4 }}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-2 px-4 bg-primary-700/20 hover:bg-primary-700/30 text-primary-700 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More →
                </motion.button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* All Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Each service is customized to your specific needs and goals. Let's discuss how I can best support your success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-700 to-primary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
