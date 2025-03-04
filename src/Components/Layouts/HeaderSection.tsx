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
          <h1 className="text-3xl font-bold mb-2 relative z-10">{title}</h1>
          <p className="text-base">{desc}</p>
        </div>
        <div className="mt-5">{button}</div>
      </div>
      <hr className="my-7 border-gray-600" />
    </div>
  );
};

export default HeaderSection;
