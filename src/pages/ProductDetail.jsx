import { useParams } from "react-router-dom";
import products from "../data/Products";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Loading from "../components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;

  if (!product) return <div className="text-gray-700 dark:text-gray-200">Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain mb-2 rounded bg-white"
      />

      <h2 className="text-2xl font-bold mb-2 dark:text-white">{product.name}</h2>
      <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
        ₦{product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      <p className="text-gray-700 dark:text-gray-200 mb-4">
        {product.description || "No description available."}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;