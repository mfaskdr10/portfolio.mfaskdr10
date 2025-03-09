import HeaderSection from "../../Layouts/HeaderSection";
import Educations from "./Educations";
import { buttonResumes } from "../../data/resumeData";
import { useState } from "react";
import Button from "../../Elements/Button";
import Experience from "./Experience";
import Container from "../../Layouts/Container";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<string>("education");

  return (
    <Container>
      <section className="pt-20">
        <div>
          <HeaderSection
            title="My Resume"
            desc="Summary of my experience, skills and career path as a Web Developer"
            button={<Button href="/sjs" title="Download CV" />}
          />
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="flex-1 mb-10 lg:mb-0 flex justify-center gap-4 lg:block">
            {buttonResumes.map((buttonResume) => (
              <p
                key={buttonResume.id}
                className={`rounded-xl cursor-pointer lg:mb-2 ${
                  activeTab === buttonResume.state
                    ? "dark:text-sky-50"
                    : "text-gray-400 dark:text-gray-500"
                }`}
                onClick={() => setActiveTab(buttonResume.state)}
              >
                {buttonResume.text}
              </p>
            ))}
          </div>

          {/* MEnu */}
          {activeTab === "education" && <Educations />}
          {activeTab === "experience" && <Experience />}
          {/* {activeTab === "professional-skill" && <Skills />} */}
        </div>
      </section>
    </Container>
  );
};

export default ResumeSection;
