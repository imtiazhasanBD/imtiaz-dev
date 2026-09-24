import React from "react";
import { blogs, blogCategories } from "../data/data";
import BlogListClient from "./BlogListClient";

export const metadata = {
  title: "Blog & Technical Writing - Imtiaz Hasan",
  description:
    "Insights, architectures, and tutorials on Full Stack development, WebRTC video streaming, Nest.js microservices, n8n automations, and Linux VPS DevOps.",
  openGraph: {
    title: "Blog & Technical Writing - Imtiaz Hasan",
    description:
      "Insights, architectures, and tutorials on Full Stack development, WebRTC, Nest.js, and VPS DevOps.",
  },
};

export default function BlogPage() {
  return (
    <div className="text-black dark:text-white w-[95%] sm:w-[80%] mx-auto h-auto md:w-[700px] lg:w-[950px] xl:w-[1130px] 2xl:min-w-[1280px] mt-12 md:mt-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-customGreen text-xs sm:text-sm font-medium tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-customGreen"></span>
          Engineering Journal & Articles
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
          Articles & Insights
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          In-depth tutorials and production case studies covering full-stack web applications, real-time media streaming (WebRTC, Agora, mediasoup), Nest.js enterprise backends, n8n automations, and Linux VPS DevOps.
        </p>
      </div>

      {/* Blog List with interactive search & filters */}
      <BlogListClient initialBlogs={blogs} categories={blogCategories} />
    </div>
  );
}
