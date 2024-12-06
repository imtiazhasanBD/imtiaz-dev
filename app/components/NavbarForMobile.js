import React from 'react'
import { navLinks } from '../constant/constant';
import { CgClose } from "react-icons/cg";

const NavbarForMobile = ({ isOpen, toggleSidebar }) => {

  return (
    <div className="fixed h-full z-50 top-0 right-0 lg:hidden">
      {isOpen &&
      <div onClick={toggleSidebar} className="w-full h-screen inset-0 z-[1000] bg-black opacity-70 fixed"></div> }
      <div className={`h-full w-3/4 sm:w-2/5 lg:w-2/6 xl:w-1/4 flex flex-col justify-center p-7 text-gray-900 font-medium dark:text-white space-y-6 fixed bg-white dark:bg-background z-[1006]  transform transition-transform duration-500 ease-in-out ${
          !isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {navLinks.map((navLink) => (
          <button
            onClick={toggleSidebar}
            key={navLink.id}
            className="text-xl pb-2 active:text-customBlue"
          >
            {navLink.label}
          </button>
        ))}
          <a className="text-xl font-semibold py-3 px-8 bg-customGradient text-customGreen rounded-md hover:text-black m-auto border border-customGreen">RESUME</a>
        {/* Close button */}
        <CgClose
          onClick={toggleSidebar}
          className="absolute top-3 right-6  sm:w-8 sm:h-8 w-6 h-6 text-customGreen"
        />
      </div>
    </div>
  )
}

export default NavbarForMobile