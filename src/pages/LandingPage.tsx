import AboutSection from "../Components/Sections/AboutSection";
// import Contact from "../Components/Sections/Contact";
import HomeSection from "../Components/Sections/HomeSection";
import ProjectSection from "../Components/Sections/ProjectSection";
import ResumeSection from "../Components/Sections/ResumeSection";
import ToolsSection from "../Components/Sections/ToolsSection";

const LandingPage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ToolsSection />
      <ResumeSection />
      <ProjectSection />
      {/* <Contact /> */}
    </>
  );
};

export default LandingPage;
