import React from "react";
import Header from "./Headers";
import Footer from "./Footer";
const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
