"use client";
import Image from "next/image";
import React from "react";
import { skills } from "../data/data";
import Marquee from "react-fast-marquee";
import { FiDownload } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const words = "Hey, I’m Imtiaz";

  return (
    <div className="py-8 lg:py-16 dark:bg-customBg bg-white border rounded-b-lg shadow-md dark:border-gray-700 border-white flex flex-col lg:flex-row gap-10 px-4 sm:px-10 lg:px-8">
      <div className="relative lg:my-auto md:m-auto">
        {/* Main Image */}
        <div className="w-full">
          <Image
            src="/images/hero_photo_new.png"
            alt="Picture of the author"
            layout="resposive"
            width={450}
            height={450}
          />
        </div>

        {/* Overlay Image */}
        <div className="absolute bottom-[-16px] left-[40%] transform -translate-x-1/2">
          <Image
            src="/people-shape.png"
            alt="Decorative Shape"
            height={80}
            width={80}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-black dark:text-white space-y-6 lg:space-y-4 w-full lg:w-3/5">
        <div className="flex text-cuntomPink items-center">
          <span> &lt;span&gt;</span>
          <p className="text-black dark:text-white font-medium w-[158px]">
            <Typewriter
              words={words.split()}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <span className="text-xl text-orange-400">
              <Typewriter
                words={""}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <span>&lt;span/&gt;</span>
        </div>
        <div className="text-5xl font-medium">
           Passionate 
          <h1 className="text-customGreen py-2">{`{Frontend}`}</h1>
          Web & App developer
          <Typewriter
            words={""}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
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
          {/* Marquee Section */}
          <div className="overflow-hidden w-[300px] md:w-[660px]">
            <Marquee gradient={false} speed={30} pauseOnHover className="w-[660px]">
              <div className="flex space-x-6 pr-6">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-4xl ${skill.color} p-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-costomGaryLite`}
                  >
                    {skill.icon}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>

          {/* "And More" Section */}
          <div className="relative w-3/5">
            <p className="text-gray-600 dark:text-gray-400 absolute bottom-0 right-0 w-full text-left">
              ...and more
            </p>
          </div>
        </div>

        <div className="flex space-x-8 items-center">
          <button className="flex space-x-2 justify-center items-center">
            <FiDownload className="text-2xl text-customGreen" />
            <p className="text-sm text-gray-700 dark:text-gray-400 font-medium">
              Download CV
            </p>
          </button>
          <button className="flex space-x-2 justify-center items-center">
            <FaHandshake className="text-2xl text-customGreen" />
            <p className="text-sm text-gray-700 dark:text-gray-400 font-medium">
              Hire Me
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
