import fotoHome from "/public/images/foto1.png";
import GradientText from "../Elements/Animate/GradientText";
import TrueFocus from "../Elements/Animate/TrueFocus";
import Button from "../Elements/Button";
import LinkSocial from "../Elements/LinkSocial";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 pt-50 ">
      <div className="mb-8 lg:mb-0 lg:flex-1">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-xl"
        >
          Available to work
        </GradientText>
        <TrueFocus
          sentence="Muhammad Fadhil Alvan Syah"
          manualMode={true}
          blurAmount={0}
          borderColor=""
          animationDuration={0.5}
          pauseBetweenAnimations={0.5}
          glowColor="blue"
        />
        <h1 className="text-4xl font-bold mb-5 text-center lg:text-5xl lg:leading-15 block lg:hidden">
          Muhammad Fadhil Alvan Syah
        </h1>
        <hr className="w-[100px] lg:w-36 border-[1px] border-sky-700 mx-auto my-7" />
        <LinkSocial />
      </div>
      <img src={fotoHome} alt="" className="w-[80%] lg:w-[30%] mx-auto mb-6" />
      <div className="lg:flex-1">
        <h1 className="text-[24px] font-bold mb-5">
          Saya adalah Frontend Developer di Indonesia, ID
        </h1>
        <p className="mb-7">
          Halo! Saya Fadhil, seorang Web Developer yang berfokus pada
          pengembangan website interaktif, responsif, dan berkinerja tinggi. 🚀
        </p>
        <Button href="/about" title="Let's Talk" />
      </div>
    </section>
  );
};

export default HeroSection;
