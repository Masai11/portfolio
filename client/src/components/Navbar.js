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
              <li className="nav-hover"><a href='#project'>Projects</a>  </li>
              <li className="nav-hover"><a href='#contact'>Contact</a>  </li>
              <li className="nav-hover"><a href='#service'>Services</a>  </li>
              
            </ul>
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Navbar