import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const LinkSocial = () => {
  return (
    <>
      <p className="text-[14px] font-normal mt-6 text-center">Social Account</p>
      <div className="flex mt-[13px] gap-4 justify-center">
        <FaFacebookF
          size={20}
          className="hover:text-emerald-300 cursor-pointer"
        />
        <AiFillInstagram
          size={20}
          className="hover:text-emerald-300 cursor-pointer"
        />
        <FaTwitter
          size={20}
          className="hover:text-emerald-300 cursor-pointer"
        />
        <FaDribbble
          size={20}
          className="hover:text-emerald-300 cursor-pointer"
        />
      </div>
    </>
  );
};

export default LinkSocial;
