import React, { useEffect, useRef, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import HoverEffect from './HoverEffect';
import { applyStaggeredAnimation } from '../utils/transitions';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Refs for staggered animations
  const subtitleRef = useRef(null);
  const headlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const graphicRef = useRef(null);

  // Avatar image loading state
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  useEffect(() => {
    // Apply staggered animation to hero elements
    const elements = [
      subtitleRef.current,
      headlineRef.current,
      descriptionRef.current,
      ctaRef.current,
      graphicRef.current
    ];

    applyStaggeredAnimation(elements, 300, 150);

    // Preload the avatar image
    const img = new Image();
    img.onload = () => setAvatarLoaded(true);
    img.onerror = (e) => console.error("Failed to load avatar image", e);
    img.src = "/zach.jpg";
  }, []);

  return (
    <section
      name='hero'
      className={`w-full min-h-screen flex items-center pb-8 md:pb-16 ${isDark ? 'bg-dark-primary' : 'bg-light-primary'
        }`}
    >
      <div className='max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24'>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <p
              ref={subtitleRef}
              className={`inline-block text-sm uppercase tracking-widest border-b pb-1 mb-4 fade-initial ${isDark ? 'text-dark-accent border-dark-accent' : 'text-light-accent border-light-accent'
                }`}
            >
              Software Developer
            </p>

            <h1
              ref={headlineRef}
              className={`text-5xl sm:text-6xl md:text-7xl font-bold mt-1 fade-initial ${isDark ? 'text-dark-light' : 'text-light-dark'
                }`}
            >
              <span className="block">Hi, I'm</span>
              <span className="block mt-2">Zachary</span>
            </h1>

            <p
              ref={descriptionRef}
              className={`py-6 max-w-[600px] text-lg leading-relaxed fade-initial ${isDark ? 'text-dark-muted' : 'text-light-muted'
                }`}
            >
              I'm a software developer specializing in building exceptional digital experiences.
              Currently, I'm focused on creating responsive applications with modern technologies.
            </p>

            <div ref={ctaRef} className='mt-8 flex fade-initial'>
              <HoverEffect type="glow">
                <Link to="projects" smooth={true} duration={500} offset={-80}>
                  <button className={`group flex items-center gap-2 border py-3 px-6 rounded-md transition-all duration-300 ${isDark
                    ? 'border-dark-accent text-dark-accent hover:bg-dark-accent hover:bg-opacity-10'
                    : 'border-light-accent text-light-accent hover:bg-light-accent hover:bg-opacity-10'
                    }`}>
                    View Projects
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </Link>
              </HoverEffect>

              <HoverEffect type="lift">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`ml-4 py-3 px-6 border border-transparent transition-colors duration-300 ${isDark
                    ? 'text-dark-muted hover:text-dark-light'
                    : 'text-light-muted hover:text-light-dark'
                    }`}
                >
                  Contact Me
                </Link>
              </HoverEffect>
            </div>
          </div>

          <div ref={graphicRef} className="md:col-span-2 hidden md:block fade-initial">
            <HoverEffect type="tilt" intensity="low" className="inline-block">
              <div className="relative h-64 w-64 mx-auto animate-float">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${isDark
                      ? 'from-dark-secondary to-dark-tertiary'
                      : 'from-light-secondary to-light-tertiary'
                    }`}
                ></div>

                <div
                  className={`absolute inset-0 rounded-full border-2 ${isDark
                      ? 'border-dark-accent/20 shadow-[0_0_15px_rgba(100,255,218,0.15)]'
                      : 'border-light-accent/20 shadow-[0_0_15px_rgba(14,116,144,0.15)]'
                    }`}
                ></div>

                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${isDark
                        ? 'from-dark-secondary to-dark-tertiary'
                        : 'from-light-secondary to-light-tertiary'
                      }`}
                  ></div>

                  <img
                    src="/zach.jpg"
                    alt="Zachary's portrait"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${avatarLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    onLoad={() => setAvatarLoaded(true)}
                  />
                </div>
              </div>
            </HoverEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
