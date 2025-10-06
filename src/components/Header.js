import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h1 className="brand-text">
            Deepak Kumar Sahu
          </h1>
        </div>
        <div className="nav-right">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">{'<Home />'}</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">{'<About />'}</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">{'<Skills />'}</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">{'<Projects />'}</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">{'<Contact />'}</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;