import React from "react";
import Header from "../components/Header";

const withLayout = Component => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Header />
          <Component />
        </>
      );
    }
  };
};

export default withLayout;
