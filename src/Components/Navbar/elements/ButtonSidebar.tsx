import { IoMdClose } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";

type ButtonSidebar = {
  openNav: () => void;
  isOpen: boolean;
};

const ButtonSidebar = (props: ButtonSidebar) => {
  return (
    <>
      <button onClick={props.openNav} className="block lg:hidden transtition ">
        {props.isOpen ? (
          <IoMdClose color="gray" size={25} />
        ) : (
          <RiMenu5Fill color="gray" size={25} />
        )}
      </button>
    </>
  );
};

export default ButtonSidebar;
