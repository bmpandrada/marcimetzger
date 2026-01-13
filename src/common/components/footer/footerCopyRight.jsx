import { Link } from "react-router";

const FooterCopyRight = () => {
  return (
    <div className='mt-12 border-t border-[#8890A4]/40 py-8 lg:mt-[60px]'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full px-4 md:w-2/3 lg:w-1/2'>
            <div className='my-1'>
              <div className='flex items-center justify-center -mx-3 md:justify-start'>
                <Link to='javascript:void(0)' className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                  Privacy policy
                </Link>
                <Link to='javascript:void(0)' className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                  Legal notice
                </Link>
                <Link to='javascript:void(0)' className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                  Terms of service
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
            <div className='flex justify-center my-1 md:justify-end'>
              <p className='text-base text-gray-7'>
                <Link to='https:/tailgrids.com' rel='nofollow noopner' target='_blank' className='text-gray-1 hover:underline'>
                  Copyright © 2023 Marci METZGER Homes - All Rights Reserved
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;
