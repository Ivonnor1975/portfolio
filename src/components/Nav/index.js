import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(){
  const categories = [
    { name: "Projects", description: "Websites"},
    { name: "Resume", description: "Download resume here" },
  ];

  return (
      <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span> My portfolio!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
              <li
                className="mx-1"
                key={category.name}
              >
                <span>
                  {category.name}
                </span>
              </li>
          ))}
    </ul>
    </nav>
    </header>
  );
}

export default Nav;