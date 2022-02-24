import React from "react";

const Heading1 = ({
  text,
  display = "block text",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h1
      className={` font-dm text-m28 font-bold lg:text-7xl  ${display} ${color} ${extraclass}`}
    >
      {text}
    </h1>
  );
};

export default Heading1;
