const Experience = () => {
  return (
    <div className="dark:bg-gradient-to-b bg-dark-gradient p-10 flex-2 rounded-2xl border-2 border-zinc-700">
      {/* Start Mapping */}
      <div className="flex justify-between lg:items-center mb-3 gap-1.5 lg:gap-25 flex-col lg:flex-row items-start">
        <h1 className="text-lg font-bold mb-2 flex-2 flex flex-col dark:text-sky-50">
          Internship Program (Frontend Developer) in ORDO APPS
          <span className="text-[14px] font-normal text-gray-400">
            Taman Jemursari Selatan I No.5a, Jemur Wonosari, Kec. Wonocolo,
            Surabaya, Jawa Timur 60237
          </span>
        </h1>

        <p className="py-1 px-3 dark:bg-sky-200 dark:text-black bg-sky-100 w-fit rounded-full text-[13px]">
          1 Jul - 17 Okt 2025
        </p>
      </div>

      <p className="text-base font-normal dark:text-gray-300">
        Ordo APPS membuka kesempatan magang bagi para calon Frontend Developer
        untuk mengasah keterampilan dalam pengembangan antarmuka web yang
        interaktif dan responsif. Dalam program ini, peserta akan belajar dan
        bekerja dengan teknologi modern seperti HTML, CSS, JavaScript, dan
        framework frontend terkini.
      </p>

      <hr className="my-10 border-gray-700" />
      {/* End Mapping */}
    </div>
  );
};

export default Experience;
