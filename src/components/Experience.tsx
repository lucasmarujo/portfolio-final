import React from 'react';
import { experience } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {experience.map((exp) => (
        <div 
          key={exp.id} 
          className="mb-8 bg-white p-6 rounded-lg dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-bold mb-2 dark:text-white">{exp.company}</h3>
          <h4 className="text-lg text-gray-700 mb-2 dark:text-gray-300">{exp.position}</h4>
          <div className="flex justify-between text-gray-600 mb-4 dark:text-gray-400">
            <span>{exp.date}</span>
            <span>{exp.location}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;