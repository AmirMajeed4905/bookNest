import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white bg-amber-500 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-white z-50">
            <Link to="/">AM-DEV</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About</Link>
            <Link to="/contact" className="hover:text-blue-300">Contact</Link>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded hover:bg-gray-700">About</Link>
          <Link to="/contact" className="block px-3 py-2 rounded hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;