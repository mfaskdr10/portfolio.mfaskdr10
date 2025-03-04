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
        className={`fixed lg:left-35 lg:right-35 left-5 right-5 flex justify-between items-center px-6 mt-5 rounded-2xl z-20 transition-all duration-500 backdrop-blur-2xl border-gray-500 ${
          isScrolled ? "shadow-lg border" : "dark:bg-emerald-950 border"
        }`}
      >
        {children}
      </nav>
    </>
  );
};

export default Nav;
