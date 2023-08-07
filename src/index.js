import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=" bg-sky-950">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);