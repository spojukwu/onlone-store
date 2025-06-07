import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">🎉 Thank You!</h2>
      <p className="text-lg mb-4">Your order has been successfully placed.</p>
      <p className="text-gray-600 mb-6">We appreciate your purchase.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Store
      </Link>
    </div>
  );
};

export default ThankYou;