import Image from "next/image";

export const generateMetadata = () => ({
  title: "About Me - Imtiaz Hasan | Full Stack Developer",
  description:
    "Learn more about Imtiaz Hasan, a full stack developer specializing in Next.js, Nest.js, WebRTC, n8n, and Linux VPS DevOps.",
});

export default function About() {
  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px]  xl:w-[1130px] 2xl:min-w-[1280px] mt-20">
       <h1 className="text-5xl lg:text-6xl text-center font-medium mb-6">About Me</h1>
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
            and I am a passionate{" "}
            <span className="text-customGreen font-semibold">Full Stack Developer</span>{" "}
            with end-to-end expertise across modern web architectures. My frontend core includes{" "}
            <span className="font-medium">
              Next.js, React, TypeScript, and Tailwind CSS
            </span>, while my backend engineering leverages{" "}
            <span className="font-medium">
              Nest.js, Node.js, Express, MongoDB, and PostgreSQL
            </span>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            I specialize in developing high-concurrency real-time systems—including voice & video streaming with{" "}
            <span className="text-cuntomPink font-medium">WebRTC, Agora, ZEGOCLOUD, mediasoup</span> and{" "}
            <span className="text-cuntomPink font-medium">WebSockets</span>. I also design automated workflow pipelines with{" "}
            <span className="text-cuntomPink font-medium">n8n</span> and deploy robust production infrastructure to{" "}
            <span className="text-cuntomPink font-medium">Linux VPS</span> environments with{" "}
            <span className="font-medium">Docker, Nginx, and GitHub Actions CI/CD</span>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Currently pursuing my Bachelor of Science in Computer Science and Engineering (BSc in CSE) at Bangladesh University, I am committed to crafting dynamic, resilient, and user-centered products. Let&apos;s build something amazing together!
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
