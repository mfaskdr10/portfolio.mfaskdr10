import AboutSection from "../Components/Fragments/AboutSection";
import ContactSection from "../Components/Fragments/ContactSection";
import HeroSection from "../Components/Fragments/HeroSection";
import ProjectSection from "../Components/Fragments/ProjectSection/ProjectSection";
import ResumeSection from "../Components/Fragments/ResumeSection/ResumeSection";
import ServiceSection from "../Components/Fragments/ServiceSection/ServiceSection";
import SkillSection from "../Components/Fragments/SkillSection/SkillSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <SkillSection />
      <ProjectSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
