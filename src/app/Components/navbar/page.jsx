"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className=" px-4 h-28">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-7">
            <div>
              <a href="#" className="flex items-center py-2 px-2">
                <img src="/accredian.jpeg" alt="Logo" className="h-20 w-20 mr-2" />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</a>
              <a href="#" className="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
              <a href="#" className="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Service</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href={"/login"} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">Login</Link>
            <Link href="#" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300">Try for free</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Service</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Register</a>
        <a href="./login" className="block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
