import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
    <ul className="nav-ul">
      <li>
        <a  className="logo">R.M. </a>
      </li>
      <li>
        <div className="nav-links">
          <ul className="links">
            <li><a className="nav-hover" >projects</a></li>
            <li><a className="nav-hover" >contact</a></li>
            <li><a className="nav-hover" >services</a></li>
            
          </ul>
        </div>
      </li>

    </ul>
  </div>
  )
}

export default Navbar