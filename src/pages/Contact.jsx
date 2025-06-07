import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const Contact = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => setLoading(false), 700); // short delay
      return () => clearTimeout(timeout);
    }, []);
  
    if (loading) return <Loading />;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 leading-relaxed mb-2">
        You can reach us via email at: <strong>support@mystore.com</strong>
      </p>
      <p className="text-gray-700">Or call us: <strong>+234-800-000-0000</strong></p>
    </div>
  );
};

export default Contact;