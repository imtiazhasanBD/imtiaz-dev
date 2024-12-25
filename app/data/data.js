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
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiFirebase, SiTypescript, SiStripe, SiVisualstudiocode } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
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

export  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      ],
    },
    {
      category: 'Backend Basics',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-orange-500" /> },
      ],
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'VS Code', icon: <VscVscode className="text-blue-400" /> },
        { name: 'Stripe', icon: <SiStripe className="text-indigo-600" /> },
      ],
    },
  ];


export const SkillsData = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "React",
      "Redux Toolkit",
      "Next.js"
      
    ]
  },
  {
    category: "Backend Basics",
    skills: [
      "Node.js",
      "Firebase",
    ]
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "VS Code",
      "Stripe",
    ]
  },
  {
    category: "Others",
    skills: [
      "PhotoShop",
      "Canva",
      "Microsoft Office"
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

export const projects = [
  {
    id: 1,
    name: "e-Commerce Platform",
    shortDescription:
      "A modern eCommerce platform with React, Redux Toolkit, Firebase, and Stripe integration, delivering a seamless shopping experience.",
    longDescription:
      "An advanced eCommerce platform built with React and Redux Toolkit, offering a modern and responsive UI styled with Tailwind CSS. The platform is equipped with secure user authentication via Firebase, real-time order management, and seamless payment processing powered by Stripe. Designed with a focus on usability and performance, it ensures a smooth, reliable, and enjoyable online shopping experience for users. The project highlights scalable architecture and optimized workflows for both users and administrators.",
    keyFeatures: [
      "Modern User Interface: A visually appealing, responsive design created using Tailwind CSS for an intuitive shopping experience across devices.",
      "Real-Time Order Management: Firebase integration enables real-time synchronization of user orders and inventory data.",
      "Secure Authentication: Firebase Authentication ensures secure user login, registration, and account management.",
      "Seamless Payment Gateway: Integrated Stripe API for secure and efficient payment processing with multiple payment options.",
      "Product Search and Filters: Advanced search and filtering options for easy product discovery.",
      "Admin Panel: Features an intuitive dashboard for managing products, orders, and users efficiently.",
    ],
    technologiesUsed: {
      frontEnd: "React, Redux Toolkit, Tailwind CSS",
      backEnd: "Firebase (Database and Authentication)",
      paymentIntegration: "Stripe API",
    },
    designHighlights: {
      visualAppeal:
        "A clean, modern design with a polished layout, vibrant colors, and clear navigation, enhancing user engagement.",
      usability:
        "A user-centric experience with responsive layouts, intuitive controls, and streamlined workflows.",
      performance:
        "Optimized for fast load times, smooth transitions, and high scalability to handle a large user base effectively.",
    },
    url: {
      live: "https://electro-mart-chi.vercel.app",
      github: "https://github.com/imtiazhasanBD/Electro-mart",
    },
    image: "/images/Electro-mart.webp",
    category: "eCommerce Website",
    screenShot: [
      "/images/screenshot/Electro-mart(ss01).webp",
      "/images/screenshot/Electro-mart(ss02).webp",
      "/images/screenshot/Electro-mart(ss03).webp",
      "/images/screenshot/Electro-mart(ss04).webp",
      "/images/screenshot/Electro-mart(ss05).webp",
      "/images/screenshot/Electro-mart(ss06).webp",
      "/images/screenshot/Electro-mart(ss07).webp",
      "/images/screenshot/Electro-mart(ss08).webp",
      "/images/screenshot/Electro-mart(ss09).webp",
      "/images/screenshot/Electro-mart(ss10).webp",
      "/images/screenshot/Electro-mart(ss11).webp",
      "/images/screenshot/Electro-mart(ss12).webp",
      "/images/screenshot/Electro-mart(ss13).webp", 
    ]
  },
  {
    id: 2,
    name: "Disney Clone",
    shortDescription:
      "A static Disney+ clone built with React and styled using Tailwind CSS, showcasing responsive design and clean UI aesthetics.",
    longDescription:
      "Disney+ Clone is a visually stunning static replica of the popular Disney+ streaming platform. Built with React and styled using Tailwind CSS, the project focuses on replicating the look and feel of the platform with a responsive layout and clean UI. This project demonstrates proficiency in frontend development, showcasing attention to detail and responsiveness in web design.",
    keyFeatures: [
      "Pixel-Perfect UI: Accurately replicates the Disney+ platform design, focusing on layout and visual fidelity.",
      "Responsive Design: Optimized for all devices, ensuring consistent user experience across various screen sizes.",
      "Clean and Organized Code: Demonstrates best practices in writing modular and reusable components.",
    ],
    technologiesUsed: {
      frontEnd: "React, Tailwind CSS",
    },
    designHighlights: {
      visualAppeal:
        "Replicates Disney+ design with high-quality visuals and consistent color schemes.",
      usability:
        "Focused on intuitive navigation and responsive elements for all devices.",
      performance: "Ensures smooth transitions and a lightweight build.",
    },
    url: {
      live: "https://disney-clone-bd.vercel.app",
      github: "https://github.com/imtiazhasanBD/disney-clone",
    },
    image: "/images/disney _clone.webp",
    category: "Web App Clone",
    screenShot: [
      "/images/disney _clone.webp",
      "/images/screenshot/disney _clone(ss 02).webp",
      "/images/screenshot/disney _clone(ss 03).webp"
    ]
  },
  {
    id: 3,
    name: "Ecart-Mart",
    shortDescription:
      "A beginner-friendly eCommerce website built using raw HTML, CSS, and JavaScript, showcasing early web development skills.",
    longDescription:
      "Ecart-Mart is my first eCommerce project, developed during the initial stages of my web development journey. Built with raw HTML, CSS, and JavaScript, this project was a foundational step in learning how to create functional websites. It features a basic shopping cart and responsive design, serving as a significant milestone in understanding core web technologies.",
    keyFeatures: [
      "Static Design: Built with HTML and CSS, featuring a simple but functional layout.",
      "Basic Shopping Cart: Enabled adding and removing items to simulate an eCommerce experience.",
      "Responsive Design: Optimized for basic device compatibility.",
    ],
    technologiesUsed: {
      frontEnd: "HTML, CSS, JavaScript",
    },
    designHighlights: {
      visualAppeal:
        "Focused on fundamental design principles with a clean and simple layout.",
      usability:
        "User-friendly for basic interactions, demonstrating the core functionalities of a shopping website.",
      performance: "Lightweight and efficient for basic web needs.",
    },
    url: {
      live: "https://imtiazhasanbd.github.io/MyEcommerce-cart",
      github: "https://github.com/imtiazhasanBD/MyEcommerce-cart",
    },
    image: "/images/Ecart-mart.jpg", 
    category: "Beginner eCommerce Website",
    screenShot: [
      "/images/screenshot/Ecart-mart(ss01).webp",
      "/images/screenshot/Ecart-mart(ss02).webp",
      "/images/screenshot/Ecart-mart(ss03).webp",
      "/images/screenshot/Ecart-mart(ss04).webp",
      "/images/screenshot/Ecart-mart(ss05).webp",
      "/images/screenshot/Ecart-mart(ss06).webp",
      "/images/screenshot/Ecart-mart(ss07).webp",
    ]
  },
];


export const education = [
  {
    title: "Bachelor's in Computer Science",
    subTitle: "Bangladesh University | 2024 - Present",
    description: "Focused on software development, web technologies, and data structures. Graduating with a distinction.",
  },
  {
    title: "Diploma in Electrical Engineering",
    subTitle: "Ahsanullah Institute(AITVET) | 2014 - 2018",
    description: "Specialized in Electrical Engineering with a focus on power systems and circuit analysis.",
  },
];

export const experience = [
  {
    title: "Frontend Developer",
    subTitle: "Local Client | Sep 2024 - Nov 2024 ",
    description: "Developed responsive web applications using React and Tailwind. Collaborated with designers to enhance UX.",
  },
  {
    title: "Freelance Web Developer",
    subTitle: "Remote | Aug 2024 - Sep 2024",
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
  { name: "Phone", info: "+8801782638383", icon: <FiPhone /> },
  { name: "Email", info: "imtiazbd.dev@gmail.com", icon: <LuMail /> },
  {
    name: "Linkedin",
    info: "/imtiazhasanbd",
    icon: <FaLinkedin />,
  },
   {
    name: "Address",
    info: "Kallyanpur,Dhaka-1207,Bangladesh",
    icon: <IoHomeOutline />,
  }
];