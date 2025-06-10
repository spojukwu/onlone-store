import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const About = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => setLoading(false), 700); // short delay
      return () => clearTimeout(timeout);
    }, []);
  
    if (loading) return <Loading />;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">About Us</h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
        Welcome to Myshop! We offer quality products at affordable prices.
        Our mission is to bring you the best online shopping experience.
      </p>
    </div>
  );
};

export default About;