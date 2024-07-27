import React from "react";

import { CardActionArea, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { Cardflow, Lily } from "../../assets";
import IconCheckboxes from "../FavoriteIcon";
import ByNow from "../../pages/Shop/Buy";
import Card from "@mui/material/Card";
import ColorButtons from "../Button";
import { paths } from "../../paths";
import "../../styles/cardImg.css";

const { SHOP_INFO } = paths;

function ActionAreaCard({ title, price, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    JSON.stringify(localStorage.setItem("productId", id));
    navigate(SHOP_INFO);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea className="cardImg1">
        <CardMedia alt="img" />
        <img src={Lily} alt="img" onClick={handleClick} />
      </CardActionArea>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h4">{price}</Typography>
      <IconCheckboxes />
      <ColorButtons
        children="By now"
        icons={<i class="fa-solid fa-cart-shopping"></i>}
      ></ColorButtons>
    </Card>
  );
}

export default ActionAreaCard;
