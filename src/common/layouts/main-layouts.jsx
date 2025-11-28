import React from "react";
import FooterNav from "../components/footer/footerNav";
import HeaderNav from "../components/header/navbar";

import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <HeaderNav />

      <Outlet />

      <FooterNav />
    </>
  );
};

export default React.memo(MainLayout);
