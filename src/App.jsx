// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Chat from './components/Chat';
import DarkModeToggle from './components/DarkModeToggle.jsx';
import { useDarkMode } from './context/DarkModeContext.jsx';


const App = () => {
  const { darkMode } = useDarkMode();


  return (
    <div className={`${darkMode?"min-h-screen bg-white  text-black transition-colors duration-300":"text-white bg-gray-900"}`}>
      <Router>
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>

        {/* Chat Button */}
        <Chat />  {/* Add ChatButton here */}

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
