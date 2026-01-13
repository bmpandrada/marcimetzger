import React from "react";
import { Link } from "react-router";

const FeaturesSection = () => {
  return (
    <section className='pb-8 pt-20 bg-white dark:bg-dark lg:pb-[70px] lg:pt-[120px]'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
              <span className='block mb-2 text-lg font-semibold text-primary'>Features</span>
              <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>Main Features Of Play</h2>
              <p className='text-base text-body-color dark:text-dark-6'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <div className='mb-12 wow fadeInUp group' data-wow-delay='.1s'>
              <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary'>
                <span className='absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-25 items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45'></span>
                <img src='/images/icons/icon-1.webp' alt='' />
              </div>
              <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>Free and Open-Source</h4>
              <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>Lorem Ipsum is simply dummy text of the printing and industry.</p>
              <Link href='javascript:void(0)' className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary'>
                Learn More
              </Link>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <div className='mb-12 wow fadeInUp group' data-wow-delay='.15s'>
              <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary'>
                <span className='absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-25 items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45'></span>
                <img src='/images/icons/icon-2.webp' alt='' />
              </div>
              <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>Multipurpose Template</h4>
              <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>Lorem Ipsum is simply dummy text of the printing and industry.</p>
              <Link href='javascript:void(0)' className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary'>
                Learn More
              </Link>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <div className='mb-12 wow fadeInUp group' data-wow-delay='.2s'>
              <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary'>
                <span className='absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-25 items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45'></span>
                <img src='/images/icons/ionc-3.webp' alt='' />
              </div>
              <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>High-quality Design</h4>
              <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>Lorem Ipsum is simply dummy text of the printing and industry.</p>
              <Link href='javascript:void(0)' className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary'>
                Learn More
              </Link>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/4'>
            <div className='mb-12 wow fadeInUp group' data-wow-delay='.25s'>
              <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary'>
                <span className='absolute left-0 top-0 -z-1 mb-8 flex h-[70px] w-[70px] rotate-25 items-center justify-center rounded-[14px] bg-primary/20 duration-300 group-hover:rotate-45'></span>
                <img src='/images/icons/icon-4.webp' alt='' />
              </div>
              <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>All Essential Elements</h4>
              <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>Lorem Ipsum is simply dummy text of the printing and industry.</p>
              <Link href='javascript:void(0)' className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary'>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);
