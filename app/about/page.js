import Image from "next/image";

export const generateMetadata = () => ({
  title: "About Me - Imtiaz Hasan",
  description:
    "Learn more about Imtiaz Hasan, a passionate front-end developer with expertise in modern web technologies.",
});

export default function About() {
  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] mt-20">
       <h1 className="text-5xl lg:text-6xl text-center font-medium mb-6">My Skills</h1>
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about_me.webp"
            alt="Imtiaz Hasan"
            width={800} // Replace with the actual width of your image
            height={600} // Replace with the actual height of your image
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: About Text */}
        <div className="w-full  p-0 lg:p-8">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Hello! My name is{" "}
            <span className="text-cuntomPink font-semibold">Imtiaz Hasan</span>,
            and I am a passionate front-end developer with expertise in modern
            web technologies including{" "}
            <span className="font-medium">
              HTML, CSS, JavaScript, Tailwind CSS, React, Redux, Firebase,
              Next.js, and TypeScript.
            </span>{" "}
            I am currently pursuing a{" "}
            <span className="font-semibold">
              Bachelor of Science in Computer Science and Engineering (BSc in
              CSE)
            </span>{" "}
            at <span className="text-cuntomPink">Bangladesh University</span>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            As I near the completion of my studies, I am actively seeking job
            opportunities to apply my skills, contribute to impactful projects,
            and grow as a professional. I am dedicated to crafting dynamic,
            responsive, and user-friendly web experiences. Let&apos;s build
            something amazing together!
          </p>
        </div>
      </div>

      {/* Personal Interests Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="p-8">
          <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Outside of Coding
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Outside of coding, here are some activities I enjoy that keep me
            inspired and balanced:
          </p>
          <ul className="flex flex-wrap gap-4">
            <li className="flex items-center p-4">
              <span className="text-2xl mr-2">🎮</span>
              <span>Gaming</span>
            </li>
            <li className="flex items-center  p-4">
              <span className="text-2xl mr-2">✈️</span>
              <span>Traveling</span>
            </li>
            <li className="flex items-center  p-4">
              <span className="text-2xl mr-2">🌱</span>
              <span>Gardening</span>
            </li>
            <li className="flex items-center p-4">
              <span className="text-2xl mr-2">⚽</span>
              <span>Playing Football</span>
            </li>
            <li className="flex items-center p-4">
              <span className="text-2xl mr-2">🚴‍♂️</span>
              <span>Biking</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
