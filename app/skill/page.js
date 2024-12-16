'use client';

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiFirebase, SiTypescript, SiStripe, SiVisualstudiocode } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";


const page = () => {
  const skills = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      ],
    },
    {
      category: 'Backend Basics',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-orange-500" /> },
      ],
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'VS Code', icon: <VscVscode className="text-blue-400" /> },
        { name: 'Stripe', icon: <SiStripe className="text-indigo-600" /> },
      ],
    },
  ];

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
              <div className="grid grid-cols-4 lg:grid-cols-8">
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
