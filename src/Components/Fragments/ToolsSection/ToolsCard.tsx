import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { LuFigma } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

type DataTool = {
  id: number;
  icon: React.ReactElement;
  title: string;
  desc: string;
};

const dataTools: DataTool[] = [
  {
    id: 0,
    icon: <FaHtml5 size={30} color="white" />,
    title: "HTML 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 1,
    icon: <FaCss3Alt size={30} color="white" />,
    title: "CSS 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 2,
    icon: <SiJavascript size={30} color="white" />,
    title: "Javascript",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 3,
    icon: <RiReactjsLine size={30} color="white" />,
    title: "React JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 4,
    icon: <LuFigma size={30} color="white" />,
    title: "Figma",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 5,
    icon: <RiTailwindCssFill size={30} color="white" />,
    title: "Tailwind CSS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 6,
    icon: <FaBootstrap size={30} color="white" />,
    title: "Bootstrap CSS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
];

const ToolsCard = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
      {dataTools.map((dataTool) => (
        <div
          className="w-full p-5 bg-sky-100 dark:bg-gradient-to-b dark:from-sky-950 dark:to-zinc-900 border-2 border-sky-700 rounded-xl shadow-lg flex items-center gap-4"
          key={dataTool.id}
        >
          <div className="w-fit bg-sky-600 rounded-full p-4">
            {dataTool.icon}
          </div>
          <h3 className="text-lg dark:text-white font-medium hidden lg:block">{dataTool.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ToolsCard;
