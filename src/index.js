
// index.js loads App.js and injects it into the HTML file inside <div id="root">.


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);

