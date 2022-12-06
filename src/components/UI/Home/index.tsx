import React from "react";
import Footer from "../../Common/Footer/index";
import Header from "../../Common/Header/index";
import BestSellerProducts from "../BestSellers";
import PopularProduct from "../popularProduct";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <BestSellerProducts />
      <PopularProduct />
      <Footer />
    </div>
  );
};

export default Home;
