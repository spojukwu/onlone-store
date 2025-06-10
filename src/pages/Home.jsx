import { useEffect, useState } from "react";
import products from "../data/Products";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Hero from "../components/Hero";

const Home = ({ searchQuery }) => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  // Initial load (show all products)
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
    <div className="p-4">
      <Hero />
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 12).map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow transition-shadow hover:shadow-lg"
            >
              <img
                src={product.image || "/images/placeholder.png"}
                alt={product.name}
                className="w-full h-60 object-contain mb-2 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
              <p className="text-gray-700 dark:text-gray-200">
                ₦{product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-200">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;