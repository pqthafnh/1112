/**
 * useIntersectionObserver Hook
 * Purpose: Detect when element enters viewport for scroll reveal animations
 * 
 * Usage:
 *   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
 *   return <div ref={ref} className={isVisible ? 'fade-in' : 'fade-up'}>Content</div>
 */

import { useRef, useState, useEffect } from 'react';

export function useIntersectionObserver({ threshold = 0.1, rootMargin = '0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: stop observing after visible (comment out for repeated animations)
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
