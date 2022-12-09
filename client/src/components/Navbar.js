import React from 'react';
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
              <li className="nav-hover">projects</li>
              <li className="nav-hover">contact</li>
              <li className="nav-hover">services</li>
              
            </ul>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Navbar