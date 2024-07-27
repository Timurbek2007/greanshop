import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "../../styles/button.css";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";

const { SHOP_BYNOW } = paths;

export default function ColorButtons({ children, icons, width, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    JSON.stringify(localStorage?.setItem("product", id));
    navigate(SHOP_BYNOW);
  };

  return (
    <Stack direction="row" spacing={3}>
      <Button
        variant="contained"
        color="success"
        className="button"
        onClick={handleClick}
      >
        {children}
        {icons}
        {width}
      </Button>
    </Stack>
  );
}
