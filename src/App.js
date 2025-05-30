import logo from './logo.svg';
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home.js';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <>
    <div className='smooth-scroll'>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
