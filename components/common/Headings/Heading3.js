import React from "react";

const Heading3 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h3
      className={`font-dm text-xl sm:text-3xl font-bold lg:text-5xl ${display} ${color} ${extraclass}`}
    >
      {text}
    </h3>
  );
};

export default Heading3;
