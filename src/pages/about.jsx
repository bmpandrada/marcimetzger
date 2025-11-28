import React from "react";
import AboutSection from "../common/components/sections/aboutSection";
import TechLogoSection from "../common/components/sections/techLogoSection";

const AboutPage = () => {
  return (
    <div className='relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-40'>
      <AboutSection />

      <TechLogoSection customClass={"py-10"} />
    </div>
  );
};

export default React.memo(AboutPage);
