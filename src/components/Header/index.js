import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <Link to="/">
           <h1 className="p-2 text-white">IVONNE FERNANDEZ</h1>
        </Link>
        <nav className="text-center">
          <Link to="/about">About</Link>
          <Link to="/ContactForm">Contact</Link>
          <Link to="/Projects">Projects</Link>
       </nav>
      </div>
    </header>
  );
};

export default Header;
