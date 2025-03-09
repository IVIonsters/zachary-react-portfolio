import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className='text-light'>Z</span>
              <span className='text-accent'>P</span>
            </h3>
            <p className="text-muted max-w-xs">
              Building modern web applications with a focus on clean code,
              performance, and user experience.
            </p>
          </div>

          <div>
            <h4 className="text-light text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-accent transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-muted hover:text-accent transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-muted hover:text-accent transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-muted hover:text-accent transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-muted hover:text-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light text-lg font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/IVIonsters" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/zacharypolof" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:ZacharyPolof@gmail.com" className="text-muted hover:text-accent transition-colors duration-300">
                <HiOutlineMail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-tertiary mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">© 2025 Zachary's Portfolio. All rights reserved.</p>
          <p className="text-muted text-sm mt-2 md:mt-0">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
