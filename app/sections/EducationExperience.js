import { MdOutlineSchool } from "react-icons/md";
import { PiNetwork } from "react-icons/pi";
import { education, experience } from "../data/data";

const EducationExperience = () => {
      return (
        <section  className="dark:text-white w-full mt-6 flex flex-col lg:flex-row gap-6">
      
            {/* Education Section */}
            <div className="relative bg-white dark:bg-customBg px-8 py-6 m-auto rounded-lg shadow-md w-full">
              <h3 className="text-2xl lg:text-4xl font-medium mb-8 text-black dark:text-white flex items-center gap-2">
              <MdOutlineSchool className='text-customGreen'/>
                Education
              </h3>
              {education.map((item, index) => (
                <div key={index} className="w-full h-1/3 group flex mb-12">
                  <div className="w-10 h-[6px] bg-gray-400 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 shadow-lg mt-16 relative">
                    <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gray-400 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 shadow-lg">
                      <span className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-800 group-hover:bg-customGreen duration-300"></span>
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-8 flex flex-col justify-center gap-6 lgl:gap-10 shadow-lg">
                    <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                      <div>
                        <h3 className="text-base md:text-lg font-medium  duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm mt-2 duration-300 text-customGreen">
                          {item.subTitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-400 duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Experience Section */}
            <div className="relative bg-white dark:bg-customBg px-8 py-6 m-auto rounded-lg shadow-md w-full">
              <h3 className="text-2xl lg:text-4xl font-medium mb-8 text-black dark:text-white flex items-center gap-2">
              <PiNetwork className='text-customGreen'/>
                Experience
              </h3>
              {experience.map((item, index) => (
                     <div key={index} className="w-full h-1/3 group flex mb-12">
                     <div className="w-10 h-[6px] bg-gray-400 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 shadow-lg mt-16 relative">
                       <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gray-400 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 shadow-lg">
                         <span className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-800 group-hover:bg-customGreen duration-300"></span>
                       </span>
                     </div>
                     <div className="w-full bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-8 flex flex-col justify-center gap-6 lgl:gap-10 shadow-lg">
                       <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                         <div>
                           <h3 className="text-base md:text-lg font-medium  duration-300">
                             {item.title}
                           </h3>
                           <p className="text-xs md:text-sm mt-2 duration-300 text-customGreen">
                             {item.subTitle}
                           </p>
                         </div>
                       </div>
                       <p className="text-xs md:text-sm font-medium text-gray-400 duration-300">
                         {item.description}
                       </p>
                     </div>
                   </div>
              ))}
            </div>
       
        </section>
      );
}

export default EducationExperience