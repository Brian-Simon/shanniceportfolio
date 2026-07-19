'use client';

import React, { useEffect, useRef } from 'react';
import { useCursorGlow } from '@/lib/hooks';
import gsap from 'gsap';

// Object pool for reusable trail elements - prevents memory leaks
const TRAIL_POOL_SIZE = 50;
const trailPool: HTMLDivElement[] = [];
let trailIndex = 0;

// Initialize trail pool on first use
function initTrailPool() {
  if (trailPool.length > 0) return;
  
  for (let i = 0; i < TRAIL_POOL_SIZE; i++) {
    const trail = document.createElement('div');
    trail.className =
      'fixed pointer-events-none w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-300';
    trail.style.opacity = '0';
    document.body.appendChild(trail);
    trailPool.push(trail);
  }
}

export const CursorGlow: React.FC = () => {
  const cursorRef = useCursorGlow();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initialize trail pool once
    initTrailPool();

    // Create trail effect using object pool
    const handleMouseMove = (e: MouseEvent) => {
      const trail = trailPool[trailIndex];
      if (!trail) return;

      // Reuse existing element from pool
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      trail.style.transform = 'translate(-50%, -50%)';
      trail.style.opacity = '0.6';

      gsap.to(trail, {
        opacity: 0,
        duration: 0.5,
      });

      gsap.to(trail, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        duration: 0.5,
      });

      // Cycle through pool to reuse elements
      trailIndex = (trailIndex + 1) % TRAIL_POOL_SIZE;
    };

    // Use passive listener for better scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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
