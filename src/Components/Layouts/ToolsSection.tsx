import HeaderSection from "../Fragments/HeaderSection";
import ServiceCard from "../Fragments/ServiceCard";

const ToolsSection = () => {
  return (
    <section className="py-20">
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
