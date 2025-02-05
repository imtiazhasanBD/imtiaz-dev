import { FaCode } from "react-icons/fa";
import { socialMedia } from "../data/data";
import { navLinks } from "../constant/constant";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-300 dark:border-gray-800 flex flex-col gap-4 justify-center items-center py-10 w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] mt-20 lg:mt-40">
      {/* Branding */}
      <div className="flex items-center space-x-2">
        <FaCode className="text-3xl lg:text-4xl text-customGreen" />
        <span className="text-xl font-medium lg:text-2xl text-slate-500 dark:text-slate-300">
          Imtiaz.dev
        </span>
      </div>
      {/* Social Media Links */}
      <div className="flex space-x-5">
        {socialMedia.map((platform, i) => (
          <a
            href={platform.link}
            target="_blank"
            key={i}
            className="text-slate-500 dark:text-slate-400 hover:text-customGreen transition-colors cursor-pointer duration-500"
            rel="noopener noreferrer"
            aria-label={platform.name}
          >
            {platform.icon}
          </a>
        ))}
      </div>
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-5 lg:space-x-8 text-sm md:text-base">
          {navLinks.map((navlink) => (
            <li
              key={navlink.id}
              className="cursor-pointer text-gray-500  hover:text-gray-700 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              <Link href={navlink.url} prefetch={false} >{navlink.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
