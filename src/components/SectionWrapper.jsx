import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SectionWrapper = ({ name, children, className = '' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      name={name}
      className={`py-24 md:py-28 w-full ${isDark ? 'bg-dark-primary text-dark-light' : 'bg-light-primary text-light-dark'
        } ${className}`}
      id={name}
    >
      <div className='max-w-6xl mx-auto px-5 md:px-8'>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
