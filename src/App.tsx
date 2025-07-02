import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SolarEducation from './components/SolarEducation';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Locations from './components/Locations';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header />
      <Hero />
      <SolarEducation />
      <About />
      <Services />
      <Team />
      <Contact />
      <Locations />
    </div>
  );
}

export default App;