import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext"; 

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { getTotalItems } = useContext(CartContext);
  const { isDark, setIsDark } = useContext(ThemeContext); 

  return (
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap py-4 items-center justify-between p-2 bg-blue-600 text-white shadow-md">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
          🛒 MyShop
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 rounded text-black w-60 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      {/* Right: Nav Links */}
      <div className="flex-1 flex justify-end gap-6 items-center pr-2">
        <Link to="/products" className="transition duration-300 transform hover:scale-110">Products</Link>
        <Link to="/about" className="transition duration-300 transform hover:scale-110">About</Link>
        <Link to="/contact" className="transition duration-300 transform hover:scale-110">Contact</Link>
        <Link to="/cart" className="relative transition duration-300 transform hover:scale-110">
          <span role="img" aria-label="cart">🛒</span>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalItems()}
            </span>
          )}
        </Link>
        {/*  Dark Mode Toggle */}
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 dark:bg-gray-700 rounded-full peer dark:peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
        <span className="text-sm">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;