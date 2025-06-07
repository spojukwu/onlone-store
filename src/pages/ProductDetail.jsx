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

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-blue-600 font-bold text-lg mb-4">₦{product.price}</p>
      <p className="text-gray-700 mb-4">{product.description || "No description available."}</p>
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