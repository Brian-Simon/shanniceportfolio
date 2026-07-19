'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      loading = false,
      fullWidth = false,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 relative overflow-hidden';

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-primary-700 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed',
      secondary:
        'bg-primary-100 text-primary-800 hover:bg-primary-200 disabled:opacity-50 disabled:cursor-not-allowed',
      outline:
        'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed',
      glass:
        'glass text-primary-900 hover:backdrop-blur-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
          flex items-center justify-center gap-2
        `}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : icon ? (
          icon
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
