import { useEffect } from 'react';

/**
 * Handles intersection observer for fade-in animations
 * @param {Array} elements - DOM elements to observe
 * @param {Object} options - Intersection observer options
 */
export const useFadeInObserver = (elements, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => elements.forEach(el => {
      if (el) observer.unobserve(el);
    });
  }, [elements, options]);
};

/**
 * Creates a staggered animation effect for a list of elements
 * @param {Array} elements - Array of DOM elements
 * @param {Number} delay - Base delay in milliseconds
 * @param {Number} increment - Delay increment per element
 */
export const applyStaggeredAnimation = (elements, delay = 100, increment = 50) => {
  elements.forEach((el, index) => {
    if (el) {
      el.style.opacity = '0';
      el.style.animation = 'none';

      setTimeout(() => {
        el.style.opacity = '1';
        el.style.animation = '';
        el.classList.add('animate-fade-in');
      }, delay + (index * increment));
    }
  });
};

/**
 * Creates a custom cursor trail effect
 * @param {HTMLElement} container - Container element
 */
export const initCursorTrail = (container) => {
  if (!container) return;

  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  container.appendChild(trail);

  const trailDots = [];
  const numDots = 5;

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.className = `cursor-dot ${i === 0 ? 'cursor-dot-main' : ''}`;
    dot.style.opacity = 1 - (i * 0.2);
    trail.appendChild(dot);
    trailDots.push(dot);
  }

  let mouseX = 0;
  let mouseY = 0;
  let cursorVisible = true;
  let cursorEnabled = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!cursorVisible) {
      trailDots.forEach(dot => {
        dot.style.opacity = '1';
      });
      cursorVisible = true;
    }
  });

  document.addEventListener('mouseout', () => {
    trailDots.forEach(dot => {
      dot.style.opacity = '0';
    });
    cursorVisible = false;
  });

  function animateTrail() {
    let x = mouseX;
    let y = mouseY;

    trailDots.forEach((dot, index) => {
      const nextDot = trailDots[index + 1] || trailDots[0];

      x += (nextDot.offsetLeft - x) * 0.3;
      y += (nextDot.offsetTop - y) * 0.3;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    });

    requestAnimationFrame(animateTrail);
  }

  animateTrail();

  return () => {
    if (trail && trail.parentNode) {
      trail.parentNode.removeChild(trail);
    }
  };
};
