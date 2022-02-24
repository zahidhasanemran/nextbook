import React from "react";

const Title1 = ({
  text,
  display = "block",
  color = "text-black",
  extraClass = "",
}) => {
  return (
    <h6
      className={`font-dm text-lg font-bold lg:text-xl ${display} ${color} ${extraClass}`}
    >
      {text}
    </h6>
  );
};

export default Title1;
