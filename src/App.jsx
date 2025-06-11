import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Pages
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import Goals from './pages/Goals';
import SpecialThanks from './pages/SpecialThanks'; // ✅ properly imported
import LearnMore from './pages/LearnMore'; // ✅ properly imported

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* ===== SIDEBAR ===== */}
        <Sidebar />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* ===== HEADER ===== */}
          <Header />

          {/* ===== MAIN ROUTES ===== */}
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/projects" replace />} />
              <Route path="/projects" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/home" element={<Home />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/special-thanks" element={<SpecialThanks />} /> {/* ✅ route added */}
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="*" element={<Navigate to="/projects" replace />} />
            </Routes>
          </main>

          {/* ===== FOOTER ===== */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
