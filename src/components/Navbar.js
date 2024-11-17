// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Add some styling here

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div className="logo">
          <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png" alt="" height={50}/>
        </div>
      <NavLink to="/" exact activeClassName="active" className="nav-items">Home</NavLink>
      <NavLink to="/about" activeClassName="active" className="nav-items">About</NavLink>
      <NavLink to="/services" activeClassName="active" className="nav-items">Services</NavLink>
      <NavLink to="/contact" activeClassName="active" className="nav-items">Contact</NavLink>
      <NavLink to="/placements" activeClassName="active" className="nav-items">Placements</NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
