import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        <h4>❤️ Made with love by Ivonne Fernandez.</h4>
        <div class="copy">
            &copy;{new Date().getFullYear()} 
        </div>    
      </div>
    </footer>
  );
};

export default Footer;
