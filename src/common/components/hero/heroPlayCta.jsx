import React from "react";
import { Link } from "react-router";

const HeroPlayCta = ({ leading, subtitle }) => {
  const leadingTitle = leading || "Pahrump Realtor";
  const leadSubtitle = subtitle || "MARCI METZGER - THE RIDGE REALTY GROUP";
  return (
    <div className='w-full px-4'>
      <div className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center' data-wow-delay='.2s'>
        <h1 className='font-heading mb-3 text-3xl font-light leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>{leadingTitle}</h1>
        <p className='mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]'>{leadSubtitle}</p>
        <ul className='flex flex-wrap items-center justify-center gap-5 mb-10'>
          <li>
            <Link to='contact' className='inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color'>
              Call Now
            </Link>
          </li>
          <li>
            <a href='#about' className='flex items-center gap-4 rounded-md bg-white/12 px-6 py-3.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark'>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(HeroPlayCta);
