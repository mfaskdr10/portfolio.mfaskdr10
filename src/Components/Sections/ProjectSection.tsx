import HeaderSection from "../Layouts/HeaderSection";
import ProjectCard from "./Fragments/ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <section className="py-20">
      <HeaderSection
        title="Projects"
        desc="Beberapa highlight project yang sudah saya kerjakan"
      />
      <div className="grid lg:grid-cols-3 gap-7">
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
