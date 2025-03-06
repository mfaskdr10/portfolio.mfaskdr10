import project1 from "/public/images/Projects/project1.webp";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard: React.FC = () => {
  return (
    <>
      <div className="p-4 bg-sky-100 dark:bg-gradient-to-b dark:from-sky-950 dark:to-zinc-900 rounded-2xl flex justify-center flex-col border-2 border-sky-900 transition-all duration-300">
        <img src={project1} alt="" className="rounded-2xl shadow-xl mb-7" />
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Website Sekolah
        </h1>
        <p className="text-base mb-4 text-gray-700 dark:text-gray-400 group-hover:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          voluptatum?
        </p>
        <div className="flex gap-2.5 mb-4">
          <p className="py-2 px-3 bg-sky-900 rounded-lg text-white">
            Node JS
          </p>
          <p className="py-2 px-3 bg-sky-900 rounded-lg text-white">
            React JS
          </p>
        </div>

        <div className="flex">
          <Link to={"/"}>
            <FaGithub size={30} className="mx-2 dark:text-white" />
          </Link>
          <Link to={"/"}>
            <FaFigma size={30} className="mx-2 dark:text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
