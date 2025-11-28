import { Link } from "react-router";

const SignLink = () => {
  return (
    <div className='hidden sm:flex'>
      <Link
        to='signin.html'
        className='loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70'
      >
        Sign In
      </Link>
      <Link
        to='signup.html'
        className='px-6 py-2 text-base font-medium text-white duration-300 ease-in-out rounded-md bg-white/20 signUpBtn hover:bg-white hover:text-dark'
      >
        Sign Up
      </Link>
    </div>
  );
};

export default SignLink;
