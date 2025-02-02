import React from 'react';
import { projects } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="group bg-white rounded-lg overflow-hidden dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm dark:bg-zinc-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;