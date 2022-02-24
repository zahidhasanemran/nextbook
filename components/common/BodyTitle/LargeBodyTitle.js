import React from "react";

const LargeBodyTitle = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-base font-normal lg:text-lg ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default LargeBodyTitle;
