import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <h1>Navbar</h1>
      <ul>
        <li>
          <Link to="/menu">
            <button className="nav-button">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="nav-button">About</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className="nav-button">Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;