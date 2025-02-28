import { useState } from "react";

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleCloseNavMenu = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleCloseNavMenu,
    handleOpenNav
  }
};
