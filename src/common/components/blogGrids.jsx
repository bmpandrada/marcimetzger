import { Link } from "react-router";

const BlogGrids = () => {
  return (
    <div className='flex flex-wrap -mx-4'>
      <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-10 wow fadeInUp group' data-wow-delay='.1s'>
          <div className='mb-8 overflow-hidden rounded-[5px]'>
            <Link to='blog-details.html' className='block'>
              <img src='./images/blog/blog-3.webp' alt='image' className='w-full transition group-hover:rotate-6 group-hover:scale-125' />
            </Link>
          </div>
          <div>
            {/* <span className='mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white'>Dec 22, 2023</span> */}
            <h3>
              <Link to='javascript:void(0)' className='inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                Real Estate Done Right
              </Link>
            </h3>
            <p className='max-w-[370px] text-base text-body-color dark:text-dark-6'>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
          </div>
        </div>
      </div>
      <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-10 wow fadeInUp group' data-wow-delay='.15s'>
          <div className='mb-8 overflow-hidden rounded-[5px]'>
            <Link to='blog-details.html' className='block'>
              <img src='./images/blog/blog-2.webp' alt='image' className='w-full transition group-hover:rotate-6 group-hover:scale-125' />
            </Link>
          </div>
          <div>
            {/* <span className='mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white'>Mar 15, 2023</span> */}
            <h3>
              <Link to='javascript:void(0)' className='inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                Commercial & Residential
              </Link>
            </h3>
            <p className='max-w-[370px] text-base text-body-color dark:text-dark-6'>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
          </div>
        </div>
      </div>
      <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-10 wow fadeInUp group' data-wow-delay='.2s'>
          <div className='mb-8 overflow-hidden rounded-[5px]'>
            <Link to='blog-details.html' className='block'>
              <img src='./images/blog/blog-1.webp' alt='image' className='w-full transition group-hover:rotate-6 group-hover:scale-125' />
            </Link>
          </div>
          <div>
            {/* <span className='mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white'>Jan 05, 2023</span> */}
            <h3>
              <Link to='javascript:void(0)' className='inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                Rely on Expertise
              </Link>
            </h3>
            <p className='max-w-[370px] text-base text-body-color dark:text-dark-6'>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrids;
