import React, { useState, useEffect } from "react";
import HeaderLogo from "./headerLogo";
import HeaderToggle from "./headerToggle";
import NavvLink from "./navLink";
import ThemeToggle from "./themeToggle";
import SignLink from "./signLink";

const HeaderNav = () => {
  const [navbarTogglerActive, setNavbarTogglerActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  // On mount, sync <html> class with state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Toggle theme when checkbox clicked
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  useEffect(() => {
    const pageLinks = document.querySelectorAll(".ud-menu-scroll");

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute("to"));
      if (!target) return;

      const headerOffset = 60; // adjust for fixed header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    pageLinks.forEach((link) => link.addEventListener("click", handleClick));

    const handleScroll = () => {
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      pageLinks.forEach((link) => {
        const target = document.querySelector(link.getAttribute("to"));
        if (!target) return;
        const top = target.offsetTop - 73;
        const bottom = top + target.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Sticky header toggle
      if (scrollPos > 50) {
        // adjust threshold
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listeners on unmount
    return () => {
      pageLinks.forEach((link) =>
        link.removeEventListener("click", handleClick),
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleActive = () => {
    setNavbarTogglerActive((prev) => !prev);
  };

  return (
    <div
      className={`absolute top-0 left-0 z-40 flex items-center w-full ud-header transition-all duration-300 ${
        isSticky ? "sticky top-0 bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className='container px-4 mx-auto'>
        <div className='relative flex items-center justify-between -mx-4'>
          <HeaderLogo isSticky={isSticky} isDark={isDark} />
          <div className='flex items-center justify-between w-full px-4'>
            <div>
              <HeaderToggle
                handleActive={handleActive}
                navbarTogglerActive={navbarTogglerActive}
              />
              <NavvLink navbarTogglerActive={navbarTogglerActive} />
            </div>
            <div className='flex items-center justify-end pr-16 lg:pr-0'>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <SignLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeaderNav);
