import React, { useEffect } from "react";

import data from "../../../Data/faceData";
import ColorButtons from "../../../Components/Button";
import QuantityInput from "../Buy/quantity";

function ShopDetail() {
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
      <main style={{ textAlign: "center" }}>
        <div className="img">
          <img style={{ width: "400px" }} src={productData?.img} alt="img" />
        </div>
        <div className="Barberton">
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              paddingBottom: "25px",
            }}
          >
            {productData?.title}
          </h2>
          <h3
            style={{
              fontSize: "25px",
              fontFamily: "monospace",
              paddingBottom: "20px",
            }}
          >
            {productData?.price}
          </h3>
          <h3 style={{ fontSize: "30px", paddingBottom: "10px" }}>
            Short Description :
          </h3>
          <h3
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              textWrap: "wrap",
              display: "flex",
              width: "440px",
              fontSize: "21px",
              fontWeight: "400",
            }}
          >
            {productData?.description}
          </h3>
          <div
            style={{
              display: "flex",
              paddingTop: "20px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div>
              <QuantityInput />
            </div>
            <div>
              <ColorButtons children="Buy Now" />
            </div>
          </div>
        </div>
      </main>
      <div
        className="main main"
        style={{
          textAlign: "center",
          justifyContent: "center",
          border: "1px solid green",
          borderRadius: "10px",
          background: "lightblue",
          width: "1500px",
          height: "400px",
          justifyContent: "center",
          marginLeft: "180px",
          opacity: ".8",
        }}
      >
        <h2 style={{}}>Product Description : </h2>
        <p
          style={{
            textWrap: "wrap",
            display: "flex",
            padding: "10px 100px",
            fontSize: "20px",
            lineHeight: "24px",
            height: "190px",
          }}
        >
          {productData?.productDescription}
          {productData?.productDescription}
        </p>
      </div>
    </>
  );
}
export default ShopDetail;
