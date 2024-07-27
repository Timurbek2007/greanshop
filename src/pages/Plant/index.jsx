import React from "react";

import CustomInput from "../../Components/Input";
import CountrySelect from "./inputs/index";
import InputFileUpload from "./uploadbt/index";
import Image from "../../assets/images/register.jpg";

import "../../styles/plant.css";

export default function Plant() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1
          style={{
            fontSize: "60px",
            paddingTop: "100px",
            fontFamily: "monospace",
            marginLeft: "20px",
          }}
        >
          Plant Care ...
        </h1>
        <div
          className="cards"
          style={{ display: "flex", alignItems: "center", marginLeft: "100px" }}
        >
          <div>
            <div
              className="card"
              style={{ display: "flex", alignItems: "center", gap: "30px" }}
            >
              <CustomInput
                title="First Name"
                children="Enter your first name ..."
              />
              <CustomInput
                title="Last Name"
                children="Enter your last name ..."
              />
              <CountrySelect />
            </div>
            <div className="card2" style={{ display: "flex", gap: "30px" }}>
              <CustomInput title="Town / City" children="Jizzakh / City" />
              <CustomInput
                title="Street Address"
                children="House number and street name ..."
              />
              <CustomInput
                title="Appartment, suite, unit, etc. (optional)"
                children="Appartment, OR  etc. (optional)..."
              />
            </div>
            <div className="card3" style={{ display: "flex", gap: "30px" }}>
              <CustomInput title="State" children="Select a state ..." />
              <CustomInput title="Zip" children="Select a zip file" />
              <CustomInput
                title="Email address ..."
                children="example@gmail.com "
              />
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <CustomInput
                title="Phone Number ..."
                children="Enter your phone number"
              />
              <CustomInput
                title="Enter your Blogs"
                children="I'm Blog full ..."
              />
              <CustomInput
                title="Enter your User Name"
                children="John. (optional)"
              />
            </div>
          </div>
        </div>
        <div className="btn" style={{ marginLeft: "180px", marginTop: "20px" }}>
          <InputFileUpload />
        </div>
      </div>
      <div className="img" style={{ width: "200px" }}>
        <img
          src={Image}
          style={{ width: "600px", marginLeft: "140px", paddingTop: "50px" }}
          alt="img..."
        />
      </div>
    </div>
  );
}
