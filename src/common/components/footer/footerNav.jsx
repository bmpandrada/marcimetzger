import RightBackGroundImage from "./rightBackGroundImgFooter";
import FooterCopyRight from "./footerCopyRight";
import FooterLatestBlog from "./footerLatestBlog";
import FooterProductLink from "./footerProductLink";
import FooterFeaturesLink from "./footerFeaturesLink";
import FooterNavLink from "./footerNavLink";
import React from "react";

const FooterNav = () => {
  return (
    <footer role='contentinfo' className='wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]' data-wow-delay='.15s'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          {/* footer link default */}
          <FooterNavLink />
          {/* features link */}
          {/* <FooterFeaturesLink /> */}
          {/* product link */}
          {/* <FooterProductLink /> */}
          {/* latest blog */}
          <FooterLatestBlog />
        </div>
      </div>
      {/* privacy, legal, terms, copyright */}
      <FooterCopyRight />
      <RightBackGroundImage />
    </footer>
  );
};

export default FooterNav;
