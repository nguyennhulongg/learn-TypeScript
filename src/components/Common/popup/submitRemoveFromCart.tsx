import React from "react";
import "./submitRemove.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/action";
import { Grid } from "@mui/material";
import CloseButton from "../closeButton";

const SubmitRemoveFromCart = (props: any) => {
  const { isOpenPopup, setOpenPopup, product } = props;
  const dispatch = useDispatch();

  const handleRemovePopup = (id: number) => {
    setOpenPopup(false);
    dispatch(deleteItem(id));
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  return (
    <div className="remove-item-form-cart-container">
      <Dialog
        open={isOpenPopup}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="" fontSize="16px">
          {"Are you sure you want to remove this item?"}
          <CloseButton setOpenPopup={setOpenPopup} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid
              container
              className="remove-product-popup-container"
              spacing={4}
            >
              <Grid item sm={4}>
                <div className="shoes-image-popup-container">
                  <img src={product?.shoesImage} alt="" />
                </div>
              </Grid>
              <Grid item sm={6}>
                <p className="small-title">Name: {product?.shoesName}</p>
                <div className="small-text color-wrapper">
                  <span>Color:</span>
                  <div
                    style={{
                      backgroundColor: product?.color,
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  ></div>
                </div>
                <p className="small-text">Size: {product?.size}</p>
                <p className="small-text">Style Number: abc</p>
                <p className="quantity-product small-text">
                  Quantity: {product?.amount}
                </p>
              </Grid>
              <Grid item sm={2}>
                <p className="small-title">${product?.price}</p>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid className="button-remove-popup" container spacing={2}>
            <Grid className="cancel-btn-container" item sm={6}>
              <button className="cancel-btn" onClick={handleClosePopup}>
                CANCEL
              </button>
            </Grid>
            <Grid className="remove-btn-container" item sm={6}>
              <button
                className="remove-btn"
                onClick={() => handleRemovePopup(product?.id)}
              >
                REMOVE
              </button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubmitRemoveFromCart;
