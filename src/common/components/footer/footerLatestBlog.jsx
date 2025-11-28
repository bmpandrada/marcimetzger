import { Link } from "react-router";

const FooterLatestBlog = () => {
  return (
    <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
      <div className='w-full mb-10'>
        <h4 className='text-lg font-semibold text-white mb-9'>Latest blog</h4>
        <div className='flex flex-col gap-8'>
          <Link
            to='blog-details.html'
            className='group flex items-center gap-[22px]'
          >
            <div className='overflow-hidden rounded-sm'>
              <img src='./images/blog/blog-footer-01.jpg' alt='blog' />
            </div>
            <span className='max-w-[180px] text-base text-gray-7 group-hover:text-white'>
              I think really important to design with...
            </span>
          </Link>
          <Link
            to='blog-details.html'
            className='group flex items-center gap-[22px]'
          >
            <div className='overflow-hidden rounded-sm'>
              <img src='./images/blog/blog-footer-02.jpg' alt='blog' />
            </div>
            <span className='max-w-[180px] text-base text-gray-7 group-hover:text-white'>
              Recognizing the need is the primary...
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLatestBlog;
