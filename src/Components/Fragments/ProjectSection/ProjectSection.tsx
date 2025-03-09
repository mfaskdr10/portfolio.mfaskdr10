import Container from "../../Layouts/Container";
import HeaderSection from "../../Layouts/HeaderSection";
import ProjectCard from "./ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <Container>
      <section className="py-20">
        <HeaderSection
          title="Featured Portfolios"
          desc="Some of the big projects I have worked on"
        />
        <div className="grid lg:grid-cols-3 gap-10">
          <ProjectCard />
        </div>
      </section>
    </Container>
  );
};

export default ProjectSection;
