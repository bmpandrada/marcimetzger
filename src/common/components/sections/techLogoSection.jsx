import React from "react";
import { Link } from "react-router";

const TechLogoSection = ({ customClass }) => {
  const adjustPadding = customClass || "pb-20";
  return (
    <section className={`${adjustPadding}  dark:bg-dark bg-white`}>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-8 -mx-4 xl:gap-11'>
          <Link href='https://graygrids.com/'>
            <img
              src='./images/brands/graygrids.svg'
              alt='graygrids'
              className='block dark:hidden'
            />
            <img
              src='./images/brands/graygrids-white.svg'
              alt='graygrids'
              className='hidden dark:block'
            />
          </Link>
          <Link href='https://lineicons.com/'>
            <img
              src='./images/brands/lineicons.svg'
              alt='lineicons'
              className='block dark:hidden'
            />
            <img
              src='./images/brands/lineicons-white.svg'
              alt='graygrids'
              className='hidden dark:block'
            />
          </Link>
          <Link href='https://uideck.com/'>
            <img
              src='./images/brands/uideck.svg'
              alt='uideck'
              className='block dark:hidden'
            />
            <img
              src='./images/brands/uideck-white.svg'
              alt='graygrids'
              className='hidden dark:block'
            />
          </Link>
          <Link href='https://ayroui.com/'>
            <img
              src='./images/brands/ayroui.svg'
              alt='ayroui'
              className='block dark:hidden'
            />
            <img
              src='./images/brands/ayroui-white.svg'
              alt='graygrids'
              className='hidden dark:block'
            />
          </Link>
          <Link href='https://tailgrids.com/'>
            <img
              src='./images/brands/tailgrids.svg'
              alt='tailgrids'
              className='block dark:hidden'
            />
            <img
              src='./images/brands/tailgrids-white.svg'
              alt='graygrids'
              className='hidden dark:block'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TechLogoSection);
