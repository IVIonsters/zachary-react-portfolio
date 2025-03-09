import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === id) || projectData[0];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Link to="/#projects" className="text-accent mb-8 inline-flex items-center">
          ← Back to projects
        </Link>

        <h1 className="text-4xl font-bold text-light mt-6">{project.name}</h1>
        <p className="text-muted my-4">{project.description}</p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="overflow-hidden rounded-lg shadow-lg">
            {/* Increased container height with min-height property */}
            <div className="relative min-h-[450px]">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg shadow-lg w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-light">Project Overview</h3>
              <p className="text-muted mt-2">{project.details?.overview || "Detailed overview coming soon."}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-light">Technologies</h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techStack?.map((tech, index) => (
                  <li key={index} className="bg-tertiary px-3 py-1 rounded-full text-sm text-light">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-light">Challenges & Solutions</h3>
              <p className="text-muted mt-2">{project.details?.challenges || "Details coming soon."}</p>
            </div>

            <div className="flex gap-4 pt-6">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-glass backdrop-blur-sm text-light rounded-md border border-accent hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}

              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-glass backdrop-blur-sm text-light rounded-md hover:bg-tertiary transition-all duration-300"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
