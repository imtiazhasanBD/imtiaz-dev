import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import ProjectSlider from "./sections/ProjectSlider";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { Footer } from "./components/Footer";
import About from "./sections/About";
import EducationExperience from "./sections/EducationExperience";


export default function Home() {

  return (
    <div className="w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px]">
      <Hero />
      <About />
      <ProjectSlider />
      <Skills />
      <EducationExperience/>
      <Contact />
      <Footer />
    </div>
  );
}
