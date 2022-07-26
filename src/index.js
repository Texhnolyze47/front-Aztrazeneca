import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App'
import Maps from './routes/Maps'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='Maps' element={<Maps/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
