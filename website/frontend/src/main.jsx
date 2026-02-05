import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/css/style.css';
import './assets/css/header.css';

// Note: Ensure style.css is imported in App.jsx or here 
// to ensure the Event Horizon styles load globally.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);