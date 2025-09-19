import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Routine from './components/Routine';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <About />
      <Routine />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
