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
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Us</h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-2">
        You can reach us via email at:  
        <a
          href="mailto:ifeanyistanley82@gmail.com"
          className="text-blue-600 hover:underline"
        >
          <strong> ifeanyistanley82@gmail.com</strong>
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-200">
        Or call us: <strong>+234-810-922-4422</strong>
      </p>
    </div>
  );
};

export default Contact;