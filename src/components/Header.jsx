import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/WanderSyncSite/', label: 'Home' },
    { path: '/WanderSyncSite/design', label: 'Design & Architecture' },
    { path: '/WanderSyncSite/ui', label: 'User Interface' },
    { path: '/WanderSyncSite/functionality', label: 'Functionality' },
    { path: '/WanderSyncSite/conclusions', label: 'Conclusions' },
    { path: '/WanderSyncSite/contributors', label: 'Contributors' },
  ];

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-10 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-200 transition-colors duration-200 px-3 py-2 rounded-md ${
                  location.pathname === item.path ? 'bg-blue-700' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
