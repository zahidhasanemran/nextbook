import Head from "next/head";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ReactPhoneInputScript } from "scripts/ReactPhoneInputScript";

const PhoneInputWrapper = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div className="inputWrapper">
      <Head>
        <ReactPhoneInputScript />
      </Head>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        international
        defaultCountry="BD"
        countryCallingCodeEditable={false}
        initialValueFormat="international"
        error={
          value
            ? isValidPhoneNumber(value)
              ? undefined
              : "Invalid phone number"
            : "Phone number required"
        }
      />
    </div>
  );
};

export default PhoneInputWrapper;
