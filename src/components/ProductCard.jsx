import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition bg-white dark:bg-gray-900">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2 rounded bg-white"
      />
      <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-200">
        ₦{product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;