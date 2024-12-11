import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaSnapchatGhost,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";

export const BaseInfo = {
  name: "Imtiaz Hasan",
  position: "Frontend Web Developer",
  aboutTitle: "let’s Introduce about myself",
  aboutMe:
    "Hello! My name is <b>Imtiaz Hasan,</b> and I am a passionate front-end developer with expertise in modern web technologies including <b>HTML, CSS, JavaScript, Tailwind CSS, React, Redux, Firebase, Next.js, and TypeScript.</b> I am currently pursuing a Bachelor of Science in Computer Science and Engineering (BSc in CSE) at Bangladesh University. <br/> <br/> As I near the completion of my studies, I am actively seeking job opportunities to apply my skills, contribute to impactful projects, and grow as a professional. I am dedicated to crafting dynamic, responsive, and user-friendly web experiences. Let's build something amazing together!",
  profilePic: "/images/hero.webp",
  aboutPic: "/images/about_me.jpg",
};

export const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", percentage: 80 },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", percentage: 70 },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-500",
    percentage: 80,
  },
  { name: "React", icon: <FaReact />, color: "text-blue-400", percentage: 70 },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black",
    percentage: 65,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-teal-500",
    percentage: 80,
  },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500", percentage: 70 },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
    percentage: 50,
  },
];

export const SkillsData = [
  {
    category: "Front-End",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular"
    ]
  },
  {
    category: "Back-End",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django"
    ]
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Heroku"
    ]
  },
  {
    category: "Others",
    skills: [
      "RESTful APIs",
      "GraphQL",
      "Agile Methodologies"
    ]
  }
];


export const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    color: "text-blue-700",
    link: "https://linkedin.com/in/imtiazhasanbd",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-gray-800",
    link: "https://github.com/imtiazhasanBD",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    color: "text-green-600",
    link: "https://wa.me/01782638383?text=Hello%20there!%20I'm%20interested%20in%20your%20services",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    color: "text-blue-600",
    link: "https://www.facebook.com/bd.imtiazkhan",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    color: "text-blue-400",
    link: "https://x.com/imtiazkhan100",
  },
];

export const projectData = [
  {
    id: 1,
    name: "Electro-mart",
    description:
      "An eCommerce platform built with React and Redux Toolkit, featuring a modern UI styled with Tailwind CSS. It includes secure user authentication via Firebase, real-time order storage, and seamless payment integration using Stripe.",
    image: "/images/Electro-mart.jpg",
    category: "eCommerce WebSite",
    technology: "React, Redux, TailWind",
    tools: "Firebase, Stripe, Firebase",
    url: {
      live: "",
      github: "https://github.com/imtiazhasanBD/Electro-mart",
    },
  },
  {
    id: 2,
    name: "Disney Clone",
    description:
      "A static Disney+ clone built with React and styled using Tailwind CSS, showcasing a responsive and visually appealing design. This project replicates the look and feel of the Disney+ platform, focusing on clean UI and layout structure.",
    image: "/images/disney _clone.jpg",
    category: "eCommerce WebSite",
    technology: "React, TailWind",
    tools: "Firebase, Stripe, Firebase",
    url: {
      live: "",
      github: "https://github.com/imtiazhasanBD/disney-clone",
    },
  },
  {
    id: 3,
    name: "Ecart-mart",
    description:
      "My first eCommerce website, built with raw HTML, CSS, and JavaScript. It was my first step into web development, where I transformed my learning into a tangible project, igniting my passion for creating user-friendly, functional designs.",
    image: "/images/Ecart-mart.jpg",
    category: "eCommerce WebSite",
    technology: "React, Redux, TailWind",
    tools: "Firebase, Stripe, Firebase",
    url: {
      live: "https://imtiazhasanbd.github.io/MyEcommerce-cart/",
      github: "https://github.com/imtiazhasanBD/MyEcommerce-cart",
    },
  },
];

export const education = [
  {
    title: "Bachelor's in Computer Science",
    subTitle: "Bangladesh University | 2020 - 2024",
    description: "Focused on software development, web technologies, and data structures. Graduating with a distinction.",
  },
  {
    title: "High School Diploma",
    subTitle: "City College | 2018 - 2020",
    description: "Specialized in Science with a focus on mathematics and physics.",
  },
];

export const experience = [
  {
    title: "Frontend Developer Intern",
    subTitle: "Tech Solutions | Jan 2024 - Present",
    description: "Developed responsive web applications using React, Tailwind, and TypeScript. Collaborated with designers to enhance UX.",
  },
  {
    title: "Freelance Web Developer",
    subTitle: "Remote | 2022 - 2023",
    description: "Built custom websites and dashboards for small businesses using.",
  },
];

export const hobbies = [
  { id: 1, name: "Gaming", icon: "🎮" },
  { id: 2, name: "Traveling", icon: "✈️" },
  { id: 3, name: "Gardening", icon: "🌱" },
  { id: 4, name: "Playing", icon: "⚽" },
  { id: 5, name: "Biking", icon: "🚴‍♂️" },
];

export const contactData = [
  { name: "Phone", info: "+8801783638383", icon: <FiPhone /> },
  { name: "Email", info: "imtiazbd.dev@gmail.com", icon: <LuMail /> },
  {
    name: "Linkdin",
    info: "/imtiazhasanbd",
    icon: <FaLinkedin />,
  },
   {
    name: "Address",
    info: "Kallyanpur,Dhaka-1207,Bangladesh",
    icon: <IoHomeOutline />,
  }
];

export const projects = [
  {
    id: 1,
    name: "E-Learning Platform",
    description:
      "An eCommerce platform built with React and Redux Toolkit, featuring a modern UI styled with Tailwind CSS. It includes secure user authentication via Firebase, real-time order storage, and seamless payment integration using Stripe.",
    category: "Frontend Development",
    technology: "React, Tailwind",
    tools: "Firebase, Stripe",
    image: "/images/Electro-mart.jpg",
    url: {
      live: "https://e-learning-platform.com",
      github: "https://github.com/username/e-learning",
    },
  },
  {
    id: 2,
    name: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking app.",
    category: "Mobile Development",
    technology: "React Native, Redux",
    tools: "Firebase, Stripe",
    image: "/images/Electro-mart.jpg",
    url: {
      live: "https://mobile-banking.com",
      github: "https://github.com/username/mobile-banking",
    },
  },
];
