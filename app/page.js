import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import { skills } from "./data/data";
import Marquee from "react-fast-marquee";
import { FiDownload } from "react-icons/fi";


export default function Home() {
  return (
    <div className="w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] mt-6">
      <Header/>
      <Hero/>

    </div>
  );
}
