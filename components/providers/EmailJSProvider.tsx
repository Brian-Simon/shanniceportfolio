'use client';

import React, { ReactNode, useEffect } from 'react';

interface EmailJSProviderProps {
  children: ReactNode;
}

/**
 * EmailJS Provider Component
 * Initializes EmailJS for contact form functionality
 * Exposes emailjs to window object for use in components
 */
export const EmailJSProvider: React.FC<EmailJSProviderProps> = ({ children }) => {
  useEffect(() => {
    // Load EmailJS library
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/index.min.js';
      script.async = true;
      script.onload = () => {
        // Initialize EmailJS with public key
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey && window.emailjs) {
          window.emailjs.init(publicKey);
        }
      };
      document.head.appendChild(script);
    } else {
      // EmailJS already loaded, ensure it's initialized
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (publicKey && window.emailjs) {
        window.emailjs.init(publicKey);
      }
    }
  }, []);

  return <>{children}</>;
};

// Extend Window interface to include emailjs
declare global {
  interface Window {
    emailjs?: {
      send: (
        serviceID: string,
        templateID: string,
        templateParams: Record<string, unknown>,
        publicKey?: string
      ) => Promise<{ status: number; text: string }>;
      init: (publicKey: string) => void;
    };
  }
}
