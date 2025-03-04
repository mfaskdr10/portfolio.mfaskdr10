import fotoHome from "../../assets/foto1.png";
import Button from "../Elements/Button";
import LinkSocial from "../Elements/LinkSocial";

const HomeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 pt-50 ">
      <div className="mb-8 lg:mb-0 lg:flex-1">
        <h1 className="text-4xl font-bold mb-5 text-center lg:text-5xl lg:leading-15 ">
          Muhammad Fadhil Alvan Syah
        </h1>
        <hr className="w-[100px] lg:w-36 border-[1px] border-emerald-400 mx-auto " />
        <LinkSocial />
      </div>
      <img src={fotoHome} alt="" className="w-[80%] lg:w-[30%] mx-auto mb-6" />
      <div className="lg:flex-1">
        <h1 className="text-[24px] font-medium mb-5">
          Saya adalah FrontEnd Developer di Indonesia, ID
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

export default HomeSection;
