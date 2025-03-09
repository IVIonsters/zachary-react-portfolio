import React, { useState, useEffect } from 'react';

/**
 * A component that wraps page content with transition effects
 */
const PageTransition = ({ children, className = '', transitionKey }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Reset animation state when route changes
    setIsActive(false);

    // Start animation after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [transitionKey]);

  return (
    <div
      className={`transition-all duration-500 ${className} ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
