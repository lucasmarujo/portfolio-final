import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../constants';
import usaphoto from '../public/USA.png';
import braphoto from '../public/BRA.png';

const TechIcon: React.FC<{ icon: string; color: string; title: string }> = ({ icon, color, title }) => (
  <div 
    className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500/50 hover:border-blue-600 dark:border-blue-400/50 dark:hover:border-blue-300 transform hover:scale-110 transition-all duration-300 relative group`}
    title={title}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
    <i className={`devicon-${icon} colored text-2xl relative z-10`}></i>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center page-transition">
      <div className="mb-8 relative">
        <div className="absolute inset-0 rounded-full profile-image-border"></div>
        <img
          src={personalInfo.photo}
          alt={personalInfo.name}
          className="w-48 h-48 rounded-full border-4 shadow-lg relative z-10"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 dark:text-white">{personalInfo.name}</h1>
      <h2 className="text-xl text-gray-600 mb-2 dark:text-gray-300">{personalInfo.role}</h2>
      
      {/* Technology Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 max-w-2xl px-4">
        <TechIcon color="blue" icon="react-original" title="React.js" />
        <TechIcon color="blue" icon="typescript-original" title="TypeScript" />
        <TechIcon color="green" icon="nodejs-plain" title="Node.js" />
        <TechIcon color="blue" icon="tailwindcss-plain" title="Tailwind CSS" />
        <TechIcon color="blue" icon="materialui-plain" title="Material UI" />
        <TechIcon color="green" icon="mysql-plain" title="MySQL" />
        <TechIcon color="blue" icon="python-plain" title="Python" />
        <TechIcon color="blue" icon="github-plain" title="GitHub" />
      </div>

      {/* Download Buttons */}
      <div className="flex space-x-4 mb-8">
        <a target="_blank" href="https://drive.google.com/file/d/1mnbq9N_ri41BPfnPqCgyOnGsl68mDo3D/view?usp=drive_link" className="flex items-center px-4 py-2 rounded-lg border-2 border-green-500 hover:border-yellow-500 dark:border-green-400 dark:hover:border-yellow-400 transition-colors duration-300 group">
          <img 
            src={braphoto} 
            alt="Brazil flag" 
            className="w-5 h-4 mr-2"
          />
          <span className="text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-300">
            View CV
          </span>
          <Download className="w-4 h-4 ml-2 text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
        </a>
        
        <a target="_blank" href="https://drive.google.com/file/d/1dzBDABB2B3JdFXxEx_ju7fvKwDMheWkS/view?usp=drive_link" className="flex items-center px-4 py-2 rounded-lg border-2 border-blue-500 hover:border-red-500 dark:border-blue-400 dark:hover:border-red-400 transition-colors duration-300 group">
          <img 
            src={usaphoto}
            alt="USA flag" 
            className="w-5 h-4 mr-2"
          />
          <span  className="text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-300">
            View CV
          </span>
          <Download className="w-4 h-4 ml-2 text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
        </a>
      </div>

      <p className="max-w-2xl text-gray-600 mb-8 dark:text-gray-400">{personalInfo.about}</p>
      <div className="flex space-x-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" 
           className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900 button-transition">
          <Github className="w-6 h-6 dark:text-white" />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
           className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900 button-transition">
          <Linkedin className="w-6 h-6 dark:text-white" />
        </a>
        <a href={`mailto:${personalInfo.email}`}
           className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-900 button-transition">
          <Mail className="w-6 h-6 dark:text-white" />
        </a>
      </div>
    </div>
  );
}

export default Home;