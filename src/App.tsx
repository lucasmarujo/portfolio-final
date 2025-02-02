import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

emailjs.init('-lZl33DFNQYgKHTEA');

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-black' : 'bg-gray-50'} nav-transition`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="page-transition">
          {activeSection === 'home' && <Home />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default App