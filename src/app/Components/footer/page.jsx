"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              Your Brand is a leading company in providing high-quality products and services to our customers. We are committed to excellence and customer satisfaction.
            </p>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Service 1</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Service 2</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Service 3</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Service 4</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 mb-4 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.07 20.32H3.56V9h3.51v11.32zM5.32 7.45C4.06 7.45 3 6.39 3 5.13S4.06 2.8 5.32 2.8s2.32 1.06 2.32 2.32-1.06 2.33-2.32 2.33zm15 12.87h-3.51v-5.66c0-1.35-.03-3.09-1.89-3.09-1.89 0-2.18 1.48-2.18 3v5.75h-3.51V9h3.37v1.54h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.44v6.18z"></path></svg>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.479 2.04 2 6.52 2 12.04c0 4.97 3.657 9.092 8.437 9.942.616.112.843-.267.843-.592 0-.292-.011-1.065-.017-2.091-3.438.746-4.162-1.657-4.162-1.657-.56-1.428-1.367-1.808-1.367-1.808-1.118-.764.085-.75.085-.75 1.238.087 1.89 1.273 1.89 1.273 1.098 1.882 2.882 1.338 3.58 1.024.11-.797.428-1.338.78-1.645-2.746-.312-5.629-1.374-5.629-6.12 0-1.353.482-2.457 1.275-3.323-.127-.313-.553-1.57.121-3.271 0 0 1.046-.334 3.429 1.272 1.986-.55 4.11-.55 6.098 0 2.381-1.607 3.425-1.272 3.425-1.272.675 1.701.25 2.958.123 3.271.793.866 1.271 1.97 1.271 3.323 0 4.758-2.887 5.804-5.641 6.108.439.376.829 1.11.829 2.241 0 1.617-.014 2.921-.014 3.316 0 .329.224.71.85.588 4.771-.856 8.435-4.975 8.435-9.937 0-5.52-4.48-9.999-10-9.999z"></path></svg>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.49 4.92c-.82.36-1.7.6-2.62.71.94-.56 1.66-1.45 2-2.51-.88.52-1.84.9-2.86 1.12a5.02 5.02 0 0 0-8.56 4.57 14.23 14.23 0 0 1-10.32-5.23 5.02 5.02 0 0 0 1.56 6.7 5.01 5.01 0 0 1-2.27-.62v.06a5.03 5.03 0 0 0 4.02 4.92 5.07 5.07 0 0 1-1.32.18c-.33 0-.64-.03-.95-.1a5.03 5.03 0 0 0 4.68 3.5A10.07 10.07 0 0 1 1 19.5c-.33 0-.66-.02-.98-.06a14.18 14.18 0 0 0 7.67 2.25c9.2 0 14.24-7.62 14.24-14.24 0-.22-.01-.43-.02-.64.97-.7 1.8-1.57 2.46-2.56z"></path></svg>
          </a>
        </div>

        <div className="mt-12 text-center text-gray-400">
          &copy; 2024 Your Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

