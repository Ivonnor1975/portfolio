import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
           <h2><span role="img" aria-label="camera"> 📸</span> My portfolio!</h2>
        </Link>

        <nav className="text-center">
          <Link to="/about">About</Link>
          <Link to="/ContactForm">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
