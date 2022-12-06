import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = (props: any) => {
  const { setOpenPopup } = props;

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  return (
    <div>
      <IconButton
        aria-label="close"
        onClick={handleClosePopup}
        sx={{
          position: "absolute",
          right: 1,
          top: 8,
          color: "black",
        }}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default CloseButton;
