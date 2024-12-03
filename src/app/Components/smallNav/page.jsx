"use client";
import React from 'react';

const SmallNavbar = () => {
  return (
    <nav className="bg-blue-50 rounded-3xl py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="text-black py-2 px-4 hover:bg-blue-100 rounded">
              Refer
            </a>
            <a href="#" className="text-black py-2 px-4 hover:bg-blue-100 rounded">
              Benefits
            </a>
            <a href="#" className="text-black py-2 px-4 hover:bg-blue-100 rounded">
              FAQs
            </a>
            <a href="#" className="text-black py-2 px-4 hover:bg-blue-100 rounded">
              Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
