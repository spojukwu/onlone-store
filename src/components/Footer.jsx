const Footer = () => 
    {
  return (
    <footer className="bg-blue-600 text-white text-center py-6 mt-10 shadow-inner">
      <div className="mx-auto">
        <p className="mb-2">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/products" className="hover:underline">Products</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;