import Container from "../../Layouts/Container";
import HeaderSection from "../../Layouts/HeaderSection";
import SkillsCard from "./SkillsCard";

const SkillSection = () => {
  return (
    <Container>
      <section className="pt-20">
        <HeaderSection
          title="My Expertise"
          desc={
            "Some programming languages, tools and frameworks that I frequently use"
          }
        />
      </section>
      <SkillsCard />
    </Container>
  );
};

export default SkillSection;
