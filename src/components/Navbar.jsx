import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-blue-600 text-white shadow-md">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
          🛒 MyStore
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
        <Link
          to="/products"
          className="transition duration-300 transform hover:scale-110"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="transition duration-300 transform hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="transition duration-300 transform hover:scale-110"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className="relative transition duration-300 transform hover:scale-110"
        >
          <span role="img" aria-label="cart">🛒</span>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalItems()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;