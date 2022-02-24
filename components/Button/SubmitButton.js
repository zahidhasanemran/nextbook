import React, { useState } from "react";

const SubmitButton = ({
  text = "submit",
  extraClass = "",
  bgColor = "bg-lightGreen",
  hoverBg = "hover:bg-lightGreen-tint-100",
  activeBg = "active:bg-lightGreen-shade-200",
  textColor = "text-white",
  onclick,
  isDisable = false,
  isLoading = false,
}) => {
  return (
    <button
      onClick={onclick}
      type="submit"
      className={`rounded px-4 py-3 text-base font-bold capitalize duration-300 ${bgColor} ${textColor} ${hoverBg} ${activeBg} ${extraClass} ${
        isDisable ? "opacity-40" : bgColor
      }`}
      disabled={isDisable}
      aria-label="submit"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
