import { ReactElement } from "react";
import ServiceCard from "./ServiceCard";
import Container from "../../Layouts/Container";
import HeaderSection from "../../Layouts/HeaderSection";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";

interface DataService {
  id: number;
  title: string;
  desc: string;
  icon: ReactElement;
}

const dataServices: DataService[] = [
  {
    id: 0,
    title: "Web Design",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, non!",
    icon: <MdDesignServices size={50} className="group-hover:text-sky-500" />,
  },
  {
    id: 1,
    title: "Web Development",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, non!",
    icon: <MdDeveloperMode size={50} className="group-hover:text-sky-500" />,
  },
];

const ServiceSection: React.FC = () => {
  return (
    <>
      <Container>
        <section className="pb-20">
          <HeaderSection title="My Specialization" desc="" />
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            {dataServices.map((dataService, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={dataService.title}
                  desc={dataService.desc}
                  icon={dataService.icon}
                />
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};

export default ServiceSection;
