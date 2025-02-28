import { FaFileCode } from "react-icons/fa6";

type DataService = {
  id: number;
  icon: React.ReactElement;
  title: string;
  desc: string;
};

const dataServices: DataService[] = [
  {
    id: 0,
    icon: <FaFileCode size={30} color="white" />,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 1,
    icon: <FaFileCode size={30} color="white" />,
    title: "Networking",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 2,
    icon: <FaFileCode size={30} color="white" />,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 3,
    icon: <FaFileCode size={30} color="white" />,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 4,
    icon: <FaFileCode size={30} color="white" />,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
  {
    id: 5,
    icon: <FaFileCode size={30} color="white" />,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deleniti eligendi reiciendis, deserunt eos accusamus?",
  },
];

const ServiceCard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {dataServices.map((dataService) => (
        <div className="w-full p-10 bg-white rounded-xl shadow-lg" key={dataService.id}>
          <div className="w-fit bg-emerald-400 rounded-xl p-4">
            {dataService.icon}
          </div>
          <h1 className="text-[24px] font-medium py-6">{dataService.title}</h1>
          <p className="text-[16px] text-gray-400">{dataService.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
