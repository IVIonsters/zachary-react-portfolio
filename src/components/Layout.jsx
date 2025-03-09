import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

// Removing the PageTransition component that might be causing issues
const Layout = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Handle theme changes for body styling
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#121212' : '#f5f5f5';
    document.body.style.color = isDark ? '#f5f5f5' : '#1e1e1e';
  }, [isDark]);

  // Removing cursor trail temporarily to debug core functionality

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <div className={`min-h-screen flex flex-col ${isDark ? 'bg-dark-primary text-dark-light' : 'bg-light-primary text-light-dark'
        }`}>
        <Navbar />
        <main className="flex-grow">
          {/* Directly render children without transition wrapper */}
          {children}
        </main>
        <div className="h-12 md:h-16"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
