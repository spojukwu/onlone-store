import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  // Check if product is already in cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition bg-white dark:bg-gray-900">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2 rounded bg-white"
      />
      <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-200">
        ₦{product.price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="mt-3 inline-block w-full text-center bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>

      <button
        onClick={() => addToCart(product)}
        disabled={isInCart}
        className={`mt-2 block w-full px-4 py-1 rounded transition-colors ${
          isInCart
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-green-600 hover:bg-green-700 text-white"
        }`}
      >
        {isInCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;