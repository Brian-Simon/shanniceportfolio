'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';
import { portfolioData } from '@/lib/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiLinkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: portfolioData.social.twitter, label: 'Twitter' },
    { icon: FiGithub, href: portfolioData.social.github, label: 'GitHub' },
    { icon: FiMail, href: `mailto:${portfolioData.social.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary-50 to-primary-100 border-t border-primary-200">
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gradient font-grotesk mb-2">SWG</h3>
            <p className="text-sm text-gray-600">Executive Assistant • Virtual Assistant • Operations Coordinator</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['About', 'Experience', 'Skills', 'Services'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary-700 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Executive Support', 'Virtual Assistance', 'Research'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-primary-700 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${portfolioData.social.email}`}
                className="text-sm text-gray-600 hover:text-primary-700 transition-colors block"
              >
                {portfolioData.social.email}
              </a>
              <p className="text-sm text-gray-600">{portfolioData.personal.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-gray-600"
          >
            © {currentYear} Shannice Wangui Gichia. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/50 hover:bg-primary-700/20 text-gray-700 hover:text-primary-700 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-primary-700/20 hover:bg-primary-700/30 text-primary-700 transition-all duration-300"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
