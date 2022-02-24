import React from "react";

const Heading5 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h5
      className={`font-dm text-lg font-bold lg:text-3xl ${display} ${color} ${extraclass}`}
    >
      {text}
    </h5>
  );
};

export default Heading5;
