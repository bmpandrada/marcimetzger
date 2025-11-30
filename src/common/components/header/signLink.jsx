import { Link } from "react-router";

const SignLink = ({
  isDark,
  isHome,
  handleActive,
  customClass = "hidden lg:flex",
}) => {
  return (
    <div className={`${customClass}`}>
      <Link
        to='/signin'
        onClick={handleActive}
        className={`loginBtn px-[22px] py-2 text-base font-medium hover:opacity-70 ${
          isDark || !isHome
            ? "text-dark opacity-70 dark:text-white"
            : "text-white"
        }`}
      >
        Sign In
      </Link>
      <Link
        to='/signup'
        onClick={handleActive}
        className={` px-6 py-2 text-base font-medium duration-300 ease-in-out rounded-md bg-white/20  hover:bg-white hover:text-dark
          ${
            isDark || !isHome
              ? "text-dark dark:text-white dark:bg-red-500 signUpBtn2"
              : "text-white signUpBtn"
          }`}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default SignLink;
