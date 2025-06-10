import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementItem,
    decrementItem,
  } = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-200">
          Your cart is empty. <Link to="/" className="text-blue-600 dark:text-blue-400">Shop now!</Link>
        </p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div className="w-2/3">
                <h3 className="font-semibold dark:text-white">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  ₦{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-lg font-bold dark:text-white"
                >
                  −
                </button>
                <span className="font-semibold dark:text-white">{item.quantity}</span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-lg font-bold dark:text-white"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between mt-4 font-semibold text-lg dark:text-white">
            <span>Total:</span>
            <span>
              ₦{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;