import React from "react";
import HeroPlayCta from "./heroPlayCta";
import HeroPlayFadeWallpaper from "./heroPlayFadeIWallpaper";

const HeroPlay = ({ leading, image, alt }) => {
  return (
    <div className='container px-4 mx-auto'>
      <div className='flex flex-wrap items-center -mx-4'>
        <HeroPlayCta leading={leading} />
        <HeroPlayFadeWallpaper image={image} alt={alt} />
      </div>
    </div>
  );
};

export default React.memo(HeroPlay);
