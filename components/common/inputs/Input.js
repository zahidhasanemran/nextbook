import React from "react";

const Input = ({
  type = "text",
  name = "text",
  placeholder = "Enter your text",
  extraclass,
}) => {
  return (
    <input
      type={type}
      name={name}
      className="inputFocus placeholder-slate-700 mt-1 block w-full rounded-md border border-black-tint-700 bg-white py-3 px-2 shadow-sm focus:outline-none focus:ring-steelblue-shade-200 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export default Input;
