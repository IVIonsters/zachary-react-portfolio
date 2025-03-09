import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ResumeModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const modalRef = useRef(null);

  // Close on escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Close if clicked outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 ${isDark ? 'bg-black/90' : 'bg-gray-800/90'
          } backdrop-blur-sm`}
      />

      {/* Modal container */}
      <div
        ref={modalRef}
        className={`w-full max-w-4xl h-[85vh] rounded-lg shadow-xl z-10 ${isDark ? 'bg-dark-primary' : 'bg-light-primary'
          } flex flex-col animate-zoomIn`}
      >
        {/* Header with close button */}
        <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-dark-tertiary/50' : 'border-light-tertiary/50'
          }`}>
          <h3 className={`text-xl font-bold ${isDark ? 'text-dark-light' : 'text-light-dark'
            }`}>
            Resume
          </h3>
          <button
            onClick={onClose}
            className={`p-1 rounded-full ${isDark
              ? 'text-dark-muted hover:bg-dark-tertiary hover:text-dark-light'
              : 'text-light-muted hover:bg-light-tertiary hover:text-light-dark'
              }`}
            aria-label="Close"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Resume content */}
        <div className="flex-grow overflow-hidden p-1">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full rounded border-0"
          />
        </div>

        {/* Footer with download option */}
        <div className={`p-4 border-t ${isDark ? 'border-dark-tertiary/50' : 'border-light-tertiary/50'
          }`}>
          <a
            href="/resume.pdf"
            download
            className={`px-4 py-2 rounded ${isDark
              ? 'bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20'
              : 'bg-light-accent/10 text-light-accent hover:bg-light-accent/20'
              }`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
