import React, { useEffect } from "react";

export default function SignUpSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id='listings' className='relative py-20 md:py-[120px] bg-[#E9F9FF] dark:bg-dark-700 '>
      <div className='absolute top-0 left-0 w-full h-full -z-1 dark:bg-dark'></div>
      <div className='absolute left-0 top-0 -z-1 h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2'></div>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap items-center -mx-4'>
          <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
            <div className='ud-contact-content-wrapper'>
              <div className='ud-contact-title mb-12'>
                <span className='font-heading block mb-6 text-base font-medium text-dark dark:text-white'>Search Listings</span>
                <h2 className='font-heading max-w-full text-[35px] font-semibold leading-[1.14] text-dark dark:text-white'>Find Your Dream Home</h2>
              </div>
            </div>
          </div>
          <div className='max-w-6xl w-full mx-auto px-4 '>
            <div
              className='wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]'
              data-wow-delay='.2s'
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
              }}
            >
              <form>
                <div className='mb-[22px]'>
                  <label htmlFor='location' className='mb-4 block text-sm text-body-color dark:text-dark-6'>
                    Location*
                  </label>

                  <select id='location' name='location' className='w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color focus:border-primary focus:outline-hidden dark:border-dark-3 dark:text-dark-6' defaultValue=''>
                    <option value='' disabled>
                      Select location
                    </option>
                    <option value='manila'>Manila</option>
                    <option value='bgc'>BGC</option>
                    <option value='makati'>Makati</option>
                  </select>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='mb-[22px]'>
                    <label htmlFor='bedrooms' className='mb-4 block text-sm text-body-color dark:text-dark-6'>
                      Bedrooms*
                    </label>

                    <select id='bedrooms' name='bedrooms' className='w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color focus:border-primary focus:outline-hidden dark:border-dark-3 dark:text-dark-6' defaultValue=''>
                      <option value='' disabled>
                        Any Numbers
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3+</option>
                    </select>
                  </div>

                  <div className='mb-[22px]'>
                    <label htmlFor='type' className='mb-4 block text-sm text-body-color dark:text-dark-6'>
                      Type*
                    </label>

                    <select id='type' name='type' className='w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color focus:border-primary focus:outline-hidden dark:border-dark-3 dark:text-dark-6' defaultValue=''>
                      <option value='' disabled>
                        Select Type
                      </option>
                      <option value='house'>House</option>
                      <option value='condo'>Condo</option>
                      <option value='apartment'>Apartment</option>
                    </select>
                  </div>
                </div>

                <div className='mb-[22px]'>
                  <label htmlFor='location' className='mb-4 block text-sm text-body-color dark:text-dark-6'>
                    Sort By*
                  </label>

                  <select id='type' name='type' className='w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color focus:border-primary focus:outline-hidden dark:border-dark-3 dark:text-dark-6' defaultValue=''>
                    <option value='' disabled hidden>
                      Sort by
                    </option>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                    <option value='pra'>Least Expensive to Most</option>
                    <option value='prd'>Most Expensive to Least</option>
                    <option value='bda'>Bedrooms (Low to High)</option>
                    <option value='bdd'>Bedrooms (High to Low)</option>
                    <option value='tba'>Bathrooms (Low to High)</option>
                    <option value='tbd'>Bathrooms (High to Low)</option>
                  </select>
                </div>

                <div className='mb-[22px]'>
                  <label htmlFor='phone' className='block mb-4 text-sm text-body-color dark:text-dark-6'>
                    Phone*
                  </label>
                  <input type='text' name='phone' placeholder='+885 1254 5211 552' className='w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-hidden dark:border-dark-3 dark:text-dark-6' />
                </div>
                <div className='mb-[30px]'>
                  <label htmlFor='message' className='block mb-4 text-sm text-body-color dark:text-dark-6'>
                    Message*
                  </label>
                  <textarea name='message' rows='1' placeholder='type your message here' className='w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-hidden dark:border-dark-3 dark:text-dark-6'></textarea>
                </div>
                <div className='mb-0'>
                  <button type='submit' className='inline-flex items-center justify-center px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out rounded-md bg-primary hover:bg-blue-dark'>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
