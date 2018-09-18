import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div className="link">

      <span className="links">
        <Link to="/user">
          Home
          </Link>
      </span>

      <span className="links">
        <Link to="/profile">
          User Profile
          </Link>
      </span>

      

      <span className="links">
      <Link to="/location">
        Create post (temp link)
          </Link>
          </span>

  </div>
  </div >
);

export default Nav;
