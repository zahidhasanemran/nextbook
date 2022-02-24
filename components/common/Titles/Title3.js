import React from "react";

const Title3 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-sm font-bold lg:text-base ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default Title3;
