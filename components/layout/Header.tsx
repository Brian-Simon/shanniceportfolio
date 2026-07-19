'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active nav item based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const { top } = element.getBoundingClientRect();
        return top >= -200 && top < window.innerHeight / 2;
      });
      if (current) setActiveItem(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const target = href.slice(1);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveItem(target);
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass bg-white/20 backdrop-blur-xl border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gradient cursor-pointer font-grotesk"
        >
          SWG
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeItem === item.href.slice(1)
                  ? 'bg-primary-700/20 text-primary-700'
                  : 'text-gray-700 hover:text-primary-700'
              }`}
              whileHover={{ backgroundColor: 'rgba(138, 92, 246, 0.1)' }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4">
          <Button variant="glass" size="sm">
            Download CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeItem === item.href.slice(1)
                    ? 'bg-primary-700/20 text-primary-700 font-semibold'
                    : 'text-gray-700 hover:bg-white/5'
                }`}
                whileHover={{ paddingLeft: 20 }}
              >
                {item.label}
              </motion.button>
            ))}
            <Button fullWidth variant="primary" size="sm" className="mt-4">
              Download CV
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};
