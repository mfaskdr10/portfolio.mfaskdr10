import { useEffect, useState } from "react";

import { ReactNode } from "react";

type NavProps = {
  children: ReactNode;
};

const Nav: React.FC<NavProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <>
      <nav
        className={`fixed lg:left-35 lg:right-35 left-5 right-5 flex justify-between items-center lg:px-6 lg:py-0 px-3 py-3 mt-5 rounded-2xl z-20 transition-all duration-500 backdrop-blur-none lg:bg-transparent lg:backdrop-blur-2xl border-gray-500 ${
          isScrolled
            ? "shadow-lg border dark:border-2 bg-zinc-100  dark:bg-zinc-700"
            : "dark:bg-zinc-950 dark:border-2 dark:border-sky-900 border border-sky-700"
        }`}
      >
        {children}
      </nav>
    </>
  );
};

export default Nav;
