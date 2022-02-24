import React, { useState } from "react";

const CustomRadioBtn = ({ data, val, setVal, extraclass = "" }) => {
  //   const dataa = [
  //     { id: 1, inputname: "gender", text: "Male" },
  //     { id: 2, inputname: "gender", text: "Female" },
  //   ];
  //   const [gender, setGender] = useState("");
  //          val      setVal

  return (
    <div className={`customRadioBtn ${extraclass}`}>
      {data?.map((sm) => (
        <label key={sm.id}>
          {sm.text}
          <input
            type="radio"
            checked={val === sm.text}
            name={sm.inputname}
            value={sm.text}
            onChange={(e) => setVal(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    </div>
  );
};

export default CustomRadioBtn;
