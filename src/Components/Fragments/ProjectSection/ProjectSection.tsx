import HeaderSection from "../../Layouts/HeaderSection";
import ProjectCard from "./ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <section className="py-20">
      <HeaderSection
        title="My Projects"
        desc="Some of the big projects I have worked on"
      />
      <div className="grid lg:grid-cols-3 gap-10">
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
