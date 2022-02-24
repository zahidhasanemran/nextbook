import SubmitButton from "../../components/Button/SubmitButton";
import React from "react";

const SubmitButtonDoc = {
  title: "/NextComponents/SubmitButton",
  component: SubmitButton,
  argTypes: {
    isDisable: false,
    isLoading: false,
    text: "Submit",
    extraClass: "",
    bgColor: "",
    hoverBg: "hover:bg-lightGreen-tint-100",
    activeBg: "active:bg-lightGreen-shade-200",
    textColor: "text-white",
  },
};

export default SubmitButtonDoc;

const Template = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isDisable: false,
  isLoading: false,
  text: "Button",
  extraClass: "",
  onclick: () => console.log("hi"),
  bgColor: "bg-lightGreen",
  hoverBg: "hover:bg-lightGreen-tint-100",
  activeBg: "active:bg-lightGreen-shade-200",
  textColor: "text-white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgColor: "bg-steelblue-tint-100",
  hoverBg: "hover:bg-steelblue-tint-300",
  activeBg: "active:bg-steelblue-shade-200",
  textColor: "text-white",
  isDisable: true,
  isLoading: true,
  text: "Sumbit",
  extraClass: "",
  onclick: () => console.log("hi"),
};
