import React from 'react';

const SkillDetails = ({ skill, onClose }) => {
  return (
    <div className="fixed inset-0 bg-primary/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-secondary max-w-md w-full rounded-lg overflow-hidden shadow-xl border border-tertiary/30">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-light">{skill.name}</h3>
            <button
              onClick={onClose}
              className="text-muted hover:text-light transition-colors"
            >
              &times;
            </button>
          </div>

          <div className="flex justify-center my-6">
            <div className="text-accent text-6xl">
              {skill.icon}
            </div>
          </div>

          <p className="text-muted mb-4">
            {skill.description || `Description for ${skill.name} will be added soon.`}
          </p>

          {skill.projects && (
            <div>
              <h4 className="text-light text-lg font-medium mb-2">Projects using {skill.name}</h4>
              <ul className="list-disc list-inside text-muted">
                {skill.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-accent text-primary rounded-md hover:bg-opacity-80 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
