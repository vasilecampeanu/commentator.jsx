// This file contains the entry point

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('commentator'));

// Application entry point
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
