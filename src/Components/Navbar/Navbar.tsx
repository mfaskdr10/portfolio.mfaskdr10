// Icon
import Logo from "../../assets/ICON.png";

// Elements
import NavLinks from "./elements/NavLinks";
import Nav from "./layouts/NavLayouts";

// Hooks
import { useNavbar } from "./hook/navbarHooks";
import NavButtonLayout from "./layouts/NavButtons";

const Navbar: React.FC = () => {
  // Hook untuk sidebar
  const { handleCloseNavMenu, handleOpenNav, isOpen } = useNavbar();

  return (
    <Nav>
      {/* Logo */}
      <img src={Logo} alt="" width={60} className="rounded-full" />

      {/* Navbar Menu */}
      <NavLinks openNav={isOpen} closeNav={handleCloseNavMenu} />

      {/* Button Navbar */}
      <NavButtonLayout isopen={isOpen} opennav={handleOpenNav} />
    </Nav>
  );
};

export default Navbar;
