import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Samplecards from './components/sampleCards.jsx';
import AboutUsSection from './components/aboutus.jsx';
import OrderProcessing from './components/orderprocess.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import ScrollToTopButton from './components/scrolltotopbutton.jsx';
import Creator from './components/creator.jsx';
import NotFound from './components/NotFound.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Samplecards />
              <AboutUsSection />
              <OrderProcessing />
              <Contact />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />
        <Route
          path="/creator"
          element={
            <>
              <Header />
              <Creator />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
