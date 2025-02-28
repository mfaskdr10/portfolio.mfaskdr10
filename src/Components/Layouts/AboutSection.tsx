import HeaderSection from "../Fragments/HeaderSection";

const AboutSection = () => {
  return (
    <section className="py-20">
      <HeaderSection
        title="About Me"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusantium?"
      />

      <div className="w-full bg-white p-10 rounded-lg shadow-xl">
        <p className="mb-5 text-lg text-justify text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          impedit reprehenderit nemo. Eos, harum adipisci. In recusandae
          molestias impedit placeat quae voluptatibus tenetur, laudantium
          blanditiis? Excepturi aut eligendi neque molestiae delectus
          voluptatibus quidem asperiores ducimus? Magnam, dolorem recusandae.
          Mollitia ab expedita earum? A repudiandae quasi error nobis! Quis,
          tempore eos?
        </p>

        <div className="flex gap-10 items-center">
          <h1 className="flex items-center text-5xl font-bold gap-2 text-emerald-500">
            1+
            <span className="text-xl leading-5">
              Years <br /> Experience
            </span>
          </h1>
          <h1 className="flex items-center text-5xl font-bold gap-2 text-emerald-500">
            10+
            <span className="text-xl leading-5">
              Project <br /> Done
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
