import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has previously set a theme preference or use system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }

      // Return 'dark' if user prefers dark mode
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }

    // Default to dark theme
    return 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Effect to handle theme changes
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove previous theme class
    root.classList.remove('light', 'dark');

    // Add current theme class
    root.classList.add(theme);

    // Save to local storage
    localStorage.setItem('theme', theme);

    // Update body styles directly for immediate visual feedback
    document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#f5f5f5';
    document.body.style.color = theme === 'dark' ? '#f5f5f5' : '#1e1e1e';
  }, [theme]);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
