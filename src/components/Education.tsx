import React from 'react';
import { education } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {education.map((edu) => (
        <div 
          key={edu.id} 
          className="mb-8 bg-white p-6 rounded-lg dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1"
        >
          <h3 className="text-xl font-bold mb-2 dark:text-white">{edu.school}</h3>
          <h4 className="text-lg text-gray-700 mb-2 dark:text-gray-300">{edu.title}</h4>
          <div className="flex justify-between text-gray-600 dark:text-gray-400">
            <span>{edu.date}</span>
            <span>{edu.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;