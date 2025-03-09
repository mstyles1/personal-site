import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage.js';
import NavMenu from './component/NavMenu/NavMenu.jsx'
import CodingPage from './component/CodingPage/CodingPage.js';
import ComicsPage from './component/ComicsPage/ComicsPage.js';
import ContactPage from './component/ContactPage/ContactPage.js';
import './App.css'

const App = () => {
  return (
    <Router> 
      <NavMenu />
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;




