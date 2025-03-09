type Container = {
  children: React.ReactNode;
  classname?: string;
};

const Container: React.FC<Container> = ({ children, classname }) => {
  return (
    <>
      <div className={classname}>
        <div className="mx-auto max-w-7xl p-5 lg:p-0">{children}</div>
      </div>
    </>
  );
};

export default Container;
