import React from "react";
import bodyBackground from "../../../assets/img/body-image-hehe.jpg";
import "./popularProduct.css";
import Carousel from "react-material-ui-carousel";

const PopularProduct = () => {
  return (
    <div>
      <img className="popular-product-background" src={bodyBackground} alt="" />
      <div></div>
    </div>
  );
};

export default PopularProduct;
