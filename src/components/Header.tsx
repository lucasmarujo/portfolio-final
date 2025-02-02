import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['home', 'projects', 'education', 'experience', 'contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'dark bg-black' : 'bg-white'} shadow-md nav-transition`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900 button-transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 py-2 rounded-md text-sm font-medium capitalize button-transition
                  ${activeSection === section
                    ? (darkMode ? 'bg-zinc-900 text-white' : 'bg-gray-200 text-gray-900')
                    : (darkMode ? 'text-gray-300 hover:bg-zinc-900' : 'text-gray-700 hover:bg-gray-100')
                  }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full button-transition ${darkMode ? 'text-gray-300 hover:bg-zinc-900' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize button-transition
                    ${activeSection === section
                      ? (darkMode ? 'bg-zinc-900 text-white' : 'bg-gray-200 text-gray-900')
                      : (darkMode ? 'text-gray-300 hover:bg-zinc-900' : 'text-gray-700 hover:bg-gray-100')
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header