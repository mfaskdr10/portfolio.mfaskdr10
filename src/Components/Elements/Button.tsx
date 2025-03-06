import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";

type ButtonRoute = {
  href: string;
  title: string;
};

const Button = (props: ButtonRoute) => {
  const { href, title } = props;

  return (
    <>
      <Link
        to={href}
        className="bg-sky-700 text-white inline-flex items-center gap-2 pl-6 pr-1.5 py-1.5 rounded-full text-[16px] font-medium hover:bg-sky-600 transition-all duration-200"
      >
        {title}
        <FaLongArrowAltRight
          size={30}
          color="black"
          className="p-2 bg-white rounded-full"
        />
      </Link>
    </>
  );
};

export default Button;
