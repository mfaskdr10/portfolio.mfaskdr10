import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const LinkSocial = () => {
  return (
    <>
      <div className="flex mt-[13px] gap-4 justify-center">
        <FaFacebookF
          size={25}
          className="hover:text-emerald-300 cursor-pointer"
        />
        <AiFillInstagram
          size={25}
          className="hover:text-emerald-300 cursor-pointer"
        />
        <FaTwitter
          size={25}
          className="hover:text-emerald-300 cursor-pointer"
        />
        <FaDribbble
          size={25}
          className="hover:text-emerald-300 cursor-pointer"
        />
      </div>
    </>
  );
};

export default LinkSocial;
