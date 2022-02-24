// https://codepen.io/avstorm/pen/bPOgRO
import React, { useState } from "react";

const CustomSelect = ({
  color = "text-black",
  rounded = "rounded-sm",
  extraclass = "",
}) => {
  const [val, setVal] = useState("");

  return (
    <div>
      <label className="select text-white" htmlFor="slct2">
        <select
          id="slct2"
          className={`${color} ${rounded} ${extraclass}`}
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="" disabled>
            Select option
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
          <option value="7">Seven</option>
        </select>
        <svg>
          <use xlinkHref="#select-arrow-down"></use>
        </svg>
      </label>
      <svg className="sprites">
        <symbol id="select-arrow-down" viewbox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default CustomSelect;
