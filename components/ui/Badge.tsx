'use client';

import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-primary-200 text-primary-900',
    accent: 'bg-primary-400/20 text-primary-600',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span className={`inline-flex rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};

interface TagProps {
  label: string;
  onRemove?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ label, onRemove, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-medium ${className}`}>
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-primary-900 transition-colors"
          aria-label={`Remove ${label}`}
        >
          ✕
        </button>
      )}
    </div>
  );
};
