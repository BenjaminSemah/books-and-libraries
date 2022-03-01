import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navigation = [
    {
      id: 0,
      path: '/',
      navName: 'BOOKS',
    },
    {
      id: 1,
      path: '/categories',
      navName: 'CATEGORIES',
    },
  ];
  return (
    <>
      <header>
        <h1>Books And Libraries</h1>
        <nav>
          <ul className="nav--links">
            {navigation.map((navItem) => (
              <li key={navItem.id}>
                <NavLink to={navItem.path} className="nav--item">{navItem.navName}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
