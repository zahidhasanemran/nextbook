import React from "react";
import Home, { getServerSideProps } from "../../pages/index";

const HomePageDoc = {
  title: "Pages/Home",
  component: Home,
  //   default args
  //   args: {
  //     name: "",
  //   },
};

export default HomePageDoc;

export const Homepage = (args, { loaded: { name } }) => (
  <Home {...args} name={name} />
);
// story specific args
// Homepage.args = { name: "" };
Homepage.loaders = [
  async () => {
    let data = await getServerSideProps();
    return data.props;
  },
];
