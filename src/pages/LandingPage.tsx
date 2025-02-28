import HomeSection from "../Components/Layouts/HomeSection";
import ServicesSection from "../Components/Layouts/ServicesSection";
import ResumeSection from "../Components/Layouts/ResumeSection";
import AboutSection from "../Components/Layouts/AboutSection";

const LandingPage = () => {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ResumeSection />
    </div>
  );
};

export default LandingPage;
