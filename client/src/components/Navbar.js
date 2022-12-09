import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <li className="logo">
          R.M. 
        </li>
        <li>
          <div className="nav-links">
            <ul className="links">
              <li className="nav-hover">Projects</li>
              <li className="nav-hover">Contact</li>
              <li className="nav-hover"> Services</li>
              
            </ul>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Navbar