import React from "react";
import Home from "../../pages/index";

const HomePageDoc = {
  title: "Pages/Home",
  component: Home,
  args: {
    name: "",
    age: 0,
  },
};

export default HomePageDoc;

export const Homepage = (args) => <Home {...args} />;
// Homepage.args = { name: "" };
