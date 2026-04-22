/**
 * ThemeContext
 * Purpose: Manage light/dark mode state globally
 * Uses localStorage for persistence and prefers-color-scheme for initial detection
 * 
 * Usage: Wrap App with <ThemeProvider>, then use useTheme() hook in components
 */

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

/**
 * ThemeProvider Component
 * Initializes theme from localStorage or system preference
 * Manages theme toggle and persistence
 * 
 * Props:
 *  - children: React nodes to wrap
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored) return stored;

    // 2. Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  // Apply theme to DOM whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
