import gsap from 'gsap';

/**
 * Fade in animation with GSAP
 */
export const fadeInAnimation = (element: HTMLElement | null, duration = 0.6) => {
  if (!element) return;
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      ease: 'power2.out',
    }
  );
};

/**
 * Slide in animation with GSAP
 */
export const slideInAnimation = (
  element: HTMLElement | null,
  direction: 'left' | 'right' | 'up' | 'down' = 'left',
  duration = 0.6
) => {
  if (!element) return;

  const xValues = { left: -50, right: 50, up: 0, down: 0 };
  const yValues = { left: 0, right: 0, up: -50, down: 50 };

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: xValues[direction],
      y: yValues[direction],
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      ease: 'power2.out',
    }
  );
};

/**
 * Scale animation with GSAP
 */
export const scaleAnimation = (element: HTMLElement | null, duration = 0.6) => {
  if (!element) return;
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      ease: 'elastic.out(1, 0.5)',
    }
  );
};

/**
 * Stagger animation for multiple elements
 */
export const staggerAnimation = (
  elements: HTMLElement[] | NodeListOf<Element>,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
  } = {}
) => {
  const { duration = 0.6, stagger = 0.1, delay = 0, ease = 'power2.out' } = options;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease,
    }
  );
};

/**
 * Float animation
 */
export const floatAnimation = (element: HTMLElement | null, duration = 3) => {
  if (!element) return;
  gsap.to(element, {
    y: 20,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Rotate animation
 */
export const rotateAnimation = (element: HTMLElement | null, duration = 20) => {
  if (!element) return;
  gsap.to(element, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: 'none',
  });
};

/**
 * Glow animation
 */
export const glowAnimation = (element: HTMLElement | null) => {
  if (!element) return;
  gsap.to(element, {
    boxShadow: ['0 0 10px rgba(138, 92, 246, 0.2)', '0 0 30px rgba(138, 92, 246, 0.6)'],
    duration: 2,
    repeat: -1,
    yoyo: true,
  });
};

/**
 * Typewriter effect
 */
export const typewriterEffect = (
  element: HTMLElement | null,
  text: string,
  speed = 50,
  onComplete?: () => void
) => {
  if (!element) return;

  let index = 0;
  element.textContent = '';

  const type = () => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, speed);
    } else if (onComplete) {
      onComplete();
    }
  };

  type();
};

/**
 * Parallax effect handler
 */
export const handleParallax = (element: HTMLElement | null, speed = 0.5) => {
  if (!element) return;

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const x = (clientX - window.innerWidth / 2) * speed * 0.01;
    const y = (clientY - window.innerHeight / 2) * speed * 0.01;

    gsap.to(element, {
      x,
      y,
      duration: 0.5,
      overwrite: 'auto',
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
};

/**
 * Magnetic button effect
 */
export const magneticButtonEffect = (button: HTMLElement | null) => {
  if (!button) return;

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = button.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    gsap.to(button, {
      x: distanceX * 0.3,
      y: distanceY * 0.3,
      duration: 0.3,
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      overwrite: 'auto',
    });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Count up animation
 */
export const countUpAnimation = (
  element: HTMLElement | null,
  endValue: number,
  duration = 2,
  format?: (value: number) => string
) => {
  if (!element) return;

  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = format ? format(obj.value) : Math.round(obj.value).toString();
    },
  });
};
