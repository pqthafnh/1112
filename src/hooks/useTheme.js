/**
 * useTheme Hook
 * Purpose: Access theme context (theme, toggleTheme)
 * 
 * Usage: const { theme, toggleTheme } = useTheme()
 */

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
