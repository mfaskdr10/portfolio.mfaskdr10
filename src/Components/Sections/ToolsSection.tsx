import HeaderSection from "../Layouts/HeaderSection";
import ToolsCard from "./Fragments/ToolsCard";

const ToolsSection = () => {
  return (
    <section className="pt-20">
      <HeaderSection
        title="Tech Stack"
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium?"
        }
      />
      <ToolsCard />
    </section>
  );
};

export default ToolsSection;
