import { dataEducations } from "../data/resumeData";

const Educations = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 p-10 flex-2 rounded-2xl border border-gray-500">
      {dataEducations.map((dataEducation) => (
        <div key={dataEducation.id}>
          <div className="flex justify-between items-center lg:flex-row flex-col gap-y-2.5 lg:gap-y-0">
            <div className="flex-1 flex justify-between items-center lg:block mb-5 w-full">
              <h3 className="text-[18px] font-semibold lg:mb-3">
                {dataEducation.school}
              </h3>
              <p className="py-1 px-3 dark:bg-emerald-900 dark:text-white bg-emerald-100 w-fit rounded-full text-[12px]">
                {dataEducation.period}
              </p>
            </div>
            <div className="flex flex-col flex-2">
              {dataEducation.experiences.map((experience) => {
                return (
                  <div key={experience.id} className="mb-5">
                    <h1 className="text-[18px] font-semibold">
                      {experience.title}
                    </h1>
                    <p className="text-base font-normal text-gray-400">
                      {experience.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {dataEducation.id === 2 ? null : (
            <hr className="my-8 border-gray-700" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Educations;
