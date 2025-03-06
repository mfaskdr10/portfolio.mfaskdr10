// Icon

// Elements

import Nav from "./NavLayouts";

// Hooks
import { useNavbar } from "../../hooks/navbarHooks";
import NavLinks from "./NavLinks";
import NavButtonLayout from "./NavButtons";


const Navbar: React.FC = () => {
  // Hook untuk sidebar
  const { handleCloseNavMenu, handleOpenNav, isOpen } = useNavbar();

  return (
    <Nav>
      {/* Logo */}
      <img
        src={"/public/images/ICON.png"}
        alt=""
        width={60}
        className="rounded-full"
      />

      {/* Navbar Menu */}
      <NavLinks openNav={isOpen} closeNav={handleCloseNavMenu} />

      {/* Button Navbar */}
      <NavButtonLayout isopen={isOpen} opennav={handleOpenNav} />
    </Nav>
  );
};

export default Navbar;
