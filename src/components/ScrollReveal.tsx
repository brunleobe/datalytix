import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation style: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' */
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
  /** Delay before animation starts (ms) */
  delay?: number;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.cssText += `
      opacity: 0;
      ${animation === 'fade-up' ? 'transform: translateY(36px);' : ''}
      ${animation === 'fade-left' ? 'transform: translateX(-36px);' : ''}
      ${animation === 'fade-right' ? 'transform: translateX(36px);' : ''}
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: ${delay}ms;
      will-change: opacity, transform;
    `;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
