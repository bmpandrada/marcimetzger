import React from "react";
import FooterNav from "../components/footer/footerNav";
import HeaderNav from "../components/header/navbar";
import SuspenseLoader from "../SuspenseLoader";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <SuspenseLoader>{children}</SuspenseLoader>
      <FooterNav />
    </>
  );
};

export default React.memo(MainLayout);
