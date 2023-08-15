import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import RecentWork from './RecentWork';
import Contact from './Contact';
import About from './About';
import NavBar from './navbar/NavBar';

const App = () => (
  <main className="mainContainer">
    <section className="subcontainer ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recent_work" element={<RecentWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </section>
  </main>
);

export default App;
