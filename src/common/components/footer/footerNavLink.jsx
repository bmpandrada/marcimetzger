import { Link } from "react-router";

const FooterNavLink = () => {
  return (
    <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
      <div className='w-full mb-10'>
        <h4 className='text-lg font-semibold text-white mb-9'>About Us</h4>
        <ul>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Testimonial
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavLink;
