import React, { useEffect } from "react";
import "./bestSeller.css";
import { useState } from "react";
import axios from "axios";
import Product from "../../Common/product";
import { Pagination } from "@mui/material";
import Loading from "../../Common/loading";

const LIMIT = 4;

const BestSellerProducts = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [bestSellerProducts, setBestSellerProducts] = useState<any[]>([]);

  const handleChangePage = (e: any, currentPage: number) => {
    setPage(currentPage);
  };

  const getBestSellerProducts = async () => {
    setLoading(true);
    const url = `https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop?isBestSeller=${true}&limit=${LIMIT}&page=${page}`;
    try {
      const res = await axios.get(url);
      setBestSellerProducts(res?.data?.items);
      setTotalPage(Math.ceil(res?.data?.count / LIMIT));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBestSellerProducts();
  }, [page]);

  return (
    <div className="best-seller-container container-padding">
      <h2 className="best-seller-title">Explore Best Sellers</h2>
      <div className="best-sellers-content">
        {loading ? (
          <Loading />
        ) : (
          bestSellerProducts?.map((item) => {
            return (
              <div>
                <Product key={item?.id} item={item} />
              </div>
            );
          })
        )}
      </div>
      <div className="all-products-pagination">
        <Pagination
          count={totalPage}
          color="standard"
          onChange={handleChangePage}
        ></Pagination>
      </div>
    </div>
  );
};

export default BestSellerProducts;
