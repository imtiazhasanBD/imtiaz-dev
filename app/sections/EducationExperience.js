import { MdOutlineSchool } from "react-icons/md";
import { PiNetwork } from "react-icons/pi";
import { education, experience } from "../data/data";

const EducationExperience = () => {
  return (
    <section className="dark:text-white w-full mt-8 flex flex-col lg:flex-row gap-6">
      {/* Education Section */}
      <div className="flex-1 w-full bg-white dark:bg-customBg px-6 sm:px-8 py-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800/60 flex flex-col">
        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-black dark:text-white flex items-center gap-3">
          <MdOutlineSchool className="text-customGreen text-3xl shrink-0" />
          <span>Education</span>
        </h3>

        {/* Timeline container with vertical stem */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700/60 ml-2 sm:ml-3 flex flex-col gap-6 flex-1">
          {education.map((item, index) => (
            <div key={index} className="w-full group relative flex items-start">
              {/* Horizontal branch from vertical line to card */}
              <div className="w-6 sm:w-8 h-[2px] bg-gray-200 dark:bg-gray-700/60 mt-6 relative shrink-0">
                {/* Node dot centered on vertical line */}
                <span className="absolute w-4 h-4 rounded-full -top-[7px] -left-2 flex items-center justify-center bg-white dark:bg-customBg border-2 border-gray-300 dark:border-gray-600 group-hover:border-customGreen transition-colors duration-300 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-customGreen transition-colors duration-300"></span>
                </span>
              </div>

              {/* Card content */}
              <div className="flex-1 bg-gray-50 dark:bg-[#1f1f25] hover:bg-gray-100/80 dark:hover:bg-[#23232b] border border-gray-200/70 dark:border-gray-800 hover:border-customGreen/40 transition-all duration-300 rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-customGreen transition-colors">
                    {item.title}
                  </h4>
                  {(item.duration || item.subTitle?.includes("|")) && (
                    <span className="self-start sm:self-auto text-xs font-medium px-2.5 py-0.5 rounded-md bg-customGreen/10 text-customGreen border border-customGreen/20 whitespace-nowrap">
                      {item.duration || item.subTitle.split("|")[1]?.trim()}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-customGreen font-medium mb-3">
                  {item.institution || item.subTitle?.split("|")[0]?.trim()}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex-1 w-full bg-white dark:bg-customBg px-6 sm:px-8 py-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800/60 flex flex-col">
        <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-black dark:text-white flex items-center gap-3">
          <PiNetwork className="text-customGreen text-3xl shrink-0" />
          <span>Experience</span>
        </h3>

        {/* Timeline container with vertical stem */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700/60 ml-2 sm:ml-3 flex flex-col gap-6 flex-1">
          {experience.map((item, index) => (
            <div key={index} className="w-full group relative flex items-start">
              {/* Horizontal branch from vertical line to card */}
              <div className="w-6 sm:w-8 h-[2px] bg-gray-200 dark:bg-gray-700/60 mt-6 relative shrink-0">
                {/* Node dot centered on vertical line */}
                <span className="absolute w-4 h-4 rounded-full -top-[7px] -left-2 flex items-center justify-center bg-white dark:bg-customBg border-2 border-gray-300 dark:border-gray-600 group-hover:border-customGreen transition-colors duration-300 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 group-hover:bg-customGreen transition-colors duration-300"></span>
                </span>
              </div>

              {/* Card content */}
              <div className="flex-1 bg-gray-50 dark:bg-[#1f1f25] hover:bg-gray-100/80 dark:hover:bg-[#23232b] border border-gray-200/70 dark:border-gray-800 hover:border-customGreen/40 transition-all duration-300 rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-customGreen transition-colors">
                    {item.title}
                  </h4>
                  {item.duration && (
                    <span className="self-start sm:self-auto text-xs font-medium px-2.5 py-0.5 rounded-md bg-customGreen/10 text-customGreen border border-customGreen/20 whitespace-nowrap">
                      {item.duration}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="text-customGreen font-medium">
                    {item.company || item.subTitle?.split("•")[0]?.trim()}
                  </span>
                  {item.employmentType && (
                    <>
                      <span className="text-gray-400 dark:text-gray-600">•</span>
                      <span>{item.employmentType}</span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;