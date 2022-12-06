import React, { useEffect, useState } from "react";
import "./all-products.css";
import background from "../../../assets/img/background-detail-product.webp";
import { Breadcrumbs, Pagination } from "@mui/material";
import axios from "axios";
import { IProduct } from "../../Common/interface/itemType";
import Footer from "../../Common/Footer";
import Loading from "../../Common/loading";
import Product from "../../Common/product";

const LIMIT = 8;

const AllProducts = () => {
  const [allShoes, setAllShoes] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangePage = (e: any, currentPage: number) => {
    setPage(currentPage);
  };

  const getAllShoes = async () => {
    setLoading(true);
    const url = `https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop?page=${page}&limit=${LIMIT}`;
    try {
      const res = await axios.get(url).then((datas) => datas.data);
      setAllShoes(res?.items);
      setTotalPage(Math.ceil(res?.count / LIMIT));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllShoes();
  }, [page]);

  return (
    <div className="all-products-container">
      <img className="all-product-header-img" src={background} alt="" />
      <div className="container-padding">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <p className="link-to-detail-product">Home</p>
          <p className="link-to-detail-product">Products</p>
        </Breadcrumbs>
        <h2 className="all-products-title">ALL PRODUCTS</h2>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="all-products-amount">
              <p>{allShoes?.length} PRODUCTS</p>
            </div>
            <div className="show-all-product">
              {allShoes?.map((item: IProduct) => {
                return <Product key={item.id} item={item} />;
              })}
            </div>
            <div className="all-products-pagination">
              <Pagination
                count={totalPage}
                color="standard"
                onChange={handleChangePage}
              ></Pagination>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
