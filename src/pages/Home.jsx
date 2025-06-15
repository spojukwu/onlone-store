import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "../data/Products";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";

const Home = ({ searchQuery }) => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart, cartItems } = useContext(CartContext);

  // Filtered Search
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      const updatedFiltered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(updatedFiltered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Initial Load (All Products)
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-4 mt-4">
      <div className="mt-8">
        <Hero />
      </div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 12).map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow transition-shadow hover:shadow-lg bg-white dark:bg-gray-900"
              >
                <img
                  src={product.image || "/images/placeholder.png"}
                  alt={product.name}
                  className="w-full h-60 object-contain mb-2 transition-transform duration-300 hover:scale-105 bg-white"
                />
                <h3 className="text-lg font-semibold dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  ₦{product.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  disabled={isInCart}
                  className={`mt-2 w-full bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition-colors ${
                    isInCart ? "bg-gray-400 cursor-not-allowed" : ""
                  }`}
                >
                  {isInCart ? "Already Added To Cart" : "Add to Cart"}
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-700 dark:text-gray-200">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;