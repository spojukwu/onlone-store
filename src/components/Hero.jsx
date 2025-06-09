import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";

const featuredBanners = [
  {
    title: "Summer Sale 🏖️",
    subtitle: "Up to 50% off selected items!",
    buttonText: "Shop Summer Deals",
    bg: "from-yellow-400 to-pink-500"
  },
  {
    title: "New Arrivals 🚀",
    subtitle: "Check out the latest trends!",
    buttonText: "Explore Now",
    bg: "from-green-400 to-blue-500"
  },
  {
    title: "Limited Offers ⏰",
    subtitle: "Don't miss out on our flash sales!",
    buttonText: "Grab Deals",
    bg: "from-red-500 to-purple-600"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const banner = featuredBanners[current];

  return (
    <motion.div
      key={current}
      className={`bg-gradient-to-r ${banner.bg} text-white text-center py-20 px-4 rounded-lg shadow-lg mb-10`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
      <p className="text-lg md:text-xl mb-6">{banner.subtitle}</p>
      <a
        href="#products"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        {banner.buttonText}
      </a>
    </motion.div>
  );
};

export default Hero;