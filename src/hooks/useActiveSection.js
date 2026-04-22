/**
 * useActiveSection Hook
 * Purpose: Track which section is currently in view for navbar highlighting
 * Uses IntersectionObserver to detect visible sections
 * 
 * Usage:
 *   const activeSection = useActiveSection(['hero', 'about', 'skills'])
 *   // Use activeSection to highlight current nav item
 */

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || null);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
