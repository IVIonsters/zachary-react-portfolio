import React, { useState, useEffect, useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiNotion
} from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import { useTheme } from '../context/ThemeContext';

const skillsRow1 = [
  { name: 'HTML', icon: <FaHtml5 size={40} className='text-[#e34c26]' />, },
  { name: 'CSS', icon: <FaCss3Alt size={40} className='text-[#264de4]' />, },
  { name: 'JavaScript', icon: <FaJs size={40} className='text-[#f0db4f]' />, },
  { name: 'React', icon: <FaReact size={40} className='text-[#61DBFB]' />, },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} className='text-[#38B2AC]' />, },
  { name: 'Node.js', icon: <FaNodeJs size={40} className='text-[#68A063]' />, },
];

const skillsRow2 = [
  { name: 'MongoDB', icon: <SiMongodb size={40} className='text-[#4DB33D]' />, },
  { name: 'Git', icon: <FaGitAlt size={40} className='text-[#F1502F]' />, },
  { name: 'NPM', icon: <FaNpm size={40} className='text-[#CB3837]' />, },
  { name: 'Express', icon: <SiExpress size={40} className='text-[#000000]' />, },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className='text-[#336791]' />, },
  { name: 'Firebase', icon: <SiFirebase size={40} className='text-[#FFCA28]' />, },
  { name: 'Notion', icon: <SiNotion size={40} className='text-[#000000]' />, },
];

const SkillRow = ({ skills, direction = 'left', speed = 30 }) => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(containerRef.current.scrollWidth / 2); // Divide by 2 because we duplicate the content
    }
  }, []);

  useEffect(() => {
    if (containerWidth === 0 || contentWidth === 0) return;

    const animate = () => {
      if (!isPaused) {
        setPosition(prevPosition => {
          const newPosition = direction === 'left'
            ? prevPosition - 0.5
            : prevPosition + 0.5;

          // Reset position when a full cycle is complete
          if (direction === 'left' && newPosition <= -contentWidth) {
            return 0;
          } else if (direction === 'right' && newPosition >= 0) {
            return -contentWidth;
          }

          return newPosition;
        });
      }
    };

    const animationId = setInterval(animate, speed);
    return () => clearInterval(animationId);
  }, [containerWidth, contentWidth, direction, isPaused, speed]);

  return (
    <div
      className="overflow-hidden relative"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-8 py-6"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Duplicate skills to create seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="skill-icon flex-shrink-0 w-36 h-36 flex flex-col items-center justify-center"
          >
            {skill.icon}
            <p className={`text-center mt-4 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SectionWrapper name='skills'>
      <div className="space-y-12">
        <div>
          <h2 className={`text-3xl font-bold mb-1 ${isDark ? 'text-dark-light' : 'text-light-dark'
            }`}>Skills</h2>
          <div className={`w-12 h-1 mb-6 ${isDark ? 'bg-dark-accent' : 'bg-light-accent'
            }`}></div>
          <p className={
            isDark ? 'text-dark-muted max-w-2xl' : 'text-light-muted max-w-2xl'
          }>
            I work with a variety of technologies to build responsive and scalable applications.
            Here are some of the core technologies I specialize in:
          </p>
        </div>

        <div className="space-y-12">
          <SkillRow skills={skillsRow1} direction="left" speed={40} />
          <SkillRow skills={skillsRow2} direction="right" speed={30} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
