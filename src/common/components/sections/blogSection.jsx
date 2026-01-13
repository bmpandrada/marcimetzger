import React from "react";
import { Link } from "react-router";
import BlogGrids from "../blogGrids";

const BlogSection = () => {
  return (
    <section className='bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap justify-center -mx-4'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
              <span className='block mb-2 text-lg font-semibold text-primary'>Our Services</span>
              <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>Rely on Expertise</h2>
              <p className='text-base text-body-color dark:text-dark-6'>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
            </div>
          </div>
        </div>
        <BlogGrids />
      </div>
    </section>
  );
};

export default React.memo(BlogSection);
