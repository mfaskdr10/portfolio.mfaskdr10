import { ReactElement } from "react";

type Props = {
  title: string;
  desc: string;
  icon: ReactElement;
};

const ServiceCard: React.FC<Props> = ({ title, desc, icon }) => {
  return (
    <div className="flex items-center p-8 border-zinc-500 rounded-2xl gap-5 hover:border-sky-500 border-2 transition-all duration-500 group">
      <div>
        <h1 className="text-3xl mb-2 font-semibold group-hover:text-white">
          {title}
        </h1>
        <p className="text-base font text-zinc-400 group-hover:text-zinc-300">
          {desc}
        </p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

export default ServiceCard;
