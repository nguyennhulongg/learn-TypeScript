import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import "./badgets.css";
import { useSelector } from "react-redux";
import { cartListSelector } from "../../../redux/selector";

const CartBadgets = () => {
  const cartProductMount = useSelector(cartListSelector).length;

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 8,
    },
  }));

  return (
    <div className="cart-icon-container">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartProductMount} color="error">
          <ShoppingCartIcon className="cart-icon" />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default CartBadgets;
