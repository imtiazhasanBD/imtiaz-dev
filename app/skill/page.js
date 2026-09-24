import React from 'react';
import { skills } from '../data/data';

export const generateMetadata = () => ({
  title: "My Skills - Imtiaz Hasan | Full Stack Developer",
  description: "Discover my technical skills across Frontend, Backend (Nest.js, Node.js), Real-Time (WebRTC, Agora, WebSockets), n8n Automation, and VPS DevOps.",
});

const page = () => {
  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px] xl:w-[1130px] 2xl:min-w-[1280px] mt-20">
      <h1 className="text-5xl lg:text-6xl text-center font-medium mb-4">Technical Skills</h1>
      <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        A comprehensive overview of technologies, frameworks, real-time protocols, automation workflows, and cloud infrastructure I engineer with.
      </p>

      <div className="space-y-8 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillCategory, index) => {
          const isFullWidth = skillCategory.technologies.length >= 6;
          return (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-customBg shadow-sm ${
                isFullWidth ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-customGreen"></span>
                <h2 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100">
                  {skillCategory.category}
                </h2>
              </div>
              <div
                className={`grid grid-cols-2 sm:grid-cols-4 ${
                  isFullWidth ? "lg:grid-cols-8" : "lg:grid-cols-4"
                } gap-4`}
              >
                {skillCategory.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center p-3 rounded-lg border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-costomGaryLite/40 hover:border-customGreen hover:scale-105 transition-all duration-200"
                  >
                    <div className="text-3xl sm:text-4xl mb-2">{tech.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;

