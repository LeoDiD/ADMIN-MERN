import React, { useState } from 'react';
import { Search, Moon, Sun } from 'lucide-react';

const NavigationBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark'); // real dark mode support
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <nav className="bg-black shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="font-bold text-xl text-white">Dashboard</div>

      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          {showSearchInput && (
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 rounded-lg px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-white"
              autoFocus
            />
          )}
          <button 
            onClick={toggleSearchInput}
            className="p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
