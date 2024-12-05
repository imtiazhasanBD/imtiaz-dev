import Image from "next/image";
import React from "react";
import { skills } from "../data/data";
import Marquee from "react-fast-marquee";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="py-8 lg:py-16 dark:bg-customBg bg-white border dark:border-gray-700 border-white flex flex-col lg:flex-row gap-10 ">
      <div className="relative px-4 lg:my-auto m-auto">
        {/* Main Image */}
        <div className="w-full">
          <Image
            src="/hero_photo2.png"
            alt="Picture of the author"
            layout="resposive"
            width={450}
            height={450}
          />
        </div>

        {/* Overlay Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Image
            src="/people-shape.png"
            alt="Decorative Shape"
            height={80}
            width={80}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-black dark:text-white space-y-6 lg:space-y-4 w-full lg:w-3/6 px-4 sm:px-10 lg:px-0">
        <div className="flex text-cuntomPink">
          &lt;span&gt;
          <p className="text-black dark:text-white">Hey, I’m Imtiaz</p>
          &lt;span/&gt;
        </div>
        <div className="text-5xl font-medium">
          Junior
          <h1 className="text-customGreen py-2">{`{Frontend}`}</h1>
          Web & App developer
        </div>
        <div className="flex">
          <p className="text-black dark:text-gray-300 text-base">
            <span className="text-cuntomPink">&lt;p&gt;</span>With expertise in
            cutting-edge technologies such as
            <span className="text-cuntomPink"> JavaScript</span>,
            <span className="text-cuntomPink"> React</span>,
            <span className="text-cuntomPink"> Next.js</span>,
            <span className="text-cuntomPink"> TypeScript</span>, and
            <span className="text-cuntomPink"> Tailwind</span>... I deliver web
            solutions that are both innovative and robust.
            <span className="text-cuntomPink">&lt;p/&gt;</span>
          </p>
        </div>
        <div className="w-full py-8 h-32 flex space-x-6 justify-between">
          <Marquee pauseOnHover>
            <div className="flex space-x-6 overflow-hidden pr-6">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-4xl ${skill.color} p-3 rounded-lg border border-gray-400 dark:border-gray-700 hover:bg-costomGaryLite`}
                >
                  {skill.icon}
                </span>
              ))}
            </div>
          </Marquee>
          <div className="relative w-3/5">
            <p className="text-gray-600 dark:text-gray-400 absolute bottom-0 w-full text-left">...and more</p>
          </div>
        </div>
        <button className="flex space-x-2 justify-center items-center">
           <FiDownload className="text-2xl text-customGreen"/>
           <p className="text-sm text-gray-700 dark:text-gray-400 font-medium">Download My CV</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
