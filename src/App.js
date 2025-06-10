import { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScreenshotListener from "./components/ScreenshotListener";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import products from "./data/Products";
import Loading from "./components/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ProductList = lazy(() => import("./pages/ProductList"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
            <ScreenshotListener />
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <div className="flex-1 max-w-6xl mx-auto p-4 w-full pt-20">
              <Suspense fallback={<div className="text-center py-20"><Loading /></div>}>
                <Routes>
                  <Route path="/" element={<Home searchQuery={searchQuery} />} />
                  <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
                  <Route path="/product/:id" element={<ProductDetail products={products} />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </div>

            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;