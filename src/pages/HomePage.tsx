import AboutSection from "../Components/Fragments/AboutSection";
import HeroSection from "../Components/Fragments/HeroSection";
import ProjectSection from "../Components/Fragments/ProjectSection/ProjectSection";
import ResumeSection from "../Components/Fragments/ResumeSection/ResumeSection";
import ToolsSection from "../Components/Fragments/ToolsSection/ToolsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <ResumeSection />
      <ProjectSection />
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
