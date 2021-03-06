import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
