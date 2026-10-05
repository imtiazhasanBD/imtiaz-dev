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
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiTypescript,
  SiStripe,
  SiNestjs,
  SiN8N,
  SiWebrtc,
  SiAgora,
  SiSocketdotio,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGithubactions,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";

export { blogs, blogCategories } from "./blogs";

export const BaseInfo = {
  name: "Imtiaz Hasan",
  position: "Full Stack Developer | WebRTC & DevOps",
  aboutTitle: "let’s Introduce about myself",
  aboutMe:
    "Hello! My name is <b>Imtiaz Hasan,</b> and I am a passionate <b>Full Stack Developer</b> with expertise across modern frontend and backend architectures. I specialize in <b>Next.js, React, TypeScript, Tailwind CSS</b> on the frontend, and <b>Nest.js, Node.js, Express</b> on the backend. I have hands-on experience building real-time audio/video streaming and collaboration platforms using <b>WebRTC, Agora, ZEGOCLOUD, mediasoup, and WebSockets</b>, automating business pipelines with <b>n8n</b>, and managing end-to-end <b>CI/CD and Linux VPS deployments (Docker, Nginx)</b>. I am currently pursuing a Bachelor of Science in Computer Science and Engineering (BSc in CSE) at Bangladesh University. Let's build scalable, high-performance systems together!",
  profilePic: "/images/hero.webp",
  aboutPic: "/images/17052024_153846.🔐 TimeToFly 💯 by_Ayan (Edited).jpg",
};

export const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
      { name: 'React', icon: <FaReact className="text-blue-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
     // { name: "TanStack Query", icon: <SiTanstackquery className="text-red-500" /> },
      // { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      // { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    ],
  },
  {
    category: 'Backend & Real-Time',
    technologies: [
      { name: 'Nest.js', icon: <SiNestjs className="text-red-600" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: 'WebRTC', icon: <SiWebrtc className="text-blue-500" /> },
      { name: 'Agora', icon: <SiAgora className="text-sky-500" /> },
      { name: 'WebSockets', icon: <SiSocketdotio className="text-gray-800 dark:text-gray-200" /> },
      { name: 'n8n', icon: <SiN8N className="text-red-500" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-orange-500" /> },
    ],
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-600" /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    technologies: [
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
      { name: 'Nginx', icon: <SiNginx className="text-green-600" /> },
      { name: 'Linux / VPS', icon: <SiLinux className="text-yellow-600" /> },
      { name: 'CI/CD', icon: <SiGithubactions className="text-blue-400" /> },
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
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      //"JavaScript (ES6+)",
      "Redux Toolkit",
     // "TanStack Query",
      // "HTML5 & CSS3"
    ]
  },
  {
    category: "Backend",
    skills: [
      "Nest.js",
      "Node.js",
     // "Express.js",
      "WebRTC",
      // "Agora & ZEGOCLOUD",
      // "mediasoup SFU",
      "WebSockets",
      "RESTful APIs"
    ]
  },
  {
    category: "Automation",
    skills: [
      "n8n Automation",
      "Webhooks",
      "API Integrations",
      "Workflow Pipelines"
    ]
  },
  {
    category: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Firebase"
    ]
  },
  {
    category: "DevOps",
    skills: [
      "Linux VPS Hosting",
      "Docker & Compose",
      "Nginx",
      "CI/CD",
      "SSL & Certbot",
      "Git & GitHub"
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
    name: "Stallforest",
    shortDescription:
      "Enterprise-grade multi-tenant eCommerce SaaS platform featuring storefront builders, POS, GraphQL APIs, real-time analytics, and automated CI/CD Linux VPS deployments.",
    longDescription:
      "Stallforest is a scalable multi-tenant SaaS eCommerce ecosystem built to power modern digital storefronts and point-of-sale (POS) systems with zero platform commission. As the Full Stack Developer and DevOps Engineer on this project at Nexrox Digital, I engineered the high-throughput NestJS Apollo GraphQL backend, built the responsive multi-tenant merchant dashboard with Next.js and React 19, integrated real-time WebSockets with Redis caching, and architected the end-to-end CI/CD automated deployment pipeline with PM2 zero-downtime clustering on Linux VPS (Ubuntu & Nginx).",
    keyFeatures: [
      "Multi-Tenant SaaS Architecture: Dynamic store provisioning with isolated tenant database routing and automated schema migrations using Prisma ORM with Neon / PostgreSQL.",
      "High-Performance GraphQL & REST API: Modular NestJS backend architecture with Apollo GraphQL Server, JWT authentication, Google OAuth 2.0, and granular RBAC permissions.",
      "Real-Time Engine & Distributed Caching: Integrated WebSockets (Socket.io) with Redis Pub/Sub adapter for instant order alerts, live inventory synchronization, and sub-millisecond cache hits.",
      "Merchant Admin Dashboard: Built with Next.js (App Router), React 19, TypeScript, Apollo Client, TanStack Query, Zustand, Fabric.js canvas editor, TipTap rich text, and Recharts analytics.",
      "Media Processing & Cloud Storage: Direct AWS S3 integration with Sharp automated image optimization pipelines for high-resolution product catalogs.",
      "Automated CI/CD & DevOps Pipeline: Custom bash deployment scripts, PM2 cluster zero-downtime reloads, Nginx reverse proxy configurations, SSL/Certbot, and automated cross-tenant database migrations.",
    ],
    technologiesUsed: {
      frontEnd: "Next.js 16, React 19, TypeScript, Tailwind CSS, Apollo Client, TanStack Query, Zustand, Recharts",
      backEnd: "NestJS 11, Apollo GraphQL, Prisma ORM, PostgreSQL (Neon), WebSockets (Socket.io)",
      devops: "Linux VPS (Ubuntu), Nginx Reverse Proxy, PM2 Cluster (Zero-Downtime), Automated CI/CD Shell Scripts, SSL",
      databaseAndCache: "PostgreSQL, Neon Database, Redis (ioredis & PubSub Adapter), AWS S3",
      paymentIntegration: "Stripe Multi-Vendor & Webhook Integrations",
    },
    designHighlights: {
      visualAppeal:
        "Modern dark and light merchant dashboards with customized live store theme previews (Auralux, Freshmart, Electronics, Fashion).",
      usability:
        "Streamlined merchant onboarding, drag-and-drop catalog management, POS integration, and role-based staff permissions.",
      performance:
        "Sub-second GraphQL query responses, Redis multi-level caching, zero-downtime production updates, and optimized asset delivery.",
    },
    url: {
      live: "https://stallforest.com",
      admin: "https://admin.stallforest.com",
      github: "https://github.com/imtiazhasanBD",
    },
    image: "/images/projects/stallforest/admin-dashboard.webp",
    category: "Multi-Tenant SaaS & eCommerce Platform",
    screenShot: [
      "/images/projects/stallforest/admin-dashboard.webp",
      "/images/projects/stallforest/admin-pos.webp",
      "/images/projects/stallforest/admin-products.webp",
      "/images/projects/stallforest/admin-inventory.webp",
      "/images/projects/stallforest/stallforest-hero.webp",
      "/images/projects/stallforest/freshmart-preview.png",
      "/images/projects/stallforest/electronics-preview.png",
      "/images/projects/stallforest/restaurant-preview.png",
      "/images/projects/stallforest/fashion-preview.png",
      "/images/projects/stallforest/gadgets-preview.png",
    ],
  },
  {
    id: 2,
    name: "MyProWorker",
    shortDescription:
      "A modern freelance service marketplace and job portal connecting clients with skilled talent, featuring dynamic job discovery, multi-faceted filtering, and custom role onboarding.",
    longDescription:
      "MyProWorker (developed at QuantumEdge Software) is a responsive freelance services and job marketplace platform designed to bridge the gap between businesses and top freelance talent. Built with Next.js 15, React 19, and Tailwind CSS, the platform delivers high-speed job discovery, multi-faceted filtering (categories, experience levels, budget, and talent rating), responsive job cards with skeleton loading states, and an interactive dual-role onboarding flow ('I want to work' vs 'I want to hire').",
    keyFeatures: [
      "Dynamic Job & Service Discovery: Browse freelance services and job postings with instant category switching, keyword search, and sorting algorithms.",
      "Multi-Faceted Search & Filters: Filter opportunities by category, experience level, salary range, freelancer rating, and delivery timeline.",
      "Optimized UX with Skeleton Loading: Integrated custom JobSkeletonLoader components to provide seamless, flicker-free feedback during API queries.",
      "Role-Based Onboarding & Auth: Dedicated dual-role registration flow ('I want to work' vs 'I want to hire') with secure form validation and responsive modals.",
      "Component Architecture: Modular and reusable React UI components including JobCard, InputField, Header with category navigation, and mobile-friendly drawer menu.",
      "RESTful API Integration: Seamless Axios API client for real-time job feeds, talent listings, and user authentication.",
    ],
    technologiesUsed: {
      frontEnd: "Next.js 15, React 19, TypeScript, Tailwind CSS, Axios, React Icons",
      backEnd: "REST API Integration (Authentication & Job Feeds)",
    },
    designHighlights: {
      visualAppeal:
        "Clean dark green (#0f1a0f) aesthetic with vibrant green accents, modern typography, and structured service cards.",
      usability:
        "Intuitive search bar, quick category pills, clear job attributes, and responsive mobile-first navigation.",
      performance:
        "Server-side rendering with Next.js App Router, optimized web assets, and smooth skeleton loader transitions.",
    },
    url: {
      live: "https://my-proworker-front-end.vercel.app",
      github: "https://github.com/imtiazhasanBD/quantumedge-job-portal",
    },
    image: "/images/projects/proworker/proworker-hero.webp",
    category: "Job Portal & Freelance Marketplace",
    screenShot: [
      "/images/projects/proworker/proworker-hero.webp",
      "/images/projects/proworker/proworker-jobs.webp",
      "/images/projects/proworker/proworker-categories.webp",
      "/images/projects/proworker/proworker-onboarding.webp",
    ],
  },
  {
    id: 3,
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
    id: 4,
    name: "Appointment Management",
    shortDescription:
      "Developed a dynamic appointment booking application for a dental clinic, featuring real-time booking functionality and an admin dashboard for management.",
    longDescription:
      "A real-time appointment booking system for a dental clinic. Features include user-friendly booking, admin authentication, and an admin dashboard for managing appointments. Admins can view, edit, cancel, and manually book appointments. Integrated pagination, search, and filtering for efficient data management.",
    keyFeatures: [
      "User Functionality: Real-time appointment booking with intuitive UI. Fully responsive design for seamless usage across devices.",
      "Admin Dashboard: Admin authentication and role-based access control. View and cancel appointments with live data updates. Statistical insights: Daily, weekly, monthly, and yearly appointment counts. Pagination for efficient data handling and streamlined display.",
    ],
    technologiesUsed: {
      frontEnd: "React, Next.js, Tailwind CSS",
      backEnd: "Firebase And Next.js API",
      paymentIntegration: " ",
    },
    designHighlights: {
      visualAppeal:
        "A clean, modern design with a polished layout, vibrant colors, and clear navigation, enhancing user engagement.",
      usability:
        "A user-centric experience with responsive layouts, intuitive controls, and streamlined workflows.",
      performance:
        "Delivered a robust and efficient system ensuring smooth user and admin interactions",
    },
    url: {
      live: "https://creative-dental-surgery.vercel.app",
      github: "https://github.com/imtiazhasanBD/creative-dental-surgery",
    },
    image: "/images/screenshot/creative-dental(08).webp",
    category: "Appointment Booking Website",
    screenShot: [
      "/images/screenshot/creative-dental(01).webp",
      "/images/screenshot/creative-dental(02).webp",
      "/images/screenshot/creative-dental(03).webp",
      "/images/screenshot/creative-dental(04).webp",
      "/images/screenshot/creative-dental(05).webp",
      "/images/screenshot/creative-dental(06).webp",
      "/images/screenshot/creative-dental(07).webp",
  
    ]
  },
  {
    id: 5,
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
    id: 6,
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
    institution: "Bangladesh University",
    duration: "2024 - Present",
    subTitle: "Bangladesh University | 2024 - Present",
    description: "Focused on software development, web technologies, and data structures. Graduating with a distinction.",
  },
  {
    title: "Diploma in Electrical Engineering",
    institution: "Ahsanullah Institute (AITVET)",
    duration: "2014 - 2018",
    subTitle: "Ahsanullah Institute(AITVET) | 2014 - 2018",
    description: "Specialized in Electrical Engineering with a focus on power systems and circuit analysis.",
  },
];

export const experience = [
  {
    title: "Full Stack Developer",
    company: "Nexrox Digital",
    employmentType: "Full-time",
    duration: "Dec 2025 - Present",
    subTitle: "Nexrox Digital • Full-time | Dec 2025 - Present",
    description:
      "Engineered full-stack apps with Next.js, NestJS, PostgreSQL, Prisma, and WebSockets. Built real-time audio/video features for ChatFeel and contributed to Stallforest's multi-tenant SaaS platform.",
  },  
  {
    title: "Frontend Developer",
    company: "quantumedgesoftware",
    employmentType: "Full-time",
    duration: "Dec 2024 - Dec 2025 ",
    subTitle: "quantumedgesoftware • Full-time | Dec 2024 - Dec 2025 ",
    description:
      "Developed responsive web apps with Next.js, React, TypeScript, and Tailwind CSS. Built modular UI components, integrated backend APIs, and optimized application performance and reliability.",
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