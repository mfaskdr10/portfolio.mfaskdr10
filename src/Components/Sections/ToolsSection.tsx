import HeaderSection from "../Layouts/HeaderSection";
import ServiceCard from "../Fragments/ToolsCard";

const ToolsSection = () => {
  return (
    <section className="pt-20">
      <HeaderSection
        title="Tech Stack"
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium?"
        }
      />
      <ServiceCard />
    </section>
  );
};

export default ToolsSection;
