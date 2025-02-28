import fotoHome from "../../assets/foto.png";
import Button from "../Elements/Button";
import LinkSocial from "../Elements/LinkSocial";

const HomeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 py-30">
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
          I'm a FullStack Developer in Indonesian{" "}
        </h1>
        <p className="mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          corrupti fugiat et non debitis laudantium officiis possimus odio at
          voluptates.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default HomeSection;
