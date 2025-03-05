import TitleSkill from "../elements/TitleSkill";

// Icon
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";

const Skills: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-10 flex-2 rounded-2xl border border-gray-500 min-h-screen">
      <TitleSkill
        title="Frontend"
        desc="Beberapa tools frontend yang saya kuasai dari vanilla sampai framework"
      />
      <div className="flex gap-5 mt-5 text-green-300">
        <FaHtml5 size={50} />
        <IoLogoCss3 size={50} />
        <FaJsSquare size={50} />
        <FaBootstrap size={50} />
        <RiTailwindCssFill size={50} />
        <FaReact size={50} />
        <FaVuejs size={50} />
      </div>
    </div>
  );
};

export default Skills;
