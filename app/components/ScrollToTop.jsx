"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollPercentage(scrollPercent);

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 hidden md:block">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 flex items-center justify-center bg-white dark:bg-customBg text-customGreen shadow-md rounded-xl"
        >
          {/* Rounded Square Progress */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 36 36"
          >
            {/* Static Border (Background) */}
            <rect
              x="2"
              y="2"
              width="32"
              height="32"
              rx="6" // Corner radius
              ry="6" // Corner radius
              fill="none"
              stroke="gray"
              strokeWidth="1"
            />
            {/* Dynamic Progress Border */}
            <rect
              x="2"
              y="2"
              width="32"
              height="32"
              rx="6" // Corner radius
              ry="6" // Corner radius
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="128" // Perimeter of the square
              strokeDashoffset={(1 - scrollPercentage / 100) * 128}
            />
          </svg>

          {/* Arrow Icon */}
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
