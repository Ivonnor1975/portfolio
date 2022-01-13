import React from 'react';
import { Link } from 'react-router-dom';
//   <Link to="/Gallery">Gallery</Link>
const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
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
