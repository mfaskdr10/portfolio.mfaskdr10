type WebLayout = {
  children: React.ReactNode;
};

const WebLayout: React.FC<WebLayout> = ({ children }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-zinc-100 to-emerald-200 dark:from-slate-900 dark:to-green-800 dark:text-zinc-300 transition-all duration-500">
        <div className="mx-auto max-w-7xl p-5 lg:p-0">
          {children}
        </div>
      </div>
    </>
  );
};

export default WebLayout;
