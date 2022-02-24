import React from "react";

const SmallBody = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-xs font-normal leading-5 lg:text-sm ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default SmallBody;
