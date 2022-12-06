import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./empty.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <ShoppingCartIcon />
      <h2 className="no-content-text">Your Shopping Cart is Empty</h2>
    </div>
  );
};

export default EmptyCart;
