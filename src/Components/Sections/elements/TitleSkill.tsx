type TitleSkill = {
  title: string;
  desc: string;
};

const TitleSkill: React.FC<TitleSkill> = ({ title, desc }) => {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-400">{desc}</p>
    </>
  );
};

export default TitleSkill;
