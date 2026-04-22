/**
 * useMediaQuery Hook
 * Purpose: Detect if a media query matches (responsive design)
 * Returns boolean indicating if query is currently active
 * 
 * Usage: const isMobile = useMediaQuery('(max-width: 640px)')
 */

import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Set initial state
    setMatches(mediaQuery.matches);

    // Listen for changes
    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
