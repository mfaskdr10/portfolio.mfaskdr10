import project1 from "../../../assets/Projects/project1.webp";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard: React.FC = () => {
  return (
    <>
      <div className="rounded-2xl flex justify-center flex-col">
        <img src={project1} alt="" className="rounded-2xl shadow-xl mb-7" />
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Website Sekolah
        </h1>
        <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          voluptatum?
        </p>
        <div className="flex gap-2.5 mb-4">
          <p className="py-2 px-3 dark:bg-zinc-900 bg-emerald-100 rounded-lg dark:text-white ">
            Node JS
          </p>
          <p className="py-2 px-3 dark:bg-zinc-900 bg-emerald-100 rounded-lg dark:text-white ">
            React JS
          </p>
        </div>

        <div className="flex">
          <Link to={"/"}>
            <FaGithub size={30} className="mx-2 group-hover:text-black" />
          </Link>
          <Link to={"/"}>
            <FaFigma size={30} className="mx-2 group-hover:text-black" />
          </Link>
        </div>
      </div>
      <div className="rounded-2xl flex justify-center flex-col">
        <img src={project1} alt="" className="rounded-2xl shadow-xl mb-7" />
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Website Sekolah
        </h1>
        <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          voluptatum?
        </p>
        <div className="flex gap-2.5 mb-4">
          <p className="py-2 px-3 dark:bg-zinc-900 bg-emerald-100 rounded-lg dark:text-white ">
            Node JS
          </p>
          <p className="py-2 px-3 dark:bg-zinc-900 bg-emerald-100 rounded-lg dark:text-white ">
            React JS
          </p>
        </div>

        <div className="flex">
          <Link to={"/"}>
            <FaGithub size={30} className="mx-2 group-hover:text-black" />
          </Link>
          <Link to={"/"}>
            <FaFigma size={30} className="mx-2 group-hover:text-black" />
          </Link>
        </div>
      </div>
      <div className="rounded-2xl flex justify-center flex-col">
        <img src={project1} alt="" className="rounded-2xl shadow-xl mb-7" />
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Website Sekolah
        </h1>
        <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          voluptatum?
        </p>
        <div className="flex gap-2.5 mb-4">
          <p className="py-2 px-3 dark:bg-zinc-900 bg-emerald-100 rounded-lg dark:text-white ">
            Node JS
          </p>
          <p className="py-2 px-3 dark:bg-zinc-900 bg-emerald-100 rounded-lg dark:text-white ">
            React JS
          </p>
        </div>

        <div className="flex">
          <Link to={"/"}>
            <FaGithub size={30} className="mx-2 group-hover:text-black" />
          </Link>
          <Link to={"/"}>
            <FaFigma size={30} className="mx-2 group-hover:text-black" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
