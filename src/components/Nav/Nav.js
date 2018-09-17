import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div className="link">
      
          <Link to="/user">
            Home
          </Link>
       
          <Link to="/profile">
            User Profile
          </Link>

          <Link to="/location">
            Create post
          </Link>
      
    </div>
  </div>
);

export default Nav;
