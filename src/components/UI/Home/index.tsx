import React from "react";
import Footer from "../../Common/Footer/index";
import Header from "../../Common/Header/index";
import BestSellerProducts from "../BestSellers";
import imgBody from "../../../assets/img/body-image-hehe.jpg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <BestSellerProducts />
      <Footer />
    </div>
  );
};

export default Home;
