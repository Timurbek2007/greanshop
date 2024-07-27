import React, { useState } from "react";

import "../../styles/cardImg.css";
import { Range, getTrackBackground } from "react-range";

const PriceRange = () => {
  const [values, setValues] = useState([39, 1230]);
  const MIN = 0;
  const MAX = 1500;

  return (
    <div style={{}}>
      <h3>Price Range</h3>
      <Range
        values={values}
        step={1}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props?.onMouseDown}
            onTouchStart={props?.onTouchStart}
            style={{
              ...props?.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#0ac", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props?.style,
              height: "24px",
              width: "24px",
              backgroundColor: "#0ac",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
              }}
            />
          </div>
        )}
      />
      <div className="price">
        Price: ${values[0]} - ${values[1]}
      </div>
    </div>
  );
};

export default PriceRange;
