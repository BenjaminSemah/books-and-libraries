import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="inside--header">
      <h1>Books And Libraries</h1>
      <nav className="nav--links">
        <Link className="nav--item" to="/">Books </Link>
        <Link className="nav--item" to="/categories">Categories </Link>
      </nav>
    </div>
    <Outlet />
  </header>
);

export default Header;
