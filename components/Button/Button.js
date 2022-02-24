import Link from "next/link";
import React from "react";

const Button = ({
  text = "button",
  border = "",
  borderColor = "",
  bgColor = "bg-steelblue-tint-100",
  hoverText = "hover:text-white",
  hoverBg = "hover:bg-steelblue",
  activeBg = "active:bg-steelblue-shade-200",
  textColor = "text-white",
  hrefLink = "#",
  link = true,
  extraClass,
  isLoading,
  isDisable,
  onClick,
}) => {
  if (link === true) {
    return (
      <Link passHref href={hrefLink}>
        <a
          className={`inline-block rounded px-4 py-3 text-center text-base font-medium duration-300 ${textColor} ${bgColor} ${hoverBg} ${hoverText} ${activeBg} ${border} ${borderColor} ${extraClass}`}
        >
          {text}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={`inline-block rounded px-4 py-3 text-base font-medium duration-300 ${textColor} ${bgColor} ${hoverBg} ${hoverText} ${activeBg} ${border} ${borderColor} ${extraClass}`}
      aria-label="send"
    >
      {text}
    </button>
  );
};

export default Button;
