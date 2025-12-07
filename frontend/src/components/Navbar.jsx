import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="text-white bg-amber-500 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-white z-50">
            <Link to="/">AM-DEV</Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-300">Home</Link>
            <Link to="/about" className="hover:text-blue-300">About</Link>
            {user ? (
              <>
                <span className="hover:text-blue-300">{user.username}</span>
                <button onClick={handleLogout} className="hover:text-blue-300 font-semibold">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-blue-300">Login</Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white px-2 pt-2 pb-3 space-y-1 shadow-md">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded hover:bg-gray-700">About</Link>
          {user ? (
            <>
              <span className="block px-3 py-2 rounded">{user.username}</span>
              <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block px-3 py-2 rounded hover:bg-gray-700">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
