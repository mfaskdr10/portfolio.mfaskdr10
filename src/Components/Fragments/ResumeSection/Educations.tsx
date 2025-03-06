import { dataEducations } from "../../data/resumeData";

const Educations = () => {
  return (
    <div className="bg-sky-100 dark:bg-gradient-to-b dark:from-sky-950 dark:to-zinc-900 p-10 flex-2 rounded-2xl border-2 border-sky-700">
      {dataEducations.map((dataEducation) => (
        <div key={dataEducation.id}>
          <div className="flex justify-between items-center lg:flex-row flex-col gap-y-2.5 lg:gap-y-0">
            <div className="flex-1 flex flex-col justify-between lg:block mb-5 w-full">
              <h3 className="text-[18px] font-semibold lg:mb-3 dark:text-sky-50 mb-2">
                {dataEducation.school}
              </h3>
              <p className="py-1 px-3 bg dark:text-black bg-sky-200 w-fit rounded-full text-[13px]">
                {dataEducation.period}
              </p>
            </div>
            <div className="flex flex-col flex-2">
              {dataEducation.experiences.map((experience) => {
                return (
                  <div key={experience.id} className="mb-5">
                    <h1 className="text-[18px] font-semibold dark:text-sky-50">
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
