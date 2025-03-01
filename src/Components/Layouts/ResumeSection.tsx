import HeaderSection from "../Fragments/HeaderSection";
import Educations from "../Fragments/Educations";
import { buttonResumes } from "../../data/resumeData";
import { useState } from "react";
import Button from "../Elements/Button";
import Experience from "../Fragments/Experience";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<string>("education");

  return (
    <section className="py-20">
      <div>
        <HeaderSection
          title="My Resume"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium?"
          button={<Button href="/sjs" title="Download CV" />}
        />
      </div>

      <div className="flex justify-between lg:flex-row flex-col lg:gap-7">
        <div className="flex-1 mb-10 lg:mb-0 flex justify-center gap-4 lg:block">
          {buttonResumes.map((buttonResume) => (
            <p
              key={buttonResume.id}
              className={`px-3 py-3 bg-emerald-50 border rounded-xl cursor-pointer lg:mb-5 ${
                activeTab === buttonResume.state
                  ? "bg-emerald-500 text-emerald-50"
                  : "text-black-200"
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
        {activeTab === "professional-skill" && (
          <div className="bg-white p-10 flex-2 min-h-screen">
            <h1>Professional Skills</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
