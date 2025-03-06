import { NavLink } from "react-router";
import { navLinks } from "../../data/navbarLink";


type NavLinks = {
  closeNav: () => void;
  openNav: boolean;
};

const NavLinks: React.FC<NavLinks> = ({ closeNav, openNav }) => {
  return (
    <>
      <div
        className={`absolute top-20 right-0 w py-4 px-2 rounded-lg shadow-2xl text-center ${
          openNav ? "block mt-5 shadow bg-sky-100 dark:bg-gradient-to-b dark:from-sky-950 dark:to-zinc-900 border-2 border-sky-700" : "hidden"
        } lg:block lg:static lg:items-center lg:shadow-none lg:w-fit`}
      >
        <ul className="lg:flex lg:justify-center lg:gap-10">
          {navLinks.map((link, index) => (
            <li key={index} className="p-2 lg:px-1.5">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "transition-all duration-300 bg-sky-700 font-bold p-3 rounded-lg text-white dark:text-white"
                    : "text-black dark:text-white"
                }
                onClick={closeNav}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
