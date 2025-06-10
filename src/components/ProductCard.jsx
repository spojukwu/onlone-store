import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2 rounded bg-white"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">₦{product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-2 text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;