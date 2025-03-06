import ButtonSidebar from "./ButtonSidebar";
import DarkModeToggle from "./DarkModeToggle";

type NavButton = {
  isopen: boolean;
  opennav: () => void;
};

const NavButtonLayout: React.FC<NavButton> = ({ isopen, opennav }) => {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <DarkModeToggle />
        <ButtonSidebar isOpen={isopen} openNav={opennav} />
      </div>
    </>
  );
};

export default NavButtonLayout;
