import React from "react";

import NotFound from "../../assets/images/404.jpg";
import "../../styles/404.css";

export default function Notfount() {
  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img
          style={{
            justifyContent: "center",
            display: "flex",
          }}
          src={NotFound}
          alt="error"
        />
        <div className="debug">
          <h1
            style={{
              color: "red",
              fontSize: "80px",
              marginTop: "-120px",
              fontFamily: "cursive",
            }}
          >
            "Error 404 " <br /> PAGE NOT FOUND
          </h1>
        </div>
      </main>
    </>
  );
}
