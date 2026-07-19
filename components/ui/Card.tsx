'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'dark' | 'gradient';
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'glass',
  hover = true,
  onClick,
  delay = 0,
}) => {
  const variantStyles = {
    glass: 'glass',
    dark: 'bg-black/30 backdrop-blur-md border border-white/10',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={hover ? { y: -10, boxShadow: '0 20px 40px rgba(138, 92, 246, 0.2)' } : {}}
      className={`${variantStyles[variant]} rounded-2xl p-6 ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
