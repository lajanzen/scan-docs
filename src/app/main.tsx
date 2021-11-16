import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Documents from './pages/Documents/Documents';
import Home from './pages/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="documents" element={<Documents />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.querySelector('#root')
);
