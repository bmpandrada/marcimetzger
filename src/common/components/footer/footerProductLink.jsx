import { Link } from "react-router";

const FooterProductLink = () => {
  return (
    <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12'>
      <div className='w-full mb-10'>
        <h4 className='text-lg font-semibold text-white mb-9'>Our Products</h4>
        <ul>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              LineIcons
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              Ecommerce HTML
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              TailAdmin
            </Link>
          </li>
          <li>
            <Link
              to='javascript:void(0)'
              className='inline-block mb-3 text-base text-gray-7 hover:text-primary'
            >
              PlainAdmin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterProductLink;
