"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { TfiNewWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useRef, useEffect } from "react";
import { projects } from "../data/data";

const ProjectSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper").swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="bg-white dark:bg-customBg dark:text-white p-4 sm:p-10 lg:p-16 rounded-lg shadow-md w-full mt-6 relative">
      <h2 className="flex items-center text-customGreen before:content-[''] before:block before:w-[7px] before:h-[7px] before:bg-customGreen before:rounded-full before:mr-2">
        Projects
      </h2>
      <h2 className="text-2xl lg:text-4xl font-medium mb-4">My Recent Works</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col lg:flex-row gap-10 p-4 md:p-8 border border-gray-300 dark:border-gray-700 mt-8 relative">
              {/* Project Image */}
              <div className="lg:w-2/4 w-full h-full overflow-hidden">
                <Link href={`/projects/${project.name}`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={500}
                    className="w-full lg:w-auto h-auto"
                  />
                </Link>
              </div>

              {/* Project Details */}
              <div className="lg:w-4/6">
                <Link href={`/projects/${project.name}`}>
                  <h3 className="text-2xl lg:text-3xl font-medium text-customGreen mb-4">
                    {project.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.shortDescription}
                </p>

                {/* Project Info */}
                <div className="text-sm space-y-2">
                  <div className="flex items-center text-cuntomPink border-b border-gray-300 dark:border-gray-700 pb-3 mb-4">
                    <svg
                      className="w-2 h-2 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-8a1 1 0 11-2 0 1 1 0 012 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h2 className="text-base">Projects Info</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 pb-3">
                    <span className="font-medium text-gray-800 dark:text-white">
                      Category:
                    </span>{" "}
                    {project.category}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 pb-3">
                    <span className="font-medium text-gray-800 dark:text-white">
                      Technology:
                    </span>{" "}
                    {project.technologiesUsed.frontEnd}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700 pb-3">
                    <span className="font-medium text-gray-800 dark:text-white">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="md:flex gap-4 absolute bottom-[5%] right-[10%] lg:bottom-[12%] z-50 hidden">
        <button
          ref={prevRef}
          className="p-2 rounded-full bg-green-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer"
        >
          <IoArrowBack size={"2rem"} />
        </button>
        <button
          ref={nextRef}
          className="p-2 rounded-full bg-green-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-pointer"
        >
          <IoArrowForward size={"2rem"} />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
