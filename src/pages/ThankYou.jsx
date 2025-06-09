import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import confetti from "canvas-confetti";

const ThankYou = () => {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the cart
    clearCart();

    // Function to fire confetti repeatedly
    const shootConfetti = () => {
      confetti({
        particleCount: 20,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a2', '#fbb1bd']
      });
    };

    // Repeat confetti every 200ms for 2 seconds
    const intervalId = setInterval(shootConfetti, 200);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      // Optional: Add a final burst or cleanup if needed
    }, 2000);

    // Redirect after 5 seconds
    const navigateTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      clearTimeout(navigateTimer);
    };
  }, [clearCart, navigate]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">🎉 Thank You!</h2>
      <p className="text-lg mb-2">Your order has been successfully placed.</p>
      <p className="text-gray-600 mb-6">You’ll be redirected shortly...</p>
      <p className="text-sm text-gray-400">(If not, <a href="/" className="text-blue-600">click here</a>.)</p>
    </div>
  );
};

export default ThankYou;