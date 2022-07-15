import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <MuiButton onClick={onClick} variant="contained">
      {label}
    </MuiButton>
  );
};

export default Button;
