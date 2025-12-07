// FooterComponent.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-500 mt-7 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
