import React, { Fragment, Children } from "react";
import Header from "../components/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
