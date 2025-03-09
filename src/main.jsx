import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';

// Set initial theme class
const setInitialTheme = () => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  } else if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.add('light');
  }
};

// Apply theme before rendering
setInitialTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
