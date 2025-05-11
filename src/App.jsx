import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import { useDarkMode } from './context/darkmodecontext';
import Chat from './components/Chat';


// Dark Mode Toggle Button Component
export const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition duration-300"
        title="Toggle Dark Mode"
      >
        <span className={`text-xl ${darkMode ? 'text-yellow-400' : 'text-gray-800'}`}>
          {darkMode ? '☀️' : '🌙'}
        </span>
      </button>
    </div>
  );
};

const App = () => {
  const { darkMode } = useDarkMode();

  // Apply the dark class to <html> tag when darkMode is true
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Router>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>

        {/* Chat Button */}
        <Chat/>  {/* Add ChatButton here */}

        <footer className="bg-[#F95738] dark:bg-gray-800 py-4 mt-10">
          <div className="container mx-auto text-center">
            <p className="text-white text-lg font-semibold">
              &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
};

export default App;
