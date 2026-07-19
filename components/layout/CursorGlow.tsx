'use client';

import React, { useEffect, useRef } from 'react';
import { useCursorGlow } from '@/lib/hooks';
import gsap from 'gsap';

export const CursorGlow: React.FC = () => {
  const cursorRef = useCursorGlow();
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail effect
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className =
        'fixed pointer-events-none w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-300 opacity-60';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      trail.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(trail);

      gsap.to(trail, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => trail.remove(),
      });

      gsap.to(trail, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorRef]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none w-6 h-6 opacity-0 z-50"
      style={{
        left: '0px',
        top: '0px',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative w-full h-full">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full border border-primary-500/50 animate-pulse" />

        {/* Middle ring */}
        <div className="absolute inset-1 rounded-full border border-primary-400/30" />

        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary-500" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-md" />
      </div>
    </div>
  );
};
