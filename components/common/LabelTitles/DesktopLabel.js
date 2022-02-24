import React from "react";

const DesktopLabel = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-sm font-medium leading-6 lg:text-base ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default DesktopLabel;
