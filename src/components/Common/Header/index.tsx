import React from "react";
import backgroundImg from "../../../assets/img/header-background.webp";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="header-img" src={backgroundImg} alt="" />
        <div className="sale-content">
          <h1>SAVE UP TO 50% OFF</h1>
          <h2>THE HOLIDAY HEAD START STARTS NOW</h2>
          <p>EXCLUSIONS APPLY</p>
          <div className="choose-gender">
            <button className="choose-gender-btn">SHOP MEN</button>
            <button className="choose-gender-btn">SHOP WOMEN</button>
            <button className="choose-gender-btn">SHOP KIDS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
