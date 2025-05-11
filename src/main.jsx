import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import { DarkModeProvider } from './context/DarkModeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
