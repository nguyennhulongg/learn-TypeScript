import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./bestSeller.css";
import { useState } from "react";
import axios from "axios";

const BestSellerProducts = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState<any[]>([]);

  const getBestSellerProducts = async () => {
    const res = await axios.get(
      "https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop"
    );
    setBestSellerProducts(res.data);
  };

  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <div className="best-seller-container">
      <h2 className="best-seller-title">Explore Best Sellers</h2>
      <div className="best-seller-products">
        <Grid container>
          {bestSellerProducts.map((product) => {
            if (product.bestSeller) {
              return (
                <Grid key={product.id} item sm={3} xs={12}>
                  <div className="best-seller-product-content">
                    <img
                      className="product-image"
                      src={product.shoesImage}
                      alt="giay"
                    />
                    <div className="best-seller-product-information">
                      <p>{product.shoesName}</p>
                      <p>${product.price}</p>
                    </div>
                  </div>
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
};

export default BestSellerProducts;
