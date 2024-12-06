import React from "react";
import { navLinks } from "../constant/constant";
import { CgClose } from "react-icons/cg";
import { contactData, socialMedia } from "../data/data";

const GetInTouch = ({ isOpen, toggleSidebar }) => {


  return (
    <div className="fixed h-full z-50 hidden sm:block">
      {/* Overlay */}
      { isOpen &&
      <div
        onClick={toggleSidebar}
        className="w-full h-screen inset-0 z-[1000] bg-black opacity-70 fixed"
      ></div>}

      {/* Sliding Menu */}
      <div
        className={`h-full left-0 top-0 w-3/6 md:w-2/5  lg:w-2/6 xl:w-1/4 flex flex-col justify-center p-7  space-y-6 fixed bg-white dark:bg-background z-[1006]  transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-4xl text-black dark:text-white border-b border-customGreen pb-8 font-medium">Get in touch</h1>
        <div className="text-slate-600 dark:text-slate-300">
          <p className="">
            I'm always excited to take on new projects and collaborate with
            innovative minds.
          </p>
          <ul className="space-y-4 mt-6">
            {contactData.map((contact, i) => (
              <li key={i}>
                <p className="text-slate-500 text-lg">{contact.name}</p>
                <p className="text-sm">{contact.info}</p>
              </li>
            ))}
            <li className="space-y-2">
              <p className="text-slate-500 text-lg">Social</p>
              <div className="sm:flex space-x-5 hidden">
                {socialMedia.map((platform, i) => (
                  <a
                    href={platform.link}
                    target="_blank"
                    key={i}
                    className="hover:text-customGreen transition-colors cursor-pointer duration-500"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Close Button */}
        <CgClose
          onClick={toggleSidebar}
          className="absolute top-0 right-6 sm:w-8 sm:h-8 w-6 h-6 text-customGreen"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
