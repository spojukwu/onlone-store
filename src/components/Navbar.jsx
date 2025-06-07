import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 sticky top-0 z-50 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">🛍️ MyStore</Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;