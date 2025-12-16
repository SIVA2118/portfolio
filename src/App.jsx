import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import MyWork from './pages/MyWork';
import Youtube from './pages/Youtube';
import Content from './pages/Content';
import Service from './pages/Service';

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <main className="page-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/content" element={<Content />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
