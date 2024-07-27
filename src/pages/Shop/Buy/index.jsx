import React from "react";

import { Begonia, Bromeliad, Cardflow, Lily, plant } from "../../../assets";
import quantity1 from "../../../assets/images/quanty1.png";
import quantity2 from "../../../assets/images/quanty2.png";
import quantity3 from "../../../assets/images/quanty3.png";
import { CardActionArea, CardMedia } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import data from "../../../Data/faceData";
import { Link } from "react-router-dom";
import QuantityInput from "./quantity";
import "../../../styles/plant.css";
import { useEffect } from "react";

export default function ByNow() {
  const [productData, setProductData] = React.useState({});
  const productId = JSON?.parse(localStorage?.getItem("productId"));

  useEffect(() => {
    data?.filter((item) => {
      if (item?.id === productId) {
        setProductData(item);
      }
    });
    console.log(productData);
  }, [productId]);

  return (
    <>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid black",
          height: "600px",
        }}
      >
        <div
          className="shopping"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="products">
            <div className="products1">
              <h2
                style={{
                  paddingBottom: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  fontSize: "29px",
                }}
              >
                Products
              </h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={quantity1} alt="img" />
                <div>
                  <p>{productData?.title}</p>
                  <p>SKU: 1995751877966</p>
                </div>
              </div>
              <div className="products2">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={quantity2} alt="img" />
                  <div>
                    <p>{productData?.title}</p>
                    <p>SKU: 19957518757065</p>
                  </div>
                </div>
              </div>
              <div className="products3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={quantity3} alt="img" />
                  <div>
                    <p>{productData?.title}</p>
                    <p>SKU: 1995751877786</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price1">
              <h2 style={{ fontFamily: "sans-serif", paddingBottom: "40px" }}>
                Price
              </h2>
              <h3 style={{ paddingBottom: "45px" }}>{productData?.price}</h3>
              <h3 style={{ paddingBottom: "45px" }}>{productData?.price}</h3>
              <h3 style={{ marginBottom: "10px" }}>{productData?.price}</h3>
            </div>
          </div>
          <div className="quantity">
            <h2 style={{ fontFamily: "sans-serif", fontSize: "29px" }}>
              Quantity
            </h2>
            <br />
            <QuantityInput />
            <br />
            <br />
            <QuantityInput />
            <br />
            <br />
            <QuantityInput />
          </div>
          <div className="total">
            <h2
              style={{
                fontFamily: "sans-serif",
                fontSize: "29px",
                paddingBottom: "19px",
              }}
            >
              Total
            </h2>
            <h2 style={{ paddingBottom: "19x", color: "#46A358" }}>$238.00</h2>
            <h2 style={{ paddingBottom: "15px", color: "#46A358" }}>$834.00</h2>
            <h2 style={{ color: "#46A358" }}>$1,611.00</h2>
          </div>
          <div
            style={{
              display: "grid",
              rowGap: "39px",
              marginTop: "80px",
              marginLeft: "23px",
            }}
          >
            <DeleteIcon />
            <DeleteIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className="tools">
          <div className="card">
            <div>
              <h2
                style={{
                  paddingTop: "25px",
                  fontFamily: "sans-serif",
                  fontSize: "30px",
                  fontWeight: "850",
                }}
              >
                Cart Totals
              </h2>
              <h5 style={{ fontSize: "18px", fontWeight: "400" }}>
                Coupon Apply
              </h5>
            </div>
            <div>
              <input
                style={{
                  border: "1px solid #46A358",
                  width: "220px",
                  height: "40px",
                  borderRight: "none",
                  borderRadius: "3px",
                  textAlign: "center",
                }}
                type="text"
                placeholder="Enter coupon code here..."
              />
              <button
                style={{
                  color: "#46A358",
                  width: "80px",
                  height: "40px",
                  background: "#46A358",
                  borderLeft: "none",
                  border: "1px solid #46A358",
                  color: "white",
                  borderRadius: "2px",
                }}
              >
                Apply
              </button>
            </div>
            <div
              className="text"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
                fontSize: "20px",
                paddingTop: "20px",
              }}
            >
              <div>
                <p>Subtotal</p>
                <p>Coupon Discount</p>
                <p>Shiping</p>
              </div>
              <div>
                <p>$2,683.00</p>
                <p>(-) 00.00</p>
                <p>$16.00</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                Total
              </h3>
              <h3 style={{ color: "$2,699.00" }}>$2,699.00</h3>
            </div>
            <button
              style={{
                background: "#46A358",
                width: "300px",
                height: "50px",
                borderRadius: "4px",
                border: "none",
                fontSize: "18px",
              }}
            >
              Proceed To Checkout
            </button>
            <Link>
              <p style={{ color: "#46A358", textAlign: "center" }}>
                Continue Shopping
              </p>
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <div className="view">
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                marginLeft: "240px",
                cursor: "pointer",
              }}
            >
              You may be interested in
            </p>
          </div>
          <div className="cards">
            <CardActionArea
              className="cardImg1"
              style={{ gap: "20px", display: "flex" }}
            >
              <CardMedia alt="img" />
              <img src={Lily} alt="img" />
              <img src={Bromeliad} alt="img" />
              <img src={plant} alt="img" />
              <img src={Cardflow} alt="img" />
              <img src={Begonia} alt="img" />
            </CardActionArea>
            <div
              className="texts"
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  width: "1300px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam fringilla augue nec est tristique auctor.
                Donec non est at libero vulputate rutrum. Morbi ornare lectus
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget
                laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                eros eget velit.Donec ac tempus ante.Fusce ultricies massa
                massa.Fusce aliquam, purus eget sagittis vulputate, sapien
                libero hendrerit est, sed commodo augue nisi non neque.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Sed tempor,
                lorem et placerat vestibulum, metus nisi posuere nisl, in
                accumsan elit odio quis mi.Cras neque metus, consequat et
                blandit et, luctus a nunc.Etiam gravida vehicula tellus, in
                imperdiet ligula euismod eget.The ceramic cylinder planters come
                with a wooden stand to help elevate your plants off the ground.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
