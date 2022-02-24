import React from "react";

const CustomCheckbox = ({id = "flowbit", text = "I Love how", children}) => {
  return (
    <div className="flex items-start">
      <input
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        id={id}
        aria-describedby="flowbite"
        type="checkbox"
      />
      <label
        className="text-gray-900 ml-3 text-sm font-medium"
        htmlFor={id}
      >
        {text ? text : ""}
        {children ? children : ""}
      </label>
    </div>
  );
};

export default CustomCheckbox;
