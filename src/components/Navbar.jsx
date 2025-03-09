import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiMoon, HiSun } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import ResumeModal from './ResumeModal';

const Navbar = () => {
  // Component state and theme
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false); // Add state for resume modal
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Toggle mobile menu
  const handleClick = () => setNav(!nav);

  // Open resume modal
  const openResumeModal = (e) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  // Shadow effect on scroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  // Using theme-specific text colors directly from Tailwind classes
  // instead of using custom classes like text-light
  return (
    <>
      {/* Navbar */}
      <div className={`fixed w-full z-50 transition-all duration-300 ${shadow
        ? isDark
          ? 'backdrop-blur-md bg-dark-glass shadow-glass'
          : 'backdrop-blur-md bg-light-glass shadow-lg'
        : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center h-20 md:h-24 px-6">
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='hero' smooth={true} duration={500}>
              <h1 className='text-2xl md:text-3xl font-bold cursor-pointer'>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>Z</span>
                <span className={isDark ? 'text-dark-accent' : 'text-light-accent'}>P</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark
                ? 'bg-dark-tertiary text-dark-light hover:bg-dark-tertiary/80'
                : 'bg-light-tertiary text-light-dark hover:bg-light-tertiary/80'} 
                transition-all duration-300`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="h-5 w-5" />
              ) : (
                <HiMoon className="h-5 w-5" />
              )}
            </button>

            <ul className='flex space-x-6'>
              <li>
                <Link
                  to='hero'
                  smooth={true}
                  duration={500}
                  className={`text-sm uppercase tracking-wider ${isDark
                    ? 'text-gray-400 hover:text-dark-accent'
                    : 'text-gray-600 hover:text-light-accent'} transition-colors duration-300`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='about'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-sm uppercase tracking-wider ${isDark
                    ? 'text-gray-400 hover:text-dark-accent'
                    : 'text-gray-600 hover:text-light-accent'} transition-colors duration-300`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='skills'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-sm uppercase tracking-wider ${isDark
                    ? 'text-gray-400 hover:text-dark-accent'
                    : 'text-gray-600 hover:text-light-accent'} transition-colors duration-300`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to='projects'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-sm uppercase tracking-wider ${isDark
                    ? 'text-gray-400 hover:text-dark-accent'
                    : 'text-gray-600 hover:text-light-accent'} transition-colors duration-300`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='contact'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-sm uppercase tracking-wider ${isDark
                    ? 'text-gray-400 hover:text-dark-accent'
                    : 'text-gray-600 hover:text-light-accent'} transition-colors duration-300`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Controls - Combined hamburger menu and theme toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark
                ? 'bg-dark-tertiary text-dark-light hover:bg-dark-tertiary/80'
                : 'bg-light-tertiary text-light-dark hover:bg-light-tertiary/80'} 
                transition-all duration-300`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <HiSun className="h-5 w-5" />
              ) : (
                <HiMoon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={handleClick}
              className={`${isDark
                ? 'text-dark-muted hover:text-dark-accent'
                : 'text-light-muted hover:text-light-accent'} 
                transition-colors duration-300 cursor-pointer z-20`}
              aria-label="Toggle menu"
            >
              {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={nav
            ? `fixed inset-0 flex items-center justify-center z-10 ${isDark
              ? 'bg-dark-glass backdrop-blur-md'
              : 'bg-light-glass backdrop-blur-md'} transition-all duration-300 ease-in-out`
            : 'fixed inset-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out'}>
            <ul className='flex flex-col items-center space-y-8'>
              <li>
                <Link
                  onClick={handleClick}
                  to='hero'
                  smooth={true}
                  duration={500}
                  className={`text-2xl ${isDark
                    ? 'text-dark-light hover:text-dark-accent'
                    : 'text-light-dark hover:text-light-accent'} 
                    transition-colors duration-300`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to='about'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-2xl ${isDark
                    ? 'text-dark-light hover:text-dark-accent'
                    : 'text-light-dark hover:text-light-accent'} 
                    transition-colors duration-300`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to='skills'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-2xl ${isDark
                    ? 'text-dark-light hover:text-dark-accent'
                    : 'text-light-dark hover:text-light-accent'} 
                    transition-colors duration-300`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to='projects'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-2xl ${isDark
                    ? 'text-dark-light hover:text-dark-accent'
                    : 'text-light-dark hover:text-light-accent'} 
                    transition-colors duration-300`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to='contact'
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`text-2xl ${isDark
                    ? 'text-dark-light hover:text-dark-accent'
                    : 'text-light-dark hover:text-light-accent'} 
                    transition-colors duration-300`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social icons sidebar - completely fixed to viewport */}
      <div className='hidden lg:block fixed left-0 top-0 h-full z-40'>
        <div className="flex h-full items-center">
          <ul className="space-y-2">
            <li className='transform -translate-x-24 hover:-translate-x-2 transition-all duration-300 flex items-center'>
              <a
                href="https://linkedin.com/in/zacharypolof"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between py-3 w-36 ${isDark
                  ? 'bg-dark-glass backdrop-blur-sm text-dark-light'
                  : 'bg-light-glass backdrop-blur-sm text-light-dark'} rounded-r-md pl-5`}
              >
                <span className="text-sm">LinkedIn</span>
                <div className={`${isDark
                  ? 'bg-dark-tertiary'
                  : 'bg-light-tertiary'} p-2 rounded-full`}>
                  <FaLinkedin size={18} className="text-accent" />
                </div>
              </a>
            </li>
            <li className='transform -translate-x-24 hover:-translate-x-2 transition-all duration-300 flex items-center'>
              <a
                href="https://github.com/IVIonsters"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between py-3 w-36 ${isDark
                  ? 'bg-dark-glass backdrop-blur-sm text-dark-light'
                  : 'bg-light-glass backdrop-blur-sm text-light-dark'} rounded-r-md pl-5`}
              >
                <span className="text-sm">GitHub</span>
                <div className={`${isDark
                  ? 'bg-dark-tertiary'
                  : 'bg-light-tertiary'} p-2 rounded-full`}>
                  <FaGithub size={18} className="text-accent" />
                </div>
              </a>
            </li>
            <li className='transform -translate-x-24 hover:-translate-x-2 transition-all duration-300 flex items-center'>
              <a
                href="mailto:ZacharyPolof@gmail.com"
                className={`flex items-center justify-between py-3 w-36 ${isDark
                  ? 'bg-dark-glass backdrop-blur-sm text-dark-light'
                  : 'bg-light-glass backdrop-blur-sm text-light-dark'} rounded-r-md pl-5`}
              >
                <span className="text-sm">Email</span>
                <div className={`${isDark
                  ? 'bg-dark-tertiary'
                  : 'bg-light-tertiary'} p-2 rounded-full`}>
                  <HiOutlineMail size={18} className="text-accent" />
                </div>
              </a>
            </li>
            <li className='transform -translate-x-24 hover:-translate-x-2 transition-all duration-300 flex items-center'>
              <a
                href="#resume"
                onClick={openResumeModal}
                className={`flex items-center justify-between py-3 w-36 ${isDark
                  ? 'bg-dark-glass backdrop-blur-sm text-dark-light'
                  : 'bg-light-glass backdrop-blur-sm text-light-dark'} rounded-r-md pl-5`}
              >
                <span className="text-sm">Resume</span>
                <div className={`${isDark
                  ? 'bg-dark-tertiary'
                  : 'bg-light-tertiary'} p-2 rounded-full`}>
                  <BsFillPersonLinesFill size={18} className="text-accent" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </>
  );
};

export default Navbar;
