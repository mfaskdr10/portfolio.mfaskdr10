import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { LuFigma } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

type DataSkills = {
  id: number;
  icon: React.ReactElement;
  title: string;
};

const dataSkills: DataSkills[] = [
  {
    id: 0,
    icon: <FaHtml5 size={40} color="white" />,
    title: "HTML 5",
  },
  {
    id: 1,
    icon: <FaCss3Alt size={40} color="white" />,
    title: "CSS 3",
  },
  {
    id: 2,
    icon: <SiJavascript size={40} color="white" />,
    title: "Javascript",
  },
  {
    id: 3,
    icon: <RiReactjsLine size={40} color="white" />,
    title: "React JS",
  },
  {
    id: 4,
    icon: <LuFigma size={40} color="white" />,
    title: "Figma",
  },
  {
    id: 5,
    icon: <RiTailwindCssFill size={40} color="white" />,
    title: "Tailwind",
  },
  {
    id: 6,
    icon: <FaBootstrap size={40} color="white" />,
    title: "Bootstrap",
  },
];

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-7 gap-3">
      {dataSkills.map((dataSkill) => (
        <div
          className="p-3 border-2 border-zinc-700 hover:border-sky-700 rounded-xl shadow-lg flex flex-col items-center gap-2 transition-all duration-500 group"
          key={dataSkill.id}
        >
          <div className="w-fit bg-zinc-600 group-hover:bg-sky-600 rounded-full p-4">
            {dataSkill.icon}
          </div>
          <h3 className="text-xs dark:text-white font-medium hidden lg:block">
            {dataSkill.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
