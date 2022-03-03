import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import profileIcon from '../images/profile-icon.png';

const Header = () => (
  <header className="header">
    <div className="inside--header">
      <h1>Books And Libraries</h1>
      <nav className="nav--links">
        <Link className="nav--item" to="/">BOOKS </Link>
        <Link className="nav--item" to="/categories">CATEGORIES </Link>
      </nav>
    </div>
    <img src={profileIcon} alt="profile icon" />
    <Outlet />
  </header>
);

export default Header;
