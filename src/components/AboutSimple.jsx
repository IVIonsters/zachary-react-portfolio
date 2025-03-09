import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Create a direct, simplified version as a backup
const AboutSimple = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cards = [
    { title: "Frontend", content: "React, Tailwind CSS, Material UI, Chakra UI" },
    { title: "Backend", content: "Node.js, Express, PostgreSQL, MongoDB" },
    { title: "DevOps", content: "Docker, Firebase, Netlify, Git" },
    { title: "Design", content: "Figma, Notion, Photoshop, Illustrator" }
  ];

  return (
    <section
      id="about"
      name="about"
      className={`py-24 md:py-28 w-full ${isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-gray-900'
        }`}
    >
      <div className='max-w-6xl mx-auto px-5 md:px-8'>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-1">About Me</h2>
            <div className={`w-12 h-1 mb-6 ${isDark ? 'bg-[#64ffda]' : 'bg-[#0e7490]'
              }`}></div>
          </div>

          <div className='grid md:grid-cols-2 gap-12'>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Building digital experiences with passion and precision.
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                I am a software developer with expertise in building responsive and
                intuitive web applications. My passion lies in creating seamless user
                experiences through clean, efficient code.
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                With a strong foundation in modern web technologies and a keen eye for
                design, I bring ideas to life with precision and creativity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 ${isDark
                    ? 'bg-[#1e1e1e] border border-gray-800'
                    : 'bg-[#e5e5e5] border border-gray-300'
                    }`}
                >
                  <h4 className={`mb-2 font-medium ${isDark ? 'text-[#64ffda]' : 'text-[#0e7490]'
                    }`}>
                    {card.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;
