import React from 'react';
import './App.css';
import Header from './components/header/header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/footer/Footer';
import Features from './components/Features/Features';


function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
