import Image from "next/image";
import React from "react";
import { hobbies } from "../data/data";

const About = () => {
  return (
    <div className="bg-white dark:bg-customBg dark:text-white p-4 sm:p-10 lg:p-16 rounded-lg shadow-md w-full mt-6 relative">
      <h2 className="flex items-center ju text-customGreen before:content-[''] before:block before:w-[7px] before:h-[7px] before:bg-customGreen before:rounded-full before:mr-2">
        About Me
      </h2>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
        let’s Introduce about myself
      </h2>

      <div className="w-full group flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mt-10 lg:mt-16">
        {/* left Section: Description */}
        {/*bg-slate-300 bg-opacity-15 dark:bg-black dark:bg-opacity-15 */}
        <div className="w-full duration-300 p-6 lg:px-10 flex flex-col justify-center gap-6 lg::gap-10 lg:border-r border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:items-center">
            <div>
              <h3 className="text-xl  font-medium duration-300">
                Passionate Frontend Developer
              </h3>
              <p className="text-sm mt-2 text-cuntomPink duration-300">
                React, Next.js, TypeScript, Tailwind
              </p>
            </div>
            <div>
              <p className="px-4 py-2 text-customGreen bg-gray-500 bg-opacity-25 dark:bg-black dark:bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                1 Year Experience
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-400 duration-300">
            I'm a passionate Frontend Developer with expertise in building
            modern, responsive, and dynamic web applications. I specialize in
            React, Next.js, TypeScript, and Tailwind CSS. My focus is on
            crafting seamless user interfaces and maintaining clean, efficient
            code. With a background in computer science, I enjoy solving
            problems and bringing ideas to life. When I’m not coding, you’ll
            find me exploring new technologies or contributing to open-source
            projects.
          </p>
        </div>
        <button className="hidden px-4 py-4 bg-customGreen text-black font-medium">
          Learn More
        </button>
        <div className="p-8 w-full lg:w-1/4">
          <h2 className="bg-gray-500 bg-opacity-25 dark:bg-black dark:bg-opacity-25  text-sm px-4 py-2 text-customGreen font-medium rounded-lg text-center">
            Like To Do
          </h2>
          <div className="space-y-2 mt-10">
            {hobbies.map((hobby) => (
              <p className="flex items-center ju text-gray-400 before:content-[''] before:block before:w-[7px] before:h-[7px] before:bg-customGreen before:rounded-full before:mr-2">
                {hobby.name}
              </p>
            ))}
          </div>
        </div>
        {/* right Section: Image */}
        <div className="relative m-auto hidden">
          <div className="w-full h-[6p] bg-opacity-60 mt-16 relative hidden lg:block ">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 z-10">
              <span className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-customGreen duration-300"></span>
            </span>
            <div className="w-20 h-[6px] bg-gray-900 absolute top-0 -left-20 z-0"></div>
          </div>
          <Image
            src="/images/about_me.webp"
            height={300}
            width={300}
            alt="About_me"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
