import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 h-screen flex justify-center items-center">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-white">
          Pak Wheels
        </a>
        <ul className="flex items-center">
          <li>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;