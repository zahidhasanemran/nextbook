import React from "react";

const Heading6 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-base font-bold lg:text-2xl ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default Heading6;
