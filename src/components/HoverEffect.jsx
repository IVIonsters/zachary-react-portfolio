import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * A component that adds advanced hover effects to its children
 */
const HoverEffect = ({
  children,
  className = '',
  type = 'glow', // 'glow', 'lift', 'tilt', 'ripple'
  intensity = 'medium', // 'low', 'medium', 'high'
  color, // Override default accent color
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Calculate dynamic styles based on hover state and position
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Handle mouse move for interactive effects
  const handleMouseMove = (e) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Configure effect based on type
  let effectClasses = 'transition-all duration-300 ';
  let effectStyles = {};

  switch (type) {
    case 'glow':
      effectClasses += 'hover-glow ';
      if (isHovering) {
        const baseIntensity = intensity === 'low' ? '0.2' : intensity === 'medium' ? '0.3' : '0.5';
        const glowColor = color || (isDark ? 'rgba(100, 255, 218, ' : 'rgba(14, 116, 144, ');
        effectStyles.boxShadow = `0 0 15px ${glowColor}${baseIntensity})`;
        effectStyles.transform = 'translateY(-2px)';
      }
      break;

    case 'lift':
      effectClasses += 'hover-lift ';
      if (isHovering) {
        const liftAmount = intensity === 'low' ? '-2px' : intensity === 'medium' ? '-5px' : '-8px';
        effectStyles.transform = `translateY(${liftAmount})`;
      }
      break;

    case 'tilt':
      if (isHovering) {
        const rect = elementRef.current.getBoundingClientRect();
        const x = coords.x / rect.width;
        const y = coords.y / rect.height;
        const tiltX = (y - 0.5) * (intensity === 'low' ? 5 : intensity === 'medium' ? 10 : 15);
        const tiltY = (x - 0.5) * (intensity === 'low' ? 5 : intensity === 'medium' ? 10 : 15);
        effectStyles.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }
      break;

    case 'ripple':
      // Ripple effect uses the btn-interactive class
      effectClasses += 'btn-interactive ';
      break;

    default:
      break;
  }

  // Configure highlight color when hovering
  if (isHovering && type !== 'ripple') {
    const baseColor = color || (isDark ? 'rgb(100, 255, 218)' : 'rgb(14, 116, 144)');
    effectStyles.borderColor = baseColor;
  }

  return (
    <div
      ref={elementRef}
      className={`${effectClasses} ${className}`}
      style={effectStyles}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={type === 'tilt' ? handleMouseMove : undefined}
    >
      {children}
    </div>
  );
};

export default HoverEffect;
