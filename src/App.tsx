import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/UI/Home";
import AllProducts from "./components/UI/AllProducts";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <div className="nav-bar-container">
        <nav className="nav-items">
          <a href="/">
            <img className="logo" src={logo} alt="" />
          </a>
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="all-products">
            Explore
          </a>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-products" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
