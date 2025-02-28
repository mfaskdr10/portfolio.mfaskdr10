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

const Navbar = () => {
  const { isOpen, handleCloseNavMenu, handleOpenNav } = useNavbar();

  return (
    <div className="flex justify-between items-center relative bg-white py-3 px-6 rounded-full">
      {/* Logo */}
      <img src={Logo} alt="" width={60}/>

      {/* Navbar Menu */}
      <div
        className={`absolute top-20 left-0 bg-white w-full p-2 rounded-xl shadow-xl text-center ${
          isOpen ? "block" : "hidden"
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
    </div>
  );
};

export default Navbar;
