import React from 'react';
import { skills } from '../data/data';

export const generateMetadata = () => ({
  title: "My Skills - Imtiaz Hasan",
  description: "Discover my technical skills, including React, Tailwind CSS, Firebase, and more.",
});


const page = () => {

  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] mt-20">

        <h1 className="text-5xl lg:text-6xl text-center font-medium mb-6">My Skills</h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-12">
          Below are some of the technologies and tools I have worked with, categorized into areas of expertise.
        </p>

        <div className="space-y-8  px-4">
          {skills.map((skillCategory, index) => (
            <div key={index} className="lg:p-6">
              <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">{skillCategory.category}</h2>
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
                {skillCategory.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center p-2"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default page;
