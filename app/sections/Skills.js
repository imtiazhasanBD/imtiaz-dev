import Marquee from "react-fast-marquee";
import { LuDot } from "react-icons/lu";
import { skills, SkillsData } from "../data/data";

const Skills = () => {
  return (
    <section className="relative bg-white dark:bg-customBg dark:text-white px-4 py-16 rounded-lg shadow-md w-full mt-6 overflow-hidden">
      <div>
        <div className="flex items-center justify-center">
          <svg
            className="w-2 h-2 mr-2 text-customGreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 11-2 0 1 1 0 012 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h2 className="text-base text-customGreen">Projects</h2>
        </div>
        <h2 className=" text-2xl lg:text-4xl font-medium  mb-4 text-center">
          My Skills
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 gap-4 justify-between items-center">
        <div className="overflow-hidden w-full p-4">
          <div className="items-center space-y-8 mx-auto">
            {/* Marquee Section */}
            <div className="overflow-hidden w-full md:w-[500px] mx-auto">
              <Marquee
                gradient={false}
                speed={30}
                pauseOnHover
                className="w-[400px]"
              >
                <div className="flex space-x-8 pr-6">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-4xl ${skill.color} p-5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-costomGaryLite`}
                    >
                      {skill.icon}
                    </span>
                  ))}
                </div>
              </Marquee>
            </div>
            <div className="overflow-hidden w-[350px] md:w-[400px] mx-auto">
              <Marquee
                direction="right"
                gradient={false}
                speed={30}
                pauseOnHover
                className="w-[350px] md:w-[400px]"
              >
                <div className="flex space-x-8 pr-6">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-4xl ${skill.color} p-5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-costomGaryLite`}
                    >
                      {skill.icon}
                    </span>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="w-full my-auto space-y-2 lg:border-l border-gray-400 dark:border-gray-700 lg:pl-8">
          <ul className="list-disc list-outside">
            {SkillsData.map((skill, i) => (
              <li key={i} class="flex mb-4 text-gray-700 dark:text-white">
                <LuDot size={"2rem"} className=" bottom-1" />
                <div class="flex flex-col lg:flex-row gap-2 my-auto">
                  <p class="font-medium">{skill.category}:</p>
                  <span class="text-gray-500 my-auto">
                    {skill.skills.map((skill) => skill + " ")}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute top-[-35px] right-[-35px] w-40 h-40 md:w-52 md:h-52 border-[0.7px] border-gray-300 dark:border-gray-700 rounded-full flex justify-center items-center">
        <div className="relative w-20 h-20 md:w-32 md:h-32 border-[0.7px] border-gray-300 dark:border-gray-700 rounded-full flex justify-center items-center animate-spin-slow">
          <div className="relative w-10 h-10 md:w-20 md:h-20 border-[0.7px] border-gray-300 dark:border-gray-700 rounded-full animate-spin-slower">
            <div className="absolute left-[-23px] md:left-[-20px] text-gray-400">
              <LuDot size={"3rem"} />
            </div>
          </div>
          <div className="absolute left-[-20px] md:left-[-10px] bottom-0 text-gray-400">
              <LuDot size={"3rem"} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
