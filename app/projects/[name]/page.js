"use client";
import { projects } from "@/app/data/data";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";


const page = ({ params }) => {
  const { name } = use(params);
  const project = projects.find(
    (proj) =>
      proj.name.toLowerCase() === name?.replace("%20", " ").toLowerCase()
  );
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

    // Lock and unlock scroll based on selectedImage state
    useEffect(() => {
      if (selectedImage) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = ""; // Restore scrolling
      }
      return () => {
        document.body.style.overflow = ""; // Cleanup in case of unmount
      };
    }, [selectedImage]);
  

  
  return (
    <div className={`w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] ${!selectedImage?'pt-20 space-y-20':''}`}>
      <div className="text-center space-y-10 lg:px-48">
        <span className="bg-customGreen px-5 py-3  text-white rounded-lg mx-auto text-center font-medium">
          PROJECT
        </span>
        <h1 className="text-4xl lg:text-6xl font-medium text-center">{project.name}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">{project.shortDescription}</p>
      </div>

      <div className="max-w-4xl px-2 lg:mx-auto">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          className="shadow-lg mb-10"
        />

        {/* Long Description */}
        <h2 className="text-2xl font-medium mb-4">
          About the Project
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.longDescription}</p>

        {/* Key Features */}
        <h2 className="text-2xl font-medium mb-4 text-black dark:text-white">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Technologies Used */}
        <h2 className="text-2xl font-medium mb-4">
          Technologies Used
        </h2>
        <div className="text-gray-600 dark:text-gray-400 mb-6">
          <p>
            <span className="text-gray-600 dark:text-white font-medium text-base">Front-End:</span>{" "}
            {project.technologiesUsed.frontEnd}
          </p>
          {project.technologiesUsed.backEnd && (
            <p>
              <span className="text-gray-600 dark:text-white font-medium text-base">
                Back-End:
              </span>{" "}
              {project.technologiesUsed.backEnd}
            </p>
          )}
          {project.technologiesUsed.paymentIntegration && (
            <p>
              <span className="text-gray-600 dark:text-white font-medium text-base">
                Payment Integration:
              </span>{" "}
              {project.technologiesUsed.paymentIntegration}
            </p>
          )}
        </div>

        {/* Design Highlights */}
        <h2 className="text-2xl font-medium mb-4">
          Design Highlights
        </h2>
        <div className="text-gray-600 dark:text-gray-400 mb-6">
          <p>
            <span className="dark:text-white font-medium">Visual Appeal:</span>{" "}
            {project.designHighlights.visualAppeal}
          </p>
          <p>
            <span className="dark:text-white font-medium">Usability:</span> {project.designHighlights.usability}
          </p>
          <p>
            <span className="dark:text-white font-medium">Performance:</span> {project.designHighlights.performance}
          </p>
        </div>

        {/* Project Links */}
        <h2 className="text-2xl font-medium mb-4">Project Links</h2>
        <div className="space-y-2 space-x-4">
          {project.url.live && (
            <a
              href={project.url.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400  hover:text-blue-300"
            >
              Live Demo
            </a>
          )}
          {project.url.github && (
            <a
              href={project.url.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400  hover:text-blue-300"
            >
              GitHub Repository
            </a>
          )}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.screenShot.map((url, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(url)}
                className="relative w-full h-48 bg-gray-800 rounded-md overflow-hidden cursor-pointer"
              >
                <Image
                  src={url}
                  alt={`Screenshot ${index + 1} of ${project.name}`}
                  layout="fill"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full-Size Image Pop-Up */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex top items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] max-h-[80%]">
            <Image
              src={selectedImage}
              alt="Full-size screenshot"
              layout="responsive"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute -top-3 -right-3 text-red-500  rounded-full"
              onClick={handleClose}
            >
              <IoMdCloseCircle size={'2rem'} className="bg-white rounded-full"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
