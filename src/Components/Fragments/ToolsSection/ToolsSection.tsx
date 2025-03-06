import HeaderSection from "../../Layouts/HeaderSection";
import ToolsCard from "./ToolsCard";


const ToolsSection = () => {
  return (
    <section className="pt-20">
      <HeaderSection
        title="Essentials Tools I use"
        desc={
          "Some programming languages, tools and frameworks that I frequently use"
        }
      />
      <ToolsCard />
    </section>
  );
};

export default ToolsSection;
