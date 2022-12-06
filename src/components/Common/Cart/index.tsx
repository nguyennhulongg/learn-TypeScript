import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./cart.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { cartListSelector } from "../../../redux/selector";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import Footer from "../../Common/Footer";
import EmptyCart from "../../Common/Empty/EmptyCart";
import { IProduct } from "../../Common/interface/itemType";
import SubmitRemoveFromCart from "../../Common/popup/submitRemoveFromCart";

const Cart = () => {
  const cartListData = useSelector(cartListSelector);
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState<IProduct[]>([]);
  const [isOpenPopup, setOpenPopup] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>();
  const [cartAmount, setCartAmount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleDeleteItem = (product: any) => {
    setOpenPopup(true);
    setProduct(product);
  };

  const productCartAmount = cartListData.reduce(
    (previousValue: any, currentValue: any) => {
      return previousValue + currentValue?.amount;
    },
    0
  );

  const totalPriceProduct = cartListData.reduce(
    (previousValue: any, currentValue: any) => {
      return previousValue + currentValue?.price * currentValue?.amount;
    },
    0
  );

  useEffect(() => {
    setCartAmount(productCartAmount);
    setTotalPrice(totalPriceProduct);
  }, []);

  useEffect(() => {
    setListItem(cartListData);
  }, [cartListData]);

  if (cartListData.length > 0) {
    return (
      <div>
        <Grid className="cart-content container-padding" container spacing={5}>
          <Grid item sm={7} xs={12}>
            <div className="cart-container">
              <h1 className="cart-title">
                MY SHOPPING CART{" "}
                <span className="cart-amount">
                  {cartAmount && `(${cartAmount})`}
                </span>
              </h1>
              <div>
                {cartListData.map((item: any) => {
                  return (
                    <div key={item.id} className="product-information">
                      <Grid container spacing={2} className="product-item">
                        <Grid item sm={3}>
                          <img
                            className="product-img"
                            src={item?.shoesImage}
                            alt="bao"
                          ></img>
                        </Grid>
                        <Grid item sm={6} className="product-content">
                          <div className="product-content-name">
                            <p className="medium-title">{item?.shoesName}</p>
                          </div>
                          <div className="small-text color-wrapper">
                            <span>Color:</span>
                            <div
                              style={{
                                backgroundColor: item?.color,
                                width: "20px",
                                height: "20px",
                                marginLeft: "10px",
                              }}
                            ></div>
                          </div>
                          <div className="small-text">
                            <span>Size:</span> {item?.size}
                          </div>
                          <div className="small-text">
                            <span>Style Number:</span> {item?.styleNumber}
                          </div>
                          <input
                            type="number"
                            className="product-amount"
                            defaultValue={item?.amount}
                            min={1}
                          />
                        </Grid>
                        <Grid item sm={3}>
                          <p className="medium-title">
                            ${item?.price * item?.amount}
                          </p>
                          <div className="edit-delete-product">
                            <EditOutlined />
                            <DeleteOutlined
                              onClick={() => handleDeleteItem(item)}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
          <Grid item sm={5} xs={12}>
            <h1 className="cart-title price-title">TOTAL PRICE</h1>
            <p className="font-bold green-font-bold">
              <LocalShippingIcon /> YOU’VE EARNED FREE SHIPPING
            </p>
            <p className="font-bold">
              <ReplayIcon /> FREE RETURNS ON ALL QUALIFYING ORDERS.
            </p>
            <Grid className="apply-promo-container" container spacing={0.5}>
              <Grid item sm={9}>
                <input
                  className="enter-promo-code-input"
                  placeholder="Enter a promo code"
                />
              </Grid>
              <Grid item sm={3}>
                <button className="enter-promo-code-btn">APPLY</button>
              </Grid>
            </Grid>
            <div className="price-product-container">
              <div>
                <p className="bold-text">SUBTOTAL</p>
                <p className="bold-text">SHIPPING COSTS</p>
                <p className="bold-text">ESTIMATED SALES TAX</p>
              </div>
              <div>
                <p className="product-price bold-text">${totalPriceProduct}</p>
                <p className="product-price bold-text">$0.00</p>
                <p className="product-price bold-text">-</p>
              </div>
            </div>
            <div className="estimated-price">
              <p className="total-product-price">ESTIMATED TOTAL</p>
              <p>${totalPriceProduct}</p>
            </div>
            <div className="buy-product-button">
              <button className="check-out-btn brown-btn">CHECKOUT</button>
              <button className="paypal-btn grey-btn">
                COUNTINUE WITH PAYPAL
              </button>
            </div>
          </Grid>
        </Grid>
        <SubmitRemoveFromCart
          product={product}
          isOpenPopup={isOpenPopup}
          setOpenPopup={setOpenPopup}
        />
        <Footer />
      </div>
    );
  } else {
    return (
      <>
        <EmptyCart />
        <Footer />
      </>
    );
  }
};

export default Cart;
