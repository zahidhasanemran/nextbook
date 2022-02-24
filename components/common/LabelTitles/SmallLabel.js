import React from "react";

const SmallLabel = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-xs font-medium leading-5 lg:text-sm ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default SmallLabel;
