import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Store from './pages/store';
import ComingSoon from './pages/comingsoon';
import Events from './pages/events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
