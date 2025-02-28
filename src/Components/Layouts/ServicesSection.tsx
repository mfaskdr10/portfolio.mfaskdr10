import HeaderSection from "../Fragments/HeaderSection";
import ServiceCard from "../Fragments/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-20">
      <HeaderSection
        title="My Skills"
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium?"
        }
      />
      <ServiceCard />
    </section>
  );
};

export default ServicesSection;
