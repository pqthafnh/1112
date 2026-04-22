import { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Try to get from localStorage
    const saved = localStorage.getItem('language');
    return saved || 'vi'; // Default to Vietnamese
  });

  useEffect(() => {
    // Save to localStorage when language changes
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
