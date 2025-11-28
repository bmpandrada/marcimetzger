import { Link } from "react-router";

const FooterFeaturesLink = () => {
  return (
    <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12'>
      <div className='w-full mb-10'>
        <h4 className='text-lg font-semibold text-white mb-9'>Features</h4>
        <ul>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Refund policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterFeaturesLink;
