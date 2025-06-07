import { useEffect, useState } from "react";
import products from "../data/Products";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700); // short delay
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow transition-shadow hover:shadow-lg"
          >
            <img
              src={product.image || "/images/placeholder.png"}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            {/* Uncomment the link when you want to enable navigation */}
            <Link
              to={`/product/${product.id}`}
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;