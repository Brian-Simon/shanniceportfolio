'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hook for fade in on scroll
 */
export const useFadeInOnScroll = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
            }
          );
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};

/**
 * Hook for scale in on scroll
 */
export const useScaleInOnScroll = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0.8,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: 'elastic.out(1, 0.5)',
            }
          );
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};

/**
 * Hook for text reveal on scroll
 */
export const useTextRevealOnScroll = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element.querySelectorAll('span, p, h1, h2, h3, h4, h5, h6'),
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power2.out',
            }
          );
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};

/**
 * Hook for mouse move parallax
 */
export const useMouseParallax = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.01;
      const y = (e.clientY - window.innerHeight / 2) * 0.01;

      gsap.to(element, {
        x,
        y,
        duration: 0.3,
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ref;
};

/**
 * Hook for infinite float animation
 */
export const useFloatAnimation = (duration = 3) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: 20,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, [duration]);

  return ref;
};

/**
 * Hook for infinite rotate animation
 */
export const useRotateAnimation = (duration = 20) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      rotation: 360,
      duration,
      repeat: -1,
      ease: 'none',
    });
  }, [duration]);

  return ref;
};

/**
 * Hook for cursor glow effect
 */
export const useCursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        overwrite: 'auto',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return cursorRef;
};

/**
 * Hook for screen size detection
 */
export const useScreenSize = () => {
  const [size, setSize] = useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

/**
 * Hook for prefering reduced motion
 */
export const usePrefersReducedMotion = () => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  return prefersReducedMotion;
};
