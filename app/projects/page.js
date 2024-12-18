import Image from "next/image";
import React from "react";
import Link from "next/link";
import { projects } from "../data/data";
import { FaArrowRight } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { TfiNewWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Projects - My Portfolio",
  description: "Browse all my projects, showcasing my development skills and work experience.",
};

const page = () => {
  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px]">
      <h1 className="text-5xl lg:text-6xl text-center py-20 font-medium">
        Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-customBg shadow-lg max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center p-4 lg:p-10 rounded-xl h-full"
          >
            {/* Left Side */}
            <div className="">
              <Link href={`/projects/${project.name}`}>
                <Image
                  src={project.image} // Replace with your image path
                  alt="Portfolio Preview"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </Link>
            </div>

            {/* Right Side */}
            <div>
              <h3 className="text-sm text-green-500 uppercase font-medium mb-2">
                {project.category}
              </h3>
              <Link
                href={`/projects/${project.name}`}
                className="flex justify-between items-center mb-8 group hover:text-customGreen"
              >
                <h2 className="text-3xl lg:text-4xl font-semibold">
                  {project.name}
                </h2>
                <span className="p-3 rounded-full border border-gray-700 font-normal -rotate-45 group-hover:rotate-0 group-hover:bg-customGreen group-hover:text-white group-hover:border-white group-hover:dark:border-gray-700 transition-transform duration-200">
                  <IoArrowForwardOutline />
                </span>
              </Link>
              <p className="text-gray-500 dark:text-gray-300 mb-20">
                {project.shortDescription}
              </p>
              <div className="space-y-4 text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white text-base">
                    Category:
                  </span>{" "}
                  {project.category}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white text-base">
                    Technology:
                  </span>{" "}
                  {project.technologiesUsed.frontEnd}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white text-base">
                    Tools:
                  </span>{" "}
                  {project.technologiesUsed.backEnd &&
                    project.technologiesUsed.paymentIntegration
                      ? project.technologiesUsed.backEnd +
                        " " +
                        project.technologiesUsed.paymentIntegration
                      : "None"}
                </p>
              </div>
               {/* Links */}
               <div className="mt-6 flex gap-8 text-gray-500 dark:text-gray-400 items-center text-sm">
                  <a
                    href={project.url.live}
                    className="flex items-center gap-2 hover:text-customGreen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TfiNewWindow />
                    <span>Live Demo</span>
                  </a>
                  <Link
                    href={project.url.github}
                    className="flex items-center gap-2 hover:text-customGreen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
