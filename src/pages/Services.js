// src/pages/Services.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <h1 className='text-center'>Our Services</h1>
      <ul className='services'>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Services;
