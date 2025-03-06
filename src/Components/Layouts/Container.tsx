type Container = {
  children: React.ReactNode;
};

const Container: React.FC<Container> = ({ children }) => {
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl p-5 lg:p-0">{children}</div>
      </div>
    </>
  );
};

export default Container;
