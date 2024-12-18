import Contact from "../sections/Contact";

export const generateMetadata = () => ({
  title: "Contact Me - Imtiaz Hasan",
  description: "Get in touch with Imtiaz Hasan for collaborations, job opportunities, or inquiries.",
});

const page = () => {
  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px]">
      <h1 className="text-6xl text-center py-20 font-medium">Contact</h1>
      <Contact/>
    </div>
  );
};

export default page;
