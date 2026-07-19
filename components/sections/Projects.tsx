'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { Card } from '@/components/ui/Card';
import { FiX } from 'react-icons/fi';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk">Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(idx)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="cursor-pointer"
            >
              <Card variant="glass" hover>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`project-${portfolioData.projects[selectedProject].id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full rounded-2xl p-8 max-h-96 overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-3xl font-bold font-grotesk text-gray-900">
                  {portfolioData.projects[selectedProject].title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>
              <p className="text-gray-700 mb-6">{portfolioData.projects[selectedProject].description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Category</p>
                  <p className="font-semibold">{portfolioData.projects[selectedProject].category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Date</p>
                  <p className="font-semibold">{portfolioData.projects[selectedProject].date}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.projects[selectedProject].technologies.map((tech) => (
                    <span key={tech} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Impact</p>
                <p className="font-semibold text-primary-700">{portfolioData.projects[selectedProject].impact}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
