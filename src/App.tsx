import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/UI/Home";
import AllProducts from "./components/UI/AllProducts";
import logo from "./assets/img/logo.png";
import Cart from "./components/Common/Cart";
import DetailProduct from "./components/Page/productDetail";
import CartBadgets from "./components/Common/Badgets/CartBadgets";

function App() {
  return (
    <div className="App">
      <div className="nav-bar-container">
        <nav className="nav-items">
          <div className="page-tabs">
            <a href="/">
              <img className="logo" src={logo} alt="" />
            </a>
            <a className="nav-item" href="/">
              Home
            </a>
            <a className="nav-item" href="all-products">
              Explore
            </a>
          </div>
          <div className="feature-tabs">
            <a className="add-to-card" href="/cart">
              <CartBadgets />
            </a>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="product/:productId" element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default App;
