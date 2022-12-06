import React from "react";
import { IProduct } from "../interface/itemType";
import "./product.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";

interface IProps {
  item: IProduct;
}

const Product = (props: IProps) => {
  const { item } = props;
  return (
    <div>
      <div className="all-product-content product-hover">
        <img
          className="all-product-avatar"
          src={item.shoesImage}
          alt={item.shoesName}
        />
        <div className="all-product-information">
          <div className="margin-product-name">
            <p className="small-title">{item.shoesName}</p>
            <p className="medium-title  price-product">${item.price}</p>
          </div>
          <div className="all-product-price-edit margin-product-edit">
            <a
              href={`/product/${item.id}`}
              className="detail-product-button all-product-edit"
            >
              <BorderColorIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
