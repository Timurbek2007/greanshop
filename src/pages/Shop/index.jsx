import React from "react";

import "../../styles/shop.css";
import data from "../../Data/faceData";
import ActionAreaCard from "../../Components/Card";
import PriceRange from "../../Components/PriceRange/PriceRange";
import CustomLoadingButton from "../../Components/LoadingButton";
import { Banner } from "../../assets/index";

export default function Shop() {
  return (
    <>
      <main>
        <div className="categori">
          <div className="plants">
            <h2>Categories</h2>
            <br />
            <span>
              House Plants <h4>(33)</h4>
            </span>
            <span>
              Potter Plants <h4>(12)</h4>
            </span>
            <span>
              Seeds<h4>(65)</h4>
            </span>
            <span>
              Small Plants <h4>(39)</h4>
            </span>
            <span>
              Big Plants<h4>(23)</h4>
            </span>
            <span>
              Succulents <h4>(17)</h4>
            </span>
            <span>
              Trerrariums <h4>(19)</h4>
            </span>
            <span>
              Gardening <h4>(13)</h4>
            </span>
            <span>
              Accessories <h4>(18)</h4>
            </span>
          </div>
          <div className="range">
            <PriceRange />
          </div>
          <div className="filter">
            <CustomLoadingButton text="Filter" />
          </div>
          <div className="size">
            <h3>Size</h3>
            <br />
            <span>
              Small<h4>(119)</h4>
            </span>
            <span>
              Medium<h4>(86)</h4>
            </span>
            <span>
              Large<h4>(78)</h4>
            </span>
          </div>
          <div className="supper">
            <img src={Banner} alt="img" />
            <p>Supper Sale</p>
            <p>UP TO 75% OFF</p>
            <div className="buynow">
              <CustomLoadingButton text="Buy now" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="cards_main">
          {data?.map((item, index) => (
            <ActionAreaCard
              key={index}
              title={item?.title}
              price={item?.price}
              id={item?.id}
              img={data?.img}
            >
              <img src={item?.img} alt="img" />
            </ActionAreaCard>
          ))}
        </div>
      </main>
    </>
  );
}
