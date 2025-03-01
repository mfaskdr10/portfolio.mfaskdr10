import brush from "../../assets/brush.png";

type HeaderSection = {
  title: string;
  desc: string;
  button?: React.ReactElement;
};

const HeaderSection = (props: HeaderSection) => {
  const { title, desc, button = null } = props;
  return (
    <div className={"text-left mb-8 relative"}>
      <div className="flex justify-between h-auto  lg:flex-row flex-col">
        <div>
          <h1 className="text-3xl font-bold text-[#131313] mb-7 relative z-10">
            {title}
          </h1>
          <img
            src={brush}
            alt="brush.png"
            width={150}
            className="absolute top-5"
          />
          <p className="text-base text-gray-500 mb-7">{desc}</p>
        </div>
        <div>{button}</div>
      </div>
      <hr className="my-7 border-gray-300" />
    </div>
  );
};

export default HeaderSection;
