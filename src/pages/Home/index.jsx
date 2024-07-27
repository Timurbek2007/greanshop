import React from "react";

import "../../styles/main.css";
import "../../styles/footer.css";
import CustomInput from "../../Components/Input";
import NestedModal from "../../Components/Modal";
import ColorButton from "../../Components/buttonbig";
import CustomLoadingButton from "../../Components/LoadingButton";
import { Choynak, Flower, Idish, Logobige, Tarvuz } from "../../assets";

const Main = () => {
  return (
    <>
      <main>
        <div className="main_block">
          <h4>Welcome to GreenShop</h4>
          <h2>
            LET'S MAKE A <br />
            BETTER <span>PLANET</span>
          </h2>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use <br /> our plants to create an unique Urban
            Jungle. Order your favorite plants!
          </p>
          <NestedModal>
            <ColorButton />
          </NestedModal>
        </div>

        <div className="nav_block">
          <div className="images">
            <img src={Logobige} alt="img" />
            <img src={Flower} alt="img" />
          </div>
        </div>
      </main>
      <footer>
        <div className="footer_block">
          <div className="footer_card">
            <div className="cards1">
              <img src={Tarvuz} alt="img" />
              <h6>Garden Care</h6>
              <p>
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
            <div className="cards2">
              <img src={Choynak} alt="img" />
              <h6>Plant Renovation</h6>
              <p>
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
            <div className="cards3">
              <img src={Idish} alt="img" />
              <h6>Watering Graden</h6>
              <p>
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
          </div>
          <div className="footer_nav">
            <h4>Would you like to join newsletters?</h4>
            <div className="components">
              <CustomInput
                title="Click to input"
                children="Enter your email ..."
              />
              <CustomLoadingButton text="join" />
            </div>
            <h5>
              We usually post offers and challenges in newsletter. We’re <br />
              your online houseplant destination. We offer a wide range <br />
              of houseplants and accessories shipped directly from our <br />
              (green)house to yours!
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
