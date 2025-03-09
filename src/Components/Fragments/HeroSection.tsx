import fotoHome from "/public/images/foto-nobg.png";
import GradientText from "../Elements/Animate/GradientText";
import TrueFocus from "../Elements/Animate/TrueFocus";
import Button from "../Elements/Button";
import LinkSocial from "../Elements/LinkSocial";
import Container from "../Layouts/Container";

const HeroSection = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-50 lg:pt-30">
        <div className="mb-8 lg:mb-0 lg:flex-1">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-xl"
          >
            Available to work
          </GradientText>
          <p className="pb-8 pt-2 text-center text-2xl font-semi-bold dark:text-sky-100">
            Halo Semua 👋, Saya
          </p>
          <TrueFocus
            sentence="Muhammad Fadhil Alvan Syah"
            manualMode={false}
            blurAmount={0}
            borderColor=""
            animationDuration={1}
            pauseBetweenAnimations={0.5}
            glowColor="blue"
          />
          <h1 className="text-4xl font-bold text-center lg:text-5xl lg:leading-15 block lg:hidden">
            Muhammad Fadhil Alvan Syah
          </h1>
          <p className="text-center pt-5 text-xl font-bold dark:text-sky-100 hidden lg:block">
            Web Development & Student
          </p>
          <hr className="w-[100px] lg:w-36 border-[1px] border-sky-700 mx-auto my-7" />
          <LinkSocial />
        </div>
        <img
          src={fotoHome}
          alt=""
          className="w-[80%] lg:w-[30%] mx-auto mb-6 lg:hidden"
        />
        <div className="lg:flex-1 lg:hidden">
          <h1 className="text-[24px] font-bold mb-5">
            Saya adalah Frontend Developer di Indonesia, ID
          </h1>
          <p className="mb-7">
            Halo! Saya Fadhil, seorang Web Developer yang berfokus pada
            pengembangan website interaktif, responsif, dan berkinerja tinggi.
            🚀
          </p>
          <Button href="/about" title="Let's Talk" />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
