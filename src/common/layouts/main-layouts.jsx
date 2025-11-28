import React from "react";
import FooterNav from "../components/footer/footerNav";
import HeaderNav from "../components/header/navbar";

import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeaderNav />

      <div className='flex-1'>
        <Outlet />
      </div>

      <FooterNav />
    </div>
  );
};

export default React.memo(MainLayout);
