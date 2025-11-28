import { Suspense } from "react";

const SuspenseLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className='text-center py-10'>
          <div className='inline-block w-10 h-10 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4'></div>
          <p className='text-gray-700 dark:text-gray-200'>Loading...</p>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseLoader;
