import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";

import { navLinks } from "../constant/constant";
import { socialMedia } from "../data/data";

const Header = () => {
  return (
<header className="text-white bg-customBg sm:mx-[70px] lg:mt-6 m-2 rounded-lg">
  <nav className="flex justify-between space-x-6">
    {/* Left Section - Menu Icon */}
    <div className="bg-customGray p-8 lg:px-6 xl:p-8 cursor-pointer hover:bg-gray-700 transition-colors hidden sm:block">
      <RiMenu2Line  />
    </div>

    {/* Center Section - Branding & Navigation */}
    <section className="flex items-center justify-between w-full">
      {/* Branding */}
      <div className="flex items-center text-lg lg:text-2xl space-x-2">
        <FaCode className="text-3xl lg:text-4xl text-customLiteGreen" />
        <span className=" lg:hidden xl:block">Imtiaz.dev</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex space-x-8 text-lg">
        <li className="cursor-pointer text-white hover:text-gray-400 transition-colors">Home</li>
        {navLinks.map((navlink) => (
          <li
            key={navlink.id}
            className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
          >
            {navlink.label}
          </li>
        ))}
      </ul>

      {/* Social Media Links */}
      <div className="md:flex space-x-5 hidden">
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
    </section>

    {/* Right Section - Theme Icon */}
    <div className="flex items-center lg:block">
  {/* Theme Icon */}
  <div className="lg:bg-customGray p-8 lg:px-6 xl:p-8 cursor-pointer hover:bg-gray-700 transition-colors">
    <IoSunnySharp className="text-yellow-500 text-2xl lg:text-xl" />
  </div>

  {/* Mobile Menu Icon - Hidden on larger screens */}
  <div className="p-2 border border-customLiteGreen rounded-lg cursor-pointer hover:bg-gray-700 transition-colors lg:hidden mr-4">
    <HiMiniBars3 className="text-3xl text-white" />
  </div>
</div>

      
  </nav>
</header>

  );
};

export default Header;
