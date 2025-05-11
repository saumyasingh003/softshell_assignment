// src/components/DarkModeToggle.js
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={handleToggle}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition duration-300 cursor-pointer"
        title={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
        aria-label={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
      >
        <span className={`text-xl transition-colors duration-300 ${darkMode ? 'text-yellow-400' : 'text-gray-800'}`}>
          {darkMode ? '🌙' : '☀️'}
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
