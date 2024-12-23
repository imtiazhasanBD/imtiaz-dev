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
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleLeftSidebar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
  };
  const toggleRightSidebar = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center  dark:bg-customBg bg-coustomLiteBg p-6 md:px-8 md:py-6  text-white rounded-lg w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] mt-7">
      <GetInTouch isOpen={isLeftBarOpen} toggleSidebar={toggleLeftSidebar} />
      <NavbarForMobile
        isOpen={isMobileMenuOpen}
        toggleSidebar={toggleRightSidebar}
      />

      {/* Left Section - Menu Icon */}
      <section className="flex items-center gap-6">
        <div
          onClick={toggleLeftSidebar}
          className="cursor-pointer transition-colors hidden sm:block"
        >
          <RiMenu2Line />
        </div>
        {/* Branding */}
        <Link href="/">
          <div className="flex items-center text-lg lg:text-2xl space-x-2">
            <FaCode className="text-3xl lg:text-4xl text-customLiteGreen" />
            <span className=" lg:hidden xl:block">Imtiaz.dev</span>
          </div>
        </Link>
      </section>
      {/* Navigation Links */}
      <nav>
        <ul className="hidden lg:flex space-x-8 text-lg">
          {navLinks.map((navlink) => (
            <Link
              href={navlink.url}
              key={navlink.id}
              prefetch={false}
              className={`cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 ${pathName===navlink.url? 'text-white' : ''}`}
            >
              {navlink.label}
            </Link>
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
          className="cursor-pointer  transition-colors text-yellow-500 text-2xl lg:text-xl"
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
