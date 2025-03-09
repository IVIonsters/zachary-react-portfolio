import React, { useRef, useEffect, useState } from 'react';

/**
 * A simplified component that reveals its children with animation when scrolled into view
 */
const ScrollReveal = ({
  children,
  className = '',
  animation = 'animate-fade-in',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    // Using simpler IntersectionObserver implementation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
