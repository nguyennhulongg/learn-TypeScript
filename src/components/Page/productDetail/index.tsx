import React, { useEffect, useState } from "react";
import {
  Grid,
  Breadcrumbs,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import "./detailProduct.css";
import { useParams } from "react-router-dom";
import Footer from "../../Common/Footer";
import { ProductSize } from "./ProductSize";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/action";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

const DEFAULT_AMOUNT = 1;

interface IProductInfo {
  amount: number;
  size: number;
}

const DetailProduct = () => {
  const { productId } = useParams();
  const [detailProduct, setDetailProduct] = useState<any>({});
  const [detailProductSize, setDetailProductSize] = useState(7);
  const [productInfo, setProductInfo] = useState<IProductInfo>({
    size: 7,
    amount: DEFAULT_AMOUNT,
  });
  const dispatch = useDispatch();

  const getDetailProduct = async () => {
    const res = await axios
      .get(
        `https://636b4fca7f47ef51e12cb634.mockapi.io/api/v1/shoesShop/${productId}`
      )
      .then((datas) => datas.data);
    setDetailProduct(res);
  };

  useEffect(() => {
    getDetailProduct();
  }, []);

  const handleChangeSize = (e: any) => {
    setDetailProductSize(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...detailProduct, ...productInfo }));
  };

  return (
    <div>
      <Alert className="success-noti" severity="success">
        <AlertTitle className="success-noti-title">
          <strong>Success</strong>
        </AlertTitle>
        Add to cart success
      </Alert>
      <div className="detail-product-container container-padding">
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <p className="link-to-detail-product">Home</p>
              <p className="link-to-detail-product">Products</p>
              <p className="link-to-detail-product">
                {detailProduct.shoesName}
              </p>
            </Breadcrumbs>
            <img
              className="detail-product-image"
              src={detailProduct.shoesImage}
              alt=""
            />
          </Grid>
          <Grid item sm={4}>
            <div className="detail-product-information">
              <p className="detail-product-name">{detailProduct.shoesName}</p>
              <p className="detail-product-price">${detailProduct.price}.00</p>
              <p className="detail-product-color-title detail-product-title">
                Color
              </p>
              <p className="detail-product-color">Vans old skool</p>
              <img
                className="choose-detail-color-image"
                src={detailProduct.shoesImage}
                alt=""
              />
              <p className="excluced">EXCLUDED FROM DISCOUNT</p>
              <p className="size-detail-product-title detail-product-title">
                Size
              </p>
              <FormControl fullWidth>
                <Select
                  onChange={handleChangeSize}
                  className="select-product-size-input"
                  value={detailProductSize}
                >
                  {ProductSize.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.value}>
                        {item.size}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Grid className="add-detail-product-to-cart-container" container>
                <Grid className="select-mount" item sm={2}>
                  <input
                    type="number"
                    onChange={(e) =>
                      setProductInfo((oldState: IProductInfo) => {
                        return { ...oldState, amount: Number(e.target.value) };
                      })
                    }
                    defaultValue={DEFAULT_AMOUNT}
                    min={1}
                  />
                </Grid>
                <Grid item sm={10}>
                  <div className="detail-buy-btn">
                    <button onClick={handleAddToCart} className="brown-btn">
                      ADD TO CART
                    </button>
                    <button className="add-to-wishlist-btn">
                      ADD TO WISHLIST
                    </button>
                  </div>
                </Grid>
              </Grid>
              <p className="green-font-bold">
                <LocalShippingIcon /> THIS ITEM QUALIFIES FOR FREE SHIPPING!
              </p>
              <p className="bold-text qualifying-orders">
                <ReplayIcon /> FREE RETURNS ON ALL QUALIFYING ORDERS.
              </p>
              <p className="detail-product-description-title detail-product-title">
                Description
              </p>
              <p className="description-content">
                The Old Skool, Vans classic skate shoe and the first to bare the
                iconic side stripe, has a low-top lace-up silhouette with a
                durable suede and canvas upper with padded tongue and lining and
                Vans signature Waffle Outsole.
              </p>
              <a className="read-more-link" href="/">
                Read More
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
