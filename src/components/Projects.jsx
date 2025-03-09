import React from 'react';
import { projectData } from '../data/projects';
import SectionWrapper from './SectionWrapper';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SectionWrapper name='projects' className="max-w-[1400px] mx-auto">
      <div className="space-y-12">
        <div>
          <h2 className={`text-3xl font-bold mb-1 ${isDark ? 'text-dark-light' : 'text-light-dark'
            }`}>Projects</h2>
          <div className={`w-12 h-1 mb-6 ${isDark ? 'bg-dark-accent' : 'bg-light-accent'
            }`}></div>
          <p className={
            isDark ? 'text-dark-muted max-w-2xl' : 'text-light-muted max-w-2xl'
          }>
            Here are some of my recent projects. Each demonstrates different aspects of my skills and approach to problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg border ${isDark
                ? 'bg-dark-glass backdrop-blur-sm border-dark-tertiary/30'
                : 'bg-light-glass backdrop-blur-sm border-light-tertiary/30'
                }`}
            >
              <div
                className="h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={`w-full h-full ${isDark ? 'bg-dark-tertiary/20' : 'bg-light-tertiary/20'
                  }`}></div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-dark-light' : 'text-light-dark'
                  }`}>{project.name}</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${isDark ? 'text-dark-muted' : 'text-light-muted'
                  }`}>{project.description}</p>

                {project.techStack && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded-full ${isDark
                            ? 'bg-dark-tertiary/50 text-dark-light'
                            : 'bg-light-tertiary/50 text-light-dark'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${isDark
                          ? 'bg-dark-tertiary/50 text-dark-light'
                          : 'bg-light-tertiary/50 text-light-dark'
                          }`}>
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-between gap-4 mt-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-center flex-1 py-2 rounded-md border transition-all duration-300 ${isDark
                        ? 'bg-dark-glass backdrop-blur-sm text-dark-light border-dark-accent hover:bg-dark-accent hover:bg-opacity-10'
                        : 'bg-light-glass backdrop-blur-sm text-light-dark border-light-accent hover:bg-light-accent hover:bg-opacity-10'
                        }`}
                    >
                      Live Demo
                    </a>
                  )}

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-center flex-1 py-2 rounded-md transition-all duration-300 ${isDark
                        ? 'bg-dark-glass backdrop-blur-sm text-dark-light hover:bg-dark-tertiary hover:bg-opacity-40'
                        : 'bg-light-glass backdrop-blur-sm text-light-dark hover:bg-light-tertiary hover:bg-opacity-40'
                        }`}
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
