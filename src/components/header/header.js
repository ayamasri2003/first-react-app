import React from 'react';
import './header.css'; // Create this file for styles
import logo from "../../assets/logo2.jpg"

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt='logo2'/>
      <h1>TechGuard Solutions</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#features">Our Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
