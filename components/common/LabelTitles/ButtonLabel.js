import React from "react";

const ButtonLabel = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-sm font-bold leading-5 ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default ButtonLabel;
