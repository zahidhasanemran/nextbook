import React from "react";

const Title4 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-xs font-bold lg:text-sm ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default Title4;
