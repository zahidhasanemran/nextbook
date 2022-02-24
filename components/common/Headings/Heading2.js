import React from "react";

const Heading2 = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h2
      className={`4xl: font-dm font-bold sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl ${display} ${color} ${extraclass}`}
    >
      {text}
    </h2>
  );
};

export default Heading2;
