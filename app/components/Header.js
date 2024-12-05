"use client";

import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { GiMoon } from "react-icons/gi";

import { navLinks } from "../constant/constant";
import { socialMedia } from "../data/data";
import GetInTouch from "./GetInTouch";
import NavbarForMobile from "./NavbarForMobile";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);
  const toggleLeftSidebar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
  };
  const toggleRightSidebar = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  console.log(theme);

  return (
    <header className="flex justify-between items-center  dark:bg-customBg bg-coustomLiteBg p-6 md:p-8  text-white rounded-lg">
      <GetInTouch isOpen={isLeftBarOpen} toggleSidebar={toggleLeftSidebar} />
      <NavbarForMobile
        isOpen={isMobileMenuOpen}
        toggleSidebar={toggleRightSidebar}
      />

      {/* Left Section - Menu Icon */}
      <section className="flex items-center gap-6">
        <div
          onClick={toggleLeftSidebar}
          className="bg-costomGaryLite dark:bg-customGray cursor-pointer hover:bg-gray-700 transition-colors hidden sm:block"
        >
          <RiMenu2Line />
        </div>
        {/* Branding */}
        <div className="flex items-center text-lg lg:text-2xl space-x-2">
          <FaCode className="text-3xl lg:text-4xl text-customLiteGreen" />
          <span className=" lg:hidden xl:block">Imtiaz.dev</span>
        </div>
      </section>
      {/* Navigation Links */}
      <nav>
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li className="cursor-pointer text-white hover:text-gray-400 transition-colors">
            Home
          </li>
          {navLinks.map((navlink) => (
            <li
              key={navlink.id}
              className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
            >
              {navlink.label}
            </li>
          ))}
        </ul>
      </nav>
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
      {/* Right Section - Theme Icon */}
      <section className="flex items-center gap-6 lg:block">
        {/* Theme Icon */}
        <div
          onClick={toggleTheme}
          className="lg:bg-costomGaryLite dark:lg:bg-customGray cursor-pointer hover:bg-gray-700 transition-colors text-yellow-500 text-2xl lg:text-xl"
        >
          {theme === "light" ? <IoSunnySharp /> : <GiMoon />}
        </div>
        {/* Mobile Menu Icon - Hidden on larger screens */}
        <div
          onClick={toggleRightSidebar}
          className="p-2 border border-customLiteGreen rounded-lg cursor-pointer hover:bg-gray-700 transition-colors lg:hidden"
        >
          <HiMiniBars3 className="md:text-3xl text-white" />
        </div>
      </section>
    </header>
  );
};

export default Header;
