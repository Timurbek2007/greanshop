import React from "react";

import img from "../../assets/images/logo.png";
import CustomizedSnackbars from "../Alert";
import "../../styles/header.css";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import ColorButton from "../buttonbig";
const { HOME, PLANT, SHOP } = paths;

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={img} alt="img" />
            <h1>GREENSHOP</h1>
          </div>
          <ul>
            <li>
              <Link to={HOME}>Home</Link>
            </li>
            <li>
              <Link to={SHOP}>Shop</Link>
            </li>
            <li>
              <Link to={PLANT}>Plant Care</Link>
            </li>
          </ul>
          <div className="icons">
            <i class="fa-solid fa-magnifying-glass" id="icon"></i>
            <i class="fa-solid fa-cart-shopping" id="icon"></i>
            <CustomizedSnackbars />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
