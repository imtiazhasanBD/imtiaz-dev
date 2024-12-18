"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const ProjectDetails = ({ project }) => {
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6">
          Project Not Found
        </p>
        <Link href="/">
          <span className="inline-block bg-customGreen hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer">
            Go Back Home
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[95%] sm:w-[80%] mx-auto pt-20 space-y-20">
      <div className="text-center space-y-10 lg:px-48">
        <span className="bg-customGreen px-5 py-3 text-white rounded-lg mx-auto font-medium">
          PROJECT
        </span>
        <h1 className="text-4xl lg:text-6xl font-medium">{project.name}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {project.shortDescription}
        </p>
      </div>

      <div className="max-w-4xl px-2 lg:mx-auto">
        <img
          src={project.image}
          alt={project.name}
          className="shadow-lg mb-10"
        />

        <h2 className="text-2xl font-medium mb-4">About the Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {project.longDescription}
        </p>

        <h2 className="text-2xl font-medium mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          <span className="font-medium text-black dark:text-white">
            Front-End:
          </span>{" "}
          {project.technologiesUsed.frontEnd}
        </p>

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
                width={640}
                height={1024}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Size Image Pop-Up */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] max-h-[80%]">
            <Image
              src={selectedImage}
              alt="Full-size screenshot"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute -top-3 -right-3 text-red-500 rounded-full"
              onClick={handleClose}
            >
              <IoMdCloseCircle size={"2rem"} className="bg-white rounded-full" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
