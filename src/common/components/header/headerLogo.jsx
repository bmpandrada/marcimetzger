import React from "react";
import { Link } from "react-router";

const HeaderLogo = ({ isSticky, isDark, altText = "logo template" }) => {
  const logoSrc =
    isSticky && !isDark
      ? "/images/logo/logo.svg"
      : "/images/logo/logo-white.svg";

  return (
    <div className='max-w-full px-4 w-60'>
      <Link to='/' className='block w-full py-5 navbar-logo'>
        <img src={logoSrc} alt={altText} className='w-full header-logo' />
      </Link>
    </div>
  );
};

export default React.memo(HeaderLogo);
