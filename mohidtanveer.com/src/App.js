import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Homepage, Work, Personal, About } from './pages';
import { Sentiment, Duckingautocorrect, Blueshell, Dijkstras } from './pages/work-pages';

function App() {
return (
      <Router>
        <AppContent />
      </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
      <div className={currentPath === '/about' ? 'aboutme' : currentPath === '/work' ? 'work' : currentPath === '/personal' ? 'personal' : ''}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/sentiment" element={<Sentiment />} />
          <Route path="/work/duckingautocorrect" element={<Duckingautocorrect />} />
          <Route path="/work/blueshell" element={<Blueshell />} />
          <Route path="/work/dijkstras" element={<Dijkstras />} />
        </Routes>
      </div>
  );
}

export default App;