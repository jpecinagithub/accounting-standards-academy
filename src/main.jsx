import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App.jsx';
import { ProgressProvider } from './store/progress.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProgressProvider>
        <App />
        <Analytics />
      </ProgressProvider>
    </BrowserRouter>
  </React.StrictMode>
);
