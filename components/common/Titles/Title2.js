import React from "react";

const Title2 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-base font-bold lg:text-lg ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default Title2;
