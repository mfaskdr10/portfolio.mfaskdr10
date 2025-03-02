// Icon
// import { FaCompactDisc } from "react-icons/fa";
import Logo from "../../assets/ICON.png";
import { BsToggle2On } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

// Required Import
import { NavLink } from "react-router";
import { useNavbar } from "../../hooks/navbarHooks";
import { navLinks } from "../../data/navbarLink";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isOpen, handleCloseNavMenu, handleOpenNav } = useNavbar();

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
    <nav
      className={`fixed ${
        isScrolled ? "right-0 left-0 top-0" : "lg:left-35 lg:right-35 left-5 right-5"
      } flex justify-between items-center ${
        isScrolled ? "bg-white" : "bg-white"
      } py-3 px-6 rounded-2xl z-20 transition-all duration-500 ${
        isScrolled ? "shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img src={Logo} alt="" width={60} />

      {/* Navbar Menu */}
      <div
        className={`absolute top-20 left-0 bg-white w-full p-2 rounded-xl shadow-xl text-center ${
          isOpen ? "block mt-5 shadow" : "hidden"
        } lg:block lg:static lg:items-center lg:shadow-none lg:bg-transparent`}
      >
        <ul className="lg:flex lg:justify-center lg:gap-10">
          {navLinks.map((link, index) => (
            <li key={index} className="p-2">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-emerald-500 font-bold" : "text-black"
                }
                onClick={handleCloseNavMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Navbar */}
      <div className="flex items-center gap-2.5">
        <BsToggle2On color="gray" size={25} className="block" />
        <button
          onClick={handleOpenNav}
          className="block lg:hidden transtition "
        >
          {isOpen ? (
            <IoMdClose color="gray" size={25} />
          ) : (
            <RiMenu5Fill color="gray" size={25} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
