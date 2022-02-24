import React from "react";

const Heading4 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h4
      className={`font-dm text-md sm:text-2xl font-bold lg:text-4xl ${display} ${color} ${extraclass}`}
    >
      {text}
    </h4>
  );
};

export default Heading4;
