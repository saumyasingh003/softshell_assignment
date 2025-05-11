// src/components/DarkModeToggle.js
import React from 'react';
import { useDarkMode } from '../components/DarkModeContext';



// Dark Mode Toggle Button Component
const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition duration-300"
        title="Toggle Dark Mode"
        aria-label={`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}
      >
        <span className={`text-xl ${darkMode ? 'text-yellow-400' : 'text-gray-800'}`}>
          {darkMode ? '☀️' : '🌙'}
        </span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
