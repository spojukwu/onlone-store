import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import ScreenshotListener from "./components/ScreenshotListener";
import { CartProvider } from "./context/CartContext";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <CartProvider>
      <Router>
        {/* <ScreenshotListener /> */}
        <Navbar />
        <div className="max-w-6xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
export default App